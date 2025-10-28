export const metadata = {
  title: "Learn Dutch Online - Corporate Contact",
  description: "Contact us for corporate Dutch courses and tailored training solutions",
};

import BackToTopButton from "@/components/back-to-top";
import Contact from "@/components/contact";
import HeroContact from "@/components/hero-contact";
import ContactForm from "@/components/contact-form";

export default function CorporateContactPage() {
  return (
    <>
      <HeroContact />
      <ContactForm />
      <Contact />
      <BackToTopButton />
    </>
  );
}
