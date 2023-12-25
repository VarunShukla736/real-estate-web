import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EMAIL_REGEX,
  errorMessage,
  NAME_REGEX,
  PHONE_REGEX,
} from "../../constant/constant";
import { UpdateLoginPhoneNumber } from "../../redux/reducer/AuthReducer";
import { ModalCurrentState } from "../../redux/reducer/CommonReducer";
import UseAuthHook from "../../serviceHandler/authHook";
import Error from "../common/alert/Error";
import Success from "../common/alert/Success";

export default function RegisterModal() {
  const dispatch = useDispatch();
  const { CreateUserHandler } = UseAuthHook();
  const [registerFormData, setResgisterFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [error, setError] = useState(false);
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validNumber, setValidNumber] = useState(true);
  const { errorMessageStatus, successMessageStatus } = useSelector(
    (state: any) => state.common
  );

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setResgisterFormData({ ...registerFormData, [name]: value });
  };

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
  const validateNumber = (number: any) => {
    if (String(number).toLowerCase().match(PHONE_REGEX)) {
      setValidNumber(true);
    } else {
      setValidNumber(false);
    }
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
    if (
      registerFormData.name.length === 0 ||
      registerFormData.email.length === 0 ||
      registerFormData.phoneNumber.length === 0
    ) {
      setError(true);
    } else {
      setError(false);
      if (validName || validNumber || validEmail) {
        dispatch(UpdateLoginPhoneNumber(registerFormData.phoneNumber));
        CreateUserHandler(registerFormData);
      }
    }
  };

  console.log(registerFormData, "registerFormData");

  return (
    <>
      {errorMessageStatus ? (
        <Error msg={errorMessageStatus} />
      ) : successMessageStatus ? (
        <Success msg={successMessageStatus} />
      ) : (
        ""
      )}
      <div className="login-modal">
        <div className="modal-body">
          <form action="" className="flex flex-col gap-5">
            <div>
              <label htmlFor="">Enter your name</label>
              <input
                type="text"
                placeholder="Enter name"
                onChange={(e) => {
                  validateName(e.target.value);
                  handleChange(e);
                }}
                name="name"
                value={registerFormData.name}
              />
              {error && registerFormData.name.length === 0 ? (
                <p className="errorMsg">{errorMessage.required}</p>
              ) : !validName ? (
                <p className="errorMsg">{errorMessage.name}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label htmlFor="">Enter your email</label>
              <input
                type="text"
                placeholder="Enter email"
                onChange={(e) => {
                  validateEmail(e.target.value);
                  handleChange(e);
                }}
                name="email"
                value={registerFormData.email}
              />
              {error && registerFormData.email.length === 0 ? (
                <p className="errorMsg">{errorMessage.required}</p>
              ) : !validEmail ? (
                <p className="errorMsg">{errorMessage.email}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label htmlFor="">Enter your mobile number</label>
              <input
                type="text"
                placeholder="Enter mobile number"
                onChange={(e) => {
                  validateNumber(e.target.value);
                  handleChange(e);
                }}
                name="phoneNumber"
                value={registerFormData.phoneNumber}
              />
              {error && registerFormData.phoneNumber.length === 0 ? (
                <p className="errorMsg">{errorMessage.required}</p>
              ) : !validNumber ? (
                <p className="errorMsg">{errorMessage.mobileNumber}</p>
              ) : (
                ""
              )}
            </div>
            <input
              type="submit"
              value={"Register"}
              onClick={(e) => handleRegister(e)}
            />
            <p className="register-text">
              Have an account ?{" "}
              <span onClick={() => dispatch(ModalCurrentState("login"))}>
                Sign in
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
