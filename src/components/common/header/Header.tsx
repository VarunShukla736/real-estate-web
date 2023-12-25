// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import ModalComponent from "../modal/Modal";
import Login from "../../login/LoginModal";
import RegisterModal from "../../login/RegisterModal";
import OtpModal from "../../login/OtpModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  IsModalOpen,
  ModalCurrentState,
  UpdateHeaderExpand,
} from "../../../redux/reducer/CommonReducer";
import LogoutModal from "../../login/LogoutModal";

const navData = [
  { id: 1, navItems: "Buy", route: "/buy" },
  { id: 2, navItems: "Rent", route: "/rent" },
  { id: 3, navItems: "Mortage", route: "/mortage" },
  { id: 6, navItems: "Listing", route: "/listing" },
];
const navData2 = [
  { id: 4, navItems: "Saved Homes", route: "/save-properties" },
  { id: 5, navItems: "Post Property", route: "/add-property" },
];

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(0);
  // const [expand, setExpand] = useState(false);
  const { modalCurrState, openModal, headerExpand } = useSelector(
    (state: any) => state.common
  );
  const { isLogin } = useSelector((state: any) => state.auth);
  const { name } = useSelector((state: any) => state.user.userInfo);

  const handleRoute = (url: string, id: number) => {
    if (!isLogin && url === "/add-property") {
      dispatch(IsModalOpen(true));
      navigate(url);
    } else {
      navigate(url);
      dispatch(UpdateHeaderExpand(false));
    }
    setIsActive(id);
  };

  const handleModal = (itemName: string) => {
    if (itemName === "login") {
      dispatch(IsModalOpen(true));
    } else if (itemName === "logout") {
      dispatch(ModalCurrentState("logout"));
      dispatch(IsModalOpen(true));
    }
  };

  return (
    <>
      <nav className="navbar flex justify-between items-center">
        <div className="flex items-center ">
          <div className="logo" onClick={() => handleRoute("/", 0)}>
            <p>Real Estate</p>
          </div>
          <div className="">
            <ul className="item-container ">
              {navData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      isActive === item.id ? "items activeIndex" : "items"
                    }
                    onClick={() => handleRoute(item.route, item.id)}
                  >
                    {item.navItems}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <ul className="item-container">
            {navData2.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    isActive === item.id ? "items activeIndex" : "items"
                  }
                  onClick={() => handleRoute(item.route, item.id)}
                >
                  {item.navItems}
                </li>
              );
            })}
            {isLogin ? (
              <li
                className="login-item capitalize"
                onClick={() => handleModal("logout")}
              >
                {name}
              </li>
            ) : (
              <li className="login-item" onClick={() => handleModal("login")}>
                Sign up or Login
              </li>
            )}
          </ul>
          <div className="ml-2">
            <FontAwesomeIcon
              icon={faBars}
              color="rgb(0, 120, 130)"
              onClick={() => dispatch(UpdateHeaderExpand(true))}
              className="cursor-pointer"
            />
          </div>
        </div>
      </nav>
      {headerExpand && (
        <div className="mobile-navbar">
          <div className="text-end">
            <FontAwesomeIcon
              icon={faXmark}
              color="rgb(0, 120, 130)"
              onClick={() => dispatch(UpdateHeaderExpand(false))}
              className="cursor-pointer"
            />
          </div>
          <ul className="item-container-mobile flex flex-col gap-2">
            {isLogin ? (
              <li
                className="login-item my-1 border-black"
                onClick={() => handleModal("logout")}
              >
                {name}
              </li>
            ) : (
              <li
                className="login-item my-1 border-black"
                onClick={() => handleModal("login")}
              >
                Sign up or Login
              </li>
            )}
            {navData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    isActive === item.id ? "items activeIndex" : "items"
                  }
                  onClick={() => handleRoute(item.route, item.id)}
                >
                  {item.navItems}
                </li>
              );
            })}
          </ul>
          <ul className="item-container-mobile flex flex-col gap-2 mt-2">
            {navData2.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    isActive === item.id ? "items activeIndex" : "items"
                  }
                  onClick={() => handleRoute(item.route, item.id)}
                >
                  {item.navItems}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {openModal && (
        <ModalComponent
          heading={
            modalCurrState === "login"
              ? "Login"
              : modalCurrState === "register"
              ? "Register"
              : modalCurrState === "otp"
              ? "OTP"
              : modalCurrState === "logout"
              ? "Log Out"
              : ""
          }
        >
          {modalCurrState === "login" ? (
            <Login />
          ) : modalCurrState === "register" ? (
            <RegisterModal />
          ) : modalCurrState === "otp" ? (
            <OtpModal />
          ) : modalCurrState === "logout" ? (
            <LogoutModal />
          ) : (
            ""
          )}
        </ModalComponent>
      )}
    </>
  );
}
