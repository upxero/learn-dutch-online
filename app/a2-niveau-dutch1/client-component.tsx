"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import WritingPart1 from "@/components/niveau-test/writing-part1";
import ReadingPart from "@/components/niveau-test/reading-part";
import ListenPart from "@/components/niveau-test/listen-part";
import SpeakingPart from "@/components/niveau-test/speaking-part";
import ReviewPart from "@/components/niveau-test/review-part";
import bannerImage from "@/public/images/banner-3.jpg";

export default function A2NiveauDutchClient({ trainer }: { trainer: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [canTakeTest, setCanTakeTest] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      router.push(`/signin?next=/a2-niveau-dutch1/${trainer}`);
      return;
    }

    let userId = "";

    // Stap 1: haal ingelogde user op
    fetch("https://cms.learn-dutch-online.com/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(data => {
        userId = data.data.id;

        // Stap 2: check in test_access collectie of can_take_test true is voor deze student
        return fetch(
          `https://cms.learn-dutch-online.com/items/test_access?filter[user][_eq]=${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      })
      .then(res => res.json())
      .then(data => {
        if (data.data.length > 0 && data.data[0].can_take_test) {
          setCanTakeTest(true);
        } else {
          // geen toegang
          router.push("/no-access"); // of een melding tonen
        }
      })
      .catch(() => {
        localStorage.removeItem("auth_token");
        router.push(`/signin?next=/a2-niveau-dutch1/${trainer}`);
      })
      .finally(() => setLoading(false));
  }, [router, trainer]);

  if (loading) return <p>Even laden...</p>;
  if (!canTakeTest) return <p>Je hebt geen toegang tot deze test.</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="relative h-80 w-full">
        <Image
          src={bannerImage}
          alt="Banner A2 Niveautest"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4 leading-tight">
            A2 Niveautest 
            <br />
            <span className="text-2xl font-normal">- Nederland -</span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <WritingPart1 trainer={trainer} />
        <ReadingPart trainer={trainer} />
        <ListenPart trainer={trainer} />
        <SpeakingPart />
        <ReviewPart />
      </div>
    </div>
  );
}
