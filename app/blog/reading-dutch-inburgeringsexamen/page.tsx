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
          Since you are reading this post, you are considering, or preparing, to take the Dutch civic integration exam. In this blog we give you more practical information about the reading segment of the Dutch civic integration exam and we provide you with some hints and tips to improve your chances in passing the exam.
        </p>

        <p className="mb-6">
          Should you require more general information about the inburgeringsexamen, <a href="#" className="text-blue-600 underline">click here</a>.
        </p>

        <Section title="1. Level">
          <p className="mb-4">
            It is important to note that, as with all other aspects mentioned in the overview, you need to be able to read at B1 level.
          </p>
          <p className="mb-4">
            To read at B1 level means that you can clearly understand general formal and semi-formal Dutch text pertaining to everyday life. Part of this is to answer questions about the text in the correct context, as the answers are usually provided in the text itself.
          </p>
          <p>
            Some examples of the type of texts to expect include:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>User manuals for your banking app</li>
            <li>Documents from your 'gemeente'</li>
            <li>General insurance-related documents</li>
            <li>Letters from school for those with children</li>
            <li>Emails from your Dutch trainer</li>
            <li>Short newspaper articles</li>
            <li>Informative emails from social clubs</li>
          </ul>
        </Section>

        <Section title="2. Practical information about the reading exam">
          <p>
            The exam is completed on a computer and the allocated time is 65 minutes. You can expect to be presented with texts on similar topics as mentioned above, after which you answer a couple of multiple choice questions per text. This is to test your comprehension.
          </p>
        </Section>

        <Section title="3. How to know when you are ready for this exam?">
          <p className="mb-4">
            It is important that you understand most of the Dutch words ranked at B1 level. You can test this yourself by reading short newspaper articles, letters, emails, and other daily texts. If you understand ¾ of the words, as well as the topics and context, you are more than likely to achieve a satisfactory score.
          </p>
          <p>
            We want you to score better than satisfactory though and prepare you accordingly.
          </p>
        </Section>

        <Section title="4. How can you prepare for this exam?">
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Dutch newspapers:</strong> Sign up with Dutch publications and newspapers like De Telegraaf or AD. Read short articles about subjects of your interest every day and test your ability to comprehend. Do a word count and note how many words you understand vs. how many you don’t. Aim for 80% comprehension.
            </li>
            <li>
              <strong>Official correspondence:</strong> Read letters, emails, etc. from your gemeente, school, or sport club. Track unfamiliar words and notice your vocabulary improve over time.
            </li>
            <li>
              <strong>Electronic devices:</strong> Change the language settings of your devices to Dutch. Regular exposure to Dutch texts through your devices helps expand your vocabulary quickly.
            </li>
            <li>
              <strong>Get social:</strong> Join Dutch groups on social media and follow Dutch people and celebrities. Read lyrics of Dutch songs while they play to build your vocabulary.
            </li>
            <li>
              <strong>Practice exams:</strong> Return to practice exams periodically to assess your abilities and track your progress.
            </li>
            <li>
              <strong>Learn Dutch Online:</strong> If you find it too challenging on your own, our beginner and intermediate courses emphasize B1-level texts, specifically designed to prepare you for the exam. Your trainer will guide you at your own pace with your success as the top priority.
            </li>
          </ol>
        </Section>

        <p className="mt-6">
          Need help preparing for the reading exam? <a href="#" className="text-blue-600 underline">Contact us</a> for personal guidance or course options.
        </p>
      </main>
    </>
  );
}
