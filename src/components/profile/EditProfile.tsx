import "./profile.css";
import Label from "../common/form/Label";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { UpdateUserInfo } from "../../redux/reducer/UserReducer";
import { errorMessage } from "../../constant/constant";
import useUserHook from "../../serviceHandler/UserHook";
import UsePropertyHook from "../../serviceHandler/PropertyHook";
import Error from "../common/alert/Error";
import Success from "../common/alert/Success";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const userDummyImage =
    "https://rozgar.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.8c0e1a33.jpg&w=96&q=75";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { updateUserProfileHandler } = useUserHook();
  const { uploadImagesHandler } = UsePropertyHook();
  const { userInfo, profileSuccessMsg, profileErrorMsg } = useSelector(
    (state: any) => state.user
  );
  const [error, setError] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [validName, setValidName] = useState(true);
  const [editProfileData, setEditProfileData] = useState({
    name: userInfo.name,
    role: userInfo.role,
    email: userInfo.email,
    profilePhoto: userInfo.profilePhoto,
  });
  const validateName = (string: any) => {
    if (
      String(string)
        .toLowerCase()
        .match(/^[A-z]*$|^[A-z]+\s[A-z]*$/)
    ) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };
  const validateEmail = (string: any) => {
    if (
      String(string)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEditProfileData({
      ...editProfileData,
      [name]: value,
    });
  };

  const handleProfilePicture = async (e: any) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    const res = await uploadImagesHandler(data);
    const imageUrl = res.baseUrl + res.imagePath;
    setEditProfileData({
      ...editProfileData,
      profilePhoto: imageUrl,
    });
  };
  const handleResetImage = (e: any) => {
    e.preventDefault();
    if (editProfileData.profilePhoto) {
      setEditProfileData({ ...editProfileData, profilePhoto: "" });
    } else {
      dispatch(UpdateUserInfo({ ...userInfo, profilePhoto: "" }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (editProfileData.name.length === 0) {
      setError(true);
    } else {
      if (validEmail || validName) {
        updateUserProfileHandler(userInfo.id, editProfileData);
        window.scrollTo(0, 0);
        dispatch(
          UpdateUserInfo({
            ...userInfo,
            name: editProfileData.name,
            role: editProfileData.role,
            email: editProfileData.email,
            profilePhoto: editProfileData.profilePhoto,
          })
        );
      }
    }
  };
  const handleReset = (e: any) => {
    e.preventDefault();
    setEditProfileData({
      ...editProfileData,
      name: "",
      role: "",
      email: "",
      profilePhoto: "",
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="p-5">
      <p className="Heading">Edit Profile</p>
      <form action="" className="editProfileForm">
        <div className="mb-5">
          {profileErrorMsg ? (
            <Error msg={profileErrorMsg} />
          ) : profileSuccessMsg ? (
            <Success msg={profileSuccessMsg} />
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2.5">
          <img
            src={
              editProfileData.profilePhoto
                ? editProfileData.profilePhoto
                : userInfo.profilePhoto
                ? userInfo.profilePhoto
                : userDummyImage
            }
            alt="user"
            className="w-24 h-24 rounded-full object-cover"
          />
          <label htmlFor="profile-pidcture1" className="uploadBtn profileBtn">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="profile-pidcture1"
            name="profilePicture"
            onChange={handleProfilePicture}
            hidden
          />
          <button className="profileBtn removeBtn" onClick={handleResetImage}>
            Remove Image
          </button>
        </div>
        <div className="mb-2 mt-2.5 p-2.5">
          <Label label="Name" required={false} />
          <input
            type="text"
            name="name"
            id="name"
            value={editProfileData.name}
            placeholder="Enter Name"
            onChange={(e) => {
              validateName(e.target.value);
              handleChange(e);
            }}
          />
          {error && editProfileData.name.length === 0 ? (
            <p className="errorMsg">{errorMessage.required}</p>
          ) : !validName ? (
            <p className="errorMsg">{errorMessage.name}</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-2.5 p-2.5">
          <div className="mb-2 w-full">
            <Label label="Email" required={false} />
            <input
              type="text"
              name="email"
              id="email"
              value={editProfileData.email}
              placeholder="Enter Email"
              onChange={(e) => {
                validateEmail(e.target.value);
                handleChange(e);
              }}
            />
            {error && editProfileData.email.length === 0 ? (
              <p className="errorMsg">{errorMessage.required}</p>
            ) : !validEmail ? (
              <p className="errorMsg">{errorMessage.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-2 w-full">
            <Label label="Mobile Number" required={false} />
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              defaultValue={userInfo.phoneNumber}
              placeholder="Enter Mobile Number"
            />
          </div>
        </div>
        <div className="p-2.5">
          <div className="mb-2">
            <Label label="Role" required={false} />
            <div className="flex gap-2 flex-wrap">
              <div>
                {userInfo.role === "tenant" ? (
                  <input
                    type="radio"
                    id="tenant"
                    name="role"
                    value="tenant"
                    className="mr-1 cursor-pointer"
                    onChange={handleChange}
                    checked
                  />
                ) : (
                  <input
                    type="radio"
                    id="tenant"
                    name="role"
                    value="tenant"
                    className="mr-1 cursor-pointer"
                    onChange={handleChange}
                  />
                )}
                <label htmlFor="tenant" className="capitalize">
                  tenant
                </label>
              </div>
              <div>
                {userInfo.role === "owner" ? (
                  <input
                    type="radio"
                    id="owner"
                    name="role"
                    value="owner"
                    className="mr-1 cursor-pointer"
                    onChange={handleChange}
                    checked
                  />
                ) : (
                  <input
                    type="radio"
                    id="owner"
                    name="role"
                    value="owner"
                    className="mr-1 cursor-pointer"
                    onChange={handleChange}
                  />
                )}
                <label htmlFor="owner" className="capitalize">
                  owner
                </label>
              </div>
              <div>
                {userInfo.role === "broker" ? (
                  <input
                    type="radio"
                    id="broker"
                    name="role"
                    value="broker"
                    className="mr-1 cursor-pointer"
                    onChange={handleChange}
                    checked
                  />
                ) : (
                  <input
                    type="radio"
                    id="broker"
                    name="role"
                    value="broker"
                    className="mr-1 cursor-pointer"
                    onChange={handleChange}
                  />
                )}
                <label htmlFor="broker" className="capitalize">
                  broker
                </label>
              </div>
            </div>
          </div>
          {error && editProfileData.role.length === 0 ? (
            <p className="errorMsg">{errorMessage.required}</p>
          ) : (
            ""
          )}
        </div>
        <div className="p-2.5 flex gap-2.5">
          <button className="profileBtn uploadBtn" onClick={handleSubmit}>
            Save Changes
          </button>
          <button className="profileBtn cancelBtn" onClick={handleReset}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
