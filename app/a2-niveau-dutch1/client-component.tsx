'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bannerImage from "@/public/images/banner-3.jpg";
import WritingPart1 from "@/components/niveau-test/writing-part1";

export default function A2NiveauDutchClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      const nextPath = encodeURIComponent("/a2-niveau-dutch1");
      router.push(`/signin?next=${nextPath}`);
      return;
    }

    fetch("https://cms.learn-dutch-online.com/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(() => setLoading(false))
      .catch(() => {
        localStorage.removeItem("auth_token");
        router.push(`/signin?next=/a2-niveau-dutch1`);
      });
  }, []);

  if (loading) return <p>Even laden...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="relative h-80 w-full">
        <Image
          src={bannerImage}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4 leading-tight">
            A2 Niveautest Nederlands
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <p className="text-lg text-center">
          Vul de onderstaande opdrachten in. Je antwoorden worden automatisch
          doorgestuurd naar je docent.
        </p>

        {/* Writing Part 1 */}
        <WritingPart1 trainer="jur" />

        {/* Later: WritingPart2, ReadingPart, ListeningPart, etc. */}
      </div>
    </div>
  );
}
