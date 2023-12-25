import React from "react";

const contactimage =
  "https://www.99acres.com/universalapp/img/contactUsBanner.shared.png";

export default function About() {
  return (
    <div className="contactContanier">
      <div className="heading">About Us</div>
      <div className="flex flex-col gap-5 w-full">
        <div className="">
          <img src={contactimage} alt="icon" className="contactIcon" />
          <p>
            Launched in 2005, 99acres.com, India’s No. 1 property portal, deals
            with every aspect of the consumers’ needs in the real estate
            industry. It is an online forum where buyers, sellers and
            brokers/agents can exchange information about real estate properties
            quickly, effectively and inexpensively. At 99acres.com, you can
            advertise a property, search for a property, browse through
            properties, build your own property microsite, and keep yourself
            updated with the latest news and trends making headlines in the
            realty sector.
          </p>
        </div>
      </div>
    </div>
  );
}
