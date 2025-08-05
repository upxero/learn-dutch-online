'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bannerImage from "@/public/images/banner-2.jpg";

export default function AfrikaansDutchClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      const nextPath = encodeURIComponent("/a0-a1-flemish");
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
        router.push(`/signin?next=/a0-a1-flemish`);
      });
  }, []);

  if (loading) return <p>Even laden...</p>;

  const items = [
    { label: "Sessie 1 - Uitspraak en groeten", link: "https://sites.google.com/view/bfa0-a1s1/deel-1-uitspraak" },
    { label: "Huiswerk na sessie 1", link: "https://sites.google.com/view/bfa0-a1huiswna1/deel-1-luisteren" },
    { label: "Sessie 2 - Introducties", link: "https://sites.google.com/view/bfa0-a1sessie2/deel-1-het-artikel" },
    { label: "Huiswerk na sessie 2", link: "https://sites.google.com/view/bfa0-a1huiswerkna2/deel-1-schrijven" },
    { label: "Sessie 3 - Afspreken", link: "https://sites.google.com/view/bfa0-a1sessie3/deel-1-grammatica-zinsbouw" },
    { label: "Huiswerk na sessie 3", link: "https://sites.google.com/view/bfa0-a1huiswerkna3/deel-1-woordvolgorde-oefenen" },
    { label: "Sessie 4 - De familie", link: "https://sites.google.com/view/bfa0a1sessie4/deel-1-de-familie" },
    { label: "Huiswerk na sessie 4", link: "https://sites.google.com/view/bfa0-a1huiswerkna4/deel-1-werkwoorden-oefenen" },
    { label: "Sessie 5 - Feest", link: "https://sites.google.com/view/bfa0a1sessie5/deel-1-feest" },
    { label: "Huiswerk na sessie 5", link: "https://sites.google.com/view/bfa0a1huiswerkna5/deel-1-grammatica-oefenen" },
    { label: "Sessie 6 - Smakelijk", link: "https://sites.google.com/view/bfa0a1sessie6/deel-1-positiewerkwoorden" },
    { label: "Huiswerk na sessie 6", link: "https://sites.google.com/view/bfa0a1huiswerkna6/deel-1-grammatica" },
    { label: "Sessie 7 - Bestellen", link: "https://sites.google.com/view/bfa0a1sessie7/deel-1-grammatica" },
    { label: "Huiswerk na sessie 7", link: "https://sites.google.com/view/bfa0a1-huiswerkna7/deel-1-grammatica" },
    { label: "Sessie 8 - Gelukwensen en condoleren", link: "https://sites.google.com/view/bfa0a1sessie8/deel-1-grammatica" },
    { label: "Huiswerk na sessie 8", link: "https://sites.google.com/view/bfa0a1huiswerkna8/deel-1-grammatica" },
    { label: "Sessie 9 - Brussel", link: "https://sites.google.com/view/bfa0a1sessie9/deel-1-grammatica-hoofdzin-bijzin" },
    { label: "Huiswerk na sessie 9", link: "https://sites.google.com/view/begfla0-a1huiswna9/deel-2-schrijven" },
    { label: "Sessie 10 - Feedback", link: "https://sites.google.com/view/afr-nl-s10-23/deel-1-feedback-huiswerk" },
    { label: "Huiswerk na sessie 10", link: "https://sites.google.com/view/beginners-vlaams-a0-a1huisw10/deel-1-woordenschat" },
    { label: "Sessie 11 - Emoties", link: "https://sites.google.com/view/beginnersvlonlinea0-a1sess11/deel-1-reacties" },
    { label: "Huiswerk na sessie 11", link: "https://sites.google.com/view/beginsvlsonlinea0-a1huiswna11/deel-1-werkwoorden" },
    { label: "Sessie 12 - OVT regelmatige werkwoorden", link: "https://sites.google.com/view/beginnersflemisha0-a1sessie12/deel-1-onvoltooid-verleden-tijd" },
    { label: "Huiswerk na sessie 12", link: "https://sites.google.com/view/beginners-flemishhuisw12/deel-1-woordenschat-kantoor" },
    { label: "Sessie 13 - Praten met collega’s", link: "https://sites.google.com/view/begin-vlaams--a0-a1sessie13/deel-1-ochtendroutine-op-het-werk" },
    { label: "Huiswerk na sessie 13", link: "https://sites.google.com/view/beginnersvlaamsa0-a1huiswna13/deel-1-werkwoorden" },
    { label: "Sessie 14 - OVT onregelmatige werkwoorden", link: "https://sites.google.com/view/beginnersvlaamsa0-a1sessie14/deel-1-theorie" },
    { label: "Huiswerk na sessie 14", link: "https://sites.google.com/view/beginnersvlaamsa0-a1huiswena14/deel-1-grammatica" },
    { label: "Sessie 15 - Sinterklaas", link: "https://sites.google.com/view/beginners-vlms--a0-a1sessie15/deel-1-praten" },
    { label: "Huiswerk na sessie 15", link: "https://sites.google.com/view/beginnersvlaaa0-a1huiswna15/deel-1-werkwoorden" },
    { label: "Sessie 16 - VTT regelmatige werkwoorden", link: "https://sites.google.com/view/beginners-vlms-a0-a1-sessie16/deel-1-grammatica" },
    { label: "Huiswerk na sessie 16", link: "https://sites.google.com/view/beginners-vlms-a0-a1huiswna16/deel-1-grammatica" },
    { label: "Sessie 17 - Het weer", link: "https://sites.google.com/view/beginnersvlaamsa0-a1sessie17/deel-1-een-praatje-maken" },
    { label: "Huiswerk na sessie 17", link: "https://sites.google.com/view/beginnersvlmsa0-a1huiswna17/deel-1-schrijven" },
    { label: "Sessie 18 - VTT onregelmatige werkwoorden", link: "https://sites.google.com/view/beginnersvlmsa0-a1sessie18/deel-1-vtt-theorie" },
    { label: "Huiswerk na sessie 18", link: "https://sites.google.com/view/beginners-vlaams-a0-a1huisw18/deel-1-herhaling-theorie" },
    { label: "Sessie 19 - Herhaling verleden tijd", link: "https://sites.google.com/view/beginnersvlaama0-a1sessie19/deel-1-terugkoppel" },
    { label: "Sessie 20 - Niveautest A1", link: "" }
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
            Beginners Vlaams
            <br />
            <span className="text-2xl font-normal">A0 - A1</span>
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
