export const metadata = {
  title: "Learn Dutch Online - Practical affordable Dutch",
  description: "The best place to learn Dutch, at your own pace and in your own time ",
};

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
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
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
      <Cta />
      <CookiePopup />
      <BackToTopButton />
    </>
  );
}
