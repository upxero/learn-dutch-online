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

export default function SinterklaasFestivalBlog() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          5 Things to Know About the Dutch and Flemish Feast of Sinterklaas
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 11/27/2019
        </p>

        <p className="mb-6">
          The Sinterklaas festival is celebrated in Belgium and the Netherlands on the 5th and 6th of December every year. During this period, children put out their shoes, fill them with a carrot and a drawing, and hope to be rewarded for their good deeds of the past year by receiving the best gifts in the world.
        </p>

        <Section
          title="1. Who was Sinterklaas?"
          image="/images/sinterklaas-history.jpg"
          alt="Saint Nicholas painting"
        >
          <p>
            Sinterklaas, the person, was born around 300 AD in the ancient Greek port of Myra — now part of Turkey. He was a priest known for miraculous deeds, including saving three boys from a murderous innkeeper.
          </p>
          <p>
            He also inspired the shoe tradition by throwing gold coins through a window to help three poor girls — one pouch landing in a shoe. Over time, he was made bishop and later sanctified after his death on December 6, 342 AD.
          </p>
        </Section>

        <Section
          title="2. Why does he live in Spain?"
          image="/images/sinterklaas-spain.jpg"
          alt="Sinterklaas arriving by boat"
        >
          <p>
            Sinterklaas is said to live in Spain, although his relics were actually moved to Bari, Italy. During Spanish rule in the Southern Netherlands (1555–1715), it's believed the story was adapted by sailors who linked him with Spain.
          </p>
          <p>
            Whether by history or myth, this is now part of the tradition — he arrives by boat from Spain each November.
          </p>
        </Section>

        <Section
          title="3. The Annual Arrival"
          image="/images/sinterklaas-arrival.jpg"
          alt="Arrival of Sinterklaas in the Netherlands"
        >
          <p>
            In November, Sinterklaas arrives in the Netherlands by steamboat — the “Pakjesboot 12.” He arrives in Belgium around the same time, often in Antwerp. In Wallonia, he travels by donkey.
          </p>
          <p>
            His arrival is broadcast nationally and followed by children via a daily TV program:{" "}
            <a
              href="https://sinterklaasjournaal.ntr.nl/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Het Sinterklaasjournaal
            </a>
            .
          </p>
        </Section>

        <Section
          title="4. Pakjesavond in the Netherlands"
          image="/images/pakjesavond.jpg"
          alt="Pakjesavond in the Netherlands"
        >
          <p>
            “Pakjesavond” (present evening) became widespread after WWII, when people could afford gifts again. It began with handmade gifts and evolved to include store-bought ones, first for children and eventually for adults as well.
          </p>
          <p>
            It’s now a major celebration on the evening of December 5th, filled with poems, “surprises,” and lots of gift-giving.
          </p>
        </Section>

        <Section
          title="5. Pakjesochtend in Belgium"
          image="/images/pakjesochtend.jpg"
          alt="Pakjesochtend in Belgium"
        >
          <p>
            Unlike the Dutch evening celebration, Belgium celebrates “Pakjesochtend” (present morning) on December 6th. It resembles a Christmas morning — children wake up to find gifts in or near their shoes.
          </p>
          <p>
            It’s a magical morning tradition filled with excitement and chocolate letters.
          </p>
        </Section>

        <p className="mt-10 text-lg">
          Interested in learning more about Dutch or Flemish traditions while improving your language skills? Try our Beginners Dutch Course — the first lesson is free!
        </p>
      </main>
    </>
  );
}

function Section({ title, image, alt, video, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="md:w-1/3">
          {video ? (
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src={video}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded shadow-md"
              ></iframe>
            </div>
          ) : image ? (
            <Image
              src={image}
              width={400}
              height={250}
              alt={alt || ""}
              className="rounded shadow-md"
            />
          ) : null}
        </div>
        <div className="md:w-2/3 space-y-4">{children}</div>
      </div>
    </section>
  );
}
