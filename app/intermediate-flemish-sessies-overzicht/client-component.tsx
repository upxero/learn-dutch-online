'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bannerImage from "@/public/images/banner-8.jpg";

export default function BeginnersPlusClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      const nextPath = encodeURIComponent("/intermediate-flemish-sessies-overzicht");
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
        router.push(`/signin?next=/intermediate-flemish-sessies-overzicht`);
      });
  }, []);

  if (loading) return <p>Even laden...</p>;

  const items = [
    { label: "Overzicht - Huiswerk vooraf", link: "https://sites.google.com/view/intermediateflemishhuiswerkvoo?usp=sharing" },
    { label: "Sessie 1 - Maak je dromen waar", link: "https://sites.google.com/view/intermediate-flemish-sessie-1?usp=sharing" },
    { label: "Huiswerk na sessie 1", link: "https://sites.google.com/view/intermflemishhuiswerkna1?usp=sharing" },
    { label: "Sessie 2 - Emigreren", link: "https://sites.google.com/view/intermediateflemishsessie2?usp=sharing" },
    { label: "Huiswerk na sessie 2", link: "https://sites.google.com/view/intermediate-flemish-huisna2?usp=sharing" },
    { label: "Sessie 3 - Een tussenjaar", link: "https://sites.google.com/view/intermediateflemishsessie3?usp=sharing" },
    { label: "Huiswerk na sessie 3", link: "https://sites.google.com/view/intermediate-flemi-huiswerkna3?usp=sharing" },
    { label: "Sessie 4 - Mijn ideale vakantie", link: "https://sites.google.com/view/intermediate-flemish-sessie-4?usp=sharing" },
    { label: "Huiswerk na sessie 4", link: "https://sites.google.com/view/intermediate-flem-huiswerkna4-?usp=sharing" },
    { label: "Sessie 5 - Klachten", link: "https://sites.google.com/view/intermediate-flemish-sessie-5?usp=sharing" },
    { label: "Huiswerk na sessie 5", link: "https://sites.google.com/view/intermediate-flem-huiswerk6-?usp=sharing" },
    { label: "Sessie 6 - Series", link: "https://sites.google.com/view/intermediateflemishsessie6?usp=sharing" },
    { label: "Huiswerk na sessie 6", link: "https://sites.google.com/view/intermediateflemishhuiswerkna6?usp=sharing" },
    { label: "Sessie 7 - Je mening geven", link: "https://sites.google.com/view/intermediate-flemish-sessie7?usp=sharing" },
    { label: "Huiswerk na sessie 7", link: "https://sites.google.com/view/intermediateflemishhuiswerkna7?usp=sharing" },
    { label: "Sessie 8 - Het weer", link: "https://sites.google.com/view/intermediateflemishsessie8?usp=sharing" },
    { label: "Huiswerk na sessie 8", link: "https://sites.google.com/view/intermediate-flem-huiswerk8-?usp=sharing" },
    { label: "Sessie 9 - Netwerken", link: "https://sites.google.com/view/intermediate-flemish-sessie-9?usp=sharing" },
    { label: "Huiswerk na sessie 9", link: "https://sites.google.com/view/intermediateflemishhuiswerkna9?usp=sharing" },
    { label: "Review 1", link: "https://sites.google.com/view/intermediateflemishreview1?usp=sharing" },
    { label: "Huiswerk na sessie 10", link: "https://sites.google.com/view/intermediateflemhuiswerkna10?usp=sharing" },
    { label: "Sessie 11 - Het verkeer", link: "https://sites.google.com/view/intermediate-flemish-sessie11?usp=sharing" },
    { label: "Huiswerk na sessie 11", link: "https://sites.google.com/view/intermediateflemhuiswerkna11?usp=sharing" },
    { label: "Sessie 12 - Sociale media", link: "https://sites.google.com/view/intermediate-flemish-sessie-12?usp=sharing" },
    { label: "Huiswerk na sessie 12", link: "https://sites.google.com/view/intermediate-flem-huiswe-na12?usp=sharing" },
    { label: "Sessie 13 - Bereikbaarheid", link: "https://sites.google.com/view/intermediateflemishsessie13?usp=sharing" },
    { label: "Huiswerk na sessie 13", link: "https://sites.google.com/view/intermediateflemhuiswerkna13?usp=sharing" },
    { label: "Sessie 14 - Formeel telefoneren", link: "https://sites.google.com/view/intermediate-flemish-sessie-14?usp=sharing" },
    { label: "Huiswerk na sessie 14", link: "https://sites.google.com/view/intermediate-flem-huiswerk14?usp=sharing" },
    { label: "Sessie 15 - Beleefd en onbeleefd", link: "https://sites.google.com/view/intermediateflemishsessie15?usp=sharing" },
    { label: "Huiswerk na sessie 15", link: "https://sites.google.com/view/intermediate-flem-huiswerk15?usp=sharing" },
    { label: "Sessie 16 - Collega", link: "https://sites.google.com/view/intermediateflemishsessie16?usp=sharing" },
    { label: "Huiswerk na sessie 16", link: "https://sites.google.com/view/intermediate-flemhuiswerk16?usp=sharing" },
    { label: "Sessie 17 - Vrienden maken", link: "https://sites.google.com/view/intermediateflemishsessie17?usp=sharing" },
    { label: "Huiswerk na sessie 17", link: "https://sites.google.com/view/intermediate-flem-huiswerk17/deel-1-grammatica" },
    { label: "Sessie 18 - Gezonde levensstijl", link: "https://sites.google.com/view/intermediate-flemish-sessie-18/deel-1-spreken" },
    { label: "Huiswerk na sessie 18", link: "https://sites.google.com/view/intermediateflemhuiswerkna18/deel-1-grammatica" },
    { label: "Sessie 19 - Sollicitatie/presentatie", link: "https://sites.google.com/view/intermediateflemishsessie19/deel-1-grammatica" },
    { label: "Huiswerk na sessie 19", link: "https://sites.google.com/view/intermediate-flemish-huis-19/motivatiebriefpresentatie" },
    { label: "Review 2", link: "https://sites.google.com/view/intermediate-flemish-review2/deel-1-bespreking-sollicitatiebrief" },
    { label: "Huiswerk na sessie 20", link: "https://sites.google.com/view/intermediateflemishhuiswna20/deel-1-luisteren-en-woordenschat" },
    { label: "Sessie 21 - Werkdruk en vergaderen", link: "https://sites.google.com/view/intermediateflemishsessie21/deel-1-grammatica" },
    { label: "Huiswerk na sessie 21", link: "https://sites.google.com/view/intermediatedutchhuiswerkna31/deel-1-grammatica" },
    { label: "Sessie 22 - Tussentaal", link: "https://sites.google.com/view/intermediateflemishsessie22/deel-1-grammatica" },
    { label: "Huiswerk na sessie 22", link: "https://sites.google.com/view/intermediate-flemish-huiswerk-/deel-1-grammatica" },
    { label: "Sessie 23 - Geld", link: "https://sites.google.com/view/intermediateflemishsessie23/deel-1-grammatica" },
    { label: "Huiswerk na sessie 23", link: "https://sites.google.com/view/intermediateflemishhuiswerknas/deel-1-grammatica" },
    { label: "Sessie 24 - Dieren", link: "https://sites.google.com/view/intermediate-flemish-sessie-24/deel-1-grammatica" },
    { label: "Huiswerk na sessie 24", link: "https://sites.google.com/view/intermflem-huiswna24/deel-1-lezen" },
    { label: "Sessie 25 - Vlamingen voor buitenlanders", link: "https://sites.google.com/view/intermediateflemishsessie25/deel-1-spreken" },
    { label: "Huiswerk na sessie 25", link: "https://sites.google.com/view/intermflem-huiswna25/deel-1-lezen-en-schrijven" },
    { label: "Sessie 26 - De Nederlandse taal", link: "https://sites.google.com/view/intermediate-flemish-sessie-26/deel-1-spreken" },
    { label: "Huiswerk na sessie 26", link: "https://sites.google.com/view/intermediatedutchhuiswerkna26/deel-1-lezen-en-schrijven" },
    { label: "Sessie 27 - Voorbereiding niveautoets", link: "https://sites.google.com/view/intermediateflemishsessie27/deel-1-spreken" },
    { label: "Sessie 28 - Niveautoets 1: Lezen en schrijven", link: "" },
    { label: "Sessie 29 - Niveautoets 2: Luisteren en schrijven", link: "" },
    { label: "Sessie 30 - Niveautoets 3: Spreken", link: "" }
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
            Intermediate Flemish
            <br />
            <span className="text-2xl font-normal">A2 - B1</span>
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