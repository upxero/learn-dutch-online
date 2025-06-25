export const metadata = {
  title: "Dutch Writing Exam (Schrijven) – Inburgeringsexamen Explained",
  description:
    "Everything you need to know about the writing (schrijven) section of the Dutch civic integration exam. Tips, tasks, and how to prepare for success.",
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

export default function WritingExamInfo() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          All You Need to Know About the Writing (‘schrijven’) Exam of the Dutch Civic Integration Exam
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 05/19/2020
        </p>

        <Section title="1. What does writing at B1 level mean?">
          <p className="mb-6">
            To write at B1 level in Dutch, you need to be able to write texts useful in daily interactions—both in public and in personal settings. Topics include complaint letters, adverts or social media posts, reports with arguments, feedback on presentations, newsletters, travel reports, and more.
          </p>
          <p>
            These texts should express experiences, opinions, feelings, and reactions in a structured and grammatically correct way.
          </p>
          <Image
              src="/images/blog-21.jpg"
              alt="Writing paper"
              width={350}
              height={150}
              className="rounded-lg shadow-md mx-auto my-6"
            />
        </Section>

        <Section title="2. Practical information about the exam">
          <p className="mb-6">
            The writing exam is paper-based and consists of 4 separate exercises. One is usually a form or questionnaire, such as a gym membership application.
          </p>
          <p>
            The other three tasks involve writing short texts about basic topics like: asking a neighbor to water your plants during your vacation, rescheduling a dentist appointment, sending a birthday invitation, or writing a letter to the municipality about parking issues.
          </p>
          <Image
              src="/images/blog-21.1.jpeg"
              alt="Paper written"
              width={350}
              height={150}
              className="rounded-lg shadow-md mx-auto my-6"
            />
        </Section>

        <Section title="3. What do you need to know to pass this exam?">
          <p className="mb-6">
            Many people find the writing part the most challenging. You must write grammatically correct, descriptive texts within a short time and without access to dictionaries or spelling tools.
          </p>
          <p>
            This means preparation is essential—knowing your grammar and spelling rules is key to success.
          </p>
        </Section>

        <Section title="4. How can you prepare for this exam?">
          <h3 className="font-semibold mb-2">A. Daily Practice</h3>
          <p className="mb-4">
            Write one Dutch email per day to a colleague, friend, or family member. Avoid translation tools or spellcheckers—these slow your progress.
          </p>
          <p>
            After writing, check for errors and ask for feedback. Learning from mistakes is essential in the beginning.
          </p>

          <h3 className="font-semibold mb-2">B. Start Small</h3>
          <p className="mb-4">
            Like the "crawl, walk, run" principle—begin with simple sentences and build from there. Focus on clarity before complexity.
          </p>

          <h3 className="font-semibold mb-2">C. Get Feedback</h3>
          <p className="mb-4">
            Ask native Dutch speakers to review your writing. Feedback helps you improve faster and avoid common mistakes.
          </p>

          <h3 className="font-semibold mb-2">D. Formal Lessons</h3>
          <p className="mb-4">
            Unless you're exceptionally gifted, formal training is highly recommended. Most people who attempt this exam without help don’t pass.
          </p>
          <p>
            In our beginner and intermediate courses, we guide you through Dutch grammar and spelling step-by-step—starting with short sentences and progressing to more descriptive texts.
          </p>
          <p>
            Your trainer provides direct feedback and support, ensuring you develop good habits from the start.
          </p>
          <p>
            <a href="/contact" className="text-blue-600 underline">
              Contact us
            </a>{" "}
            to get started with exam preparation or personalized lessons.
          </p>
        </Section>

        <Section title="Need help preparing?">
          <p>
            We offer structured online lessons tailored to the writing exam. Whether you’re starting from scratch or need help polishing your Dutch writing, we’re here to help.
            <a href="/contact" className="text-blue-600 underline"> Reach out here</a>.
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
