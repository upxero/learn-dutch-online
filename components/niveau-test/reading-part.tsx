"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

interface ReadingPartProps {
  trainer: string;
}

export default function ReadingPart({ trainer }: ReadingPartProps) {
  const [fields, setFields] = useState({
    fullname: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const answer = `
    --- Deel 2: Lezen ---
    Naam: ${fields.fullname}

    1. Hoe kun je een afspraak verzetten?
    Antwoord: ${fields.q1}

    2. Hoeveel uur van tevoren moet je verzetten?
    Antwoord: ${fields.q2}

    3. Wat betaal je als je minder dan 24 uur van tevoren verzet?
    Antwoord: ${fields.q3}

    4. Wat gebeurt er als je te laat bent?
    Antwoord: ${fields.q4}

    5. Wat is het telefoonnummer?
    Antwoord: ${fields.q5}
    `;

    try {
      const res = await fetch("/api/send-reading", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trainer, answer }),
      });

      if (res.ok) {
        setSuccess(true);
        setFields({ fullname: "", q1: "", q2: "", q3: "", q4: "", q5: "" });
      } else {
        alert("Er ging iets mis. Probeer opnieuw.");
      }
    } catch (err) {
      console.error("Error submitting reading:", err);
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
      <h2 className="text-3xl font-bold text-center">Deel 2: Lezen</h2>
      <p className="text-center text-gray-600">5 punten</p>

      {/* Info blok */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700">
          Dit testgedeelte bestaat uit een leestekst met vragen.
          <br />- Lees de tekst
          <br />- Beantwoord de vragen.
          <br />- Je hebt hier 5 minuten voor.
        </p>
      </div>

      {/* Leesopdracht blok */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md grid md:grid-cols-2 gap-6">
        {/* Links - tekst */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/tandarts-afspraak.jpg"
              alt="Tandartsafspraak"
              width={50}
              height={50}
            />
            <h3 className="text-xl font-semibold">
              Lezen: Een afspraak verzetten bij Tandartspraktijk Glimlach
            </h3>
          </div>

          <p className="text-gray-700">
            Heb je een afspraak bij Tandartspraktijk Glimlach, maar kun je niet
            komen? Hier lees je hoe je je afspraak kunt verzetten en wat er
            gebeurt als je te laat bent.
          </p>

          <h4 className="mt-4 font-semibold">Hoe verzet je een afspraak?</h4>
          <p>
            Bel de praktijk op 030-1234567. De receptie is open van maandag tot
            vrijdag van 8:00 uur tot 17:00 uur.
          </p>
          <p>
            Stuur een e-mail naar <em>afspraken@glimlach.nl</em>. Vermeld je
            naam, de datum van de afspraak en een nieuwe datum die je wilt.
          </p>
          <p>Verzet je afspraak minstens 24 uur van tevoren. Dan zijn er geen kosten.</p>

          <h4 className="mt-4 font-semibold">Gevolgen van te laat zijn</h4>
          <p>
            Als je minder dan 24 uur van tevoren je afspraak verzet of afzegt,
            betaal je €25.
          </p>
          <p>
            Als je niet komt zonder te melden, betaal je €50.
          </p>
          <p>
            Als je te laat bent voor je afspraak, kan de tandarts je misschien
            niet helpen. Je moet dan een nieuwe afspraak maken.
          </p>

          <h4 className="mt-4 font-semibold">Tips</h4>
          <p>
            Zet je afspraak in je agenda, zodat je het niet vergeet.
            <br />
            Bel zo snel mogelijk als je weet dat je niet kunt komen.
            <br />
            Heb je vragen? Bel 030-1234567 of kijk op www.tandartsglimlach.nl.
          </p>
        </div>

        {/* Rechts - vragen */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Jouw naam en achternaam
            </label>
            <input
              type="text"
              name="fullname"
              value={fields.fullname}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Vraag 1 */}
          <div>
            <p className="font-medium">1. Hoe kun je een afspraak verzetten?</p>
            {["Alleen via de website", "Via telefoon of e-mail", "Alleen via een brief", "Via een app"].map((opt) => (
              <label key={opt} className="block">
                <input
                  type="radio"
                  name="q1"
                  value={opt}
                  checked={fields.q1 === opt}
                  onChange={handleChange}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>

          {/* Vraag 2 */}
          <div>
            <p className="font-medium">
              2. Hoeveel uur van tevoren moet je verzetten om geen kosten te
              betalen?
            </p>
            {["12 uur", "24 uur", "48 uur", "72 uur"].map((opt) => (
              <label key={opt} className="block">
                <input
                  type="radio"
                  name="q2"
                  value={opt}
                  checked={fields.q2 === opt}
                  onChange={handleChange}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>

          {/* Vraag 3 */}
          <div>
            <p className="font-medium">
              3. Wat betaal je als je minder dan 24 uur van tevoren je afspraak
              verzet?
            </p>
            {["25 euro", "50 euro", "75 euro", "niets"].map((opt) => (
              <label key={opt} className="block">
                <input
                  type="radio"
                  name="q3"
                  value={opt}
                  checked={fields.q3 === opt}
                  onChange={handleChange}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>

          {/* Vraag 4 */}
          <div>
            <p className="font-medium">
              4. Wat gebeurt er als je te laat bent voor je afspraak?
            </p>
            {[
              "Je krijgt een gratis behandeling",
              "De tandarts kan je misschien niet helpen",
              "Je hoeft geen nieuwe afspraak te maken",
              "Je krijgt een korting",
            ].map((opt) => (
              <label key={opt} className="block">
                <input
                  type="radio"
                  name="q4"
                  value={opt}
                  checked={fields.q4 === opt}
                  onChange={handleChange}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>

          {/* Vraag 5 */}
          <div>
            <p className="font-medium">
              5. Wat is het telefoonnummer van Tandartspraktijk Glimlach?
            </p>
            {["030-9876543", "030-4567890", "030-1234567", "030-1112223"].map((opt) => (
              <label key={opt} className="block">
                <input
                  type="radio"
                  name="q5"
                  value={opt}
                  checked={fields.q5 === opt}
                  onChange={handleChange}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Submit */}
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
