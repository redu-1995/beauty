// src/pages/Home.jsx
import React from "react";
import ContactHero from "../components/Modules/contact/ContactHero";
import ContactInfoCards from "../components/Modules/contact/ContactInfoCards";
import ContactForm from "../components/Modules/contact/ContactForm";
import ContactMap from "../components/Modules/contact/ContactMap";
import ContactSocials from "../components/Modules/contact/ContactSocials";
import ContactFAQ from "../components/Modules/contact/ContactFAQ";
import ContactCTA from "../components/Modules/contact/ContactCTA";
export default function Home() {
  return (
    <div className="w-full flex flex-col">
        <ContactHero />
        <ContactInfoCards />
        <ContactForm />
        <ContactMap />
        <ContactSocials />
        <ContactFAQ/>
        <ContactCTA/>
      {/* Other landing page sections go here */}
    </div>
  );
}