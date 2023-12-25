import { useDispatch } from "react-redux";
import { UpdateLoginStatus } from "../redux/reducer/AuthReducer";
import {
  ErrorMessage,
  IsModalOpen,
  ModalCurrentState,
  SuccessMessage,
} from "../redux/reducer/CommonReducer";
import { UpdateUserInfo } from "../redux/reducer/UserReducer";
import {
  GenerateOTP,
  GenerateOTPService,
  RegisterService,
  VerifyOTPService,
} from "../service/Login";

const UseAuthHook = () => {
  const dispatch = useDispatch();
  const GenerateOTPServiceHandler = async (data: any) => {
    try {
      const res = await GenerateOTPService(data);
      dispatch(SuccessMessage("OTP sent"));
      dispatch(ModalCurrentState("otp"));
      return res.data.result;
    } catch (error: any) {
      dispatch(ErrorMessage(error.response.data.error.message));
      setTimeout(() => {
        dispatch(ErrorMessage(""));
      }, 3000);
      return error.response.data.error.message;
    }
  };

  const VerifyOTPServiceHandler = async (data: any) => {
    try {
      const res = await VerifyOTPService(data);
      const { result } = res.data;
      dispatch(IsModalOpen(false));
      dispatch(SuccessMessage(""));
      dispatch(ErrorMessage(""));
      dispatch(ModalCurrentState("login"));
      dispatch(UpdateUserInfo(result));
      dispatch(UpdateLoginStatus(true));
      return res.data.result;
    } catch (error: any) {
      dispatch(ErrorMessage(error.response.data.error.message));
    }
  };

  const CreateUserHandler = async (data: any) => {
    try {
      dispatch(ErrorMessage(""));
      const res = await RegisterService(data);
      dispatch(SuccessMessage("OTP sent"));
      dispatch(ModalCurrentState("otp"));
      return res.data.result;
    } catch (error: any) {
      dispatch(ErrorMessage(error.response.data.error.message));
    }
  };
  const GenerateOTPHandler = async (data: any) => {
    try {
      const res = await GenerateOTP(data);
      return res.data.result;
    } catch (error: any) {
      dispatch(ErrorMessage(error.response.data.error.message));
    }
  };

  return {
    GenerateOTPServiceHandler,
    VerifyOTPServiceHandler,
    CreateUserHandler,
    GenerateOTPHandler,
  };
};

export default UseAuthHook;
