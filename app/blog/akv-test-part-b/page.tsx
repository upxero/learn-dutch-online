export const metadata = {
  title: "AKV Test Part B: Doctor-Patient Consultation and Report Writing Explained",
  description:
    "Everything you need to know about AKV test part B: how to succeed in the doctor-patient conversation and write the follow-up report. Includes structure tips and preparation advice.",
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

        <Section title="1. Doctor- patient conversation">
          <>
            <p>
              To start, you are given a briefing document containing a test case which you need to discuss with a test official who acts as the patient. The "patient" gets allocated a role to play with a small script from which to discuss the topic.
            </p>
            <p>
              You are allocated 10 minutes to prepare and 15 minutes to conduct the discussion.
            </p>
            <p>
              Here are some handy hints and tips to help guide you through this process:
            </p>
            <ol className="list-decimal list-inside mb-4 space-y-2">
              <li>Use typical Dutch expressions in your conversation. You will score extra marks and the conversation will go smoother. Remember your exam will be assessed by Dutch language teachers and not fellow doctors so your language proficiency is more important than your industry knowledge.</li>
              <li>Demonstrate confidence by staying calm and talking slowly during the process. Listen carefully to the patient and try not to interrupt your them while they speak. Often when a student is nervous they can't help but do that during the interview.</li>
              <li>Focus on the emotions and experiences of your patient. Show empathy and make sure to make obvious that you understand how the patient feels about each mention. Use phrases like "how does that make you feel" and "Are you afraid of that?" but only in acceptable Dutch of course.</li>
              <li>It is best to start the conversation with an open ended question such as "how can I help you?" or "What ails you?". As with regular consultations, question in more detail about your patients statements: "Can you tell me a bit more about that?", "Can you give me an example of what you mean?", "When did it start?", "What do you do when you are in pain?". This part is no different to most consultations but it is very important to show interest in the patient and their emotional state & well-being during the simulation.</li>
              <li>Make sure to include questions pertaining to the general aspects your patient's life such as "Where do you work?", "Do you have children?" etc.</li>
              <li>After the simulation you are expected to write a report about your patient which makes reference not only to the ailment itself but also how it impacts their daily lifestyle and to what degree it impedes them from living a normal life, so pay careful attention to that.</li>
              <li>Remember to ask your patient if they have any more questions before concluding the interview.</li>
            </ol>
            <Image
              src="/images/blog-12.1.jpeg"
              alt="Doctor and patient consultation"
              width={300}
              height={100}
              className="rounded-lg shadow-md mx-auto my-6"
            />
            <p>
              Many of our students at Learn Dutch Online consider this the hardest part of all the exams. This is where practice with a language trainer becomes invaluable. Our trainers play the part of the patients and guide you to a perfect performance every time with various scenarios. We have helped many professionals through this process and know how to prepare you for the exam.
            </p>
          </>
        </Section>

        <Section title="2. Report in detail">
          <>
            <p>
              For the second part of this test , you will  need to write a report from the doctor-patient consultation you have just concluded your simulation patient, and get 30 minutes to do so.
            </p>
            <p>
              Unlike with the previous test, you get to complete your report electronically. The program you will use is open office writer and you are allowed a dictionary to assist you.
            </p>
            <p>Preparing:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Make sure you are familiar with Apache OpenOffice Writer as that will be the program you are mandated to use during your exam. Once you are familiar with the software, you can avoid unnecessary stress and wasted time on you exam. The software is free to download and use and can be found here.</li>
              <li>Preparation is key to not only get you familiar with the exercise but also to help you do it correctly and smoothly every time, this is where a language trainer is invaluable. Your trainer assesses how fluently you use the language as well as corrects your grammar and spelling errors, guiding you closer to a perfect result with every practice report.</li>
            </ul>
            <Image
              src="/images/blog-12.2.jpeg"
              alt="Writing a medical report"
              width={300}
              height={100}
              className="rounded-lg shadow-md mx-auto my-6"
            />
            <p>Report structure:</p>
            <p>There are 6 points that correspond with most interviews to help you structure your report. These may vary according to your verbal interview and you can substitute some points with others when applicable. They are as follows:</p>
            <ol className="list-inside mb-4 space-y-4">
              <li>
                <span className="text-orange-600 font-semibold block">1. Details and history of the patient.</span>
                <span>This is the basic description of the patient and any potential medical history you may have been given about them.</span>
              </li>
              <li>
                <span className="text-orange-600 font-semibold block">2. Reason for the visit.</span>
                <span>What ailment or symptom motivated their visit.</span>
              </li>
              <li>
                <span className="text-orange-600 font-semibold block">3. Complaints of the patient.</span>
                <span>Their experience of the patient regarding the ailment.</span>
              </li>
              <li>
                <span className="text-orange-600 font-semibold block">4. The patient's outlook.</span>
                <span>How the patient perceives the influence of this ailment on living their life normally in the future.</span>
              </li>
              <li>
                <span className="text-orange-600 font-semibold block">5. Advice and instructions you have given.</span>
                <span>The instructions given to the patient to overcome or manage their condition.</span>
              </li>
              <li>
                <span className="text-orange-600 font-semibold block">6. Mutual agreements.</span>
                <span>What you and your patient agreed on and the actions to be taken in future.</span>
              </li>
            </ol>
            <Image
              src="/images/blog-12.3.jpeg"
              alt="Example medical report structure"
              width={300}
              height={100}
              className="rounded-lg shadow-md mx-auto my-6"
            />
            <p>
              Conclude your report with a summary of the conversation and the advice you have been given in your brief at the beginning of the exam.
            </p>
          </>
        </Section>

        <p className="mt-10 text-lg">
          Have you been through this part of the AKV exam? Would you like to share your experience with others? Feel free to comment below.
        </p>

        <p className="mb-6">
          Would you like to get in contact with a language trainer to help you prepare for this exam? <a href="/contact" className="text-blue-600 underline">Contact us here and we will gladly assist you!</a>
        </p>
      </main>
    </>
  );
}

function Section({ title, image, alt, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      {image && (
        <div className="mb-4">
          <Image src={image} alt={alt || ""} width={400} height={250} className="rounded shadow-md" />
        </div>
      )}
      <div className="space-y-4">{children}</div>
    </section>
  );
}
