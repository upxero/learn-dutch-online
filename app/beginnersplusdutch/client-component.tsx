'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bannerImage from "@/public/images/banner-3.jpg";

export default function BeginnersPlusClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      const nextPath = encodeURIComponent("/beginnersplusdutch");
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
        router.push(`/signin?next=/beginnersplusdutch`);
      });
  }, []);

  if (loading) return <p>Even laden...</p>;

  const items = [
    { label: "Sessie 1 - Separabele verba", link: "https://lessons.learn-dutch-online.com/sessie-1-uitspraak-en-groeten/" },
    { label: "Huiswerk na sessie 1", link: "https://sites.google.com/view/beginnersplushuina1/deel-1-grammatica-separabele-verba" },
    { label: "Sessie 2 - Huren en kopen", link: "https://sites.google.com/view/begplussessie2/deel-1-trappen-van-vergelijking" },
    { label: "Huiswerk na sessie 2", link: "https://sites.google.com/view/beginners-plus-hswna2/deel-1-grammatica" },
    { label: "Sessie 3 - Verhuizen", link: "https://sites.google.com/view/beginnersplusdutchsessie3/deel-1-spreken" },
    { label: "Huiswerk na sessie 3", link: "https://sites.google.com/view/beginnersplushswna3/deel-3-lezen-en-schrijven" },
    { label: "Sessie 4 - Afval en recyclen", link: "https://sites.google.com/view/beginnersplussessie4/deel-1-grammatica" },
    { label: "Huiswerk na sessie 4", link: "https://sites.google.com/view/beginplus-huiswerkna4/deel-3-luisteren" },
    { label: "Sessie 5 - Sport en vrije tijd", link: "https://sites.google.com/view/beginners-plus-sessie5/deel-1-grammatica" },
    { label: "Huiswerk na sessie 5", link: "https://sites.google.com/view/beginnersplusa1-a2huisw-na-5/deel-1-grammatica" },
    { label: "Sessie 6 - Eindejaarsfeesten in Nederland", link: "https://sites.google.com/view/beginnersplusdutchsessie-6-/deel-2-eindejaar" },
    { label: "Huiswerk na sessie 6", link: "https://sites.google.com/view/beginners-plus-huiswerkna6/deel-1-grammatica" },
    { label: "Sessie 7 - Naar school in Nederland", link: "https://sites.google.com/view/beginnersplusdutcha1-a2sessie7/deel-1-praten" },
    { label: "Huiswerk na sessie 7", link: "https://sites.google.com/view/beginnersplusa1-a2huiswna7/deel-1-lezen" },
    { label: "Sessie 8 - Uitjes in Nederland", link: "https://sites.google.com/view/beginnersplusdutcha1-a2sessie8/deel-1-grammatica" },
    { label: "Huiswerk na sessie 8", link: "https://sites.google.com/view/beginners-plus-huisw8/deel-1-grammatica" },
    { label: "Sessie 9 - Winkelen en koopjes", link: "https://sites.google.com/view/beginnersplusdutchsessie9/deel-2-spreken" },
    { label: "Huiswerk na sessie 9", link: "https://sites.google.com/view/beginners-plus-dutch-huiswna9/deel-1-schrijven" },
    { label: "Sessie 10 - Review 1", link: "https://sites.google.com/view/beginners-plus-dutch-sessie10/review" },
    { label: "Huiswerk na sessie 10", link: "https://sites.google.com/view/beginners-plus-huiswna10/deel-1-woordenschat" },
    { label: "Sessie 11 - De buren", link: "https://sites.google.com/view/beginners-plus-sessie11/deel-1-theorie" },
    { label: "Huiswerk na sessie 11", link: "https://sites.google.com/view/beginners-plusd-huiswna11/deel-1-maken-of-doen" },
    { label: "Sessie 12 - Klussen", link: "https://sites.google.com/view/beginners-plus-dutch-sessie11/deel-1-theorie" },
    { label: "Huiswerk na sessie 12", link: "https://sites.google.com/view/beginnersplushuiswna12/deel-1-grammatica" },
    { label: "Sessie 13 - Naar de dokter", link: "https://sites.google.com/view/beginnersplusdutchsessie13/praten" },
    { label: "Huiswerk na sessie 13", link: "https://sites.google.com/view/beginners-plus-huiswna13/deel-1-luisteren-en-woordenschat" },
    { label: "Sessie 14 - Nederland en water", link: "https://sites.google.com/view/beginners-plus-sessie14/deel-1-grammatica" },
    { label: "Huiswerk na sessie 14", link: "https://sites.google.com/view/beginners-plus-du-hswna14/deel-1-gammatica-imperatief" },
    { label: "Sessie 15 - Koningsdag", link: "https://sites.google.com/view/beginners-plus-sessie15/deel-1-grammatica" },
    { label: "Huiswerk na sessie 15", link: "https://sites.google.com/view/beginnersplushuiswna15/deel-1-lezen" },
    { label: "Sessie 16 - Typisch Nederlands", link: "https://sites.google.com/view/beginners-plus-sessie16/deel-1-grammatica" },
    { label: "Huiswerk na sessie 16", link: "https://sites.google.com/view/beginners-plus-huiswerkna16/deel-1-lezen" },
    { label: "Sessie 17 - Kaas", link: "https://sites.google.com/view/beginners-plus-sessie17/deel-1-kaas" },
    { label: "Huiswerk na sessie 17", link: "https://sites.google.com/view/beginners-plus-huiswerkna17/deel1-woordenschat" },
    { label: "Sessie 18 - Carnaval", link: "https://sites.google.com/view/beginners-plus-sessie18/deel-1-carnaval" },
    { label: "Huiswerk na sessie 18", link: "https://sites.google.com/view/beginnersplushuiswna18/deel-1-schrijven" },
    { label: "Sessie 19 - Voorbereiding niveautest", link: "https://sites.google.com/view/beginnersplussessie19/deel-1-luisteren-voorbereiding-niveautest" },
    { label: "Sessie 20 - Niveautest A2", link: "" },
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
            Beginners Plus Nederlands
            <br />
            <span className="text-2xl font-normal">A1 – A2</span>
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
