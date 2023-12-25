import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  UpdateProfileErrorMessage,
  UpdateProfileSuccessMessage,
} from "../redux/reducer/UserReducer";
import { UpdateUserProfile } from "../service/user";

const useUserHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: any) => state.user);
  const updateUserProfileHandler = async (userId: string, data: any) => {
    try {
      const res = await UpdateUserProfile(userId, data, userInfo.token);
      dispatch(UpdateProfileSuccessMessage("Profile Updated Successfully"));
      setTimeout(() => {
        dispatch(UpdateProfileSuccessMessage(""));
        navigate("/dashboard");
      }, 3000);
      return res;
    } catch (error: any) {
      dispatch(UpdateProfileErrorMessage(error.response.data.error.message));
      setTimeout(() => {
        dispatch(UpdateProfileErrorMessage(""));
      }, 5000);
    }
  };
  return {
    updateUserProfileHandler,
  };
};
export default useUserHook;
