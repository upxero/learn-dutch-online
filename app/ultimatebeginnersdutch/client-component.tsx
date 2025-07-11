'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bannerImage from "@/public/images/banner-2.jpg";

export default function UltimateBeginnersClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      const nextPath = encodeURIComponent("/ultimatebeginnersdutch");
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
        router.push(`/signin?next=/ultimatebeginnersdutch`);
      });
  }, []);

  if (loading) return <p>Even laden...</p>;

  const items = [
    { label: "Sessie 1 - Uitspraak en groeten", link: "" },
    { label: "Huiswerk na sessie 1", link: "" },
    { label: "Sessie 2 - Introducties", link: "" },
    { label: "Huiswerk na sessie 2", link: "" },
    { label: "Sessie 3 - Afspreken", link: "" },
    { label: "Huiswerk na sessie 3", link: "" },
    { label: "Sessie 4 - De familie", link: "" },
    { label: "Huiswerk na sessie 4", link: "" },
    { label: "Sessie 5 - Feest", link: "" },
    { label: "Huiswerk na sessie 5", link: "" },
    { label: "Sessie 6 - Smakelijk", link: "" },
    { label: "Huiswerk na sessie 6", link: "" },
    { label: "Sessie 7 - Bestellen", link: "" },
    { label: "Huiswerk na sessie 7", link: "" },
    { label: "Sessie 8 - Gelukwensen en condoleren", link: "" },
    { label: "Huiswerk na sessie 8", link: "" },
    { label: "Sessie 9 - Bevrijdingsdag", link: "" },
    { label: "Huiswerk na sessie 9", link: "" },
    { label: "Sessie 10 - Review 1", link: "" },
    { label: "Huiswerk na sessie 10", link: "" },
    { label: "Sessie 11 - Emoties", link: "" },
    { label: "Huiswerk na sessie 11", link: "" },
    { label: "Sessie 12 - OVT regelmatige werkwoorden", link: "" },
    { label: "Huiswerk na sessie 12", link: "" },
    { label: "Sessie 13 - Praten met collega’s", link: "" },
    { label: "Huiswerk na sessie 13", link: "" },
    { label: "Sessie 14 - OVT onregelmatige werkwoorden", link: "" },
    { label: "Huiswerk na sessie 14", link: "" },
    { label: "Sessie 15 - Sinterklaas", link: "" },
    { label: "Huiswerk na sessie 15", link: "" },
    { label: "Sessie 16 - VTT regelmatige werkwoorden", link: "" },
    { label: "Huiswerk na sessie 16", link: "" },
    { label: "Sessie 17 - Het weer", link: "" },
    { label: "Huiswerk na sessie 17", link: "" },
    { label: "Sessie 18 - VTT onregelmatige werkwoorden", link: "" },
    { label: "Huiswerk na sessie 18", link: "" },
    { label: "Sessie 19 - Herhaling verleden tijd", link: "" },
    { label: "Sessie 20 - Niveautest A1", link: "" },
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
            Ultieme Beginners Nederlands
            <br />
            <span className="text-2xl font-normal">Niveau A0 – A1</span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-black mb-8">Cursusoverzicht</h2>
        <ul className="space-y-3 text-center text-black">
          {items.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg hover:underline ${
                    item.label.startsWith("Sessie") ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={`text-lg text-black ${
                    item.label.startsWith("Sessie") ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
