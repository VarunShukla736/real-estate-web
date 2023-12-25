const initialState = {
  isLogin: false,
  login: {
    phoneNumber: "",
  },
  registration: {
    name: "",
    email: "",
    mobileNumber: "",
    role: "tenant",
  },
};

interface updateLoginStatus {
  type: "UPDATE_LOGIN_STATUS";
  payload: boolean;
}

interface updateLoginPhoneNumber {
  type: "UPATE_LOGIN_PHONE_NUMBER";
  payload: string;
}
type action = updateLoginPhoneNumber | updateLoginStatus;

const AuthReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case "UPATE_LOGIN_PHONE_NUMBER":
      return {
        ...state,
        login: {
          phoneNumber: action.payload,
        },
      };
    case "UPDATE_LOGIN_STATUS":
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReducer;

export const UpdateLoginPhoneNumber = (
  phoneNumber: string
): updateLoginPhoneNumber => {
  return {
    type: "UPATE_LOGIN_PHONE_NUMBER",
    payload: phoneNumber,
  };
};

export const UpdateLoginStatus = (isLogin: boolean): updateLoginStatus => {
  return {
    type: "UPDATE_LOGIN_STATUS",
    payload: isLogin,
  };
};
