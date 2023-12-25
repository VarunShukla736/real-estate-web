import { useState } from "react";
import { useSelector } from "react-redux";
import { errorMessage } from "../../constant/constant";
import UseAuthHook from "../../serviceHandler/authHook";
import Error from "../common/alert/Error";
import Success from "../common/alert/Success";
export default function OtpModal() {
  const { VerifyOTPServiceHandler, GenerateOTPHandler } = UseAuthHook();
  const { phoneNumber } = useSelector((state: any) => state.auth.login);
  const { errorMessageStatus, successMessageStatus } = useSelector(
    (state: any) => state.common
  );
  const [error, setError] = useState(false);
  const [otp, setOtp] = useState("");

  const handleRoute = (e: any) => {
    e.preventDefault();
    if (otp.length === 0) {
      setError(true);
    } else {
      const formData = {
        phoneNumber: phoneNumber,
        otp: otp,
      };
      VerifyOTPServiceHandler(formData);
    }
  };

  const handleResendOTP = (e: any) => {
    setOtp("");
    e.preventDefault();
    const formData = {
      phoneNumber: phoneNumber,
      otp: otp,
      type: "GENERATE",
    };
    GenerateOTPHandler(formData);
    if (otp.length === 0) {
      setError(true);
    } else {
      const formData = {
        phoneNumber: phoneNumber,
        otp: otp,
      };
      VerifyOTPServiceHandler(formData);
    }
  };
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
            <label htmlFor="">Enter OTP</label>
            <input
              type="text"
              placeholder="OTP"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {error && otp.length === 0 ? (
              <p className="errorMsg">{errorMessage.otp}</p>
            ) : otp.length > 4 ? (
              <p className="errorMsg">OTP can not be more than 4 digit</p>
            ) : (
              ""
            )}
            <input
              type="submit"
              value="Submit"
              onClick={(e) => handleRoute(e)}
            />
            <p className="resend-otp">
              Didn't receive OTP ?{" "}
              <span onClick={handleResendOTP}>Resend OTP</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
