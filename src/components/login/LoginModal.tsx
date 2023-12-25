import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorMessage, PHONE_REGEX } from "../../constant/constant";
import { UpdateLoginPhoneNumber } from "../../redux/reducer/AuthReducer";
import { ModalCurrentState } from "../../redux/reducer/CommonReducer";
import UseAuthHook from "../../serviceHandler/authHook";
import Error from "../common/alert/Error";
import Success from "../common/alert/Success";
import "./login.css";

export default function Login() {
  const { GenerateOTPServiceHandler } = UseAuthHook();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    mobileNumber: "",
  });
  const [validNumber, setValidNumber] = useState(true);
  const [error, setError] = useState(false);
  const { errorMessageStatus, successMessageStatus } = useSelector(
    (state: any) => state.common
  );

  const validateNumber = (number: any) => {
    if (String(number).toLowerCase().match(PHONE_REGEX)) {
      setValidNumber(true);
    } else {
      setValidNumber(false);
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (data.mobileNumber.length === 0) {
      setError(true);
    } else {
      if (validNumber) {
        dispatch(UpdateLoginPhoneNumber(data.mobileNumber));
        const formData = {
          phoneNumber: data.mobileNumber,
        };
        GenerateOTPServiceHandler(formData);
      }
    }
  };

  useEffect(() => {
    return () => {};
  }, []);
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
          <form action="">
            <label htmlFor="">Enter your mobile number</label>
            <input
              type="text"
              placeholder="Enter mobile number"
              name="mobileNumber"
              value={data.mobileNumber}
              onChange={(e) => {
                validateNumber(e.target.value);
                handleChange(e);
              }}
            />
            {error && data.mobileNumber.length === 0 ? (
              <p className="errorMsg">{errorMessage.required}</p>
            ) : (
              !validNumber && (
                <p className="errorMsg">{errorMessage.mobileNumber}</p>
              )
            )}
            <input
              type="submit"
              value={"login"}
              onClick={(e) => handleLogin(e)}
            />
            <p className="register-text">
              Don't have an account ?{" "}
              <span onClick={() => dispatch(ModalCurrentState("register"))}>
                Registration
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
