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

export default function DutchSurpriseBlog() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          All You Need to Know About the Dutch 'Surprise'
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 12/04/2019
        </p>

        <p className="mb-6">
          As always, during the first days of December, everyone in The Netherlands celebrates the Saint Nicolas or Sinterklaas festival.
        </p>
        <p className="mb-6">
          Inevitably all kids grow up but still want to join in the festivities. Adults and teenagers who do not believe in Sinterklaas anymore, still participate in the Sinterklaas festivities. They do it with a more appropriate approach while still maintaining the fun, using Surprises. (pronounce: Surpreeses)
        </p>

        <Section 
            title="What is a 'Surprise'?"
            image="/images/sinterklaas-history.jpg"
            alt="Saint Nicholas painting"
        >
          <p>
            Surprises are personally crafted items that are gifted to one another, but it's not as simple as that. Mostly the idea behind the gift is to play a prank, or make fun of, the recipient in good humor and, it's important to mention, that no one is trying to offend anyone in the process. This is intended to keep the 5th of December filled with fun, laughter and a possible sense of minor humility.
          </p>
        </Section>

        <Section 
        title="How It Begins"
        image="/images/surprise-lottery.jpg"
        alt="Drawing names for Sinterklaas surprise"
        >
        <p>
            It all kicks off with the announcement of the festivities as the "Sint" arrives in The Netherlands. Social groups, like fraternities, sports clubs, colleagues families etc., will hold a lottery to determine who is making a surprise for whom, giving each participant around 3 weeks to prepare their masterpiece. (it's called Lootje trekken) Very often, the recipient has no idea that they are getting a surprise or who from, making it a lot more fun?
        </p>
        </Section>

        <Section 
        title="4 Characteristics That Make a Good Surprise"
        image="/images/surprise-craft.jpg"
        alt="Crafted surprise gift made of cardboard"
        >
        <p>1. The surprise is specially made for an individual and emphasizes the relationship between giver and receiver. In a group environment, the surprise is usually an article that symbolizes the commonalities of the group or the shared interest that binds them together, like custom or humorous hockey sticks in hockey clubs or slogans on coffee mugs for a colleague.</p>
        <p>2. Great care is given to the process of crafting the surprise and the creators strive to gift a professionally wrapped item. Not only is the quality of the wrapping or packaging often admired but it is also intended to conceal their actual gift, making for a treasure-hunt-like unwrapping experience.</p>
        <p>3. For those who are less creative and artistic there is always the under rated shoe box. Although it is considered the "get out of jail free card" in the world of surprises, you are still obliged to add something of your own personal creation which is expected to take the shape of a poem. Due to the lack of creativity, the poem has to not only ridicule the recipient, but the artistic skills, or lack thereof, of the gifter. The practice is all in good spirits and intended to slow down the unwrapping process.</p>
        <p>4. Some gifters go all-out and go as far as baking a cake to use as packaging, hiding the gift inside it. As you can imagine, this really makes for an interesting, messy and entertainingly humorous unwrapping experience.</p>
        </Section>

        <Section 
        title="The Celebration"
        image="/images/sinterklaas-evening.jpg"
        alt="Family enjoying Sinterklaas evening with snacks and drinks"
        >
        <p>
            The celebration of Sinterklaas with surprises is one of joy and laughter. Anything that adds to the laughter will be very well received by the group as a whole.
        </p>
        <p>
            During the evening of the festivities, the gifting and unwrapping is usually interluded with snacks and drinks which are enjoyed together while discussing the gifts and having a laugh. The real magic behind the festival is to rekindle powerful feelings of child-like and carefree fun and every effort is made to encourage it.
        </p>
        </Section>

        <Section 
        title="The Traditions"
        video="https://www.youtube.com/embed/qQXScvqCRew?si=3YrS2wy-FumJgyLL"
        >
        <p>
            From the moment that he disembarks the steam ship that ferries him all the way from Spain to The Netherlands, children everywhere start their preparations. They place a shoe, either next to the front door, or the fireplace and fill it with treat for Sinterklaas and his helpers like a carrot for his horse, a beer for a Piet and a drawing or letter for the man himself, all with the anticipation of being rewarded with sweets and snacks in return.
        </p>
        <p>
            The "Sint", as he is locally known, celebrates his birthday on the 5th of December and dedicates the event with the children.
        </p>
        <p>
            More about that in our previous blog:{" "}
            <a
            href="https://www.learn-dutch-online.eu/l/a5-things-to-know-about-the-dutch-and-flemish-feast-of-sinterklaas-saint-nicholas/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
            >
            5 things to know about the Dutch and Flemish feast of Sinterklaas (Saint-Nicholas)
            </a>
            .
        </p>
        </Section>

        <p className="mt-10 text-lg">
          Would you like to learn more about the Dutch traditions and learn Dutch at the same time? Subscribe to our Beginners course now! After a free introduction session you will learn in a fun and affordable way with your personal trainer.
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


