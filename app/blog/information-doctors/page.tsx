export const metadata = {
  title:
    "How Non-EEA Doctors, Dentists, and Psychologists Can Work in the Netherlands",
  description:
    "Step-by-step guide for non-EEA medical professionals who want to work in Dutch healthcare. Learn about BIG registration, Nuffic diploma validation, the AKV test, and more.",
};

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
        Information for doctors, pharmacists, dentists and psychologists from outside the EEA that want to work in the Netherlands
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 01/08/2020
        </p>

        <p className="mb-6">
        For many professionals relocating to Europe the maze of procedures and "how-to's" prove to be quite a headache. We have been asked many questions about this by our students and as a result, we decided to compile this article to help out.
        </p>
        <p className="mb-6">
        If you are a Doctor, Dentist, Pharmacist, Psycologist (doctor in psychology) from outside the EEA (European Economic Area), here are some tips and links to help you get underway.
        </p>
        <p className="mb-6">
        When you are a practitioner in one of the above mentioned professions your emigration process to get to the Netherlands and work in your field will look a bit different from other work permit proceedings. Not only will you need to get some paperwork in place, you will also need to pass a specific exam called "AKV-Toets". In this blog we are giving you the step by step procedures to follow to try and give you more clarity on the process:
        </p>

        <Section title="1. Request registration at BIG register" image="/images/blog-10.jpg" alt="BIG register form">
          <p>
          BIG is an accronymn for <strong>Beroepen in de individuele gezondheidszorg</strong> or professions in the individual health care, that is a legal, online and public register containing all the relevant details of individuals listed. Only those in the BIG register are allowed to a protected professional title and may independently perform the reserved actions associated with the profession. Anyone can consult the BIG register and it is also the place to go for recognition/validation of your non Dutch degree and certification. To start this process you need to go to the BIG website and complete 2 forms. First is the "Algemeen aanvraagformulier" or General request form. The second for to complete is the "Bijlagen per beroep" or Attachments per profession form
          </p>
          <p>
          Both these forms can be downloaded from the following 
          <a
              href="https://www.bigregister.nl/buitenlands-diploma/procedures/erkenning-beroepskwalificaties/aanvraagformulieren"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            > page
          </a>:
          </p>
          <p>
            Note, if you are a qualified practitioner in the above fields and your specific profession is not listed in the "bijlagen per beroep" form, all should be in order if you only submit the "Algemeen aanvraagformulier".
          </p>  
          <p>
          It is very important to be thorough when dealing with these matters. Be sure to complete the forms entirely and attach all your required documentation as BIG will reject your submission if all the information it requires has not been included.
          Some attachments are compulsory and others are a good include. and it is best to add as many relevant and verifiable documents as you can. The idea is to prove your professional competence and the more value you can add to the local field, the more favorable BIG will react to your application. 
          </p>
          <p>
          Very important to note, have your documents translated into Dutch or English (if not already) by a registered professional translator. If the translator is not registered, their translation will not be recognized and your documents will be rejected.
          </p>
          <p>
          Keep certified copies of your certificates and make sure that they have the original seal of the institution or university that issued them. You can also have them verified by a Dutch Notary. Notaries are easy to find with a Google search and the terms "Dutch Notary" or Nederlandse Notaris" should get you in contact with the correct people. Also note that this is not a free service and industry related costs will apply. For more on Notaries and the services that they offer you can go 
          <a
              href="https://www.knb.nl/english/the-notary"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            > page
          </a>.
          </p>
          <p>
          Once you have attached all of the the required documents and completed and signed the form/s you can send it off to:
          </p>
          
          <address className="not-italic mb-4">
            CIBG<br />
            Erkenning buitenlandse diploma's<br />
            Postbus 16114<br />
            2500 BC Den Haag
          </address>
          <p>
          Once they have received the documents, you should be notified via snail mail within 2 weeks of them receiving your application. If they require any more documentation from you, they will make note of it in this notification letter.
          </p>
        </Section>

        <Section title="2. Assessment of diplomas and degrees by Nuffic" image="/images/blog-10.1.png" alt="Nuffic evaluation">
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

        <Section title="3. The dreaded “AKV” test" image="/images/blog-10.2.jpeg" alt="AKV exam in progress">
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

        <Section title="4. The CBGV (Foreign Health Graduates Committee)" image="/images/blog-10.3.jpeg" alt="CBGV interview">
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

        <Section title="Specialty Recognition">
          <p>
            You can request official recognition of your specialty (if not already recognized). After passing the AKV, BIG forwards your details to the specialist registration committee for evaluation and follow-up.
          </p>
        </Section>

        <Section title="5. Final BIG Registration">
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
