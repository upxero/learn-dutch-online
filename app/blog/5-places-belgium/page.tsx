export const metadata = {
  title: "5 Places in Belgium to Visit Around Christmas | Learn Dutch Culture",
  description:
    "Discover the most magical Christmas destinations in Belgium, including Bruges, Antwerp, Leuven and more. Cosy markets, lights, and festive traditions await!",
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

export default function BelgiumChristmasBlog() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          5 Places in Belgium to Visit Around Christmas Time
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Date:</strong> 11/24/2019
        </p>

        <p className="mb-6">
          Everyone knows the best places to visit around Christmas in their own city and region,
          but maybe it's time for a little portion of jingle bells elsewhere? Here are five inspiring
          tips for a cosy evening in a thick coat with the obligatory mulled wine in your hand.
        </p>

        <Section
          title="1. Enchanting Christmas in Bruges"
          image="/images/blog-3.1.jpeg"
          alt="Christmas Market Bruges"
        >
          <p>
            A more enchanting setting to set up a Christmas market than Bruges city centre, with all
            its narrow alleys and medieval buildings, is not easy to find in the world. With 84
            wooden chalets around the statue of Jan Breydel and Pieter De Coninck on the Market,
            you get a real Christmas feeling on the Bruges Christmas market. You'll find food and
            drink stalls with heartwarming mulled wine or a steaming bratwurst.
          </p>
        </Section>

        <Section
          title="2. Christmas Ferris Wheel in Antwerp"
          image="/images/blog-3.2.jpeg"
          alt="Ferris Wheel Antwerp"
        >
          <p>
            The city of Antwerp also welcomes you in a magical winter wonderland during the end of
            the year. Thanks to its many activities, it's a sight to behold: in addition to the
            traditional wooden chalets with specialties from all over the world, the famous Ferris
            wheel and the ice rink, there are a lot of other to-do's that you should definitely tick
            off your list.
          </p>
        </Section>

        <Section
          title="3. Winter (Wonder) Land in Hasselt"
          video="https://www.youtube.com/embed/v6Hby8-TZSE?si=ydB22aD4WnhESA4F"
        >
          <p>
            Winterland Hasselt is more than a Christmas market with chalets and tents around an ice
            rink. In the center is the house of Santa Claus, exactly as it looks on the Arctic Circle
            in Lapland. Children can see what Santa Claus does during the busy winter months. Amazing
            selfies guaranteed!
          </p>
        </Section>

        <Section
          title="4. Late Night Christmas Shopping in Ostend"
          video="https://www.youtube.com/embed/Tk5a0tPDvDY?si=NR2Qn7mhlWH-5rU7"
        >
          <p>
            At the brand new Christmas market, Winter in the Park, in Ostend you can already enjoy a
            hot chocolate with Baileys, a gin of your choice or a steaming bowl of soup. Combine that
            with some last-minute Christmas shopping in the beautifully decorated center and your
            Christmas spirit will be complete.
          </p>
        </Section>

        <Section
          title="5. Christmas Atmosphere in Leuven"
          video="https://www.youtube.com/embed/BGjRYVKZpjM?si=_lrBnDmubXiiti6e"
        >
          <p>
            In the charming city of Leuven, the Christmas market is located around the Ladeuzeplein
            and the Herbert Hooverplein. Between wooden stalls and the beautifully lit university
            library, you’ll find artisanal products, winter delicacies, and lots of twinkling lights.
            Don’t forget to warm up with a local beer or a sweet waffle.
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
