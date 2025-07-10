// app/afrikaans-dutch-1/ClientComponent.tsx
'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bannerImage from "@/public/images/banner-1.jpg";

export default function AfrikaansDutchClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      const nextPath = encodeURIComponent("/afrikaans-dutch-1");
      router.push(`/signin?next=${nextPath}`);
      return;
    }

    fetch("https://upxero.be/users/me", {
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
        router.push(`/signin?next=/afrikaans-dutch-1`);
      });
  }, []);

  if (loading) return <p>Even laden...</p>;

  const items = [
    { label: "Cursusoverzicht", link: "/afrikaans-dutch-1/overview" },
    { label: "Sessie 1 - Uitspraak en groeten", link: "/afrikaans-dutch-1/session-1" },
    { label: "Huiswerk na sessie 1", link: "/afrikaans-dutch-1/homework-1" },
    { label: "Sessie 2 - Introducties", link: "/afrikaans-dutch-1/session-2" },
    { label: "Huiswerk na sessie 2", link: "/afrikaans-dutch-1/homework-2" },
    { label: "Sessie 3 - Afspreken", link: "/afrikaans-dutch-1/session-3" },
    { label: "Huiswerk na sessie 3", link: "/afrikaans-dutch-1/homework-3" },
    { label: "Sessie 4 - De familie", link: "/afrikaans-dutch-1/session-4" },
    { label: "Huiswerk na sessie 4", link: "/afrikaans-dutch-1/homework-4" },
    { label: "Sessie 5 - Feest", link: "/afrikaans-dutch-1/session-5" },
    { label: "Huiswerk na sessie 5", link: "/afrikaans-dutch-1/homework-5" },
    { label: "Sessie 6 - Smakelijk", link: "/afrikaans-dutch-1/session-6" },
    { label: "Huiswerk na sessie 6", link: "/afrikaans-dutch-1/homework-6" },
    { label: "Sessie 7 - Aan tafel", link: "/afrikaans-dutch-1/session-7" },
    { label: "Huiswerk na sessie 7", link: "/afrikaans-dutch-1/homework-7" },
    { label: "Sessie 8 - Geboorte en gelukwensen", link: "/afrikaans-dutch-1/session-8" },
    { label: "Huiswerk na sessie 8", link: "/afrikaans-dutch-1/homework-8" },
    { label: "Sessie 9 - Bevrijdingsdag", link: "/afrikaans-dutch-1/session-9" },
    { label: "Huiswerk na sessie 9", link: "/afrikaans-dutch-1/homework-9" },
    { label: "Sessie 10 - Review 1", link: "/afrikaans-dutch-1/session-10" },
    { label: "Huiswerk na sessie 10", link: "/afrikaans-dutch-1/homework-10" },
    { label: "Sessie 11 - Emoties", link: "/afrikaans-dutch-1/session-11" },
    { label: "Huiswerk na sessie 11", link: "/afrikaans-dutch-1/homework-11" },
    { label: "Sessie 12 - OVT regelmatige werkwoorden", link: "/afrikaans-dutch-1/session-12" },
    { label: "Huiswerk na sessie 12", link: "/afrikaans-dutch-1/homework-12" },
    { label: "Sessie 13 - Praten met collega’s", link: "/afrikaans-dutch-1/session-13" },
    { label: "Huiswerk na sessie 13", link: "/afrikaans-dutch-1/homework-13" },
    { label: "Sessie 14 - OVT onregelmatige werkwoorden", link: "/afrikaans-dutch-1/session-14" },
    { label: "Huiswerk na sessie 14", link: "/afrikaans-dutch-1/homework-14" },
    { label: "Sessie 15 - VTT regelmatige werkwoorden", link: "/afrikaans-dutch-1/session-15" },
    { label: "Huiswerk na sessie 15", link: "/afrikaans-dutch-1/homework-15" },
    { label: "Sessie 16 - Naar de dokter", link: "/afrikaans-dutch-1/session-16" },
    { label: "Huiswerk na sessie 16", link: "/afrikaans-dutch-1/homework-16" },
    { label: "Sessie 17 - VTT onregelmatige werkwoorden", link: "/afrikaans-dutch-1/session-17" },
    { label: "Huiswerk na sessie 17", link: "/afrikaans-dutch-1/homework-17" },
    { label: "Sessie 18 - Het weer", link: "/afrikaans-dutch-1/session-18" },
    { label: "Huiswerk na sessie 18", link: "/afrikaans-dutch-1/homework-18" },
    { label: "Sessie 19 - Herhaling verleden tijd + voorbereiding niveautest", link: "/afrikaans-dutch-1/session-19" },
    { label: "Sessie 20 - Niveautest A2", link: "/afrikaans-dutch-1/session-20" },
  ];

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
            Beginners Nederlands
            <br />
            <span className="text-2xl font-normal">voor Afrikaans sprekers</span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-black mb-8">Cursusoverzicht</h2>
        <ul className="space-y-3 text-center text-black">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className={`text-lg hover:underline ${
                  item.label.startsWith("Sessie") ? "font-semibold" : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
