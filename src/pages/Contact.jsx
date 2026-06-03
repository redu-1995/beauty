// src/pages/Home.jsx
import React from "react";
import ContactHero from "../components/sections/ContactHero";
import ContactInfoCards from "../components/sections/ContactInfoCards";
import ContactForm from "../components/sections/ContactForm";
import ContactMap from "../components/sections/ContactMap";
import ContactSocials from "../components/sections/ContactSocials";
import ContactFAQ from "../components/sections/ContactFAQ";
import ContactCTA from "../components/sections/ContactCTA";
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