export const metadata = {
    title: "Learn Dutch Online - Practical affordable Dutch",
    description: "The best place to learn Dutch, at your own pace and in your own time ",
  };
  
import BackToTopButton from "@/components/back-to-top";
import HeroPrivacy from "@/components/hero-privacy";
import PrivacyPolicy from "@/components/privacy-policy";
  
  export default function Privacy() {
    return (
      <>
        <HeroPrivacy />
        <PrivacyPolicy />
        <BackToTopButton />
      </>
    );
  }
  