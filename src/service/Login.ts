import axios from "axios";

export const GenerateOTPService = async (data: any) => {
  const url = `${process.env.REACT_APP_URL}login`;
  return axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const VerifyOTPService = async (data: any) => {
  const url = `${process.env.REACT_APP_URL}verify-otp`;
  return axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const RegisterService = async (data: any) => {
  const url = `${process.env.REACT_APP_URL}user/create`;
  return axios.post(url, data);
};

export const GenerateOTP = async (data: any) => {
  const url = `${process.env.REACT_APP_URL}generate-otp`;
  return axios.post(url, data);
};
