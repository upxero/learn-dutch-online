export const metadata = {
    title: "Learn Dutch Online - Practical affordable Dutch",
    description: "The best place to learn Dutch, at your own pace and in your own time ",
  };
  
import BackToTopButton from "@/components/back-to-top";
import Contact from "@/components/contact";
import HeroContact from "@/components/hero-contact";
import CourseSignupForm from "@/components/signup-form";
  
  export default function ContactPage() {
    return (
      <>
        <HeroContact />
        <CourseSignupForm />
        <Contact />
        <BackToTopButton />
      </>
    );
  }
  