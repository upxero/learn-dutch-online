"use client";

export const metadata = {
  title: "Effective Dutch Integration Solutions for Your Team | Learn Dutch Online",
  description:
    "Corporate Dutch training designed to improve team integration and communication in Dutch-speaking environments.",
};

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CorporateLandingPage() {
  const router = useRouter();
  const [lang, setLang] = useState<"en" | "nl">("en");

  useEffect(() => {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang === "nl") setLang("nl");
  }, []);

  const switchLang = (newLang: "en" | "nl") => {
    setLang(newLang);
    router.push(`?lang=${newLang}`);
  };

  return (
    <div className="font-sans text-gray-800 max-w-6xl mx-auto p-6">
      {/* Language Toggle */}
      <nav className="text-right mb-6">
        <button onClick={() => switchLang("en")} className="mx-1 text-blue-600 hover:underline">
          English
        </button>
        |
        <button onClick={() => switchLang("nl")} className="mx-1 text-blue-600 hover:underline">
          Nederlands
        </button>
      </nav>

      {lang === "en" ? (
        <>
          {/* Hero */}
          <section className="bg-green-100 text-green-800 text-center py-16 px-6 rounded-xl shadow-sm">
            <h1 className="text-4xl font-bold mb-4">
              Strengthen Your Team's Integration in Dutch-Speaking Environments
            </h1>
            <p className="max-w-3xl mx-auto mb-8">
              Our clients achieve faster proficiency and stronger team performance because our
              training combines practical skills with tailored support, addressing real-world
              challenges like scheduling flexibility and cultural adaptation for immediate results.
            </p>
            <div>
              <a href="#contact" className="bg-green-600 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-green-700 transition">
                Explore Our Corporate Solutions
              </a>
              <a href="#contact" className="bg-green-600 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-green-700 transition">
                Contact Us
              </a>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="bg-gray-50 mt-12 p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-4">Addressing Your Challenges with Proven Solutions</h2>
            <p className="mb-6">
              We understand the hurdles international teams face—rigid schedules that disrupt work,
              motivation dips in demanding roles, cultural gaps that slow collaboration, and exam
              pressures that add stress. Our solutions tackle these directly...
            </p>
            {/* (Je kunt hier Lee-Roy’s lijst volledig plakken; ik heb het ingekort voor overzicht) */}
          </section>

          {/* CTA */}
          <section id="contact" className="text-center mt-16 p-8 border-t">
            <h2 className="text-3xl font-bold mb-2">Take the Next Step for Your Team</h2>
            <p className="mb-6">Reach out to discuss how our solutions can support your goals.</p>
            <div>
              <a
                href="mailto:veronique@learn-dutch-online.eu?subject=Corporate Dutch Training Inquiry"
                className="bg-green-600 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-green-700"
              >
                Send an Inquiry
              </a>
              <a
                href="https://wa.me/message/YELWRA57AJMBG1"
                className="bg-green-600 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-green-700"
              >
                Chat on WhatsApp
              </a>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* NL versie */}
          <section className="bg-green-100 text-green-800 text-center py-16 px-6 rounded-xl shadow-sm">
            <h1 className="text-4xl font-bold mb-4">
              Versterk de Integratie van Je Team in Nederlandstalige Omgevingen
            </h1>
            <p className="max-w-3xl mx-auto mb-8">
              Onze cliënten bereiken snellere vooruitgang en sterkere teamprestaties dankzij onze
              praktische, flexibele en op maat gemaakte aanpak.
            </p>
            <div>
              <a href="#contact" className="bg-green-600 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-green-700 transition">
                Verken Onze Corporate Oplossingen
              </a>
              <a href="#contact" className="bg-green-600 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-green-700 transition">
                Contacteer Ons
              </a>
            </div>
          </section>

          {/* CTA NL */}
          <section id="contact" className="text-center mt-16 p-8 border-t">
            <h2 className="text-3xl font-bold mb-2">Neem de Volgende Stap voor Jouw Team</h2>
            <p className="mb-6">Neem contact met ons op om te bespreken hoe wij jullie kunnen ondersteunen.</p>
            <div>
              <a
                href="mailto:veronique@learn-dutch-online.eu?subject=Corporate Dutch Training Inquiry"
                className="bg-green-600 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-green-700"
              >
                Stuur een Bericht
              </a>
              <a
                href="https://wa.me/message/YELWRA57AJMBG1"
                className="bg-green-600 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-green-700"
              >
                Chat via WhatsApp
              </a>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
