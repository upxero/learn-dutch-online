import Image from "next/image";
import HeroBlog from "@/components/hero-blog";
import React, { ReactNode } from "react";

type SectionProps = {
  title: string;
  image: string;
  alt: string;
  children: ReactNode;
};

export default function YpresBlog() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          6 reasons to visit YPRES (Ieper) on the 11th of November
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Date:</strong> 11/05/2019
        </p>

        <p className="mb-6">
          The 11th of November is the day of Armistice in Belgium. Ypres,
          situated in West-Flanders (West-Vlaanderen) also called the Westhoek,
          is the city to go to on the day of Armistice. Here are 6 reasons why:
        </p>

        <Section
          title="1. Remembrance of Armistice (Herdenking Wapenstilstand)"
          image="/images/blog-1.jpg"
          alt="Remembrance Armistice"
        >
          From 8.45h onwards different remembrance activities are being organised
          in Ypres. You can join the remembrance ceremony at the French cemetery
          Saint-Charles de Potyze, walk with the Poppy Parade from the
          Vandenpeereboomplein, listen to the Carillon Concert from the Belfry
          Cloth Hall or join the Remembrance ceremony at the Belgian Monument.
        </Section>

        <Section
          title="2. The Menin Gate (De Menenpoort)"
          image="/images/blog-1.1.jpg"
          alt="Menin Gate Ypres"
        >
          <p>
            Historically, the Menin Gate of Ypres was simply a crossing point over
            the moat and through the ramparts of the old town fortifications, on
            the road to the nearby town of Menin. It had a special significance
            for the troops though: it was from this spot that thousands of
            soldiers set off for the part of the Front called the Ypres Salient –
            many destined never to return.
          </p>
          <p>
            The stone walls of the Menin Gate are engraved with the names of
            nearly 55,000 British and Commonwealth soldiers lost on the field of
            battle but with no known graves; a son, a father, a brother. A further
            34,957 names are inscribed on the walls of Tyne Cot Cemetery to the
            east of Ypres.
          </p>
        </Section>

        <Section
          title="3. Special edition of the Last Post"
          image="/images/blog-1.2.jpeg"
          alt="Last Post Ceremony"
        >
          <p>
            Since 1928, buglers from the Last Post Association have been playing
            the Last Post every night at 8 p.m., regardless of the number of
            attendants or weather conditions.
          </p>
          <p>
            On the 11th of November, a special edition is played. With an
            invitation you can enter the Menin Gate; otherwise, watch from the
            Market Square on the big screen.
          </p>
        </Section>

        <Section
          title="4. WW I cemeteries (Begraafplaatsen)"
          image="/images/blog-1.3.png"
          alt="Tyne Cot Cemetery"
        >
          <p>
            There are more than 150 Commonwealth cemeteries in the Ypres Salient.
            Tyne Cot Cemetery is the largest in the world, now the resting place
            of more than 11,900 servicemen from the First World War. It was the
            scene of the Third Battle of Ypres, also known as the Battle of
            Passchendaele.
          </p>
        </Section>

        <Section
          title="5. Trenches (Loopgraven)"
          image="/images/blog-1.4.jpg"
          alt="Yorkshire Trench"
        >
          <p>
            Visit the Yorkshire Trench and Dug-Out, restored along its original
            route from 1917. Information panels and a ground plan give visitors a
            graphic insight into trench life.
          </p>
          <p>
            <strong>Address:</strong> Bargiestraat, 8900 Ieper (in front of IVVO)
          </p>
        </Section>

        <Section
          title="6. In Flanders Fields Museum"
          image="/images/blog-1.5.jpeg"
          alt="In Flanders Fields Museum"
        >
          <p>
            The In Flanders Fields Museum is the gateway to understanding the
            First World War in Flanders. The exhibition includes video projects,
            sound fragments and personal stories. Each visitor receives a poppy
            bracelet that allows them to discover four individual wartime stories.
          </p>
          <p>
            <a
              href="https://www.inflandersfields.be/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://www.inflandersfields.be/
            </a>
          </p>
        </Section>

        <h2 className="text-2xl font-semibold mt-10 mb-4">More than just November 11th</h2>
        <p className="mb-4">
          Not only on the 11th of November, but throughout the whole year, Ypres
          is worth a visit. Ypres has a rich and diverse past. It was a
          flourishing place of commerce during the Middle Ages, and the Cloth Hall,
          St. Martin’s Cathedral, and fortresses still bear witness to that time.
        </p>

        <p className="mt-4">
          For more information about the Flemish culture and language lessons,
          feel free to contact{' '}
        <a
            href="https://www.learn-dutch-online.eu/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
        >
            Learn Dutch Online
        </a>.
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
        <div className="md:w-1/3">
          <Image
            src={image}
            width={400}
            height={250}
            alt={alt}
            className="rounded shadow-md"
          />
        </div>
        <div className="md:w-2/3 space-y-4">{children}</div>
      </div>
    </section>
  );
}
