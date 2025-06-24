export const metadata = {
  title: "Dutch Civic Integration Exam (Inburgeringsexamen) – What You Need to Know",
  description:
    "Learn everything about the Dutch civic integration exam, including its six components, timeline, and tips to pass. Essential for newcomers aiming for Dutch citizenship or permanent residence.",
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

export default function DutchIntegrationExam() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          All you need to know about the Dutch civic integration exam, also referred to as "inburgeringsexamen"
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 05/19/2020
        </p>

        <p className="mb-6">
          For many people relocating to the Netherlands, the maze of procedures and "how-to's" can be quite a headache. We provide advice and assistance to our students on these topics daily, so we decided to compile this article to help others with some of the most common questions we are asked. One of our most frequent answers: If you are a spouse of a Dutch national, want Dutch citizenship or permanent residence, you will have to pass the Dutch integration exam (<em>het inburgeringsexamen</em>) first.
        </p>

        <p className="mb-6">
          In this series of articles we give you more information, hints and tips on the <em>inburgeringsexamen</em> to improve your chances of passing the exam.
        </p>

        <Image
              src="/images/blog-17.jpeg"
              alt="Exam Centre"
              width={600}
              height={200}
              className="rounded-lg shadow-md mx-auto my-6"
          />

        <Section title="1. Two types of inburgeringsexamen">
          <p className="mb-4">
            The first thing to know is that there are two types of <em>inburgeringsexamen</em>:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              The basic integration exam or <strong>M.V.V.-toets</strong> is for spouses of Dutch nationals. If this is you, <a href="#" className="text-blue-600 underline">click here for more info</a>.
            </li>
            <li>
              The regular civic integration exam or <em>inburgeringsexamen</em> is for anybody from outside the EU who wants to get Dutch citizenship or permanent residence. We will discuss the regular civic integration exam in more detail in this blog.
            </li>
          </ol>
        </Section>

        <Section title="2. General information about the 'Inburgeringsexamen'">
          <p className="mb-4">
            If you want to become a permanent resident or a Dutch citizen, you need to prove that you have, or are able to, integrate into Dutch society. Topics covered are based on daily Dutch life and practices. Most of these are fairly common and similar to daily life in most of the western world, only with Dutch characteristics.
          </p>
          <Image
              src="/images/blog-23.jpeg"
              alt="Dutch outfit"
              width={450}
              height={150}
              className="rounded-lg shadow-md mx-auto my-6"
          />
          <p className="mb-4">
            For this exam, a language proficiency level of A2 is required, but from 2023 the bar will be raised to B1 level in accordance with the Common European Framework of Reference (CEFR).
          </p>
          <Image
              src="/images/blog-17.1.jpeg"
              alt="Dutch cartoon"
              width={200}
              height={200}
              className="rounded-lg shadow-md mx-auto my-6"
          />
          <p className="mb-4">
            This A2 level tests your ability to participate in daily conversation, such as with your child's teacher, a colleague, etc., and can also describe experiences and events such as dreams, hopes & ambitions, and briefly give reasons and explanations for opinions and plans. You need to be able to understand most of what is said, especially the key points, as well as be able to respond in an intelligible manner both in speech and writing. Native level proficiency is not expected but rather the ability to use short connected and coherent sentences. For more on the different CEFR levels: <a href="#" className="text-blue-600 underline">klik here</a>.
          </p>
          <p>
            Would you like to know your current Dutch level? Feel free to use our <a href="#" className="text-blue-600 underline">level indicator</a>.
          </p>
        </Section>

        <Section title="3. Six Exam components">
          <p className="mb-4">The exam is broken down into 6 separate tests:</p>

          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Reading</strong><br />
              You will be presented with text to read and tested with a multiple choice questionnaire. For more detailed information with some hints and tips about the reading exam, follow this <a href="#" className="text-blue-600 underline">link</a>.
            </li>
            <li>
              <strong>Listening</strong><br />
              You will watch video clips or listen to audio clips and answer multiple choice questions about them. Click <a href="#" className="text-blue-600 underline">here</a> to up your chances to pass the listening test.
            </li>
            <li>
              <strong>Writing</strong><br />
              You will have to write practical texts in Dutch. Click <a href="#" className="text-blue-600 underline">here</a> for more information.
            </li>
            <li>
              <strong>Speaking</strong><br />
              You will be required to answer some questions in Dutch. This <a href="#" className="text-blue-600 underline">link</a> will guide you through the steps of taking the Speaking exam.
            </li>
            <li>
              <strong>Kennis van de Nederlandse maatschappij (KNM)</strong><br />
              This multiple choice test is about your knowledge of Dutch society, customs and habits which you need to know if you want to be a Dutch citizen or permanent resident. Click <a href="#" className="text-blue-600 underline">here</a> for more information about the KNM exam.
            </li>
            <li>
              <strong>Oriëntatie op de Nederlandse arbeidsmarkt</strong><br />
              This is all about work and employment. You have a discussion about the various related aspects with an official from DUO as well as hand in a professional portfolio. Find out more <a href="#" className="text-blue-600 underline">here</a>.
            </li>
          </ol>

          <p className="mt-4">
            Once you have passed these tests you will receive an integration diploma from your <em>gemeente</em>.
          </p>
        </Section>

        <Section title="4. How long will the process take?">
          <p className="mb-4">
            To complete the process from application to receiving your diploma takes on average one year. This duration can be greatly influenced by how far apart your exam dates are scheduled as well as whether you pass all the tests the first time.
          </p>
          <Image
              src="/images/blog-17.2.png"
              alt="Calender"
              width={300}
              height={300}
              className="rounded-lg shadow-md mx-auto my-6"
          />
          <p className="mb-4">
            Here is a breakdown:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              When you apply for the exams, you can choose which exams to do first and select an exam date. The dates are about 4 weeks from the date of your application.
            </li>
            <li>
              The results are given 8 weeks after completion, meaning each exam runs in a 12-week cycle.
            </li>
            <li>
              For every exam you need to re-do, you add another 12-week delay, so preparation is key.
            </li>
          </ul>
          <p className="mb-4">
            The <em>inburgeringsexamen</em> should be viewed as a medium-term project with significant personal investment if you want to pass the first time.
          </p>

          <p className="mb-4">
            There are instances where someone is exempt from part or even the entire exam. Here is a detailed <a href="#" className="text-blue-600 underline">list of who can apply</a>. If your circumstances match any on the list, contact DUO for more information. Office hours are Monday to Friday, 9:00 to 17:00 CET. The telephone number is (050) 599 96 00, or click <a href="#" className="text-blue-600 underline">here</a> to go directly to their contact page.
          </p>
        </Section>

        <Section title="5. Our courses and help">
          <p className="mb-4">
            We offer a tailored beginners course to cover all aspects of the integration exam. The course includes all the components of the various tests in one place. For more info about our courses <a href="#" className="text-blue-600 underline">click here</a>.
          </p>
          <Image
              src="/images/blog-17.3.jpeg"
              alt="Calender"
              width={300}
              height={300}
              className="rounded-lg shadow-md mx-auto my-6"
          />
          <p>
            We also provide help with the ONA exam. Contact us now to sign up or enquire. We are here to help you with the Dutch language as well as all the information you need about Learning Dutch Online.
          </p>
        </Section>

        <div className="mt-6 text-center">
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Contact us
          </a>
        </div>
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
