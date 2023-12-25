import { Link } from "react-router-dom";
import "./pagenotfound.css";

export default function Page404() {
  return (
    <div className="pageNotFoundContainer">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 items-center">
          <p className="errorText1">This page does not exists :(</p>
          <p className="errorText2">
            You can go to homepage or enjoy this pleasing remote location.
          </p>
          <Link to={"/"}>
            {" "}
            <button className="homepageButton">Back to Homepage</button>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://www.99acres.com/images/error/404-error.gif"
            alt="error"
          />
        </div>
      </div>
    </div>
  );
}
