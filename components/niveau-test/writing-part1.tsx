"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

interface WritingPart1Props {
  trainer: string;
}

export default function WritingPart1({ trainer }: WritingPart1Props) {
  const [fields, setFields] = useState({
    fullname1: "",
    sentence1: "",
    sentence2: "",
    sentence3: "",
    sentence4: "",
    sentence5: "",
    fullname2: "",
    email: "",
    emailText: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Alle antwoorden bundelen in één string
    const answer = `
    --- Opdracht 1 ---
    Naam: ${fields.fullname1}
    1. ${fields.sentence1}
    2. ${fields.sentence2}
    3. ${fields.sentence3}
    4. ${fields.sentence4}
    5. ${fields.sentence5}

    --- Opdracht 2 ---
    Naam: ${fields.fullname2}
    E-mail: ${fields.email}
    Tekst:
    ${fields.emailText}
    `;

    try {
      const res = await fetch("/api/send-writing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trainer, answer }),
      });

      if (res.ok) {
        setSuccess(true);
        setFields({
          fullname1: "",
          sentence1: "",
          sentence2: "",
          sentence3: "",
          sentence4: "",
          sentence5: "",
          fullname2: "",
          email: "",
          emailText: "",
        });
      } else {
        alert("Er ging iets mis. Probeer opnieuw.");
      }
    } catch (err) {
      console.error("Error submitting writing:", err);
      alert("Versturen mislukt.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <p className="text-green-600 font-semibold text-center">
        ✅ Je antwoorden zijn verstuurd naar je docent!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Titel */}
      <h2 className="text-3xl font-bold text-center">Deel 1: Schrijven</h2>

      {/* Blok 1 - Info */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700">
          Dit testgedeelte bestaat uit twee delen.
          <br />- In het eerste deel moet je zinnen verder afmaken.
          <br />- In het tweede deel moet je een volledige tekst schrijven. Let goed
          op grammatica en spelling.
          <br />- Je hebt 10 minuten maximum voor alle schrijfoefeningen. Het
          schrijfgedeelte staat op 20 punten.
        </p>
      </div>

      {/* Blok 2 - Opdracht 1 */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md grid md:grid-cols-2 gap-6">
        {/* Links - uitleg */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Schrijven: Opdracht 1</h3>
          <p className="text-sm text-gray-700 mb-4">10 punten</p>
          <p>
            Maak de zinnen verder af. Je mag zelf kiezen wat je schrijft maar je
            moet logische zinnen bouwen. Let op grammatica en spelling.
          </p>
        </div>

        {/* Rechts - vragen */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Naam en achternaam</label>
            <input
              type="text"
              name="fullname1"
              value={fields.fullname1}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">1. Ik woon in Zwolle, en ...</label>
            <input
              type="text"
              name="sentence1"
              value={fields.sentence1}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">2. Ik moet naar de dokter, maar ...</label>
            <input
              type="text"
              name="sentence2"
              value={fields.sentence2}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">3. Morgen gaat het regenen, dus ...</label>
            <input
              type="text"
              name="sentence3"
              value={fields.sentence3}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">4. Gisteren was ik ziek, omdat ...</label>
            <input
              type="text"
              name="sentence4"
              value={fields.sentence4}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">5. Ik waste vorige week mijn auto, want ...</label>
            <input
              type="text"
              name="sentence5"
              value={fields.sentence5}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
      </div>

      {/* Blok 3 - Opdracht 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md grid md:grid-cols-2 gap-6">
        {/* Links - uitleg */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Schrijven: Opdracht 2</h3>
          <p className="text-sm text-gray-700 mb-4">10 punten</p>
          <p className="mb-4">
            <strong>Situatie:</strong> Je wilt je vrienden uitnodigen om samen
            Koningsdag te vieren in de stad Groenstad. Je wilt samen met hen naar de
            vrijmarkt gaan en je wilt lekker dansen. Je vertelt ook wat je vorig
            jaar op Koningsdag hebt gedaan om ze enthousiast te maken.
          </p>
          <p className="mb-4">
            <strong>Opdracht:</strong> Schrijf een korte e-mail (50-70 woorden) aan
            je vrienden om ze uit te nodigen voor Koningsdag.
            <br />
            Richt je mail aan <em>vrienden@debeste.nl</em>
            <br />
            Gebruik een begroeting en een afsluiting.
            <br />
            Vertel wat je wilt doen.
            <br />
            Vertel wat je vorig jaar op Koningsdag hebt gedaan, kijk hiervoor naar
            de plaatjes.
          </p>

          {/* Afbeeldingen */}
          <div className="flex gap-2">
            <Image src="/images/optredens-kijken.png" alt="Optredens" width={200} height={150} />
            <Image src="/images/tompouce-eten.jpeg" alt="Tompouce eten" width={200} height={150} />
            <Image src="/images/vrijmarkt-bezoeken.jpeg" alt="Vrijmarkt" width={200} height={150} />
          </div>
        </div>

        {/* Rechts - velden */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Jouw naam en achternaam</label>
            <input
              type="text"
              name="fullname2"
              value={fields.fullname2}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Jouw e-mailadres</label>
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">E-mailtekst (50-70 woorden)</label>
            <textarea
              name="emailText"
              value={fields.emailText}
              onChange={handleChange}
              rows={6}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
      </div>

      {/* Versturen */}
      <div className="text-center">
        <button
          type="submit"
          className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md cursor-pointer"
          disabled={loading}
        >
          {loading ? "Versturen..." : "Verstuur alle antwoorden"}
        </button>
      </div>
    </form>
  );
}
