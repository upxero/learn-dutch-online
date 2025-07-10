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
    { label: "Sessie 1 - Uitspraak en groeten", link: "https://sites.google.com/view/afri-ned-ses12112025/deel-1-uitspraak" },
    { label: "Huiswerk na sessie 1", link: "https://sites.google.com/view/afridutchhuiswerk120012025/deel-1-luisteren" },
    { label: "Sessie 2 - Introducties", link: "https://sites.google.com/view/afr-ned-s3-24-10/deel-1-de-het-een" },
    { label: "Huiswerk na sessie 2", link: "https://sites.google.com/view/afridutchhuiswerk2-24-10/deel-1-getallen-en-cijfers" },
    { label: "Sessie 3 - Afspreken", link: "https://sites.google.com/view/afr-nl-s3-24-10/deel-1-hoofdzin-vraagzinnen" },
    { label: "Huiswerk na sessie 3", link: "https://sites.google.com/view/afridutchhuiswerk3-24-10/deel-1-de-familie" },
    { label: "Sessie 4 - De familie", link: "https://sites.google.com/view/afr-nl-s4-24-10/deel-1-de-familie" },
    { label: "Huiswerk na sessie 4", link: "https://sites.google.com/view/afridutchsessie4-24-10/deel-1-werkwoorden" },
    { label: "Sessie 5 - Feest", link: "https://sites.google.com/view/afr-nl-s5-24-10/deel-1-spreken" },
    { label: "Huiswerk na sessie 5", link: "https://sites.google.com/view/afridutchhuiswerk5-24-10/deel-1-grammatica" },
    { label: "Sessie 6 - Smakelijk", link: "https://sites.google.com/view/afr-nl-s6-24-10/deel-1-positiewerkwoorden" },
    { label: "Huiswerk na sessie 6", link: "https://sites.google.com/view/afridutchhuiswerk6-24-9/deel-1-grammatica" },
    { label: "Sessie 7 - Aan tafel", link: "https://sites.google.com/view/afr-nl-s7-24-10/deel-1-modale-werkwoorden" },
    { label: "Huiswerk na sessie 7", link: "https://sites.google.com/view/afridutchhuiswerk7-24-10/deel-1-grammatica" },
    { label: "Sessie 8 - Geboorte en gelukwensen", link: "https://sites.google.com/view/afr-nl-s8-24-10/deel-1-er" },
    { label: "Huiswerk na sessie 8", link: "https://sites.google.com/view/afridutchhuiswerk8-24-10/deel-1-bevrijdingsdag" },
    { label: "Sessie 9 - Bevrijdingsdag", link: "https://sites.google.com/view/afr-nl-s9-7-07/deel-1grammatica-hoofdzin-bijzin" },
    { label: "Huiswerk na sessie 9", link: "https://sites.google.com/view/afridutchhuiswerk9-24-10/deel-1-grammatica" },
    { label: "Sessie 10 - Review 1", link: "https://sites.google.com/view/afr-nl-s10-24-10/deel-1-feedback-huiswerk" },
    { label: "Huiswerk na sessie 10", link: "https://sites.google.com/view/afridutchhuiswerk10-24-10/deel-1-woordenschat" },
    { label: "Sessie 11 - Emoties", link: "https://sites.google.com/view/afr-nl-s11-24-10/deel-1-spreken-reacties" },
    { label: "Huiswerk na sessie 11", link: "https://sites.google.com/view/afridutchhuiswerk11-24-10/deel-1-pronomen" },
    { label: "Sessie 12 - OVT regelmatige werkwoorden", link: "https://sites.google.com/view/afr-nl-s12-24-10/deel-1-onvoltooid-verleden-tijd" },
    { label: "Huiswerk na sessie 12", link: "https://sites.google.com/view/afridutchhuiswerk12-24-10/deel-1-grammatica" },
    { label: "Sessie 13 - Praten met collega’s", link: "https://sites.google.com/view/afr-nl-s13-24-10/deel-1-ochtendroutine" },
    { label: "Huiswerk na sessie 13", link: "https://sites.google.com/view/afridutchhuiswerk13-24-10/deel-1-oefeningen" },
    { label: "Sessie 14 - OVT onregelmatige werkwoorden", link: "https://sites.google.com/view/afr-nl-s14-24-10/deel-1-theorie" },
    { label: "Huiswerk na sessie 14", link: "https://sites.google.com/view/afridutchhuiswerk14-24-10/deel-1-oefeningen-ovt" },
    { label: "Sessie 15 - VTT regelmatige werkwoorden", link: "https://sites.google.com/view/afr-nl-s15-24-10/deel-1-vtt-zwak" },
    { label: "Huiswerk na sessie 15", link: "https://sites.google.com/view/afridutchhuiswerk15-24-10/deel-1-grammatica" },
    { label: "Sessie 16 - Naar de dokter", link: "https://sites.google.com/view/afr-nl-s16-24-10/praten" },
    { label: "Huiswerk na sessie 16", link: "https://sites.google.com/view/afridutchhuiswerk-16-24-10/grammatica" },
    { label: "Sessie 17 - VTT onregelmatige werkwoorden", link: "https://sites.google.com/view/afr-nl-s17-24-10/deel-1-vtt-sterk" },
    { label: "Huiswerk na sessie 17", link: "https://sites.google.com/view/afrikdutchhuiswerk17-24-10/deel-1-woorden-voor-frequentie" },
    { label: "Sessie 18 - Het weer", link: "https://sites.google.com/view/afr-nl-s20-01-2025/deel-1-woorden-voor-frequentie" },
    { label: "Huiswerk na sessie 18", link: "https://sites.google.com/view/afridutchhuiswerk18-20012025/deel-1-herhaling-theorie" },
    { label: "Sessie 19 - Herhaling verleden tijd + voorbereiding niveautest", link: "https://sites.google.com/view/dutchafr1920012025/deel-1-herhaling-verleden-tijd" },
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
                    className={`text-lg text-gray-500 ${
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
