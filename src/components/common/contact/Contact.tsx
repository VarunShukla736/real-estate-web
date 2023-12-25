import "./contact.css";
import { MdCall } from "react-icons/md";
import { BiEnvelope } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Label from "../form/Label";
import { useState } from "react";
import {
  EMAIL_REGEX,
  errorMessage,
  NAME_REGEX,
  PHONE_REGEX,
} from "../../../constant/constant";

const contactimage =
  "https://www.99acres.com/universalapp/img/contactUsBanner.shared.png";

export default function Contact() {
  const [error, setError] = useState(false);
  const [validMobile, setValidMobile] = useState(true);
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const validateName = (name: string) => {
    if (String(name).toLowerCase().match(NAME_REGEX)) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };

  const validateMobileNumber = (mobile: any) => {
    if (String(mobile).toLowerCase().match(PHONE_REGEX)) {
      setValidMobile(true);
    } else {
      setValidMobile(false);
    }
  };

  const validateEmail = (email: string) => {
    if (String(email).toLowerCase().match(EMAIL_REGEX)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      contactData.name.length === 0 ||
      contactData.email.length === 0 ||
      contactData.mobile.length === 0 ||
      contactData.message.length === 0
    ) {
      setError(true);
    } else {
      setError(false);
      if (validName || validMobile || validEmail) {
        setContactData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      }
    }
  };

  return (
    <div className="contactContanier">
      <div className="heading">Get in Touch</div>
      <div className="flex flex-col gap-5 w-full">
        <div className="">
          <img src={contactimage} alt="icon" className="contactIcon" />
        </div>
        <div className="infoContainer">
          <div className="infoItem">
            <MdCall fontSize={24} />
            <p>+30 698 007 9500</p>
          </div>
          <div className="infoItem">
            <BiEnvelope fontSize={24} />
            <a href="mailto:sales@appnox.ai">
              <p>sales@appnox.ai</p>
            </a>
          </div>
          <div className="infoItem">
            <AiOutlineQuestionCircle fontSize={24} />
            <p>Send Your Query</p>
          </div>
        </div>
      </div>
      <div className="contactFormContainer">
        <div className="contactHeading">
          <p>Contact US</p>
        </div>
        <form action="" className="mt-4">
          <div>
            <div className="mb-2">
              <Label label="Name" required={true} />
              <input
                type="text"
                className="contactInput"
                name="name"
                value={contactData.name}
                onChange={(e) => {
                  handleChange(e);
                  validateName(e.target.value);
                }}
              />
              {error && contactData.name.length === 0 ? (
                <p className="errorMsg">{errorMessage.required}</p>
              ) : (
                !validName && <p className="errorMsg">{errorMessage.name}</p>
              )}
            </div>
            <div className="mb-2">
              <Label label="Email" required={true} />
              <input
                type="text"
                className="contactInput"
                name="email"
                value={contactData.email}
                onChange={(e) => {
                  handleChange(e);
                  validateEmail(e.target.value);
                }}
              />
              {error && contactData.email.length === 0 ? (
                <p className="errorMsg">{errorMessage.required}</p>
              ) : (
                !validEmail && <p className="errorMsg">{errorMessage.email}</p>
              )}
            </div>
            <div className="mb-2">
              <Label label="Mobile" required={true} />
              <input
                type="text"
                className="contactInput"
                name="mobile"
                value={contactData.mobile}
                onChange={(e) => {
                  handleChange(e);
                  validateMobileNumber(e.target.value);
                }}
              />
              {error && contactData.mobile.length === 0 ? (
                <p className="errorMsg">{errorMessage.required}</p>
              ) : (
                !validMobile && (
                  <p className="errorMsg">{errorMessage.mobileNumber}</p>
                )
              )}
            </div>
            <div className="mb-2">
              <Label label="Message" required={true} />
              <textarea
                rows={4}
                cols={50}
                className="contactInput"
                name="message"
                value={contactData.message}
                onChange={handleChange}
              />
              {error && contactData.message.length === 0 ? (
                <p className="errorMsg">{errorMessage.required}</p>
              ) : (
                ""
              )}
            </div>
            <div className="mt-2">
              <button className="submitButton" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
