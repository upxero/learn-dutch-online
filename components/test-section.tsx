"use client";

import Link from "next/link";

const DutchTestSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Test your Dutch level</h1>

      <p className="mb-4">
        We have designed a small test to give you an indication of what level of Dutch you are capable of. The test includes aspects from various language levels. As a multiple-choice test, it only gives a loose indication of your abilities and does not measure writing, speaking, or listening skills.
      </p>

      <p className="mb-4">
        If you would like to retain your results, please record them independently. We do not retain any personal data such as email addresses or other identifiers due to privacy regulations.
      </p>

      <p className="mb-4">
        If you have any questions or would like a more formal assessment of your Dutch proficiency, please{" "}
        <Link href="/contact" className="text-blue-600 underline hover:text-blue-800">contact us</Link>.
      </p>

      <p className="mb-4">
        If the questionnaire does not display, select "whitelist it" in the middle of the block. Alternatively,{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf2WPLOsdG9UcC8hpInDCS4aE-AmuazgkdojTzLDrHpDXzJrg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          click here to complete the external version
        </a>.
      </p>

      <div className="mt-8 aspect-video">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf2WPLOsdG9UcC8hpInDCS4aE-AmuazgkdojTzLDrHpDXzJrg/viewform?embedded=true"
          width="100%"
          height="100%"
          className="w-full h-full border-none rounded-lg"
          allowFullScreen
          loading="lazy"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default DutchTestSection;
