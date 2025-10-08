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
      <nav className="text-right mb-6 mt-4">
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
          {/* HERO */}
          <section className="bg-blue-50 text-blue-900 text-center py-16 px-6 rounded-xl shadow-sm">
            <h1 className="text-4xl font-bold mb-4">
              Strengthen Your Team's Integration in Dutch-Speaking Environments
            </h1>
            <p className="max-w-3xl mx-auto mb-8 leading-relaxed">
              Our clients achieve faster proficiency and stronger team performance because our
              training combines practical skills with tailored support, addressing real-world
              challenges for immediate results.
            </p>
            <div>
              <a
                href="#contact"
                className="bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-blue-800 transition"
              >
                Explore Corporate Solutions
              </a>
              <a
                href="#contact"
                className="bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-blue-800 transition"
              >
                Contact Us
              </a>
            </div>
          </section>

          {/* MAIN INFO */}
          <section className="bg-white mt-12 p-8 rounded-lg shadow-sm space-y-6">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">
              Addressing Your Challenges with Proven Solutions
            </h2>
            <p className="leading-relaxed text-gray-700">
              We understand the hurdles international teams face—rigid schedules, cultural gaps, and
              certification stress. Our programs directly tackle these issues, helping your teams
              grow in confidence and efficiency.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Faster Onboarding:</strong> Beginner (A1–A2) courses integrate daily
                workplace communication early for smoother adaptation.
              </li>
              <li>
                <strong>Practical Communication:</strong> Intermediate (B1) sessions target job-related dialogues — from logistics to IT.
              </li>
              <li>
                <strong>Cultural Awareness:</strong> Dutch and Flemish norms are embedded in every
                level to foster better teamwork.
              </li>
              <li>
                <strong>Certification Prep:</strong> B2 and Integration programs cover NT2 and
                Inburgering requirements.
              </li>
              <li>
                <strong>Custom Support:</strong> Specialized tracks for medical, technical, and
                Afrikaans-speaking professionals.
              </li>
              <li>
                <strong>Transparent Progress:</strong> Dashboards track attendance and improvement.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-800">
              Validated by Client Experiences
            </h2>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic space-y-2 text-gray-700">
              <p>
                "Learn Dutch Online has great tutors who are patient and helpful. The wide variety
                of courses offered allows everyone to find what suits them perfectly."
              </p>
              <p>
                "Thanks Learn Dutch Online! This is a well-tailored course for Afrikaans-speaking
                people who want to learn Dutch effectively."
              </p>
            </blockquote>
            <a
              href="https://www.facebook.com/tutordutchfrench/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
            >
              Review Us on Facebook
            </a>

            <p className="mt-8 text-gray-700 max-w-2xl mx-auto leading-relaxed">
              With thousands of lessons successfully delivered, we continue to set a reliable
              standard in team language training.
            </p>
          </section>

          {/* CTA EN */}
          <section
            id="contact"
            className="text-center mt-16 p-8 border-t bg-blue-50 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-2 text-blue-800">
              Take the Next Step for Your Team
            </h2>
            <p className="mb-6 text-gray-700">
              Reach out to discuss how our corporate solutions can support your organization.
            </p>

            <div className="mb-6">
              <a
                href="mailto:veronique@learn-dutch-online.eu?subject=Corporate Dutch Training Inquiry"
                className="bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-blue-800 transition"
              >
                Send Inquiry
              </a>
              <a
                href="https://wa.me/message/YELWRA57AJMBG1"
                className="bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-blue-800 transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            <p className="text-gray-700">
              Or visit our{" "}
              <a href="/contact" className="text-blue-700 font-medium hover:underline">
                contact page
              </a>{" "}
              for more details.
            </p>
          </section>
        </>
      ) : (
        <>
          {/* HERO NL */}
          <section className="bg-blue-50 text-blue-900 text-center py-16 px-6 rounded-xl shadow-sm">
            <h1 className="text-4xl font-bold mb-4">
              Versterk de Integratie van Je Team in Nederlandstalige Omgevingen
            </h1>
            <p className="max-w-3xl mx-auto mb-8 leading-relaxed">
              Onze cliënten behalen sneller resultaat dankzij onze praktische, flexibele en
              op maat gemaakte trainingen.
            </p>
            <div>
              <a
                href="#contact"
                className="bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-blue-800 transition"
              >
                Verken Onze Corporate Oplossingen
              </a>
              <a
                href="#contact"
                className="bg-blue-700 text-white px-6 py-3 rounded-md mx-2 inline-block hover:bg-blue-800 transition"
              >
                Contacteer Ons
              </a>
            </div>
          </section>

          {/* TESTIMONIALS NL */}
          <section className="bg-white mt-12 p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">
              Gevalideerd door Cliëntervaringen
            </h2>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic space-y-2 text-gray-700">
              <p>
                "Learn Dutch Online heeft geweldige docenten die geduldig en behulpzaam zijn.
                De brede variëteit aan cursussen stelt iedereen in staat om te vinden wat perfect
                bij hen past."
              </p>
              <p>
                "Bedankt Learn Dutch Online! Dit is een goed afgestemde cursus voor Afrikaans
                sprekende mensen die Nederlands effectief willen leren."
              </p>
            </blockquote>

            <a
              href="https://www.facebook.com/tutordutchfrench/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition mt-4"
            >
              Review ons op Facebook
            </a>

            <p className="mt-8 text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Met duizenden lessen die met succes zijn gegeven, stellen we een betrouwbare
              standaard in teamtaaltraining.
            </p>
          </section>
        </>
      )}
    </>
  );
}
