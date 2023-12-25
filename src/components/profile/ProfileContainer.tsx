import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./profile.css";

export default function ProfileContainer() {
  const userDummyImage =
    "https://rozgar.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.8c0e1a33.jpg&w=96&q=75";
  const { userInfo } = useSelector((state: any) => state.user);
  return (
    <div className="profileContainer">
      <div className="profilePhoto">
        <img
          src={userInfo.profilePhoto ? userInfo.profilePhoto : userDummyImage}
          alt="user"
          className="userImage"
        />
        <div>
          <p className="userName">
            {userInfo.name}{" "}
            {userInfo.role && <span className="role">{userInfo.role}</span>}
          </p>
          <p className="email">{userInfo.email}</p>
        </div>
      </div>
      <div>
        <Link to={"/edit-profile"}>
          <button className="editButton">Edit Profile</button>
        </Link>
      </div>
    </div>
  );
}
