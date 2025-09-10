"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

interface WritingPart1Props {
  trainer: string;
}

export default function WritingPart1({ trainer }: WritingPart1Props) {
  const [answers, setAnswers] = useState({
    fullname1: "",
    sentence1: "",
    sentence2: "",
    sentence3: "",
    sentence4: "",
    sentence5: "",
    fullname2: "",
    to: "vrienden@debeste.nl",
    email: "",
    emailText: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-writing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trainer, answers }),
      });

      if (res.ok) {
        setSuccess(true);
        setAnswers({
          fullname1: "",
          sentence1: "",
          sentence2: "",
          sentence3: "",
          sentence4: "",
          sentence5: "",
          fullname2: "",
          to: "vrienden@debeste.nl",
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
          <br />- In het tweede deel moet je volledige tekst schrijven. Let goed
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
        <div className="space-y-3">
          <input
            type="text"
            name="fullname1"
            value={answers.fullname1}
            onChange={handleChange}
            placeholder="Naam en achternaam"
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            name="sentence1"
            value={answers.sentence1}
            onChange={handleChange}
            placeholder="1. Ik woon in Zwolle, en ..."
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            name="sentence2"
            value={answers.sentence2}
            onChange={handleChange}
            placeholder="2. Ik moet naar de dokter, maar ..."
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            name="sentence3"
            value={answers.sentence3}
            onChange={handleChange}
            placeholder="3. Morgen gaat het regenen, dus ..."
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            name="sentence4"
            value={answers.sentence4}
            onChange={handleChange}
            placeholder="4. Gisteren was ik ziek, omdat ..."
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            name="sentence5"
            value={answers.sentence5}
            onChange={handleChange}
            placeholder="5. Ik waste vorige week mijn auto, want ..."
            className="w-full border rounded p-2"
          />
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
            <Image src="/images/opdracht-optreden.jpg" alt="Optreden" width={100} height={80} />
            <Image src="/images/opdracht-tompouce.jpg" alt="Tompouce" width={100} height={80} />
            <Image src="/images/opdracht-vrijmarkt.jpg" alt="Vrijmarkt" width={100} height={80} />
          </div>
        </div>

        {/* Rechts - velden */}
        <div className="space-y-3">
          <input
            type="text"
            name="fullname2"
            value={answers.fullname2}
            onChange={handleChange}
            placeholder="Jouw naam en achternaam"
            className="w-full border rounded p-2"
          />
          <input
            type="email"
            name="to"
            value={answers.to}
            readOnly
            className="w-full border rounded p-2 bg-gray-100"
          />
          <input
            type="email"
            name="email"
            value={answers.email}
            onChange={handleChange}
            placeholder="Jouw e-mailadres"
            className="w-full border rounded p-2"
          />
          <textarea
            name="emailText"
            value={answers.emailText}
            onChange={handleChange}
            placeholder="Schrijf hier je e-mail (50-70 woorden)..."
            rows={6}
            className="w-full border rounded p-2"
          />
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
