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

export default function ONAExamInfo() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          All You Need to Know About the ONA Exam (Oriëntatie op de Nederlandse Arbeidsmarkt)
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 05/24/2020
        </p>

        <Section title="1. What is Oriëntatie op de Nederlandse arbeidsmarkt?">
          <p className="mb-6">
            This part of the inburgeringsexamen focuses on employment in the Netherlands. Instead of answering multiple-choice questions, you compile and submit a professional portfolio.
          </p>
          <p className="mb-6">
            Your portfolio should include your CV, job application letters, work experience, relevant vacancies, and more. After submission, you’ll be interviewed by two DUO examiners about your portfolio. The interview takes around 40 minutes and evaluates how well you understand the Dutch job market and its processes.
          </p>
        </Section>

        <Section title="2. Exemption from ONA exam">
          <p className="mb-6">
            Not everyone is required to take the ONA exam. You can apply for an exemption if:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>You’ve had paid employment in the Netherlands in the year before your integration application.</li>
            <li>The job lasted at least 6 months with a minimum of 48 hours per month.</li>
            <li>You were officially employed by a registered Dutch company (not self-employed).</li>
          </ul>
          <p>
            If you qualify, you can submit your exemption request via <a href="https://mijninburgering.nl" className="text-blue-600 underline">mijninburgering.nl</a> using your eID.
          </p>
        </Section>

        <Section title="3. What do you need to do to pass this exam?">
          <p className="mb-6">
            First, download the official portfolio template and fill out each section in full. The portfolio will guide you through topics related to job seeking in the Netherlands.
          </p>
          <p className="mb-6">
            Make sure to add your Dutch-format CV and an application letter. Incorrect formatting can lead to rejection, so research Dutch standards carefully. Include all requested documents and relevant proof.
          </p>
          <p className="mb-6">
            After completing your portfolio, attach all supporting files and send it to DUO. You’ll typically receive a response within 6 weeks. Be patient—submitting an incomplete or rushed portfolio can result in delays of up to 4 months.
          </p>
          <p className="mb-6">
            Once DUO approves your portfolio, schedule an interview. Prepare thoroughly by memorizing your portfolio and practicing your responses.
          </p>
          <p>
            During the interview, two DUO examiners will ask you about your employment experience, applications, and job market knowledge. Treat it like a real job interview.
          </p>
        </Section>

        <Section title="Need help preparing?">
          <p className="mb-4">
            Our course includes a full chapter on Dutch CVs, application letters, and interviews. We assist you with filling out the portfolio—not by doing it for you, but by guiding you step by step.
          </p>
          <p>
            <a href="/contact" className="text-blue-600 underline">
              Contact us
            </a>{" "}
            to start your ONA preparation.
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
      <div className="flex flex-col gap-4 items-start">
        <div>{children}</div>
        {image && (
          <div>
            <Image
              src={image}
              alt={alt || ""}
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        )}
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
