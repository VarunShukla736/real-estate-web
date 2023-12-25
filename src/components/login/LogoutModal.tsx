import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdateLoginStatus } from "../../redux/reducer/AuthReducer";
import {
  IsModalOpen,
  ModalCurrentState,
} from "../../redux/reducer/CommonReducer";
import { ResetUserInfo } from "../../redux/reducer/UserReducer";
import "./login.css";

export default function LogoutModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: any) => state.user);

  const handleLogout = () => {
    dispatch(UpdateLoginStatus(false));
    dispatch(IsModalOpen(false));
    dispatch(ResetUserInfo(userInfo));
    dispatch(ModalCurrentState("login"));
    navigate("/");
  };

  return (
    <>
      <div className="login-modal">
        <div className="modal-body">
          <p className="logout-msg">Are You Sure You Want To Log Out ?</p>
          <div className="flex gap-5 justify-center items-center">
            <button className="btn-green" onClick={handleLogout}>
              YES
            </button>
            <button
              className="btn-red"
              onClick={() => {
                dispatch(IsModalOpen(false));
              }}
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
