'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AfrikaansDutch1Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      // Gebruiker is niet ingelogd → redirect naar loginpagina
      const nextPath = encodeURIComponent("/afrikaans-dutch-1");
      router.push(`/signin?next=${nextPath}`);
      return;
    }

    // Optioneel: validatie via Directus API
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

  if (loading) {
    return <p>Even laden...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Beginners Nederlands voor Afrikaans sprekers</h1>

      <h2 className="text-xl font-semibold mb-2">Cursusoverzicht</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Sessie 1 - Uitspraak en groeten</li>
        <li>Huiswerk na sessie 1</li>
        <li>Sessie 2 - Introducties</li>
        <li>Huiswerk na sessie 2</li>
        {/* Voeg hier alle sessies toe */}
      </ul>
    </div>
  );
}
