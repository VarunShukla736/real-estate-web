import React from "react";
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  const Style = {
    link: "flex justify-center",
  };
  return (
    <footer className="mt-auto">
      <div className=" bg-slate-200 px-4">
        <div className="grid  gap-4 md:gap-5 lg:gap-10 md:flex justify-center pt-12 pb-8 w-full">
          <a className={Style.link} href="https://appnox.ai/our-story/">
            About Us
          </a>
          <a className={Style.link} href="https://appnox.ai/careers/">
            Careers
          </a>
          <a className={Style.link} href="https://appnox.ai/terms-conditions/">
            Terms & Conditions
          </a>
          <a className={Style.link} href="https://appnox.ai/privacy-policy/">
            Privacy Policy
          </a>
          {/* <a className={Style.link} href="/">
            Testimonials
          </a> */}
          <a className={Style.link} href="/contact">
            Contact Us
          </a>
          {/* <a className={Style.link} href="/">
            FAQs
          </a> */}
        </div>
        <hr className="mx-20 md:bg-black hidden md:block md:mx-40 lg:mx-80" />
        <div className="flex text-3xl justify-center py-11 gap-8">
          <a href="https://www.facebook.com/people/Appnox-Technologies/100086321652032/">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/appnoxtech">
            <FaTwitter />
          </a>
          {/* <a href="/">
            <FaInstagram />
          </a> */}
          <a href="https://www.linkedin.com/company/appnox-technologies-pvt-ltd/">
            <FaLinkedin />
          </a>
          {/* <a href="/">
            <FaYoutube />
          </a> */}
        </div>
        <p className="flex justify-center text-sm pb-5">
          © 2023-24 RealEstate Technologies Solution Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
