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

export default function ListeningExamInfo() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          All You Need to Know About the Listening Exam (‘luisteren’) of the Dutch Civic Integration Exam
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 05/19/2020
        </p>

        <Section title="1. What does listening at B1 level mean?">
          <p className="mb-6">
            Similar to the reading part, at B1 level you need to generally understand short audio clips and conversations between two native speakers who speak formal Dutch—so no dialect or 'street language'.
          </p>
          <p>
            The types of audio clips you need to comprehend relate to daily life, including topics like: voice messages, sports commentaries, basic instructions from an employer, short public announcements, and getting directions.
          </p>
        </Section>

        <Section title="2. Practical information about the listening exam">
          <p className="mb-6">
            The listening exam is conducted on a computer and consists of a maximum of 25 multiple choice questions. These are based on video and/or audio clips about daily life, work, and education.
          </p>
          <p>
            You have 45 minutes to complete the exam.
          </p>
        </Section>

        <Section title="3. What do you need to know for this exam">
          <p className="mb-6">
            You need to be able to understand basic interactions between native speakers using formal language. This applies to video or audio clips that reflect real-life situations.
          </p>
          <p>
            Being familiar with standard Dutch pronunciation, tone, and vocabulary is key.
          </p>
        </Section>

        <Section title="4. How can you prepare for this exam?">
          <h3 className="font-semibold mb-2">A. The News</h3>
          <p className="mb-4">
            Start with <strong>NOS Jeugdjournaal</strong>, which simplifies national news for children. It’s one of the best places to hear native Dutch clearly pronounced for beginners.
          </p>
          <p className="mb-4">
            As your listening improves, transition to watching the regular news. Try to understand the general message. If something is unclear, ask a native speaker or your Dutch teacher to explain.
          </p>

          <h3 className="font-semibold mb-2">B. Activate a Native</h3>
          <p className="mb-4">
            If you know any Dutch native speakers, ask them to only speak Dutch with you. You can respond in English at first, but gradually try to reply in Dutch.
          </p>
          <p className="mb-4">
            Learn and use new words daily. If you don’t understand a word, ask them to explain it in Dutch—and try using it yourself.
          </p>

          <h3 className="font-semibold mb-2">C. Dutch TV</h3>
          <p className="mb-4">
            Watch Dutch TV, especially series. Start with English subtitles, then switch to Dutch subtitles. Hearing and reading at the same time activates more parts of your brain and boosts your understanding.
          </p>
          <p>
            Ideally, watch an episode twice: first with English subtitles, then again with Dutch subtitles to reinforce what you’ve learned.
          </p>

          <h3 className="font-semibold mb-2">D. Music</h3>
          <p className="mb-4">
            Listen to Dutch music while reading the lyrics. Note: songs often use poetic or informal language, which might be hard to grasp.
          </p>
          <p>
            If in doubt, ask your language trainer for clarification rather than guessing and confusing yourself.
          </p>

          <h3 className="font-semibold mb-2">E. Learn Dutch Online</h3>
          <p className="mb-4">
            If you're struggling on your own, consider joining our beginners or intermediate courses designed to help you reach B1 level.
          </p>
          <p>
            You’ll work with multimedia content designed to prepare you for both the exam and daily communication in Dutch. Together with a trainer, you’ll work on understanding clips about daily life.
          </p>
          <p>
            <a href="/contact" className="text-blue-600 underline">
              Contact us
            </a>{" "}
            for more information.
          </p>

          <h3 className="font-semibold mb-2">F. Practice Exams</h3>
          <p>
            Use practice exams to track your progress and identify areas that need improvement.
          </p>
        </Section>

        <Section title="Need help preparing?">
          <p>
            We offer exam-focused online Dutch lessons tailored to your level. Whether you're just getting started or need structured guidance, we're here to help.{" "}
            <a href="/contact" className="text-blue-600 underline">
              Reach out here
            </a>
            .
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
