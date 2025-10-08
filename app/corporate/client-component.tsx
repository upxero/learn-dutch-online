"use client";

import HeroCorporate from "@/components/hero-corporate";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CorporateLandingClient() {
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
    <>
      <HeroCorporate />

      {/* Language Toggle */}
      <nav className="text-right mb-6 mt-4 max-w-6xl mx-auto px-6">
        <button
          onClick={() => switchLang("en")}
          className={`mx-2 text-blue-700 font-medium hover:underline ${
            lang === "en" ? "underline" : ""
          }`}
        >
          English
        </button>
        <span className="text-gray-400">|</span>
        <button
          onClick={() => switchLang("nl")}
          className={`mx-2 text-blue-700 font-medium hover:underline ${
            lang === "nl" ? "underline" : ""
          }`}
        >
          Nederlands
        </button>
      </nav>

      {lang === "en" ? (
        <>
          {/* HERO EN */}
          <section className="bg-blue-50 text-blue-900 text-center py-16 px-6 rounded-xl shadow-sm max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Strengthen Your Team's Integration in Dutch-Speaking Environments
            </h1>
            <p className="max-w-3xl mx-auto mb-8 leading-relaxed">
              Our clients achieve faster proficiency and stronger team performance because our
              training combines practical skills with tailored support, addressing real-world
              challenges like scheduling flexibility and cultural adaptation for immediate results.
            </p>
            <div>
              <a
                href="#contact"
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block shadow-md"
              >
                Explore Our Corporate Solutions
              </a>
              <a
                href="#contact"
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block shadow-md"
              >
                Contact Us
              </a>
            </div>
          </section>

          {/* MAIN INFO EN */}
          <section className="bg-white mt-12 p-8 rounded-lg shadow-sm max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">
              Addressing Your Challenges with Proven Solutions
            </h2>
            <p className="leading-relaxed text-gray-700 mb-6">
              We understand the hurdles international teams face—rigid schedules that disrupt work,
              motivation dips in demanding roles, cultural gaps that slow collaboration, and exam
              pressures that add stress. Our solutions tackle these directly, delivering practical
              training that builds confidence and efficiency.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Overcoming Onboarding Delays:</strong> Beginner (A1–A2) courses integrate
                workplace scenarios early for faster adaptation and retention.
              </li>
              <li>
                <strong>Building Productivity:</strong> Intermediate (B1) focuses on real dialogues
                like logistics or IT discussions for smoother operations.
              </li>
              <li>
                <strong>Bridging Cultural Gaps:</strong> Dutch and Flemish insights woven through all
                levels to boost teamwork.
              </li>
              <li>
                <strong>Certification Prep:</strong> Advanced (B2) and Integration programs ensure
                compliance and fluency for professional use.
              </li>
              <li>
                <strong>Specialized Support:</strong> Tailored paths for medical or Afrikaans-speaking
                professionals.
              </li>
              <li>
                <strong>Transparent Tracking:</strong> Real-time dashboards for attendance and
                progress monitoring.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-10 mb-4 text-blue-800">
              Validated by Client Experiences
            </h2>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic space-y-2 text-gray-700">
              <p>
                "Learn Dutch Online has great tutors who are patient and helpful. The wide variety
                of courses offered allows everyone to find what suits them perfectly."
              </p>
              <p>
                "Thanks Learn Dutch Online! This is a well tailored course for Afrikaans speaking
                people that want to learn Dutch effectively."
              </p>
            </blockquote>

            <div className="text-center mt-6">
              <a
                href="https://www.facebook.com/tutordutchfrench/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition"
              >
                Review Us on Facebook
              </a>
            </div>

            <p className="mt-8 text-gray-700 max-w-2xl mx-auto leading-relaxed text-center">
              With thousands of lessons delivered successfully, we set a reliable standard in team
              language training.
            </p>
          </section>

          {/* CONTACT EN */}
          <section
            id="contact"
            className="text-center mt-16 p-8 bg-blue-50 rounded-lg shadow-sm max-w-6xl mx-auto mb-20"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              Lesson hours may vary due to Language Trainer time zones
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Office Hours:</strong>
              <br />
              Monday to Friday: 09:00 - 17:00 CET
              <br />
              Saturday: 09:00 - 13:00 CET
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone Number or Email Address</strong>
              <br />
              Veronique Duvivier / Founder and Manager at Learn Dutch Online
            </p>

            <div className="mt-6">
              <a
                href="mailto:veronique@learn-dutch-online.eu?subject=Corporate Dutch Training Inquiry"
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block shadow-md"
              >
                Send Email
              </a>
              <a
                href="https://wa.me/message/YELWRA57AJMBG1"
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block shadow-md"
              >
                Chat on WhatsApp
              </a>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* HERO NL */}
          <section className="bg-blue-50 text-blue-900 text-center py-16 px-6 rounded-xl shadow-sm max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Versterk de Integratie van Je Team in Nederlandstalige Omgevingen
            </h1>
            <p className="max-w-3xl mx-auto mb-8 leading-relaxed">
              Onze cliënten bereiken snellere resultaten en sterkere teamprestaties dankzij onze
              praktische, flexibele en op maat gemaakte trainingen.
            </p>
            <div>
              <a
                href="#contact"
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block shadow-md"
              >
                Verken Onze Corporate Oplossingen
              </a>
              <a
                href="#contact"
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block shadow-md"
              >
                Contacteer Ons
              </a>
            </div>
          </section>

          {/* MAIN INFO NL */}
          <section className="bg-white mt-12 p-8 rounded-lg shadow-sm max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">
              Je Uitdagingen Aanpakken met Bewezen Oplossingen
            </h2>
            <p className="leading-relaxed text-gray-700 mb-6">
              We begrijpen de obstakels die internationale teams tegenkomen—rigide schema’s, culturele kloofjes, en examenstress. Onze oplossingen pakken deze direct aan met praktische trainingen die vertrouwen en efficiëntie opbouwen.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Snellere Onboarding:</strong> Beginner (A1–A2) cursussen integreren werkplekscenario’s vroeg voor soepelere aanpassing.
              </li>
              <li>
                <strong>Gerichte Communicatie:</strong> Intermediate (B1) richt zich op echte dialogen zoals logistiek of IT.
              </li>
              <li>
                <strong>Cultuurinzicht:</strong> Nederlandse en Vlaamse gebruiken zijn op elk niveau verweven voor betere samenwerking.
              </li>
              <li>
                <strong>Certificatievoorbereiding:</strong> Geavanceerde (B2) en Inburgeringsprogramma’s garanderen naleving én vloeiend taalgebruik.
              </li>
              <li>
                <strong>Gespecialiseerde Ondersteuning:</strong> Voor medische en Afrikaans sprekende professionals.
              </li>
              <li>
                <strong>Transparante Voortgang:</strong> Dashboards tonen aanwezigheid en leerresultaten duidelijk.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-10 mb-4 text-blue-800">
              Gevalideerd door Cliëntervaringen
            </h2>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic space-y-2 text-gray-700">
              <p>
                "Learn Dutch Online heeft geweldige docenten die geduldig en behulpzaam zijn. De brede variëteit aan cursussen stelt iedereen in staat om te vinden wat perfect bij hen past."
              </p>
              <p>
                "Bedankt Learn Dutch Online! Dit is een goed afgestemde cursus voor Afrikaans sprekende mensen die Nederlands effectief willen leren."
              </p>
            </blockquote>

            <div className="text-center mt-6">
              <a
                href="https://www.facebook.com/tutordutchfrench/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition"
              >
                Review ons op Facebook
              </a>
            </div>

            <p className="mt-8 text-gray-700 max-w-2xl mx-auto leading-relaxed text-center">
              Met duizenden lessen die met succes zijn gegeven, stellen we een betrouwbare standaard in teamtaaltraining.
            </p>
          </section>

          {/* CONTACT NL */}
          <section
            id="contact"
            className="text-center mt-16 p-8 bg-blue-50 rounded-lg shadow-sm max-w-6xl mx-auto mb-20"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Contacteer Ons</h2>
            <p className="text-gray-700 mb-6">
              Lesuren kunnen variëren vanwege tijdzones van Taaldocenten
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Kantooruren:</strong>
              <br />
              Maandag tot Vrijdag: 09:00 - 17:00 CET
              <br />
              Zaterdag: 09:00 - 13:00 CET
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Telefoonnummer of E-mailadres</strong>
              <br />
              Veronique Duvivier / Oprichter en Manager bij Learn Dutch Online
            </p>

            <div className="mt-6">
              <a
                href="mailto:veronique@learn-dutch-online.eu?subject=Corporate Dutch Training Inquiry"
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block shadow-md"
              >
                Verstuur E-mail
              </a>
              <a
                href="https://wa.me/message/YELWRA57AJMBG1"
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block shadow-md"
              >
                Chat op WhatsApp
              </a>
            </div>
          </section>
        </>
      )}
    </>
  );
}
