export const metadata = {
  title: "5 Reasons Why You Need to Visit Scheveningen on New Year's Eve",
  description:
    "From the world's biggest bonfire to a 1920s party at the Kurhaus, discover why Scheveningen is the place to be on New Year's Eve in the Netherlands.",
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

export default function ScheveningenNewYearsBlog() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          5 Reasons Why You Need to Visit Scheveningen on New Year's Eve
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 12/12/2019
        </p>

        <p className="mb-6">
        Although The Netherlands is a small country it has an impressively long coastline, for its size, extending for more than 500 km along the Northern and Western borders. Along this coastline are many attractions for all tastes, but one of the most popular swimming and sunbathing destinations is Scheveningen. Easily accessible by public transport from Den Haag (The Hague) central station, you can get directly to it with Tram 1 or 9. Kurhaus of Scheveningen is a hotel on the beach which is historically known as the bathing resort of the Queen of Holland. Needless to mention, it is a grand and majestic venue which is well worth the visit, especially on New years eve. Here are 5 reasons to visit Scheveninge on New Years eve: 
        </p>

        <Section
          title="1. 1920's New Year's Eve Party"
          image="/images/blog-9.1.jpeg"
          alt="Kurhaus 1920's NYE party"
        >
          <p>
          If you enjoy themed events, you can attend the 1920's Newyears eve party at the Kurhaus. This is an opportunity for over 21's to welcome the new year with 1920's styled acts as well as international DJ's. It is described as a "unique and insane event". 
          <a
              href="https://www.eventbrite.nl/e/tickets-new-years-eve-2020-at-kurhaus-72675282727"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            > Book
          </a> your tickets early to avoid missing out.
          </p>
        </Section>

        <Section
          title="2. Ice Rink Fun"
          image="/images/blog-9.2.jpeg"
          alt="Kurhausplein ice rink"
        >
          <p>
          Outside on the square of the Kurhaus is a 600 m squared ice rink, known as the 
          <a
              href="https://www.cooleventscheveningen.nl/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            > "Kurhausplein on ice"
          </a> which is open from early November until the end of January. Visitors are welcome from 10:00 to 22:00 with an affordable entrance fee and skates for hire, should you require any. Other attractions at the rink include ice sculptures and restaurants where you can enjoy a warm drink and meal while watching people ice skate on the rink.   
          </p>
        </Section>

        <Section
          title="3. World-Famous Bonfire"
          image="/images/blog-9.3.jpeg"
          alt="Scheveningen bonfire on the beach"
        >
          <p>
          Traditionally they have a new years eve bonfire on the beach every year which was the biggest bonfire in the world. Due to the dangers involved and some very near misses, the 2019/2020 fire will be restricted to 10 m in height, which is still very impressive, and affords visitors the opportunity to socialize and enjoy the evening from a safe distance. If you are up for a New years beach party in Holland then this is the one for you. 
          </p>
        </Section>

        <Section
          title="4. Ferris Wheel & Pier Celebration"
          image="/images/blog-9.4.jpeg"
          alt="Scheveningen pier and ferris wheel"
        >
          <p>
          Scheveningen Pier offers a huge ferris wheel and a 1000 attendee strong new years eve celebration from where you have a view of the bonfire and beach while enjoying drinks and good music among the crowd of party goers. 
          </p>
        </Section>

        <Section
          title="5. The New Year’s Dive"
          image="/images/blog-9.5.jpeg"
          alt="Scheveningen New Year's dive"
        >
          <p>
          For the truly brave they host a "New Years Div" on the morning of the 1st of January every year. The new year is celebrated by a ceremonial swim in the icy North Sea, that signifies a cleansing from the deeds of the year before and entering the year with a fresh start. As many as 10 000 people partake in the annual event and there are paramedics and other first aid staffers on standby to assist those who may need it. Anyone is welcome to join, provided you buy tickets and do it in a controlled and safe environment, but be warned, its not for the faint at heart. Tickets are available from the organisers at the following <a
              href="https://denhaag.com/nl/event/12728/unox-nieuwjaarsduik-scheveningen"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            > link
          </a> 
          </p>
        </Section>

        <Section
          title="Fireworks & Public Transport Tips"
          image="/images/blog-9.6.jpeg"
          alt="Fireworks over the beach"
        >
          <p>
            Prefer a quieter evening? Scheveningen also hosts a beautiful fireworks show at midnight, illuminating the beach and creating a magical backdrop to this historic setting. If you’re using public transport, plan ahead — trams and buses may have limited service on New Year's Eve. For updated schedules, visit the official Dutch public transport website.
          </p>
        </Section>

        <p className="mt-10 text-lg">
          Would you like to learn more about Dutch traditions and learn Dutch at the same time? Subscribe to our Beginners course now! After a free introduction session, you’ll learn in a fun and affordable way with your personal trainer.
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
        <div className="md:w-1/2">{children}</div>
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
