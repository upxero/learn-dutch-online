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

export default function SpeakingExamInfo() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          All You Need to Know About the Speaking Exam (‘spreekvaardigheid’) of the Dutch Civic Integration Exam
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 05/19/2020
        </p>

        <Section title="1. What does speaking at B1 level mean?">
          <p className="mb-6">
            Speaking at B1 level in Dutch means you can engage in daily conversations or simple discussions and express your opinions. Your basic vocabulary doesn’t hold you back, and you can form short sentences with minimal grammar errors. You understand more complex sentences but are not yet expected to use them actively.
          </p>
        </Section>

        <Section title="2. Practical information about the exam">
          <p className="mb-6">
            Contrary to what you might expect, this exam is not conducted with a real person. Instead, you'll interact with a computer. You will watch video clips and respond to questions about them. Your answers will be recorded and later evaluated by an examiner.
          </p>
          <p>
            The exam lasts 35 minutes.
          </p>
        </Section>

        <Section title="3. What do you need to know to pass this exam?">
          <p className="mb-6">
            Understanding the questions is just as important as speaking. You’ll encounter questions such as:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>What do you like to eat? How often do you eat it?</li>
            <li>It rains a lot in the Netherlands. What do you think about that? Why?</li>
          </ul>
          <p>
            You should be able to express your thoughts clearly using basic vocabulary and complete sentences.
          </p>
        </Section>

        <Section title="4. How can you prepare for this exam?">
          <h3 className="font-semibold mb-2">A. Understand the Basics</h3>
          <p className="mb-4">
            Before speaking Dutch, familiarize yourself with Dutch pronunciation, basic grammar, and build a solid active vocabulary. In our beginner and intermediate courses, we start with simple conversations and gradually build confidence to have more structured, opinionated conversations.
          </p>

          <h3 className="font-semibold mb-2">B. Practice Conversations</h3>
          <p className="mb-4">
            Try to have at least one conversation per day with a native speaker. Our courses are structured around daily-life themes, allowing you to practice specific vocabulary in real situations. For example, after studying the chapter on family, ask a native about their family using your newly learned words.
          </p>

          <h3 className="font-semibold mb-2">C. More Speaking Tips</h3>
          <p className="mb-4">
            For more practical tips, check out our blog post on how to speak Dutch fluently. It contains step-by-step guidance and proven strategies to help you improve your speaking skills.
          </p>

          <h3 className="font-semibold mb-2">D. Practice Exams</h3>
          <p>
            Want to test your readiness? Use practice exams to assess your current level and identify areas for improvement in the speaking section of the civic integration exam.
          </p>
        </Section>

        <Section title="Need help preparing?">
          <p>
            We offer dedicated speaking practice as part of our online Dutch lessons. Work with a trainer to boost your confidence and fluency through personalized feedback and structured exercises.{' '}
            <a href="/contact" className="text-blue-600 underline">Contact us here</a> to learn more.
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
