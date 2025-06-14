export const metadata = {
  title: "5 Things to Know About the Dutch and Flemish Feast of Sinterklaas",
  description:
    "Discover the origins and modern traditions of the Dutch and Flemish Sinterklaas festival — from Pakjesavond to his legendary arrival by steamboat.",
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
          image="/images/blog-6.jpg"
          alt="Saint Nicholas painting"
        >
          <p>
          Sinterklaas, the person, was born around 300AD in the ancient Greek port of Myra which today is part of Turkey.
          </p>
          <p>
          He was a priest who was renowned for performing exceptional and even miraculous deeds during his endeavors. Legend has it that he even saved 3 young boys in the most miraculous way. They were captured, killed and cut up into pieces by an evil innkeeper before being stuffed into a barrel. When hearing about this, Saint Nicholas, rushed to the scene to observe this terrible deed. He knelt down and performed a prayer over the barrel and, miraculously, the 3 boys stepped out unharmed and in good spirits.
          </p>
          <p>
          Sinterklaas is know to put the gifts, and money or chocolate coins, he delivers inside the shoes left out by the children on the evening before hand. This practice started in his early days when he heard of 3 girls who were living in poverty and going to bed hungry most of the time.
          </p>
          <p>
          Taking pity on the girls he snuck to their bedroom windows and threw a small pouch with gold coins for each of them to improve their fate. One of the pouches sailing into the window, found its way into the shoe of a girl where she found it the following morning. Thereafter the custom of placing a shoe was adopted and is still used to this day. 
          </p>
          <p>
          As he was well known for living a selfless life while improving the lives of those who are in need Nicholas was promoted to the Bishop of Myra. He was eventually sanctified soon after his death, on the 6th of December in 342AD, and from then on became known as the beloved Sinterklaas.
          </p>
        </Section>

        <Section
          title="2. Link with Spain?"
          image="/images/blog-7.1.jpeg"
          alt="Sinterklaas arriving by boat"
        >
          <p>
          Sinterklaas is said to live in Spain and travel to The Netherlands every December to perform his deeds, but there is not much clarity on how he ended up living in Spain. After his death, his relics were moved to the town of Bari, in Italy, which was later conquered by Spain for a while. It is thought that during this period, his relics were relocated to Spain which then became his new home. 
          </p>
          <p>
            <strong>Did it come by sea? </strong>
          </p>
          <p>
          The Southern Netherlands were occupied by the Spanish King Philip II in 1555 and ruled by Spain until 1715. It is theorized by some that the legend was brought to The Netherlands by Spanish sailors who traveled between the two regions during this era. 
          </p>
        </Section>

        <Section
          title="3. The annual event"
          image="/images/sinterklaas-arrival.jpg"
          alt="Arrival of Sinterklaas in the Netherlands"
        >
          <p>
          Every year during the month of November, Sinterklaas arrives in The Netherlands on his steam boat named Hydrograaf, which is locally referred to as the "Pakjesboot 12". Around the same time he arrives in Belgium, usually in Antwerp harbor, or sometimes in smaller cities as well. He also makes his appearance in the Southern regions of Belgium, but there he travels by donkey.
          </p>
          <p>
          His annual arrival is a joyous occasion and he is met by many grownups, and children, who line the docs to welcome him. The event is of such importance that it is broadcast on various national TV stations and talked about everywhere.
          </p>
          <p>
          From this time onward, children can follow his progress by watching his dedicated daily news segment called "Het Sinterklaasjournaal" (The Sinterklaas Journal). With every episode, children get updates on his travels and activities as well as related traditional celebrations as shown here: {" "}
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
          image="/images/blog-7.2.jpeg"
          alt="Pakjesavond in the Netherlands"
        >
          <p>
          "Pakjesavond" (present evening) gradually became common practice as recently at the end of World War II. Before this, there was a financial crisis and gifts were unaffordable. With the improved post-war economy, gifts became more affordable and started with presents crafted at home. Eventually this practice was replaced by gifting store bought gifts. At the beginning, gifts were only given to the children but as time went by, it came to include grown-ups as well. More about this in the blog post: What is a surprise and how should you make one?. Pakjesavond has since become an exciting and important event for children and grownups alike.
          </p>
        </Section>

        <Section
          title="5. Pakjesochtend in Belgium"
          image="/images/blog-7.3.jpeg"
          alt="Pakjesochtend in Belgium"
        >
          <p>
          Contrary to The Netherlands, Belgians celebrate "Pakjesochtend" (present morning) which has a similar feel to the US version of Christmas morning. In preparation, on the evening of the 5th of December, children place a shoe with a few treats for the Sint and his helpers. In the shoe is usually a letter, wish list or drawing, for Sinterklaas, a beer, for Zwarte Piet and a carrot and sugar cubes for his steed, "Slecht weer vandaag".
          </p>
          <p>
          Before bed, the children would traditionally sing a few Sinterklaas songs and engage in other related entertainment in anticipation of the arrival. Early the next morning the kids return to the shoe to see what the Sint has left for them. Besides the gifts they find sweets like chocolate coins and cookies called "pepernoten". 
          </p>
        </Section>

        <p className="mt-10 text-lg">
        Would you like to learn more about the Dutch or Belgian traditions and learn Dutch at the same time. Subscribe to our Beginners course now! After a free introduction session you will learn in a fun and affordable way with your personal trainer.   
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
