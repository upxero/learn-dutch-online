export const metadata = {
  title: "Funny Dutch Word: ‘Neushoorn’ – What Does It Really Mean?",
  description:
    "Explore the amusing Dutch word ‘neushoorn’ by breaking down its parts: ‘neus’ (nose) and ‘hoorn’ (horn). Learn the different meanings and fun language insights!",
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

export default function FunnyDutchWordNeushoorn() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Where does the funny Dutch word ‘de neushoorn’ come from?
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 02/07/2020
        </p>

        <Image
              src="/images/blog-16.jpeg"
              alt="funny Dutch word De neushoorn"
              width={400}
              height={150}
              className="rounded-lg shadow-md mx-auto my-6"
        />

        <p className="mb-6">
          The word <em>neushoorn</em> can be split into two separate words, <strong>de neus</strong> and <strong>de hoorn</strong>. Both words can have different meanings in Dutch:
        </p>

        <Section title="a. De neus (m)">
          <p className="italic mb-2">/nøːs/ (noun)</p>
          <p className="mb-4">De neus can have two different meanings in Dutch:</p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              An organ used for breathing and to smell.<br />
              <strong>Example:</strong> Hij heeft een lange neus. <em>He has a long nose.</em>
            </li>
            <li>
              The front part of an object.<br />
              <strong>Example:</strong> De neus van het vliegtuig was beschadigd. <em>The nose of the plane was damaged.</em>
            </li>
          </ol>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 justify-items-center my-6">
            {[
              { src: "/images/blog-16.1.jpeg", alt: "Nose" },
              { src: "/images/blog-16.2.jpeg", alt: "Train" },
              { src: "/images/blog-16.3.jpeg", alt: "Child nose" },
            ].map(({ src, alt }, index) => (
              <div
                key={index}
                className="w-[200px] h-[200px] relative overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Section>

        <Section title="b. De hoorn (m)">
          <p className="italic mb-2">/horn/ (noun)</p>
          <p className="mb-4">De hoorn can have 5 different meanings in Dutch:</p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              Hard and usually curved protrusion at the head of various animals.<br />
              <strong>Example:</strong> Het hert had lange hoorns. <em>The deer had large horns.</em>
            </li>
            <li>Wax that looks like a horn, for example with insects.</li>
            <li>
              (Mollusks) turned dish of some mollusks.<br />
              <strong>Example:</strong> Ze zochten allerlei hoorns toen ze langs het strand liepen. <em>They looked for all kinds of horns when they walked along the beach.</em>
            </li>
            <li>
              An (electro) acoustic amplifier, for example the hearing and speaking part of a telephone.<br />
              <strong>Example:</strong> Hij legde de hoorn onmiddellijk neer nadat hij hoorde wie er aan de telefoon was. <em>He put down the receiver immediately after he heard who was on the phone.</em>
            </li>
            <li>
              (Musical instrument) wind instrument that was originally made from a horn, but nowadays often from an injured copper tube with valves, and a wide bell.<br />
              <strong>Example:</strong> We kunnen aardig op de hoorn spelen. <em>We can play nicely on the horn.</em>
            </li>
          </ol>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 justify-items-center my-6">
            {[
              { src: "/images/blog-16.4.jpeg", alt: "Deer horns" },
              { src: "/images/blog-16.5.jpeg", alt: "Insect horn" },
              { src: "/images/blog-16.6.jpeg", alt: "Beach horn" },
              { src: "/images/blog-16.7.jpeg", alt: "Phone horn" },
              { src: "/images/blog-16.8.jpeg", alt: "Music horn" },
            ].map(({ src, alt }, index) => (
              <div
                key={index}
                className="w-[200px] h-[200px] relative overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Section>

        <p className="mb-6">
          Do you like the <em>neushoorn</em>? You can always get his T-shirt&nbsp;
          <a
            href="https://www.teechip.com/neushoorn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            here
          </a>.
        </p>

        <Image
              src="/images/blog-16.9.jpeg"
              alt="Child nose"
              width={300}
              height={300}
              className="rounded-lg shadow-md mx-auto my-6"
          />

        <p className="mb-6">
          Would you like to learn Dutch at your own pace and in your own time? Contact us now for more information about our Beginners Dutch course or our Intermediate Dutch course.
        </p>

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
