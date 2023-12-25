export const PHONE_REGEX = /^[6-9]\d{9}$/;
export const NAME_REGEX = /^[a-zA-Z\s'-]{1,50}$/;
export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const errorMessage = {
  required: "This field is required",
  mobileNumber: "Enter a valid mobile number",
  name: "Enter valid name",
  email: "Enter valid email",
  age: "Enter a valid age",
  floor: "Enter a valid floor",
  otp: "OTP can not be blank",
};
