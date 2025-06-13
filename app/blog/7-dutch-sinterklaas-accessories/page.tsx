export const metadata = {
  title: "7 Dutch Sinterklaas Accessories Explained | Learn Dutch Culture",
  description:
    "From the iconic red mitre to the mysterious bag and the white horse — discover 7 typical accessories used by Sinterklaas in Dutch tradition.",
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
          image="/images/blog-6.1.jpeg"
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
          image="/images/blog-6.2.jpeg"
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
          image="/images/blog-6.3.jpeg"
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
          image="/images/blog-6.4.jpeg"
          alt="Witte paard van Sinterklaas"
        >
          <p>
          Santa is known for his reindeer and sleigh but Sinterklaas has a lipizzaner horse which is mostly 
          white with tiny grey markings, resembling a "salt & pepper" shade. This shade is called "Schimmel" 
          in Dutch which refers to the moldy shaded appearance.
          </p>
          <p>
          The horse is known as Amerigo to the Dutch people but to the Belgians he is known as "Slecht weer 
          vandaag" (bad weather today), also making reference to the shades of white and grey of his coat.
          </p>
          <p>
          Amerigo is Sinterklaas his means of transport after disembarking his steamship and carries him from rooftop 
          to, rooftop to deliver gifts. Yes, the horse can walk on rooftops, just like a reindeer can fly in December ;) 
          </p>
        </Section>

        <Section
          title="5. Mijter (mitre)"
          image="/images/blog-6.5.jpeg"
          alt="Mijter van Sinterklaas"
        >
          <p>
          Sinterklass wears a Bishops hat which is known as a Mijter. It is usually a red hat, adorned with a 
          golden cross on the front and golden trimmings.
          </p>
          <p>
          Sinterklaas only removes the hat when he has to pass through a doorway, or enter a room, where 
          the hat may collide with the door frame or ceiling. Since Dutch men are among the taller ones in the 
          world, this tends to happen more often than you might think ;) 
          </p>
        </Section>

        <Section
          title="6. Fopcadeau (fake or joke gift)"
          image="/images/blog-6.6.jpg"
          alt="Fopcadeau"
        >
          <p>
          One of Sinterklaas many helpers, all named Piet, is known as "laughing" 
          Piet and likes to pull pranks on unsuspecting recipients. He will occasionally 
          wrap an empty gift or wrap a funny note and leave it for children to find. I 
          suspect Santa Claus may have taken some advice from him when he decides to gift 
          kids with socks, sweaters or underwear. 
          </p>
        </Section>

        <Section
          title="7. Fopspeen (Dutch) / Tutje (Flemish)"
          image="/images/blog-6.7.jpeg"
          alt="Fopspeen"
        >
          <p>
          A public service that Sinterklaas offers, is to collect "dummies" (pacifiers) once 
          small children have moved on from using them. They can leave the pacifier in the 
          shoe for Sinterklaas to exchange for a present. Many Dutch parents make use of this service. 
          </p>
        </Section>

        <p className="mt-10 text-lg">
        Would you like to learn more about the Dutch or Belgian traditions and learn Dutch at the same time. 
        Subscribe to our Beginners course now! After a free introduction session you will learn in a 
        fun and affordable way with your personal trainer.  
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
