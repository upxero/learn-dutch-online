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

export default function NetherlandsChristmasBlog() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          5 Christmas Markets in the Netherlands Recommended by Learn Dutch Online
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Date:</strong> 11/24/2019
        </p>

        <p className="mb-6">
          The temperature starts to drop, the heating turns on, and the days get shorter, as the Dutch winter settles in.
          It is dark and cold outside making candle- and firelight extra cozy. Can you feel the Christmas magic approaching?
          All the more reason to plan some awesome outings, like a nice day at a Dutch Christmas market. Here are 5 Christmas
          markets recommended by Learn Dutch Online.
        </p>

        <Section
          title="1. Caves of Valkenburg"
          video="https://www.youtube.com/embed/YhuOZO5Pvlo?si=ywx93Y6Mwzcj036w"
        >
          <p>
            Valkenburg is an excellent venue to start with. This nostalgic Christmas market is held in the local cave system,
            also known as the gemeentegrot, at the bottom of the famous Cauberg. Due to the picturesque setting, it is now one
            of the most visited Christmas markets in Europe.
          </p>
          <p>
            When exploring the underground corridors, your imagination is transported to a magical world of lights, music and
            surprises around every corner. You will find beautiful Christmas stalls and decorations where you can find the nicest
            items to gift on the 25th.
          </p>
          <p>
            <a
              href="https://www.kerststadvalkenburg.nl/#"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              More info here
            </a>
          </p>
        </Section>

        <Section
          title="2. Christmas Market in Maastricht"
          image="/images/kerstmarkt-maastricht.jpg"
          alt="Christmas Market Maastricht"
        >
          <p>
            At the Vrijthof Christmas market you can ice skate on the 1000m2 ice rink and ride the 45-meter-high Ferris wheel between
            the stalls. There is usually a merry-go-round and other smaller rides to enjoy. Children can also visit Santa in his chalet
            or slide down a covered giant slide.
          </p>
          <p>
            <a
              href="https://www.kerstmarktinmaastricht.nl/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more here
            </a>
          </p>
        </Section>

        <Section
          title="3. Floating Christmas Market in Leiden"
          image="/images/drijvende-kerstmarkt-leiden.jpg"
          alt="Floating Christmas Market Leiden"
        >
          <p>
            This unique Christmas market is located on pontoons in the Nieuwe Rijn. The only floating market in the Netherlands is
            located in the centre of Leiden. You can visit around 86 winter chalets for Christmas gifts, decorations, seasonal snacks
            and drinks. There are also stage performances for extra entertainment.
          </p>
          <p>
            <a
              href="https://www.visitleiden.nl/nl/uitagenda/drijvende-kerstmarkt"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              More details here
            </a>
          </p>
        </Section>

        <Section
          title="4. Dickens Christmas Fair in Deventer"
          image="/images/dickens-deventer.jpg"
          alt="Dickens Fair Deventer"
        >
          <p>
            A Charles Dickens-themed Christmas market is a must-see if you are a fan of his classic works. Here you can find Christmas
            decorations, unique gifts, clothing, food and even music reminiscent of a Dickens masterpiece. Many stalls are styled
            accordingly, and actors walk around in full Dickens costume.
          </p>
          <p>
            <a
              href="https://dickensfestijn.nl/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              More information
            </a>
          </p>
        </Section>

        <Section
          title="5. Christmas Market in Haarlem"
          video="https://www.youtube.com/embed/ckQTcMnaLEY?si=OsAzf0YwhWYthDP0"
        >
          <p>
            At year-end, the centre of Haarlem is transformed into one of the largest and most enjoyable Christmas markets in the
            Benelux region. Shop for gifts at one of the 300 stalls and enjoy mulled wine or fresh Dutch pea soup. Choirs perform
            in beautiful monumental locations to add to the festive atmosphere.
          </p>
          <p>
            <a
              href="https://www.visithaarlem.com/nl/kerstmarkt"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              More information
            </a>
          </p>
        </Section>

        <p className="mt-10 text-lg">
          Would you like to learn more about Dutch traditions and learn Dutch at the same time? Subscribe to our Beginners course now!
          After a free introduction session, you'll learn in a fun and affordable way with your personal trainer.
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
