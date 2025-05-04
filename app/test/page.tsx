export const metadata = {
    title: "Learn Dutch Online - Practical affordable Dutch",
    description: "The best place to learn Dutch, at your own pace and in your own time ",
  };
  
import BackToTopButton from "@/components/back-to-top";
import HeroTest from "@/components/hero-test";
import DutchTestSection from "@/components/test-section";
  
  export default function Test() {
    return (
      <>
        <HeroTest />
        <DutchTestSection />
        <BackToTopButton />
      </>
    );
  }
  