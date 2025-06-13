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

export default function KNMExamInfo() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          All You Need to Know About the KNM Exam (Kennis van de Nederlandse Maatschappij)
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 05/24/2020
        </p>

        <Section title="1. What does 'kennis van de Nederlandse maatschappij' mean?">
          <p className="mb-6">
            To be approved for Dutch citizenship or permanent residence, you need to show knowledge of Dutch society—beyond just speaking the language. That’s what the KNM exam tests.
          </p>
          <p>
            KNM stands for <em>Kennis van de Nederlandse Maatschappij</em> or "Knowledge of Dutch Society". It covers customs, systems, and social expectations in the Netherlands.
          </p>
        </Section>

        <Section title="2. What do you need to know to pass this exam?">
          <p className="mb-6">
            You’ll need to read and understand Dutch, since the test is entirely in the language. You also need solid knowledge about daily life in the Netherlands.
          </p>
          <p>
            Topics include the education system, healthcare, housing, waste management, Dutch history and geography, public services, consumer rights, government institutions, and cultural customs.
          </p>
        </Section>

        <Section title="3. Practical information about the exam">
          <p className="mb-6">
            The KNM exam is done on a computer and lasts 45 minutes. You’ll watch video clips on real-life topics and answer multiple choice questions.
          </p>
          <p>
            The exam simulates everyday situations to test your familiarity with Dutch society.
          </p>
        </Section>

        <Section title="4. How to prepare for this exam?">
          <h3 className="font-semibold mb-2">A. Research Dutch society</h3>
          <p className="mb-4">
            Read up on the Dutch educational system, government services, political structure, housing policies, and even traditions like birthday celebrations or childbirth customs.
          </p>
          <p className="mb-4">
            Use official websites, Dutch forums, and blogs to get reliable and up-to-date information.
          </p>

          <h3 className="font-semibold mb-2">B. Talk to Dutch people</h3>
          <p className="mb-4">
            Conversations with Dutch natives can give you insight into real experiences and practical advice that’s not always in textbooks.
          </p>
          <p>
            Ask them to explain how things work and share their own experiences—this will give you both language practice and context.
          </p>

          <h3 className="font-semibold mb-2">C. Take practice exams</h3>
          <p className="mb-4">
            Testing yourself with practice exams is essential. They help you get familiar with the format, pace, and question types.
          </p>
          <p>
            Try to simulate test conditions: no dictionaries, time yourself, and review the results critically.
          </p>

          <h3 className="font-semibold mb-2">D. Join a course</h3>
          <p className="mb-4">
            In our online courses, you learn Dutch alongside essential knowledge of Dutch society. Topics include healthcare, waste separation, Dutch birthdays, government departments, and much more.
          </p>
          <p>
            Our native Dutch trainers can explain topics in depth and answer your questions to help you prepare thoroughly.
          </p>
          <p>
            <a href="/contact" className="text-blue-600 underline">
              Click here to sign up
            </a>{" "}
            or ask questions.
          </p>
        </Section>

        <Section title="Need help preparing?">
          <p>
            We offer structured courses that cover both the language and content required to pass the KNM exam.{" "}
            <a href="/contact" className="text-blue-600 underline">
              Contact us
            </a>{" "}
            to get started.
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
