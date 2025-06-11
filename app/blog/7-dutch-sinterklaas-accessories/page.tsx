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

export default function SinterklaasAccessoriesBlog() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          7 Dutch Sinterklaas Accessories Explained
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 11/25/2019
        </p>

        <p className="mb-6">
          Sinterklaas, also known as Saint Nicholas, is a Dutch character loved by
          children and adults alike — and shouldn't be confused with Father Christmas or Santa Claus.
        </p>
        <p className="mb-6">
          Unlike Santa, he lives in Spain and comes to the Netherlands at the
          beginning of December to perform similar activities as Santa does.
        </p>
        <p className="mb-6">
          Sinterklaas refers both to the character and the annual event, and it
          comes with its own Dutch vocabulary and typical Dutch customs.
        </p>

        <Section
          title="1. Staf (staff)"
          image="/images/sinterklaas-staf.jpg"
          alt="Sinterklaas staff"
        >
          <p>
            Sinterklaas always carries a golden crozier staff about his own
            height. It's not meant to be used as a weapon but symbolizes a
            shepherd's staff, as used by religious officials.
          </p>
        </Section>

        <Section
          title="2. Zak (bag)"
          image="/images/sinterklaas-zak.jpg"
          alt="Sinterklaas jute bag"
        >
          <p>
            Much like Santa, he carries a jute bag filled with gifts for children
            who behaved well. Piet also scatters “strooigoed” from it — pepernoten,
            letter cookies, and other sweets.
          </p>
          <p>
            <em>Fun fact:</em> It used to be said that naughty kids were put in
            the bag and taken to Spain — until Spain became a beloved holiday
            spot!
          </p>
        </Section>

        <Section
          title="3. Het Grote Boek (large book)"
          image="/images/sinterklaas-boek.jpg"
          alt="Sinterklaas boek"
        >
          <p>
            A red velvet-covered book that records children's behavior throughout
            the year. Sinterklaas uses it to praise or reprimand them. It often
            resembles an old telephone directory in disguise!
          </p>
        </Section>

        <Section
          title="4. Schimmel (literally: mold)"
          image="/images/sinterklaas-paard.jpg"
          alt="Witte paard van Sinterklaas"
        >
          <p>
            Sinterklaas rides a white horse with grey specks — a “schimmel.” In
            the Netherlands, it’s called Amerigo; in Belgium, it’s known as
            “Slecht Weer Vandaag” (bad weather today).
          </p>
          <p>
            And yes — the horse walks on rooftops like Santa's reindeer fly.
          </p>
        </Section>

        <Section
          title="5. Mijter (mitre)"
          image="/images/sinterklaas-mijter.jpg"
          alt="Mijter van Sinterklaas"
        >
          <p>
            Sinterklaas wears a bishop's hat, red with gold trim and a golden
            cross. He only takes it off when he has to duck through a doorway —
            quite often in the Netherlands, with all the tall people!
          </p>
        </Section>

        <Section
          title="6. Fopcadeau (fake or joke gift)"
          image="/images/fopcadeau.jpg"
          alt="Fopcadeau"
        >
          <p>
            One of the “Pieten” loves to prank! Sometimes, children find a gift
            box with just a funny note inside. Perhaps Santa copied this idea when
            he started gifting socks...
          </p>
        </Section>

        <Section
          title="7. Pietenpakken (Piet outfits)"
          image="/images/pietenpakken.jpg"
          alt="Pieten outfits"
        >
          <p>
            The helpers of Sinterklaas — called Pieten — wear brightly colored costumes
            that resemble the clothing of 16th-century pages. You’ll see them in parades,
            climbing roofs, or handing out candy.
          </p>
        </Section>

        <p className="mt-10 text-lg">
          Want to learn more about Dutch holidays and traditions while improving your Dutch?
          Try our Beginners Dutch Course — your first introduction is free!
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
