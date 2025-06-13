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
          Although The Netherlands is a small country, it boasts an impressively long coastline — more than 500 km along the Northern and Western borders. One of its most popular seaside destinations is Scheveningen, easily reachable by public transport from The Hague’s central station via Tram 1 or 9. The historic Kurhaus Hotel, once the Queen of Holland’s bathing resort, stands majestically on the beach and becomes a hotspot on New Year's Eve.
        </p>

        <Section
          title="1. 1920's New Year's Eve Party"
          image="/images/kurhaus-party.jpg"
          alt="Kurhaus 1920's NYE party"
        >
          <p>
            If themed parties are your thing, the Kurhaus hosts an exclusive 1920's New Year's Eve Party for guests aged 21 and over. Expect stylish 1920s-inspired acts, international DJs, and a night to remember. It’s described as a “unique and insane event,” so book early!
          </p>
        </Section>

        <Section
          title="2. Ice Rink Fun"
          image="/images/kurhaus-ice-rink.jpg"
          alt="Kurhausplein ice rink"
        >
          <p>
            The Kurhausplein transforms into a 600 m² ice rink from early November through January. Open daily from 10:00 to 22:00, it offers skate rentals, enchanting ice sculptures, and nearby restaurants where you can warm up with food and drinks while enjoying the winter atmosphere.
          </p>
        </Section>

        <Section
          title="3. World-Famous Bonfire"
          image="/images/scheveningen-bonfire.jpg"
          alt="Scheveningen bonfire on the beach"
        >
          <p>
            Known for hosting the world’s biggest bonfire, Scheveningen's beach lights up every New Year's Eve. For safety, the 2019/2020 edition was limited to 10 meters high — still incredibly impressive. Gather around, socialize, and enjoy the warmth of the flames while ringing in the new year.
          </p>
        </Section>

        <Section
          title="4. Ferris Wheel & Pier Celebration"
          image="/images/scheveningen-pier.jpg"
          alt="Scheveningen pier and ferris wheel"
        >
          <p>
            Join a crowd of 1,000+ at Scheveningen Pier’s NYE celebration. Enjoy great music, drinks, and breathtaking views of the beach and bonfire from the iconic Ferris wheel. The perfect spot for unforgettable photos and festive vibes.
          </p>
        </Section>

        <Section
          title="5. The New Year’s Dive"
          image="/images/new-years-dive.jpg"
          alt="Scheveningen New Year's dive"
        >
          <p>
            Not for the faint of heart — the New Year's Dive into the icy North Sea is a Scheveningen tradition. Up to 10,000 brave souls take part annually in this cleansing ritual, symbolizing a fresh start. The event is organized with medical staff present and requires a ticket. Will you take the plunge?
          </p>
        </Section>

        <Section
          title="Fireworks & Public Transport Tips"
          image="/images/scheveningen-fireworks.jpg"
          alt="Fireworks over the beach"
        >
          <p>
            Prefer a quieter evening? Scheveningen also hosts a beautiful fireworks show at midnight, illuminating the beach and creating a magical backdrop to this historic setting. If you’re using public transport, plan ahead — trams and buses may have limited service on New Year's Eve. For updated schedules, visit the official Dutch public transport website.
          </p>
        </Section>

        <p className="mt-10 text-lg">
          Would you like to learn more about Dutch traditions and learn Dutch at the same time? Subscribe to our Beginners course now! After a free introduction session, you’ll learn in a fun and affordable way with your personal trainer.
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
