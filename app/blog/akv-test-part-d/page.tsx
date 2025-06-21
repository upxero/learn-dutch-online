export const metadata = {
  title: "AKV Test Part D: Dutch Healthcare System and Law – What to Know",
  description:
    "Learn everything about part D of the AKV exam for foreign healthcare professionals. Understand Dutch healthcare law, key reading materials, and how to prepare effectively.",
};

import Image from "next/image";
import HeroBlog from "@/components/hero-blog";
import React, { ReactNode } from "react";

type SectionProps = {
  title: string;
  image?: string;
  alt?: string;
  children: ReactNode;
};

export default function AkvTestPartDBlog() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          All you need to know about the AKV –Test part D: Knowledge of the Dutch healthcare
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 01/13/2020
        </p>

        <p className="mb-6">
          The AKV test consists of 5 separate exam parts. In our previous blogs we discussed the first 3 pats of the test namely part A, part B & part C.
        </p>

        <p className="mb-6">
          In this blog we will discuss in detail all the requirements for the fourth part of the exam, intended to test your knowledge of the Dutch health care system. Here are some hints and tips to help you prepare thoroughly for this part of the exam:
        </p>

        <Section
          title="1. About the test"
          image="/images/blog-13.jpeg"
          alt="Questions be this similar"
        >
          <>
            <p className="mb-4">
              The duration of this test is 2 hours and contains around 40 multiple choice questions about the Dutch healthcare laws. As we at Learn Dutch Online, are tailored to teaching language and not legal matter, we assist students with unraveling the meaning of the phrases and laws so that context can be discerned to some students whom are stuck.
            </p>
            <p>
              Often the context is lost due to the meaning of words or phrases being lost in translation, leading to inaccurate conclusions which can give detrimental results in technical legal concepts.
            </p>
          </>
        </Section>

        <Section
          title="2. Recommended reading"
          image="/images/blog-13.1.jpeg"
          alt="Test is multiple choice"
        >
          <>
            <p className="mb-4">The good news is that we have very reliable guidebook suggestions for you:</p>

            <p className="mb-4">
              The book <em>"Volksgezondheid en Gezondheidszorg"</em> is highly recommended to prepare for part D of the AKV exam.
            </p>

            <p className="mb-4">
              Mackenbach, J.P., van der Maas, P.J. (eds.), <em>Volksgezondheid & Gezondheidszorg, 4de druk</em>. Amsterdam: Elsevier, 2008. ISBN-13: 9789035229525
            </p>

            <p className="mb-4">
              It is highly advisable to read the whole book and practice with all the available example questions in it. Mainly focus on the next chapters:
            </p>

            <ul className="list-disc list-inside mb-4">
              <li>The law professions individual health care (BIG)</li>
              <li>Organisation of the Dutch health care system</li>
              <li>Ethics in the Dutch health care.</li>
              <li>Culture in the Dutch health care.</li>
              <li>Practice independently in the Dutch healthcare.</li>
            </ul>

            <p>Here are some more books regarding Dutch healthcare law if you would like to do additional preparation:</p>
          </>
        </Section>

        <Section
          title="3. Who needs to take this exam?"
        >
          <>
            <p className="mb-4">
              As mentioned before, these exams apply to you if you are one of the following:
            </p>
            <p className="mb-4">
              a pharmacist, doctor, physiotherapist, mental health psychologist, psychotherapist, physician assistant, dentist, obstetrician or nurse from outside the EU and you want to practice your profession in the Netherlands.
            </p>
            <p>
              For more on where to begin, click here for our introduction blog which will give you an overview of the entire process.
            </p>
          </>
        </Section>

        <p className="mb-6">
          If you have passed this exam and you have some more hints and tips to share with others, feel free to comment below.
        </p>

        <p className="mb-6">
          Are you looking for help and assistance with the AKV test? Feel free to <a href="/contact" className="text-blue-600 underline">contact us here</a>, we will gladly assist you.
        </p>

      </main>
    </>
  );
}

function Section({ title, image, alt, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {image && (
          <div className="md:w-1/2">
            <Image
              src={image}
              alt={alt || ""}
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        )}
        <div className={image ? "md:w-1/2" : "w-full"}>{children}</div>
      </div>
    </section>
  );
}
