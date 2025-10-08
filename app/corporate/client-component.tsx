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
      <HeroCorporate/>
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
          {/* HERO */}
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

          {/* FULL INFO */}
          <section className="bg-gray-50 mt-12 p-8 rounded-lg shadow-sm space-y-6">
            <h2 className="text-3xl font-bold mb-4">Addressing Your Challenges with Proven Solutions</h2>

            <p>We understand the hurdles international teams face—rigid schedules that disrupt work, motivation dips in demanding roles, cultural gaps that slow collaboration, and exam pressures that add stress. Our solutions tackle these directly, delivering practical training that builds confidence and efficiency. With over 90% of clients reaching proficiency ahead of typical timelines, here's how we make it happen:</p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Overcoming Onboarding Delays for Stronger Retention:</strong> Beginner courses (A1-A2) teach greetings, directions, and basic vocabulary. After A2, employees handle everyday exchanges, with workplace scenarios incorporated early for faster integration and stronger team loyalty.
              </li>
              <li>
                <strong>Building Productivity with Targeted Conversations:</strong> Intermediate courses (B1) focus on real dialogues, covering logistics for blue-collar roles or tech discussions for IT pros. Digital materials reinforce learning for lasting retention.
              </li>
              <li>
                <strong>Bridging Cultural Gaps for Better Teamwork:</strong> Dutch and Flemish etiquette, traditions, and social norms are woven into all levels to foster genuine connections and smooth collaboration.
              </li>
              <li>
                <strong>Preparing for Certifications Without the Overwhelm:</strong> Advanced courses (B2) and Civic Integration programs provide structured guidance for NT2 and Inburgering, ensuring fluency while meeting compliance requirements.
              </li>
              <li>
                <strong>Specialized Support for Unique Needs:</strong> Staatexamen Programma 2 (B2) for medical professionals prepares for the AKV exam; Dutch for Afrikaans bridges practical gaps for South African expats.
              </li>
              <li>
                <strong>Delivering Value with Transparent Tracking:</strong> Real-time dashboards track attendance, milestones, and growth, helping HR measure impact efficiently.
              </li>
            </ul>

            <p>These approaches, supported by proprietary digital materials (included at no extra cost), help teams move from basic communication to confident, nuanced use—proving our edge in practical, results-driven training.</p>

            <h2 className="text-3xl font-bold mt-8 mb-4">Our Practical Framework: Designed for Real Results</h2>

            <ul className="list-disc pl-6 space-y-3">
              <li>Formats: One-on-one or small groups (up to 4).</li>
              <li>Scheduling: Monday–Friday 9:00–21:30 CET, Saturday mornings; flexible changes possible.</li>
              <li>Tutors: Native Dutch and Flemish instructors who keep sessions motivating and effective.</li>
              <li>Resources: Secure digital materials including vocab guides, cultural notes, exercises.</li>
              <li>Corporate Programs: Tailored to SMEs and enterprises with industry-focused practical Dutch.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Validated by Client Experiences</h2>
            <p>Our results are backed by consistent feedback praising our practical, tailored methods. Check our Google reviews for firsthand accounts:</p>
            <blockquote className="border-l-4 border-green-600 pl-4 italic space-y-2">
              <p>"Learn Dutch Online has great tutors who are patient and helpful. The wide variety of courses offered allows everyone to find what suits them perfectly."</p>
              <p>"Thanks Learn Dutch Online! This is a well tailored course for Afrikaans speaking people that want to learn Dutch effectively."</p>
            </blockquote>
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
          {/* HERO NL */}
          <section className="bg-green-100 text-green-800 text-center py-16 px-6 rounded-xl shadow-sm">
            <h1 className="text-4xl font-bold mb-4">
              Versterk de Integratie van Je Team in Nederlandstalige Omgevingen
            </h1>
            <p className="max-w-3xl mx-auto mb-8">
              Onze cliënten bereiken snellere proficiency en sterkere teamprestaties dankzij onze praktische, flexibele en op maat gemaakte aanpak.
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

          {/* FULL INFO NL */}
          <section className="bg-gray-50 mt-12 p-8 rounded-lg shadow-sm space-y-6">
            <h2 className="text-3xl font-bold mb-4">Je Uitdagingen Aanpakken met Bewezen Oplossingen</h2>

            <p>We begrijpen de obstakels die internationale teams tegenkomen—rigide schema's, motivatiedips, culturele kloofjes en examenstress. Onze oplossingen pakken deze direct aan...</p>

            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Onboarding Vertragingen Overwinnen voor Sterkere Retentie:</strong> Beginnercursussen (A1-A2) voor basiswoordenschat, begroetingen, richtingen. Werkplekscenario's vroeg toegevoegd voor snellere integratie en teamloyaliteit.</li>
              <li><strong>Productiviteit Opbouwen met Gerichte Gesprekken:</strong> Intermediate cursussen (B1) met echte dialogen, logistiek voor blue-collar rollen of techbesprekingen voor IT. Digitale materialen versterken de lessen.</li>
              <li><strong>Culturele Kloofjes Overbruggen voor Betere Teamwerk:</strong> Nederlandse en Vlaamse etiquette, tradities, sociale normen door alle niveaus voor betere samenwerking.</li>
              <li><strong>Voorbereiden op Certificeringen Zonder Overweldiging:</strong> Geavanceerde cursussen (B2) en Inburgering bieden gestructureerde begeleiding voor NT2 en Inburgering, voor professionele fluency.</li>
              <li><strong>Gespecialiseerde Ondersteuning voor Unieke Behoeften:</strong> Staatexamen Programma 2 (B2) voor medische professionals; Nederlands voor Afrikaans voor Zuid-Afrikanen.</li>
              <li><strong>Waarde Leveren met Transparante Tracking:</strong> Real-time dashboards voor aanwezigheid, mijlpalen en groei; competitieve prijzen voor sterke waarde.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Ons Praktische Framework: Ontworpen voor Echte Resultaten</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Formaten: Eén-op-één of kleine groepen (max 4).</li>
              <li>Planning: Ma-Vr 09:00-21:30 CET, Zaterdagmorgen; flexibel aanpasbaar.</li>
              <li>Docenten: Native Nederlandse en Vlaamse instructeurs, motiverend en effectief.</li>
              <li>Middelen: Veilige digitale materialen, vocab guides, culturele notities, oefeningen.</li>
              <li>Corporate Programma's: Op maat voor KMO's en ondernemingen, praktijkgericht Nederlands.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">Gevalideerd door Cliëntervaringen</h2>
            <blockquote className="border-l-4 border-green-600 pl-4 italic space-y-2">
              <p>"Learn Dutch Online heeft geweldige docenten die geduldig en behulpzaam zijn. De brede variëteit aan cursussen stelt iedereen in staat om te vinden wat perfect bij hen past."</p>
              <p>"Bedankt Learn Dutch Online! Dit is een goed afgestemde cursus voor Afrikaans sprekende mensen die Nederlands effectief willen leren."</p>
            </blockquote>
          </section>

          {/* CTA NL */}
          <section id="contact" className="text-center mt-16 p-8 border-t">
            <h2 className="text-3xl font-bold mb-2">Neem de Volgende Stap voor Jouw Team</h2>
            <p className="mb-6">Neem contact met ons op om te bespreken hoe wij jullie kunnen ondersteunen.</p>
            <div>
              <a
                href="mailto:veronique@learn-dutch-online.eu?subject=Corporate Dutch Training Aanvraag"
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
    </>
  );
}
