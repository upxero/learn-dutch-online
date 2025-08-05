'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bannerImage from "@/public/images/banner-4.jpg";

export default function IntermediateDutchClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      const nextPath = encodeURIComponent("/intermediatedutchsessies");
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
        router.push(`/signin?next=/intermediatedutchsessies`);
      });
  }, []);

  if (loading) return <p>Even laden...</p>;

  const items = [
    { label: "Huiswerk vooraf", link: "https://sites.google.com/view/intermediatedutchhuiswerkvoora/deel-1-lezen" },
    { label: "Sessie 1: Maak je dromen waar", link: "https://sites.google.com/view/intermediatedutchses1/deel-1-spreken" },
    { label: "Huiswerk na sessie 1", link: "https://sites.google.com/view/intermediatedutchhswna1/deel-1-grammatica-werkwoorden-vtt" },
    { label: "Sessie 2: Emigreren", link: "https://sites.google.com/view/intermediatedutchsessie2/deel-1-een-zeiltocht-van-een-jaar" },
    { label: "Huiswerk na sessie 2", link: "https://sites.google.com/view/intermediate-dutch-hswna2/deel-1-lezen-en-schrijven" },
    { label: "Sessie 3: Een tussenjaar", link: "https://sites.google.com/view/intermediatedutchses3/deel-1-grammatica" },
    { label: "Huiswerk na sessie 3", link: "https://sites.google.com/view/intermediate-dutch-hswrkna3/deel-1-luisteren-en-schrijven" },
    { label: "Sessie 4: mijn ideale vakantie", link: "https://sites.google.com/view/intermediate-dutch-sessie-4/deel-1-spreken" },
    { label: "Huiswerk na sessie 4", link: "https://sites.google.com/view/intermediatedutchhswrkna4/deel-1-lezen-en-schrijven" },
    { label: "Sessie 5: klachten", link: "https://sites.google.com/view/intermediate-dutch-sessie-5/deel-1-spreken" },
    { label: "Huiswerk na sessie 5", link: "https://sites.google.com/view/intermediate-dutch-hswrk-na5/deel-1-grammatica-te" },
    { label: "Sessie 6: Series", link: "https://sites.google.com/view/intermediatedutchsessie6/deel-1-spreken-series" },
    { label: "Huiswerk na sessie 6", link: "https://sites.google.com/view/intermediate-dutch-hswrk-na6/deel-1-woordenschat-mening-geven" },
    { label: "Sessie 7: Je mening geven", link: "https://sites.google.com/view/intermediatedutchsessie7/deel-1-spreken-mening-geven" },
    { label: "Huiswerk na sessie 7", link: "https://sites.google.com/view/intermediatedutchhswrkna7/deel-1-woordenschat-het-weer" },
    { label: "Sessie 8: Het weer", link: "https://sites.google.com/view/intermediate-dutch-sessie-8/deel-1-spreken" },
    { label: "Huiswerk na sessie 8", link: "https://sites.google.com/view/intermediate-dutch-hswrk-na8/deel-1-luisteren-en-schrijven" },
    { label: "Sessie 9: Netwerken", link: "https://sites.google.com/view/intermediate-dutch-sessie-9/deel-1-spreken" },
    { label: "Huiswerk na sessie 9", link: "https://sites.google.com/view/intermediatedutchhswrkna9/deel-1-lezen-en-schrijven" },
    { label: "Review 1", link: "https://sites.google.com/view/intermediatedutchreview1/deel-1-feedback-huiswerk" },
    { label: "Huiswerk na sessie 10", link: "https://sites.google.com/view/intermediatedutchhswrkna10/deel-1-lezen-en-schrijven" },
    { label: "Sessie 11: Het verkeer", link: "https://sites.google.com/view/intermediate-dutch-sessie11/deel-1-spreken" },
    { label: "Huiswerk na sessie 11", link: "https://sites.google.com/view/intermediatedutchhswrkna11/deel-1-grammatica" },
    { label: "Sessie 12: sociale media", link: "https://sites.google.com/view/intermediatedutchsessie12/deel-1-grammatica" },
    { label: "Huiswerk na sessie 12", link: "https://sites.google.com/view/intermediate-dutch-huiwna12/deel-1-grammatica" },
    { label: "Sessie 13: bereikbaarheid", link: "https://sites.google.com/view/intermediatedutchsessie13/deel-1-spreken" },
    { label: "Huiswerk na sessie 13", link: "https://sites.google.com/view/intermediatedutchhswrkna13/deel-1-woordenschat" },
    { label: "Sessie 14: formeel telefoneren", link: "https://sites.google.com/view/intermediatedutchsessie14/deel-1-spreken" },
    { label: "Huiswerk na sessie 14", link: "https://sites.google.com/view/intermediate-dutch-hswrkna14/deel-1-grammatica" },
    { label: "Sessie 15: Beleefd en onbeleefd", link: "https://sites.google.com/view/intermediate-dutch-sessie-15/deel-1-spreken" },
    { label: "Huiswerk na sessie 15", link: "https://sites.google.com/view/intermediatedutchhswrkna15/deel-1-grammatica" },
    { label: "Sessie 16: collega", link: "https://sites.google.com/view/intermediate-dutch-sessie-16/deel-1-spreken" },
    { label: "Huiswerk na sessie 16", link: "https://sites.google.com/view/intermediate-dutch-huiswerk-na/deel-1-grammatica" },
    { label: "Sessie 17: Vrienden maken", link: "https://sites.google.com/view/intermediate-dutch-sessie-17/deel-1-spreken" },
    { label: "Huiswerk na sessie 17", link: "https://sites.google.com/view/intermediatedutchhuswrkna17/deel-1-grammatica" },
    { label: "Sessie 18: Gezonde levensstijl", link: "https://sites.google.com/view/intermediatedutchsessie18/deel-1-spreken" },
    { label: "Huiswerk na sessie 18", link: "https://sites.google.com/view/intermediatedutchhswrkna18/deel-1-grammatica" },
    { label: "Sessie 19: sollicitatie/presentatie", link: "https://sites.google.com/view/intermediatedutchsessie19/deel-1-grammatica" },
    { label: "Huiswerk na sessie 19", link: "https://sites.google.com/view/intermediate-dutch-hswrkna19/motivatiebriefpresentatie" },
    { label: "Review 2", link: "https://sites.google.com/view/intermediatedutchreview2/deel-1-bespreking-sollicitatiebrief" },
    { label: "Huiswerk na sessie 20", link: "https://sites.google.com/view/intermediate-dutch-hwrkna20/deel-1-luisteren-en-woordenschat" },
    { label: "Sessie 21: Werkdruk en vergaderen", link: "https://sites.google.com/view/intermediate-dutch-ses-21/deel-1-grammatica" },
    { label: "Huiswerk na sessie 21", link: "https://sites.google.com/view/intermediate-dutch-hswrkna-21/deel-1-grammatica" },
    { label: "Sessie 22: Dialecten", link: "https://sites.google.com/view/intermediate-dutch-sess-22/deel-1-grammatica" },
    { label: "Huiswerk na sessie 22", link: "https://sites.google.com/view/intermediate-dutch-hswrk-na22/deel-1-grammatica" },
    { label: "Sessie 23: Geld", link: "https://sites.google.com/view/intermediate-dutch-sess-23/deel-1-grammatica" },
    { label: "Huiswerk na sessie 23", link: "https://sites.google.com/view/intermediate-dutch-hswrkna23/deel-1-grammatica" },
    { label: "Sessie 24: Dieren", link: "https://sites.google.com/view/intermediatedutchsessie24/deel-1-grammatica" },
    { label: "Huiswerk na sessie 24", link: "https://sites.google.com/view/intermediatedutchhswrkna24/deel-1-lezen" },
    { label: "Sessie 25: Nederlands voor buitenlanders", link: "https://sites.google.com/view/intermediate-dutch-sess-25/deel-1-spreken" },
    { label: "Huiswerk na sessie 25", link: "https://sites.google.com/view/intermediate-dutch-hswrkna25/deel-1-lezen-en-schrijven" },
    { label: "Sessie 26: De Nederlandse taal", link: "https://sites.google.com/view/intermediate-dutch-sessie-26/deel-1-spreken" },
    { label: "Huiswerk na sessie 26", link: "https://sites.google.com/view/intermediate-dutch-hswrkna-26/deel-1-lezen-en-schrijven" },
    { label: "Sessie 27: voorbereiding niveautoets", link: "https://sites.google.com/view/intermediatedutchsess27/deel-1-spreken" },
    { label: "Sessie 28: Niveautoets 1 - Lezen en schrijven", link: "" },
    { label: "Sessie 29: Niveautoets 2 - Luisteren en schrijven", link: "" },
    { label: "Sessie 30: Niveautoets 3 - Spreken", link: "" }
];

  return (
    <div className="min-h-screen bg-gray-50">
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
            Intermediate Dutch 
            <br />
            <span className="text-2xl font-normal">A2 – B1</span>
          </h1>
        </div>
      </div>

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