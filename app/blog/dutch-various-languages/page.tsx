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

export default function LanguageInfluenceDutch() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Learning Dutch from Various Languages: Pros, Cons, and What to Focus On
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 04/23/2024
        </p>

        <Section title="English">
          <p className="mb-4 font-semibold">Pros</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Similar Vocabulary – English and Dutch share many cognates and loanwords.</li>
            <li>Grammar – Similar SVO sentence structure.</li>
          </ul>

          <p className="mb-4 font-semibold">Cons</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Pronunciation – Challenging sounds like the guttural "g" and schwa.</li>
            <li>False Friends – Words that look similar but mean something different.</li>
          </ul>

          <p className="mb-4 font-semibold">What to Focus On</p>
          <ul className="list-disc ml-6">
            <li>Pronunciation practice</li>
            <li>Grammar (word order and verb conjugation)</li>
            <li>Avoiding false friends</li>
          </ul>
        </Section>

        <Section title="German">
          <p className="mb-4 font-semibold">Pros</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Language Family – Both are West Germanic languages.</li>
            <li>Grammar – Dutch has simpler verb conjugations and fewer cases.</li>
          </ul>

          <p className="mb-4 font-semibold">Cons</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Pronunciation – Vowels and diphthongs can be difficult.</li>
            <li>Vocabulary – Some words may be unfamiliar or misleading.</li>
          </ul>

          <p className="mb-4 font-semibold">What to Focus On</p>
          <ul className="list-disc ml-6">
            <li>Pronunciation of vowels and diphthongs</li>
            <li>Vocabulary building</li>
            <li>Grammar adaptation (word order, articles)</li>
          </ul>
        </Section>

        <Section title="French">
          <p className="mb-4 font-semibold">Pros</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Geographical Proximity – Exposure via neighboring countries.</li>
            <li>Cultural Exchange – Especially relevant in Belgium.</li>
          </ul>

          <p className="mb-4 font-semibold">Cons</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Language Family – Less related; bigger differences in grammar and vocabulary.</li>
            <li>Pronunciation – Difficult due to vowel sounds and consonant clusters.</li>
          </ul>

          <p className="mb-4 font-semibold">What to Focus On</p>
          <ul className="list-disc ml-6">
            <li>Pronunciation, especially consonant clusters and intonation</li>
            <li>Grammar (word order and gender)</li>
            <li>Vocabulary via immersion</li>
          </ul>
        </Section>

        <Section title="Spanish">
          <p className="mb-4 font-semibold">Pros</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Popularity – Many Dutch learning resources are available.</li>
            <li>Phonetics – Rolled “r” may be familiar.</li>
          </ul>

          <p className="mb-4 font-semibold">Cons</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Language Family – Not closely related; grammar is quite different.</li>
            <li>Grammar – Word order and gender system can be difficult.</li>
          </ul>

          <p className="mb-4 font-semibold">What to Focus On</p>
          <ul className="list-disc ml-6">
            <li>Pronunciation practice</li>
            <li>Grammar (especially gender and sentence structure)</li>
            <li>Immersive vocabulary practice</li>
          </ul>
        </Section>

        <Section title="Afrikaans">
          <p className="mb-4 font-semibold">Pros</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Mutual Intelligibility – High degree of comprehension.</li>
            <li>Vocabulary – Large overlap in word roots and meanings.</li>
          </ul>

          <p className="mb-4 font-semibold">Cons</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Grammar – Dutch is more complex with gender and verb forms.</li>
            <li>Pronunciation – Some sounds differ and may cause confusion.</li>
          </ul>

          <p className="mb-4 font-semibold">What to Focus On</p>
          <ul className="list-disc ml-6">
            <li>Mastering grammar (gender and conjugation)</li>
            <li>Refining pronunciation</li>
            <li>Strengthening orthography and writing</li>
          </ul>
        </Section>

        <Section title="Conclusion">
          <p>
          By understanding the pros, cons, and focus areas for learning Dutch from various language backgrounds, you can approach the learning process more strategically and maximize your success. Happy learning!
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
