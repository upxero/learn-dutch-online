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

export default function DutchSinterklaasQuestionsBlog() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          4 questions Dutch children ask about Sinterklaas (and possible answers from their parents)
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 12/05/2019
        </p>

        <p className="mb-6">
          So we know that Sinterklaas is a celebration mainly for the children and from 3 weeks prior all the kids can put out their shoes, visit the Sint at the town square and sing a lot of songs related to this celebration, locally referred to as Sinterklaas liedjes.
          The challenge for all parents begins with the loose ends in the tales told about the legendary festival that need to constantly be filled in, after all, you can only really experience the magic if you completely believe in Sinterklaas. It is a rewarding exercise when you see them lose themselves in the mystery and joyfully allow their imaginations to wonder into the realm where all things are possible. Parents, and most adults, have to be ready and think on their feet as these questions can come at any time and require a quick and resolute response.
          What type of questions can we expect to be ready for? And how do most Dutch parents answer them?
        </p>

        <Section
          title="1. How does the Sint, while on his horse, walk across the rooftops of the houses?"
          image="/images/sinterklaas-rooftops.jpg"
          alt="Sinterklaas on rooftops"
        >
          <p>
            How he gets onto the rooftops is a trade secret but all we know is that he can and you should believe it. As far we can determine, it is still the best way to deliver presents if you are Sinterklaas because that's the way that burglars cant come in either, they cant use magic. He also knows where everyone lives so he doesn't need to read the street names and numbers. His biggest job is to direct his helpers, the "Pieten", to the correct houses with the presents and very often help them in and out of the chimneys. He is very good at that as they get completely covered in soot from head to toe in the process while he remains spotlessly clean. Usually the soot covered "Pieten" are ones who put the presents in place and are everyone's favorite team of "Pieten".
          </p>
        </Section>

        <Section
          title="2. How are the 'Pieten' able to get the little presents in our shoes?"
          image="/images/pieten-shoes.jpg"
          alt="Pieten placing presents in shoes"
        >
          <p>
            The "Pieten" travel along the rooftops with Sinterklaas and usually go down a chimney if they can because they have the most practice with chimneys. Houses without chimneys are more difficult and they have a secret magic trick that no one knows. You can sometimes see where the Piet came in with the black soot footprints that they leave. They really should clean themselves more often.
          </p>
        </Section>

        <Section
          title="3. How can my friend from Maastricht meet him today, when I met him as well in Rotterdam at the same day?"
          image="/images/assistent-sinterklaas.jpg"
          alt="Assistant Sinterklaas in purple uniform"
        >
          <p>
            Sinterklaas is very busy and needs help to get to all the children he can so he has "Assistent Sinterklazen" which is a very important job. They need to know everything Sinterklaas knows and report everything they say back to the Sint, and often with magic. You can identify them with their purple, instead of red, uniform. Without them he would never be able to see and talk to as many children in 3 weeks as he does.
          </p>
        </Section>

        <Section
          title="4. How does the Sint know everything I did this year? How does he know all the children in The Netherlands (and/or Belgium)?"
          image="/images/sinterklaas-red-book.jpg"
          alt="Sinterklaas red book"
        >
          <p>
            The Sint has a huge red book in which he writes everything about every child. He knows where you live, how old you are and every naughty and good thing you do. He rewards children who are good with nicer presents than those who are naughty so if you don't brush your teeth and eat your carrots, you can expect smaller or even no presents in the morning. It is important to be good because Sinterklaas is always watching.
          </p>
        </Section>

        <p className="mb-6">
          These are a few common questions that have to be dealt with on a regular basis but you can always expect a curve ball so be ready, creativity rather than fact is your best friend. You feel like you've dodged a bullet when you see that they've accepted your explanation.
        </p>

        <p className="mb-6">
          As they grow older and their innocence fades the questions get harder to answer. This is when you can bank on it that they will soon outgrow the fantasy and stop believing. It can be a little hard on them at first but when you recruit them into helping smaller kids and siblings believe, it reshapes their fun and teaches them the importance of helping make life better for others. They are also very handy in helping adults to fill in the gaps and often still get carried away in the fantasy. Maybe, over the years, the reliance on older children to perpetuate the legend has given rise to many of the gaps in the story that grownups are challenged with, but they also created the magic that we all enjoy.
        </p>

        <p className="mt-10 text-lg">
          Would you like to learn more about the Dutch traditions and learn Dutch at the same time? Subscribe to our Beginners course now! After a free introduction session you will learn in a fun and affordable way with your personal trainer.
        </p>

        <p className="mt-4 text-center text-blue-600 cursor-pointer">
          Contact
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
