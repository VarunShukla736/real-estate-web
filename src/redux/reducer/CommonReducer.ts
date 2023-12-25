const initialState = {
  modalCurrState: "login",
  openModal: false,
  errorMessageStatus: "",
  successMessageStatus: "",
  propertyErrorMsg: "",
  propertySuccessMsg: "",
  headerExpand: false,
};

interface updateModalCurrState {
  type: "UPDATE_MODAL_CURRENT_STATE";
  payload: string;
}

interface updateOpenLoginModal {
  type: "UPDATE_OPEN_LOGIN_MODAL";
  payload: boolean;
}

interface updateErrorMessageStatus {
  type: "UPDATE_ERROR_MESSAGE_STATUS";
  payload: string;
}

interface updateSuccessMessageStatus {
  type: "UPDATE_SUCCESS_MESSAGE_STATUS";
  payload: string;
}
interface ErrorMsg {
  type: "UPDATE_ERROR_MSG";
  payload: string;
}
interface SuccessMsg {
  type: "UPDATE_SUCCESS_MSG";
  payload: string;
}

interface updateHeaderExpand {
  type: "UPDATE_HEADER_EXPAND";
  payload: boolean;
}
type action =
  | updateModalCurrState
  | updateOpenLoginModal
  | updateErrorMessageStatus
  | updateSuccessMessageStatus
  | ErrorMsg
  | SuccessMsg
  | updateHeaderExpand;

const CommonReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case "UPDATE_MODAL_CURRENT_STATE": {
      return {
        ...state,
        modalCurrState: action.payload,
      };
    }

    case "UPDATE_OPEN_LOGIN_MODAL": {
      return {
        ...state,
        openModal: action.payload,
      };
    }

    case "UPDATE_ERROR_MESSAGE_STATUS": {
      return {
        ...state,
        errorMessageStatus: action.payload,
      };
    }

    case "UPDATE_SUCCESS_MESSAGE_STATUS": {
      return {
        ...state,
        successMessageStatus: action.payload,
      };
    }
    case "UPDATE_ERROR_MSG":
      return {
        ...state,
        propertyErrorMsg: action.payload,
      };

    case "UPDATE_SUCCESS_MSG":
      return {
        ...state,
        propertySuccessMsg: action.payload,
      };
    case "UPDATE_HEADER_EXPAND":
      return {
        ...state,
        headerExpand: action.payload,
      };
    default:
      return state;
  }
};
export default CommonReducer;

export const ModalCurrentState = (currState: string): updateModalCurrState => {
  return {
    type: "UPDATE_MODAL_CURRENT_STATE",
    payload: currState,
  };
};

export const IsModalOpen = (openModal: boolean): updateOpenLoginModal => {
  return {
    type: "UPDATE_OPEN_LOGIN_MODAL",
    payload: openModal,
  };
};

export const ErrorMessage = (
  errorMessageStatus: string
): updateErrorMessageStatus => {
  return {
    type: "UPDATE_ERROR_MESSAGE_STATUS",
    payload: errorMessageStatus,
  };
};

export const SuccessMessage = (
  successMessageStatus: string
): updateSuccessMessageStatus => {
  return {
    type: "UPDATE_SUCCESS_MESSAGE_STATUS",
    payload: successMessageStatus,
  };
};
export const UpdateErrorMsg = (error: string): ErrorMsg => {
  return {
    type: "UPDATE_ERROR_MSG",
    payload: error,
  };
};

export const UpdateSucessMsg = (sucess: string): SuccessMsg => {
  return {
    type: "UPDATE_SUCCESS_MSG",
    payload: sucess,
  };
};

export const UpdateHeaderExpand = (
  headerExpand: boolean
): updateHeaderExpand => {
  return {
    type: "UPDATE_HEADER_EXPAND",
    payload: headerExpand,
  };
};
