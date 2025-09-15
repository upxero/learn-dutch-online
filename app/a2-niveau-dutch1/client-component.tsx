"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import WritingPart1 from "@/components/niveau-test/writing-part1";
import bannerImage from "@/public/images/banner-3.jpg";

export default function A2NiveauDutchClient({ trainer }: { trainer: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      router.push(`/signin?next=/a2-niveau-dutch1/${trainer}`);
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
        router.push(`/signin?next=/a2-niveau-dutch1/${trainer}`);
      });
  }, [router, trainer]);

  if (loading) return <p>Even laden...</p>;

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
        
        {/* Schrijven onderdeel */}
        <WritingPart1 trainer={trainer} />
      </div>
    </div>
  );
}
