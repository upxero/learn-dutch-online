// pages/index.js of app/page.js (Next.js 13+ App Router)

export const metadata = {
  title: "Learn Dutch Online - Practical affordable Dutch",
  description: "The best place to learn Dutch, at your own pace and in your own time",
  keywords: ["dutch", "learn dutch", "online dutch course", "nederlandse les", "taal leren"],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.learn-dutch-online.com",
  },
  openGraph: {
    title: "Learn Dutch Online - Practical affordable Dutch",
    description: "The best place to learn Dutch, at your own pace and in your own time",
    url: "https://www.learn-dutch-online.com",
    siteName: "Learn Dutch Online",
    images: [
      {
        url: "https://www.learn-dutch-online.com/images/logo.png",
        alt: "Learn Dutch Online Logo",
        width: 800,
        height: 600,
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",  
    title: "Learn Dutch Online - Practical affordable Dutch",
    description: "The best place to learn Dutch, at your own pace and in your own time",
    image: "https://www.learn-dutch-online.com/images/logo.png",
  },
};

import Script from 'next/script';
import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import CtaLanguage from "@/components/cta-language";
import Benefit from "@/components/benefit";
import AboutCourses from "@/components/about-courses";
import CtaBusiness from "@/components/cta-business";
import DutchTuitionIntro from "@/components/dutch-tuition";
import PandemicProof from "@/components/pandemic-proof";
import CookiePopup from "@/components/cookie-popup";
import BackToTopButton from "@/components/back-to-top";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Learn Dutch Online - Practical affordable Dutch",
    "description": "The best place to learn Dutch, at your own pace and in your own time.",
    "provider": {
      "@type": "Organization",
      "name": "Learn Dutch Online",
      "url": "https://www.learn-dutch-online.com",
      "logo": "https://www.learn-dutch-online.com/images/logo.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+32 (0) 470 57 31 85",
          "contactType": "customer service",
          "email": "info@learn-dutch-online.com",
          "availableLanguage": ["English", "Dutch", "French"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "09:00",
            "closes": "17:00",
            "timeZone": "CET"
          }
        },
        {
          "@type": "ContactPoint",
          "telephone": "+32 (0) 470 57 31 85",
          "contactType": "customer service",
          "email": "veronique.duvivier@gmail.com",
          "availableLanguage": ["English", "Dutch", "French"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "13:00",
            "timeZone": "CET"
          }
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "Veronique Duvivier",
        "jobTitle": "Founder and Manager",
        "sameAs": [
          "https://www.facebook.com/learn-dutch-online",
          "https://www.linkedin.com/company/learn-dutch-online"
        ]
      }
    },
    "educationalCredentialAwarded": "Dutch language proficiency",
    "inLanguage": "nl",
    "audience": {
      "@type": "Audience",
      "audienceType": "Adults and children learning Dutch"
    }
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Website content */}
      <Hero />
      <div id="business">
        <BusinessCategories />
      </div>
      <Benefit />
      <FeaturesPlanet />
      <AboutCourses />
      <CtaBusiness />
      <DutchTuitionIntro />
      <CtaLanguage />
      <PandemicProof />
      <LargeTestimonial />
      <CookiePopup />
      <BackToTopButton />
    </>
  );
}
