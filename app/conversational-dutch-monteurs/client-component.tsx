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
        router.push(`/signin?next=/conversational-dutch-monteurs`);
      });
  }, []);

  if (loading) return <p>Even laden...</p>;

  const data = [
    {
      title: "Automonteurs",
      sessions: [
        { label: "Sessie 1: Gereedschap", link: "https://sites.google.com/view/conversatie-voor-monteurs-se1/deel-1-woordenschatlijst" },
        { label: "Sessie 2: Gereedschap", link: "https://sites.google.com/d/17X1U8HZ7pKPF9ExPFxAG7-2n19FAA8st/p/1CjpB_oTdv_qlL85yUtpv61jXS-2zQup5/edit" },
        { label: "Sessie 3: Veiligheid", link: "https://sites.google.com/view/conversatievoormonteursa3/deel-1-woordenschatlijst" },
        { label: "Sessie 4: Automonteurs", link: "https://sites.google.com/view/conversatievoorautomonteursa3/deel-1-woordenschatlijst" },
        { label: "Sessie 5: Automonteurs", link: "https://sites.google.com/view/conversatievoormonteursa4/deel-1-woordenschatlijst" },
      ],
    },
    {
      title: "Elektromonteurs",
      sessions: [
        { label: "Sessie 1: Gereedschap", link: "https://sites.google.com/view/conversatie-voor-monteurs-se1/deel-1-woordenschatlijst" },
        { label: "Sessie 2: Gereedschap", link: "https://sites.google.com/d/17X1U8HZ7pKPF9ExPFxAG7-2n19FAA8st/p/1CjpB_oTdv_qlL85yUtpv61jXS-2zQup5/edit" },
        { label: "Sessie 3: Veiligheid", link: "https://sites.google.com/view/conversatievoormonteursa3/deel-1-woordenschatlijst" },
        { label: "Sessie 4: Elektromonteurs", link: "https://sites.google.com/view/conversatieelktromonteursa2/deel-1-woordenschatlijst" },
        { label: "Sessie 5: Elektromonteurs", link: "https://sites.google.com/view/conversatieelektromonteurs-a2/deel-1-woordenschatlijst" },
      ],
    },
    {
      title: "Installatiemonteurs",
      sessions: [
        { label: "Sessie 1: Gereedschap", link: "https://sites.google.com/view/conversatie-voor-monteurs-se1/deel-1-woordenschatlijst" },
        { label: "Sessie 2: Gereedschap", link: "https://sites.google.com/d/17X1U8HZ7pKPF9ExPFxAG7-2n19FAA8st/p/1CjpB_oTdv_qlL85yUtpv61jXS-2zQup5/edit" },
        { label: "Sessie 3: Veiligheid", link: "https://sites.google.com/view/conversatievoormonteursa3/deel-1-woordenschatlijst" },
        { label: "Sessie 4: Installatiemonteurs", link: "https://sites.google.com/view/conversatieinstallatmonteursa2/deel-1-woordenschatlijst" },
        { label: "Sessie 5: Installatiemonteurs", link: "https://sites.google.com/view/conversatieinstallatmonteur-a2/deel-1-woordenschatlijst" },
      ],
    },
    {
      title: "Werkbouwkundig monteurs",
      sessions: [
        { label: "Sessie 1: Gereedschap", link: "https://sites.google.com/view/conversatie-voor-monteurs-se1/deel-1-woordenschatlijst" },
        { label: "Sessie 2: Gereedschap", link: "https://sites.google.com/d/17X1U8HZ7pKPF9ExPFxAG7-2n19FAA8st/p/1CjpB_oTdv_qlL85yUtpv61jXS-2zQup5/edit" },
        { label: "Sessie 3: Veiligheid", link: "https://sites.google.com/view/conversatievoormonteursa3/deel-1-woordenschatlijst" },
        { label: "Sessie 4: Werkbouwkundig monteurs", link: "https://sites.google.com/view/conversatieinstallatmonteursa2/deel-1-woordenschatlijst" },
        { label: "Sessie 5: Werkbouwkundig monteurs", link: "https://sites.google.com/view/conversatieinstallatmonteur-a2/deel-1-woordenschatlijst" },
      ],
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

      {/* Sessies overzicht */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-black">
        {data.map((group, i) => (
          <div key={i} className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{group.title}</h2>
            <ul className="space-y-2">
              {group.sessions.map((s, j) => (
                <li key={j}>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-blue-700 hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
