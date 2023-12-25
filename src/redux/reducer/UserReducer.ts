const initialState = {
  userInfo: {
    name: "",
    email: "",
    phoneNumber: "",
    token: "",
    id: "",
    role: "",
    profilePhoto: "",
  },
  profileSuccessMsg: "",
  profileErrorMsg: "",
};

interface userData {
  name: string;
  email: string;
  phoneNumber: string;
  token: string;
  id: string;
  role: string;
  profilePhoto: string;
}

interface updateUserInfo {
  type: "UPDATE_USER_INFO";
  payload: userData;
}

interface resetUserInfo {
  type: "RESET_USER_INFO";
  payload: userData;
}

interface errorMsg {
  type: "UPDATE_ERROR_MSG";
  payload: string;
}
interface successMsg {
  type: "UPDATE_SUCCESS_MSG";
  payload: string;
}
type action = updateUserInfo | resetUserInfo | errorMsg | successMsg;

const UserReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case "UPDATE_USER_INFO":
      return {
        ...state,
        userInfo: {
          ...action.payload,
        },
      };
    case "RESET_USER_INFO":
      return initialState;

    case "UPDATE_ERROR_MSG":
      return {
        ...state,
        profileErrorMsg: action.payload,
      };
    case "UPDATE_SUCCESS_MSG":
      return {
        ...state,
        profileSuccessMsg: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;

export const UpdateUserInfo = (userInfo: userData): updateUserInfo => {
  return {
    type: "UPDATE_USER_INFO",
    payload: userInfo,
  };
};

export const ResetUserInfo = (initialState: userData): resetUserInfo => {
  return {
    type: "RESET_USER_INFO",
    payload: initialState,
  };
};
export const UpdateProfileSuccessMessage = (
  profileSuccessMsg: string
): successMsg => {
  return {
    type: "UPDATE_SUCCESS_MSG",
    payload: profileSuccessMsg,
  };
};
export const UpdateProfileErrorMessage = (
  profileErrorMsg: string
): errorMsg => {
  return {
    type: "UPDATE_ERROR_MSG",
    payload: profileErrorMsg,
  };
};
