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
              Successful Collaborations in Dutch-Speaking Workplaces
            </h1>
            <p className="max-w-3xl mx-auto mb-8 leading-relaxed">
              Our clients achieve faster results and stronger team performance through practical 
              and flexible language training. We tailor every course to real business needs.
            </p>
            <div>
              <a
                href="https://learn-dutch-online.com/contact-corporate"
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
              We understand the challenges international teams face — tight schedules, motivation dips, cultural differences, and certification pressures.
              Our flexible, practical programs build confidence, boost efficiency, and help your team succeed from day one.
              How We Help:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Faster Onboarding:</strong> Employees contribute sooner with beginner courses (A1–A2) that simulate real workplace tasks.
              </li>
              <li>
                <strong>Smoother Operations:</strong> Intermediate (B1) courses cover everyday professional conversations — from logistics to IT — reducing errors and improving workflow.
              </li>
              <li>
                <strong>Stronger Collaboration:</strong> Cultural insights help teams work together more effectively and avoid misunderstandings.
              </li>
              <li>
                <strong>Certification Confidence:</strong> Advanced (B2) and Integration programs prepare employees to meet professional standards with ease.
              </li>
              <li>
                <strong>Tailored Expertise:</strong> Specialized paths for medical professionals and Afrikaans speakers make training relevant and practical.
              </li>
              <li>
                <strong>Clear Progress Tracking:</strong> Dashboards show attendance, engagement, and results at a glance — making performance easy to monitor.
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
                href="https://www.google.com/search?q=%22Learn+Dutch+Online%22+Dilsen-Stokkem+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition"
              >
                View Our Google Reviews
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
                href="https://learn-dutch-online.com/contact-corporate"
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block shadow-md"
              >
                Contact Us
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
              Succesvol Samenwerken in Nederlandstalige Teams
            </h1>
            <p className="max-w-3xl mx-auto mb-8 leading-relaxed">
              Onze cliënten boeken sneller resultaten en behalen sterkere teamprestaties dankzij praktische en flexibele 
              taaltraining. Elke cursus stemmen we af op de behoeften van de organisatie.
            </p>
            <div>
              <a
                href="https://learn-dutch-online.com/contact-corporate"
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
              We begrijpen de uitdagingen die internationale teams tegenkomen - drukke schema’s, motivatieverlies, culturele verschillen en certificatie-eisen.
              Onze praktische, flexibele trainingen bouwen vertrouwen op, verhogen de efficiëntie en zorgen dat je team vanaf dag één effectief kan presteren.
              Zo Helpen We:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Snellere Onboarding:</strong> Beginners (A1–A2) passen nieuwe vaardigheden sneller toe dankzij praktijkvoorbeelden uit de werkplek.
              </li>
              <li>
                <strong>Vlottere Werkwijze:</strong> Halfgevorderden (B1) oefenen dagelijkse professionele gesprekken — van logistiek tot IT — waardoor fouten verminderen en processen soepeler verlopen.
              </li>
              <li>
                <strong>Betere Samenwerking:</strong> Inzicht in Nederlandse en Vlaamse gewoonten helpt teams effectiever samen te werken en misverstanden te voorkomen.
              </li>
              <li>
                <strong>Certificatievoorbereiding:</strong> Gevorderden (B2) en inburgeringsprogramma’s bereiden medewerkers voor op professionele eisen met vloeiend taalgebruik.
              </li>
              <li>
                <strong>Gespecialiseerde Trajecten:</strong> Training op maat voor medische professionals en Afrikaans sprekende medewerkers zorgt dat de inhoud altijd relevant is.
              </li>
              <li>
                <strong>Duidelijk Overzicht:</strong> Dashboards geven in één oogopslag inzicht in aanwezigheid, betrokkenheid en resultaten, zodat voortgang eenvoudig te volgen is.
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
                href="https://www.google.com/search?q=%22Learn+Dutch+Online%22+Dilsen-Stokkem+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition"
              >
                Bekijk Onze Google Reviews
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
                href="https://learn-dutch-online.com/contact-corporate"
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block shadow-md"
              >
                Contacteer Ons
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
