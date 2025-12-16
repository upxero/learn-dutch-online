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
        router.push(`/signin?next=/afrikaans-dutch-1`);
      });
  }, []);

  if (loading) return <p>Even laden...</p>;

  const items = [
    { label: "Sessie 1 - Uitspraak en groeten", link: "https://sites.google.com/view/afri-ned-ses1122025/deel-1-uitspraak" },
    { label: "Huiswerk na sessie 1", link: "https://sites.google.com/view/afridutchhuiswerk1122025/deel-1-luisteren" },
    { label: "Sessie 2 - Introducties", link: "https://sites.google.com/view/afri-ned-ses2122025/deel-1-de-het-een" },
    { label: "Huiswerk na sessie 2", link: "https://sites.google.com/view/afridutchhuiswerk2122025/deel-1-getallen-en-cijfers" },
    { label: "Sessie 3 - Afspreken", link: "https://sites.google.com/view/afri-ned-ses3122025/deel-1-hoofdzin-vraagzinnen" },
    { label: "Huiswerk na sessie 3", link: "https://sites.google.com/view/afridutchhuiswerk3122025/deel-1-de-familie" },
    { label: "Sessie 4 - De familie", link: "https://sites.google.com/view/afri-ned-ses4122025/deel-1-de-familie" },
    { label: "Huiswerk na sessie 4", link: "https://sites.google.com/view/afridutchhuiswerk4122025/deel-1-werkwoorden" },
    { label: "Sessie 5 - Feest", link: "https://sites.google.com/view/afri-ned-ses5122025/deel-1-spreken" },
    { label: "Huiswerk na sessie 5", link: "https://sites.google.com/view/afridutchhuiswerk5122025/deel-1-grammatica" },
    { label: "Sessie 6 - Smakelijk", link: "https://sites.google.com/view/afri-ned-ses6122025/deel-1-positiewerkwoorden" },
    { label: "Huiswerk na sessie 6", link: "https://sites.google.com/view/afridutchhuiswerk6122025/deel-1-grammatica" },
    { label: "Sessie 7 - Aan tafel", link: "https://sites.google.com/view/afri-ned-ses7122025/deel-1-modale-werkwoorden" },
    { label: "Huiswerk na sessie 7", link: "https://sites.google.com/view/afridutchhuiswerk7122025/deel-1-grammatica" },
    { label: "Sessie 8 - Geboorte en gelukwensen", link: "https://sites.google.com/view/afri-ned-ses8122025/deel-1-er" },
    { label: "Huiswerk na sessie 8", link: "https://sites.google.com/view/afridutchhuiswerk8122025/deel-1-bevrijdingsdag" },
    { label: "Sessie 9 - Bevrijdingsdag", link: "https://sites.google.com/view/afri-ned-ses9122025/deel-1grammatica-hoofdzin-bijzin" },
    { label: "Huiswerk na sessie 9", link: "https://sites.google.com/view/afridutchhuiswerk9122025/deel-1-grammatica" },
    { label: "Sessie 10 - Review 1", link: "https://sites.google.com/view/afri-ned-ses10122025/deel-1-feedback-huiswerk" },
    { label: "Huiswerk na sessie 10", link: "https://sites.google.com/view/afridutchhuiswerk10122025/deel-1-woordenschat" },
    { label: "Sessie 11 - Emoties", link: "https://sites.google.com/view/afri-ned-ses11122025/deel-1-spreken-reacties" },
    { label: "Huiswerk na sessie 11", link: "https://sites.google.com/view/afridutchhuiswerk11122025/deel-1-pronomen" },
    { label: "Sessie 12 - OVT regelmatige werkwoorden", link: "https://sites.google.com/view/afri-ned-ses12122025/deel-1-onvoltooid-verleden-tijd" },
    { label: "Huiswerk na sessie 12", link: "https://sites.google.com/view/afridutchhuiswerk12122025/deel-1-grammatica" },
    { label: "Sessie 13 - Praten met collega’s", link: "https://sites.google.com/view/afri-ned-ses13122025/deel-1-ochtendroutine" },
    { label: "Huiswerk na sessie 13", link: "https://sites.google.com/view/afridutchhuiswerk13122025/deel-1-oefeningen" },
    { label: "Sessie 14 - OVT onregelmatige werkwoorden", link: "https://sites.google.com/view/afri-ned-ses14122025/deel-1-theorie" },
    { label: "Huiswerk na sessie 14", link: "https://sites.google.com/view/afridutchhuiswerk14122025/deel-1-oefeningen-ovt" },
    { label: "Sessie 15 - VTT regelmatige werkwoorden", link: "https://sites.google.com/view/afri-ned-ses15122025/deel-1-vtt-zwak" },
    { label: "Huiswerk na sessie 15", link: "https://sites.google.com/view/afridutchhuiswerk15122025/deel-1-grammatica" },
    { label: "Sessie 16 - Naar de dokter", link: "https://sites.google.com/view/afri-ned-ses16122025/praten" },
    { label: "Huiswerk na sessie 16", link: "https://sites.google.com/view/afridutchhuiswerk16122025/grammatica" },
    { label: "Sessie 17 - VTT onregelmatige werkwoorden", link: "https://sites.google.com/view/afri-ned-ses17122025/deel-1-vtt-sterk" },
    { label: "Huiswerk na sessie 17", link: "https://sites.google.com/view/afridutchhuiswerk17122025/deel-1-woorden-voor-frequentie" },
    { label: "Sessie 18 - Het weer", link: "https://sites.google.com/view/afri-ned-ses18122025/deel-1-woorden-voor-frequentie" },
    { label: "Huiswerk na sessie 18", link: "https://sites.google.com/view/afridutchhuiswerk18122025/deel-1-herhaling-theorie" },
    { label: "Sessie 19 - Herhaling verleden tijd + voorbereiding niveautest", link: "https://sites.google.com/view/afri-ned-ses19122025/deel-1-herhaling-verleden-tijd" },
    { label: "Sessie 20 - Niveautest A2", link: "" },
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
