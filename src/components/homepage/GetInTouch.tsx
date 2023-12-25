import React, { useState } from "react";
import image1 from "../../assets/images/homepage/photo-1564013799919-ab600027ffc6 1.png";
import { EMAIL_REGEX, errorMessage, NAME_REGEX } from "../../constant/constant";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState(false);
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);

  const validateName = (string: any) => {
    if (String(string).toLowerCase().match(NAME_REGEX)) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };
  const validateEmail = (string: any) => {
    if (String(string).toLowerCase().match(EMAIL_REGEX)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (formData.name.length === 0 || formData.email.length === 0) {
      setError(true);
    } else {
      // setError(false);
      if (validEmail || validName) {
        setFormData({ name: "", email: "" });
      }
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full  md:w-3/5">
        <img src={image1} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-2/5 about-info p-8 flex flex-col justify-center	 items-start gap-5">
        <p className="font-bold text-4xl">REAL ESTATE</p>
        <p className="get-touch-text">
          Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
          tempor incididunt ut labore et.
        </p>
        <form
          action=""
          className="flex flex-col gap-5 get-in-touch-form w-full mt-4"
        >
          <input
            type="text"
            name="name"
            
            value={formData.name}
            onChange={(e) => {
              validateName(e.target.value);
              handleChange(e);
            }}
            placeholder="Your Name"
          />
          {error && formData.name.length === 0 ? (
            <p className="errorMsg top-margin">{errorMessage.required}</p>
          ) : !validName ? (
            <p className="errorMsg top-margin">{errorMessage.name}</p>
          ) : (
            ""
          )}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => {
              validateEmail(e.target.value);
              handleChange(e);
            }}
            placeholder="yourmailaddressplease@mail.com"
          />
          {error && formData.email.length === 0 ? (
            <p className="errorMsg top-margin">{errorMessage.required}</p>
          ) : !validEmail ? (
            <p className="errorMsg top-margin">{errorMessage.email}</p>
          ) : (
            ""
          )}
          <input
            type="submit"
            value="Get in Touch With Us"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}
