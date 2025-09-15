"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WritingPart1 from "@/components/niveau-test/writing-part1";

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
      <div className="relative h-60 w-full bg-blue-600 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold text-center">
          A2 Niveautest Nederlands
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <p className="text-lg text-center">
          Vul de onderstaande opdrachten in. Je antwoorden worden automatisch
          doorgestuurd naar je docent.
        </p>

        {/* Schrijven onderdeel */}
        <WritingPart1 trainer={trainer} />
      </div>
    </div>
  );
}

