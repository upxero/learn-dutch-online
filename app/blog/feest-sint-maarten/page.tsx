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

export default function SintMaartenBlog() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          4 things to know about the Dutch and Flemish feast of St. Martin (Sint-Maarten)
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Date:</strong> 11/07/2019
        </p>

        <p className="mb-6">
          The name day of Sint-Maarten is celebrated in the Netherlands on 11 November. Children walk on the street with lanterns and go around the houses in small groups to get hold of sweets or fruit. Here are four things you should know about Sint-Maarten.
        </p>

        <Section
          title="1. Who was Sint-Maarten?"
          image="/images/blog-2.1.jpeg"
          alt="Saint Martin of Tours"
        >
          <p>
            Saint Martin of Tours was a Roman soldier who was baptised as an adult and became a bishop in a French town. The most famous legend concerning him was that he had once cut his cloak in half to share with a beggar during a snowstorm, to save the latter from the cold. That night, he dreamt of Jesus, wearing the half-cloak and saying to the angels, "Here is Martin, the Roman soldier who is now baptised; he has clothed me." Saint Martin died on November 8, 397. And they buried him on November 11th, 397. St. Martin was known as friend of the children and patron of the poor.
          </p>
        </Section>

        <Section
          title="2. Traditions around Sint-Maarten"
          image="/images/blog-2.2.jpeg"
          alt="Sint-Maarten Traditions"
        >
          <p>
            Sint-Maarten isn't celebrated the same way everywhere. A lantern tour is a general tradition, in some places, processions are also organized and bonfires are ignited in others.
          </p>
          <p>
            In large parts of the Netherlands and Belgium, it is important to get all sorts of goodies in your home before November 11th. At the beginning of that evening the children go past the houses in small groups. Shy faces, lit by the delicate light of the lantern, appear in the doorway. The lanterns are often made during school time. Then a hardly understandable Sint-Maarten song starts. It is also just out again. Immediately the facial expressions change and a plastic bag is hopefully put out, in which some candy or fruit disappears. As soon as the package is collected, the group blows the retreat.
          </p>
          <p>
            The bonfires are especially typical of Limburg, usually in combination with a procession. People gather here in the church where the story of St Maarten is told. Then they walk in a lantern procession to a big fire (Dutch: troshoop) where 'the poor man' from the old story can warm himself up. The children are traditionally given an oliebol. In Herk-de-Stad (Sint-Martinusgemeente) pancakes are baked with Sint-Maarten.
          </p>
          <p>
            Processions are nowadays mainly held in West Flanders, especially in the Veurne and Ypres region. These usually take place on the eve of the name day, so on 10 November. Sint Maarten is accompanied here by Zwarte Piet. Together they walk in the front of the procession and the children follow with their beets and lanterns. After the procession, children in many municipalities can get a bag of goodies (mandarins, chocolate, Onze-Lieve-Vrouwtjes, speculaas, marzipan). On November 11, most children will receive more treats and toys.
          </p>
        </Section>

        <Section
          title="3. Where is Sint-Maarten celebrated?"
          image="/images/blog-2.3.jpeg"
          alt="Sint-Maarten Locations"
        >
          <p>
            This holiday originated in France, and then spread to the Low Countries, the British Isles, Germany, Scandinavia, and Eastern Europe.
          </p>
          <p>
            In the Netherlands:
          </p>
          <p>
            In the Netherlands the celebration occurs in parts of the country. In Utrecht, where St. Martin is the patron saint, a St. Martin's council has been set up to promote Utrecht as St. Martin's city.
          </p>
          <p>
            The tradition does not seem to live equally strong in every region; in Limburg, Noord-Holland in West-Friesland and Groningen it was established in 1997 that the celebration of St Martin in these provinces was still fairly topical. In the provinces of Friesland, Drenthe and Noord-Brabant, an increase in celebrations appeared to have been observed. To a lesser extent, Sint-Maarten is celebrated in South Holland and Zeeland and in parts of Overijssel, Flevoland and Gelderland. In Amsterdam the celebration was not celebrated for centuries, until it appeared in the suburbs in the last decades of the 20th century.
          </p>
          <p>
            In Belgium:
          </p>
          <p>
            In Belgium, the tradition is particularly strong in many places in the East Cantons, in West Flanders, in the region around Aalst and in a few (sub) municipalities in and around Dendermonde. Furthermore, Mechelen, the borough of Hombeek and surrounding places including Weerde and Peutie and places with a Saint-Martin church such as Sint-Martens-Lennik, Moerzeke and Beveren-Waas have a lively celebration. Both in Burcht and in Beveren-Waas, the tradition of Sint-Maarten is alive and kicking thanks to the annual procession of Sint-Maarten on horseback and the children who "griel". This is the gathering of the sweets that Sint Maarten generously scatters around the church. Olen, Retie and Wezel - in the middle of the Antwerp Kempen - light a Sint-Maarten's fire. In Belgian Limburg, traditions are found that resemble those in Dutch Limburg, but they are less current there than in the Netherlands. Elsewhere in the country, St Maarten is not traditionally celebrated.
          </p>
        </Section>

        <Section
          title="4. Sint Maarten songs"
          video="https://www.youtube.com/embed/YJGA3omUgHg?si=AWroxIqrbLGRh9Rj"
        >
          <p>
            The Sint Maarten songs are interesting for folklore researchers because almost all of them are in an exclusively oral tradition, none of them were written by lyricists. The tune of the songs is often the same and is strongly reminiscent of the melody of 'twee emmertjes water halen' or 'Sinterklaas kapoentje' - typical folk tunes. The lyrics of the St Martin songs vary widely from region to region and have different themes. Many texts are still in dialect, which makes the St Martin songs also interesting for linguists.
          </p>
          <p>
            A very common song is:
          </p>
          <pre className="bg-gray-100 p-4 rounded my-4 font-mono whitespace-pre-wrap">
{`Sint Maarten, Sint Maarten
de koeien hebben staarten
de meisjes hebben rokjes aan
daar komt Sinte Maarten aan.`}
          </pre>
          <p>
            So, now you don't have to be all surprised when that doorbell rings and you have little children singing for you. Make sure you have those sweets at hand! Go and enjoy the bonfires and the processions and be amazed by the wonderful lights. Enjoy!
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
