"use client";

import { useState, FormEvent } from "react";

interface WritingPart1Props {
  trainer: string;
}

export default function WritingPart1({ trainer }: WritingPart1Props) {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-writing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trainer,
          answer,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setAnswer("");
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
        ✅ Je antwoord is verstuurd naar je docent!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-md rounded-lg space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4">Deel 1: Schrijven</h2>
      <p className="text-gray-700 mb-2">
        Dit testgedeelte bestaat uit twee delen. <br/>
        - In het eerste deel moet je zinnen verder afmaken. <br/>
        - In het tweede deel moet je volledige tekst schrijven. Let goed op grammatica en spelling. <br/>
        - Je hebt  10 minuten maximum voor alle schrijfoefeningen. Het schrijfgedeelte staat op 20 punten. 
      </p>

      <textarea
        name="answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={8}
        className="w-full border rounded p-3"
        placeholder="Typ hier je antwoord..."
        required
      />

      <div className="text-center">
        <button
          type="submit"
          className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md cursor-pointer"
          disabled={loading}
        >
          {loading ? "Versturen..." : "Verstuur antwoord"}
        </button>
      </div>
    </form>
  );
}
