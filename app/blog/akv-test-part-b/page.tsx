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

export default function AkvTestPartBBlog() {
  return (
    <>
      <HeroBlog />
      <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          All you need to know about AKV test part B: consultation and report
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          <strong>Published:</strong> 01/13/2020
        </p>

        <p className="mb-6">
          So far we have discussed the first two aspects of the AKV process. First was the registration process and second was the first part of the actual evaluation.
          Now we are going to cover the second part of five, the doctor-patient conversation.
        </p>

        <p className="mb-6">
          As mentioned in previous blogs, the AKV is applicable to the following professions obtained and practiced outside of the EU:
          Pharmacist, doctor, physiotherapist, mental health psychologist, psychotherapist, physician assistant, dentist, obstetrician and nurse.
        </p>

        <p className="mb-6">
          Now lets get into more detail about the requirements for the second test, the doctor-patient conversation. We will also provide many hints and tips for you to be able to prepare thoroughly for this exam part.
        </p>

        <Section
          title="1. Doctor-patient conversation"
          image="/images/akv-doctor-patient.jpg"
          alt="Doctor and patient consultation"
        >
          <>
            <p>
              To start, you are given a briefing document containing a test case which you need to discuss with a test official who acts as the patient.
              The "patient" gets allocated a role to play with a small script from which to discuss the topic.
            </p>
            <p>
              You are allocated 10 minutes to prepare and 15 minutes to conduct the discussion.
            </p>
            <p>
              Here are some handy hints and tips to help guide you through this process:
            </p>
            <ol className="list-decimal list-inside mb-4">
              <li>Use typical Dutch expressions in your conversation. You will score extra marks and the conversation will go smoother. Remember your exam will be assessed by Dutch language teachers and not fellow doctors so your language proficiency is more important than your industry knowledge.</li>
              <li>Demonstrate confidence by staying calm and talking slowly during the process. Listen carefully to the patient and try not to interrupt them while they speak.</li>
              <li>Focus on the emotions and experiences of your patient. Show empathy and make sure to make obvious that you understand how the patient feels about each mention.</li>
              <li>Start the conversation with an open ended question such as "how can I help you?" or "What ails you?". Follow with more detailed questions like "Can you tell me a bit more about that?", "When did it start?" etc.</li>
              <li>Include questions about the general aspects of your patient's life such as "Where do you work?", "Do you have children?" etc.</li>
              <li>After the simulation ask your patient if they have any more questions before concluding the interview.</li>
            </ol>
            <p>
              Many of our students at Learn Dutch Online consider this the hardest part of all the exams. This is where practice with a language trainer becomes invaluable.
            </p>
          </>
        </Section>

        <Section
          title="2. Report in detail"
          image="/images/akv-report-writing.jpg"
          alt="Writing a medical report"
        >
          <>
            <p>
              For the second part of this test, you will need to write a report from the doctor-patient consultation you have just concluded with your simulation patient, and get 30 minutes to do so.
            </p>
            <p>
              Unlike the previous test, you get to complete your report electronically using Apache OpenOffice Writer and you are allowed a dictionary to assist you.
            </p>
            <p>Preparing:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Familiarize yourself with Apache OpenOffice Writer to avoid unnecessary stress during the exam. The software is free and can be downloaded online.</li>
              <li>Preparation is key to doing the exercise correctly and smoothly. Language trainers help with grammar, spelling and fluency for better results.</li>
            </ul>
            <p>Report structure:</p>
            <p>There are 6 points that correspond with most interviews to help you structure your report. They are as follows:</p>
            <ol className="list-decimal list-inside mb-4">
              <li>Details and history of the patient.</li>
              <li>Reason for the visit.</li>
              <li>Complaints of the patient.</li>
              <li>The patient's outlook on their ailment's impact.</li>
              <li>Advice and instructions you have given.</li>
              <li>Mutual agreements and actions to be taken.</li>
            </ol>
            <p>
              Conclude your report with a summary of the conversation and the advice you have been given in your brief at the beginning of the exam.
            </p>
          </>
        </Section>

        <Section
          title="Video: Tips for the AKV test part B"
          video="https://www.youtube.com/embed/examplevideoid"
        >
          <p>Watch this video for practical tips and tricks on passing the AKV test part B, including the consultation and report writing.</p>
        </Section>

        <p className="mb-6">
          Have you been through this part of the AKV exam? Would you like to share your experience with others? Feel free to comment below.
        </p>

        <p className="mb-6">
          Would you like to get in contact with a language trainer to help you prepare for this exam? <span className="text-blue-600 cursor-pointer">Contact us here</span> and we will gladly assist you!
        </p>

        <p className="mt-10 text-lg text-center font-semibold">
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
        <div className={image ? "md:w-1/2" : "w-full"}>{children}</div>
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
