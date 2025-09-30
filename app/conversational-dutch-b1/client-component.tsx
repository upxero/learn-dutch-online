"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ConversationalDutchClientB1() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      const nextPath = encodeURIComponent("/conversational-dutch-b1");
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
        router.push(`/signin?next=/conversational-dutch-b1`);
      });
  }, []);

  if (loading) return <p>Even laden...</p>;

  const sessions = [
    { label: "Europa", link: "https://sites.google.com/view/conversatie1europa?usp=sharing" },
    { label: "Gezondheid", link: "https://sites.google.com/view/conversatie-2gezondheid/introducties" },
    { label: "Geld", link: "https://sites.google.com/view/conversatie-3geld/introducties" },
    { label: "Robots", link: "https://sites.google.com/view/conversatie4robots/introducties" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero met video */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/learn_dutch_courses.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4 leading-tight">
            Conversational Dutch
            <br />
            <span className="text-2xl font-normal">- B1 -</span>
          </h1>
        </div>

        {/* Donkere overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      {/* Sessies */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-black mb-8">3 Sessies per hoofdstuk.</h2>
        <div className="flex flex-col gap-4 items-center">
          {sessions.map((session, index) => (
            <a
              key={index}
              href={session.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold text-center py-3 px-6 rounded-md shadow-md transition"
            >
              {session.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}