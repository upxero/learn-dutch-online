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

export default function DutchFluencySteps() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          5 Steps to Speak Dutch Fluently
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 03/18/2020
        </p>

        <Section title="Introduction">
          <p className="mb-6">
            When learning Dutch it is important, especially at the beginning, to focus on input—on listening and reading. However, just as is the case with most learners, you also want to be able to speak, and to speak well.
          </p>
          <p className="mb-6">
            You first need to determine for yourself: <em>"What are my speaking goals, and how do I get there?"</em>
          </p>
        </Section>

        <Section title="1. Listen a lot">
          <p className="mb-6">
            I mean as much as an hour a day or more, just about every day. Listen in your car and while doing chores around the house. Listen while exercising or running.
          </p>
          <p className="mb-6">
            Do not just sit down and focus on listening. Just listen "on the fly", taking advantage of "dead time" during the day.
          </p>
          <p>
            Listening creates a body of experience for the brain. If the content is interesting, and the voice pleasing, listening creates an emotional connection with a language. Listening creates neural connections.
          </p>
        </Section>

        <Section title="2. Read a lot">
          <p className="mb-6">
            Reading builds vocabulary, reinforces grammar, and introduces sentence structure. Read materials that are interesting and appropriate for your level.
          </p>
          <p>
            Even better if you read while listening to the same content. This reinforces what you hear and helps your brain process language more deeply.
          </p>
        </Section>

        <Section title="3. Speak when you're ready">
          <p className="mb-6">
            Don’t rush. Once you’ve built up a solid base through listening and reading, speaking will become much easier and more natural.
          </p>
          <p>
            Speaking early can be frustrating if you don’t understand what’s going on. But once you do, you’ll feel confident and ready to engage in real conversations.
          </p>
        </Section>

        <Section title="4. Keep a vocabulary notebook">
          <p className="mb-6">
            Write down useful words and phrases you come across while listening and reading. Try to use them in your own sentences.
          </p>
          <p>
            Regular review helps move them from passive to active vocabulary, meaning you’ll actually be able to use them in speech.
          </p>
        </Section>

        <Section title="5. Be consistent and enjoy the process">
          <p className="mb-6">
            Learning a language is a marathon, not a sprint. Consistent daily exposure to Dutch will get you to fluency faster than irregular study sessions.
          </p>
          <p>
            Find content you enjoy. The more you enjoy it, the more you’ll want to engage with it—and the more you engage, the better your Dutch will become.
          </p>
        </Section>

        <Section title="Need help with Dutch?">
          <p>
            We offer structured online Dutch lessons for beginners and intermediate learners, focused on building fluency through real input.{" "}
            <a href="/contact" className="text-blue-600 underline">
              Contact us here
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
