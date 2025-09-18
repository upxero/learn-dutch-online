"use client";

import { useState, FormEvent } from "react";

interface ListenPartProps {
  trainer: string;
}

export default function ListenPart({ trainer }: ListenPartProps) {
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
    --- Deel 3: Luisteren ---
    Naam: ${fields.fullname}

    1. Wat krijgen de patiënten extra met Kerst?
    Antwoord: ${fields.q1}

    2. Waarom krijgen de patiënten iets extra met Kerst?
    Antwoord: ${fields.q2}

    3. Vindt het personeel het vervelend om te werken op Kerst?
    Antwoord: ${fields.q3}

    4. Wat doet het personeel samen op Kerst?
    Antwoord: ${fields.q4}

    5. Waarom werkt Lieke liever met Kerst?
    Antwoord: ${fields.q5}
    `;

    try {
      const res = await fetch("/api/send-listening", {
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
      console.error("Error submitting listening:", err);
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
      <h2 className="text-3xl font-bold text-center">Deel 3: Luisteren</h2>
      <p className="text-center text-gray-600">5 punten</p>

      {/* Info blok */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700">
          Dit testgedeelte bestaat uit een luistertekst met meerkeuzevragen.
          <br />- Lees eerst de situatie.
          <br />- Bekijk de video 1 keer
          <br />- Beantwoord de vragen.
          <br />- U krijgt hier 5 minuten voor.
        </p>
      </div>

      {/* Luisteropdracht blok */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md grid md:grid-cols-2 gap-6">
        {/* Links - situatie + video */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Luisteren 1: Werken op feestdagen
          </h3>
          <p className="mb-4">
            <strong>Situatie:</strong> Loes en Lieke werken in het Bravis
            ziekenhuis. Ze vertellen hoe het is om te werken met Kerst.
          </p>

          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/O3497cgSUso"
              title="Luisteren opdracht"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Rechts - vragen */}
        <div className="space-y-4">
          {/* Naam */}
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
            <p className="font-medium">
              1. Wat krijgen de patiënten extra met Kerst?
            </p>
            {[
              "een extra koffie en gebakjes.",
              "een gebakje, bobonnetjes, kerststolletje en een extra drankje.",
              "een extra onderzoek en een extra prik.",
              "een extra maaltijd met toetje.",
            ].map((opt) => (
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
              2. Waarom krijgen de patiënten iets extra met Kerst?
            </p>
            {[
              "Omdat de verpleegsters willen laten merken dat zij niet willen werken met Kerst.",
              "Omdat de patiënten dan weten dat ze extra onderzoeken krijgen.",
              "Omdat de verpleegsters willen laten merken dat ze er zijn voor de patiënten.",
            ].map((opt) => (
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
              3. Vindt het personeel het vervelend om te werken op Kerst?
            </p>
            {[
              "Ja, ze hadden liever op Oud en Nieuw gewerkt.",
              "Ja, nu moeten ze het gezellig maken op het werk.",
              "Nee, ze maken het gezellig voor de patiënten en voor elkaar.",
            ].map((opt) => (
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
              4. Wat doet het personeel samen op Kerst?
            </p>
            {[
              "Tijdens de pauze eten ze lekkere hapjes die iedereen heeft meegebracht.",
              "Niets, ze doen gewoon hun werk.",
              "Tijdens de pauze versieren ze de kerstboom in de kantine.",
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
              5. Waarom werkt Lieke liever met Kerst?
            </p>
            {[
              "Omdat haar familie in het buitenland woont en ze niemand heeft om te feesten.",
              "Omdat ze op Oud en Nieuw wil gaan feesten.",
              "Omdat er op Oud en Nieuw te veel werk is en met Kerst is het gezelliger om te werken.",
            ].map((opt) => (
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
