export const metadata = {
  title: "Learn Dutch Online - Practical affordable Dutch",
  description: "The best place to learn Dutch, at your own pace and in your own time ",
};

import HeroTestimonials from "@/components/hero-testimonials";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta-language";
import BackToTopButton from "@/components/back-to-top";

export default function Testimonials() {
  return (
    <>
      <HeroTestimonials />
      <LargeTestimonial />
      <BackToTopButton />
    </>
  );
}

