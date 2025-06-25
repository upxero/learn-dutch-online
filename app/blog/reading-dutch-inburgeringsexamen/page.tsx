export const metadata = {
  title: "Dutch Inburgering Exam: Reading Section (Lezen) Explained",
  description:
    "Prepare for the 'lezen' part of the Dutch civic integration exam with practical tips, level guidance, and useful examples. Reach B1 level reading skills with confidence.",
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

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

export default function ReadingExamInfo() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          All you need to know about the Reading, or 'lezen', part of the Inburgeringsexamen
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 05/19/2020
        </p>

        <p className="mb-6">
          Since you are reading this post, you are considering—or already preparing—to take the Dutch civic integration exam. In this blog, we’ll share practical information about the reading component of the exam and provide helpful tips to increase your chances of passing.
        </p>

        <p className="mb-6">
          Need more general information about the Inburgeringsexamen? <a href="#" className="text-blue-600 underline">Click here</a>.
        </p>

        <Section title="1. Level">
          <p className="mb-4">
            Like all sections of the exam, you need to demonstrate reading skills at the B1 level.
          </p>
          <p className="mb-4">
            Reading at B1 level means you can understand general formal and semi-formal Dutch texts related to daily life. You should also be able to answer questions based on the context—usually directly found in the text.
          </p>
          <p>
            Examples of texts you may encounter:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>User manuals (e.g., banking apps)</li>
            <li>Letters or documents from your gemeente</li>
            <li>Insurance documents</li>
            <li>Letters from school (if you have children)</li>
            <li>Emails from your Dutch language trainer</li>
            <li>Short newspaper articles</li>
            <li>Informative emails from social clubs</li>
          </ul>
          <Image
              src="/images/blog-18.jpg"
              alt="Woman reading book"
              width={300}
              height={100}
              className="rounded-lg shadow-md mx-auto my-6"
          />
        </Section>

        <Section title="2. Practical information about the reading exam">
          <p>
            The reading test is completed on a computer and takes 65 minutes. You’ll read texts on familiar topics and answer multiple-choice questions to assess your comprehension.
          </p>
        </Section>

        <Section title="3. How to know when you are ready for this exam?">
          <p className="mb-4">
            You’re likely ready if you can understand at least 75% of B1-level Dutch texts, including their topic and context. Try reading newspaper articles, official letters, or emails. If you can grasp most of the content, you are on the right track.
          </p>
          <p>
            Our goal is to help you feel more than just "ready"—we want you to feel confident and capable.
          </p>
        </Section>

        <Section title="4. How can you prepare for this exam?">
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Dutch newspapers:</strong> Subscribe to Dutch news sites like De Telegraaf or AD. Read short articles daily. Count how many words you understand vs. don’t understand. Aim to comprehend 80% or more.
            </li>
            <li>
              <strong>Official correspondence:</strong> Read letters and emails from your gemeente, school, or club. Do the same word-tracking exercise. Your confidence will grow as your vocabulary expands.
            </li>
            <li>
              <strong>Electronic devices:</strong> Change your phone, computer, tablet, and TV settings to Dutch. Constant exposure helps accelerate learning.
            </li>
            <li>
              <strong>Get social:</strong> Follow Dutch-speaking groups and celebrities on social media. Read along with Dutch song lyrics to familiarize yourself with informal vocabulary.
            </li>
            <li>
              <strong>Practice exams:</strong> Regularly take practice exams to track your progress and highlight areas for improvement.
            </li>
            <li>
              <strong>Learn Dutch Online:</strong> If self-study is too difficult, consider our beginner and intermediate courses. We focus on B1-level reading material to prepare you thoroughly. Our trainers tailor lessons to your pace, with practical language use as a top priority.
            </li>
          </ol>
        </Section>

        <p className="mt-6">
          Ready to boost your reading skills for the exam? <a href="#" className="text-blue-600 underline">Contact us</a> for personalized training or course options.
        </p>
      </main>
    </>
  );
}
