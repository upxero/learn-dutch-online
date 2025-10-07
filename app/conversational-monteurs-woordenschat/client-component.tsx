"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ConversationalDutchMonteursClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      const nextPath = encodeURIComponent("/conversational-dutch-monteurs");
      router.push(`/signin?next=${nextPath}`);
      return;
    }

    fetch("https://cms.learn-dutch-online.com/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(() => setLoading(false))
      .catch(() => {
        localStorage.removeItem("auth_token");
        router.push(`/signin?next=/conversational-dutch-monteurs`);
      });
  }, [router]);

  if (loading) return <p>Even laden...</p>;

  const data = [
    {
      title: "Gereedschap",
      link: "https://drive.google.com/file/d/1YZD2qvN1Rf_o0did9gtuMhjbouuyRYQX/view?usp=drive_link",
    },
    {
      title: "Veiligheid",
      link: "https://drive.google.com/file/d/1bkjavcDjkhfK80ScLFw8l3XwG2DeflCY/view?usp=drive_link",
    },
    {
      title: "Automonteurs",
      link: "https://drive.google.com/file/d/1HNigFR1CRs_ZmaFZlivA6Q1AbgUdzdaT/view?usp=drive_link",
    },
    {
      title: "Elektromonteurs",
      link: "https://drive.google.com/file/d/1FJc1P9gkDaqksTspKBT0HPAr-cWD5imv/view?usp=drive_link",
    },
    {
      title: "Installatiemonteurs",
      link: "https://drive.google.com/file/d/1eA_pSSNX_OPzZR_HU29_UK9wUapwy8KQ/view?usp=drive_link",
    },
    {
      title: "Werktuigbouwkundig Monteur",
      link: "#", // nog geen link beschikbaar
    },
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
        </video>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4 leading-tight">
            Conversational Dutch
            <br />
            <span className="text-2xl font-normal">- voor monteurs -</span>
          </h1>
        </div>

        {/* Donkere overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      {/* Lijst met links */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Woordenschat
        </h2>
        <div className="flex flex-col gap-4 items-center">
          {data.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold text-center py-3 px-6 rounded-md shadow-md transition"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

