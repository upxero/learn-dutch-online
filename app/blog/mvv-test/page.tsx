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

export default function MVVExamInfo() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          All You Need to Know About the Basic Civic Integration Examination (MVV Test)
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 05/24/2020
        </p>

        <Section title="1. What is the MVV test?">
          <p className="mb-6">
            If you come from a country outside of the EU and want to join a partner or spouse in the Netherlands, you must apply for an MVV (machtiging voor voorlopig verblijf) at the Dutch consulate or embassy in your home country.
          </p>
          <p className="mb-6">
            Once you pass the MVV test and your documents are approved, you will be granted permission to enter the Netherlands and begin the official civic integration process.
          </p>
          <p>
            If there’s no Dutch representative body in your country, the process can be completed in a neighboring country that has one.
          </p>
        </Section>

        <Section title="2. The exam consists of three parts">
          <p className="mb-4 font-semibold">Part 1: Reading and word recognition</p>
          <p className="mb-6">
            This section is done on a computer and takes about 35 minutes. You will see two types of exercises:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Match a written word, phrase, or sentence to an audio version.</li>
            <li>Match an audio word, phrase, or sentence to a written version.</li>
          </ul>
          <p className="mb-6">
            Then, you’ll read six short texts related to work, education, or daily life and answer multiple-choice questions about each one.
          </p>

          <p className="mb-4 font-semibold">Part 2: Speaking</p>
          <p className="mb-6">
            In this section, you will get 12 questions to answer verbally and 12 sentences to complete verbally within 30 minutes. Your responses are recorded and later reviewed.
          </p>
          <p className="mb-4 font-semibold">Examples:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Where do you live?</li>
            <li>What do you eat for breakfast?</li>
            <li>With whom are you going to stay in the Netherlands?</li>
          </ul>
          <p className="mb-4 font-semibold">Sentence completions:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>I go to work every day, I find that …</li>
            <li>Before I go to bed, I put my ring …</li>
            <li>For breakfast I eat …</li>
          </ul>

          <p className="mb-4 font-semibold">Part 3: Knowledge of Dutch Society (KNM)</p>
          <p className="mb-6">
            This part tests your knowledge about life in the Netherlands. You’ll answer 30 multiple-choice questions in 30 minutes.
          </p>
          <p>
            Each question is accompanied by a photo and an audio prompt. You select your answer using an on-screen multiple-choice interface.
          </p>
        </Section>

        <Section title="3. The results">
          <p className="mb-6">
            The reading and KNM parts are automatically assessed and you get your results immediately. A passing score is 50% per section. The speaking part is reviewed by an examiner, so feedback may take longer depending on the exam center.
          </p>
        </Section>

        <Section title="4. How can you prepare for this exam?">
          <p className="mb-6">
            The Dutch government offers a <a href="https://www.naarnederland.nl/" className="text-blue-600 underline" target="_blank">self-study package</a> to help you prepare.
          </p>
          <p className="mb-6">
            You can also try <a href="https://www.naarnederland.nl/en/practice-exams" className="text-blue-600 underline" target="_blank">practice exams</a> to check your progress.
          </p>
          <p className="mb-6">
            If you're not living in the Netherlands, surround yourself with Dutch as much as possible. Listen to Dutch radio and music, watch TV and shows, and interact with Dutch speakers online or in person.
          </p>
          <p className="mb-6">
            Exposure makes a big difference and helps you build confidence and understanding faster.
          </p>
          <p>
            You can also contact us for online Dutch lessons. Our native-speaking trainers can help you learn the language and offer tips, resources, and support to prepare for the MVV test.{" "}
            <a href="/contact" className="text-blue-600 underline">Click here to get started</a>.
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
