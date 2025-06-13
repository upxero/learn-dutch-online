import Image from "next/image";
import HeroBlog from "@/components/hero-blog";
import React, { ReactNode } from "react";

type SectionProps = {
  title: string;
  image?: string;
  alt?: string;
  video?: string;
  children: ReactNode;
};

export default function NonEEAHealthcareBlog() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Working in the Netherlands as a Doctor, Dentist, Pharmacist or Psychologist from Outside the EEA
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 01/08/2020
        </p>

        <p className="mb-6">
          For many professionals relocating to Europe, the maze of procedures and “how‑to’s” prove to be quite a headache. We have been asked many questions about this by our students and as a result, we decided to compile this article to help out.
        </p>
        <p className="mb-6">
          If you are a Doctor, Dentist, Pharmacist, or Psychologist (doctor in psychology) from outside the EEA (European Economic Area), here are some tips and links to help you get underway.
        </p>
        <p className="mb-6">
          When you are a practitioner in one of the above-mentioned professions, your emigration process to get to the Netherlands and work in your field will look a bit different from other work permit proceedings. Not only will you need to get some paperwork in place, you will also need to pass a specific exam called the “AKV-Toets”. In this blog, we give you the step-by-step procedures to follow to help clarify the process:
        </p>

        <Section title="1. Request registration at BIG register" image="/images/big-register.jpg" alt="BIG register form">
          <p>
            BIG stands for <strong>Beroepen in de individuele gezondheidszorg</strong> — professions in individual healthcare. It's the legal, online, public register containing details of registered professionals. Only those listed can use a protected title and perform reserved actions. It’s also where you get recognition for your non‑Dutch degree and certification.
          </p>
          <p>
            To start, complete two forms from the BIG website:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><em>Algemeen aanvraagformulier</em> (General request form)</li>
            <li><em>Bijlagen per beroep</em> (Attachments per profession form)</li>
          </ul>
          <p>
            If your profession isn't listed in the attachments, only the general form may suffice.
          </p>
          <p>
            Be thorough — BIG rejects incomplete applications. Ensure translations are by a <em>registered translator</em>, and include certified copies with the issuing institution’s seal or a Dutch notary’s stamp.
          </p>
          <p>
            Send your application to:
          </p>
          <address className="not-italic mb-4">
            CIBG<br />
            Erkenning buitenlandse diploma's<br />
            Postbus 16114<br />
            2500 BC Den Haag
          </address>
          <p>
            BIG will notify you by mail within around two weeks. If they need more documentation, it'll be stated in that letter.
          </p>
        </Section>

        <Section title="2. Assessment of diplomas and degrees by Nuffic" image="/images/nuffic-assessment.jpg" alt="Nuffic evaluation">
          <p>
            Nuffic (the Dutch organization for internationalization in education) verifies diploma authenticity. BIG will ask you to send originals — <strong>only do so when requested</strong>. Sending them early may incur costs.
          </p>
          <h3 className="font-semibold mt-4">For doctors, nurses, and dentists</h3>
          <p>
            Nuffic checks your diplomas and course overviews, then informs BIG of the outcome. They return originals after the assessment.
          </p>
          <h3 className="font-semibold mt-4">For other professions</h3>
          <p>
            Nuffic or SBB (Cooperation Organization for Vocational Education and Industry) conducts assessments for other fields. Always follow BIG’s lead to avoid complications or delays.
          </p>
        </Section>

        <Section title="3. The dreaded “AKV” test" image="/images/akv-test.jpg" alt="AKV exam in progress">
          <p>
            The AKV test evaluates general knowledge and Dutch language proficiency at C1 level. Learn Dutch Online can prepare you successfully — replace panic with peace of mind!
          </p>
          <p>The AKV consists of five parts:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Test A:</strong> Summarize and present a medical article.</li>
            <li><strong>Test B:</strong> Patient-doctor dialogue using an actor and write a report.</li>
            <li><strong>Test C:</strong> English reading comprehension.</li>
            <li><strong>Test D:</strong> Dutch healthcare laws (multiple-choice (~40 questions)).</li>
            <li><strong>Test E:</strong> Beroepsinhoudelijke toets — professional competence test (mandatory for doctors, nurses, dentists).</li>
          </ul>
          <p>
            We will cover each of these in detail in future blogs about the AKV test.
          </p>
        </Section>

        <Section title="4. The CBGV (Foreign Health Graduates Committee)" image="/images/cbgv-committee.jpg" alt="CBGV interview">
          <p>
            After completing the AKV and professional tests, your results are reviewed by the CBGV, which reports to BIG. They may request an interview if clarification is needed.
          </p>
          <p>
            BIG sends a preliminary decision and gives you up to two weeks to respond before finalizing it. Often, negative responses are due to clerical errors and can be resolved by contacting them promptly. After finalization, you may still file an objection — though it’s best to respond during the notice period.
          </p>
          <p>
            Upon successful approval, you'll receive your Certificate of Professional Competence by post. Keep it safe!
          </p>
        </Section>

        <Section title="Specialty Recognition" image="/images/specialty-recognition.jpg" alt="Specialty registration">
          <p>
            You can request official recognition of your specialty (if not already recognized). After passing the AKV, BIG forwards your details to the specialist registration committee for evaluation and follow-up.
          </p>
        </Section>

        <Section title="5. Final BIG Registration" image="/images/final-registration.jpg" alt="BIG registration issued">
          <p>
            Doctors, pharmacists, physios, psychologists, dentists, obstetricians, physician assistants, and nurses must apply separately for BIG registration once they have the Certificate of Professional Competence. This is required to legally use the professional title and work in the Netherlands.
          </p>
        </Section>

        <p className="mt-10 text-lg">
          Please note that we are a private institution and have no affiliation with BIG or any other parties mentioned here. We will gladly assist you with and prepare you for the AKV‑toets. <a href="/contact" className="text-blue-600 underline">Contact us here for more information</a>.
        </p>
      </main>
    </>
  );
}

function Section({ title, image, alt, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      {image && (
        <div className="mb-4">
          <Image src={image} alt={alt || ""} width={800} height={450} className="rounded shadow-md" />
        </div>
      )}
      <div className="space-y-4">{children}</div>
    </section>
  );
}
