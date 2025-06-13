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

export default function AKVPartCReadingSkills() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          All you need to know about AKV test part C: English reading skills
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 01/21/2020
        </p>

        <p className="mb-6">
          As discussed in our previous blogs, the AKV test consists of 5 separate exam parts.
        </p>
        <p className="mb-6">
          In this blog we will discuss in detail all the requirements for the third test part, the English reading skills test. We will also provide many hints and tips for you to be able to prepare thoroughly for this exam part.
        </p>
        <p className="mb-6">
          Since you are able to read this blog, we are sure you have got this part of the exam covered. Nevertheless here are some more practical hints and tips for you.
        </p>
        <p className="mb-6">
          In this part of the test you will be given an English text to read and then between 20 and 30 multiple-choice questions to answer on the related text. The subjects of the text can be medical or non-medical meaning that it's rather a test of your proficiency in English than your medical knowledge.
        </p>
        <p className="mb-6">
          You are expected to have English reading skills at level B2 to C1 as per the Common European Framework of Reference for languages. In short, this means that you can understand the text, not only in subject matter, but also in context and quality. In short your level of English has to be between "Independent user" to "Proficient user". You can find a lot more information on this <a href="https://www.coe.int/en/web/common-european-framework-reference-languages/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">here</a>.
        </p>
        <p className="mb-6">
          The duration of this test is from 50 to 75 minutes and is completed on a computer. Unlike the Dutch language tests, a dictionary is not permitted.
        </p>
        <p className="mb-6">
          When broken down, 50 to 75 minutes gives you about 2.5 minutes to answer each question. We strongly advise not to let the time limit dictate the attention you pay to answering your questions correctly. Rather read the questions thoroughly and answer correctly.
        </p>
        <p className="mb-6">
          As mentioned in our previous blogs in this series, the AKV is for medical professionals from outside the EU who want to legitimize their qualifications and continue practicing their careers in the EU.
        </p>
        <p className="mb-6">
          The careers are as follows: Pharmacist, Doctor, Physiotherapist, Mental health psychologist, Psychotherapist, Physician assistant, Dentist, Obstetrician or Nurse.
        </p>
        <p className="mb-6">
          If you would like personal help and assistance with the AKV exam, feel free to contact us. We will gladly help you.
        </p>

        <Section title="Contact">
          <p>
            <a href="/contact" className="text-blue-600 underline">
              Contact us here
            </a>
          </p>
        </Section>
      </main>
    </>
  );
}

function Section({ title, image, alt, video, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="flex flex-col gap-4 items-start">
        <div>{children}</div>
        {image && (
          <div>
            <Image
              src={image}
              alt={alt || ""}
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        )}
      </div>
      {video && (
        <div className="mt-6 aspect-video">
          <iframe
            src={video}
            title={title}
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
