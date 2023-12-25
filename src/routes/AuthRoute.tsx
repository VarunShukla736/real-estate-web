import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage/Hompage";
import AddProperty from "../pages/property/AddProperty";
import StateWiseProperty from "../pages/property/StateWiseProperty";
import SingleProperty from "../pages/property/SingleProperty";
import ListProperty from "../pages/property/ListProperty";
import UpdateProperty from "../pages/property/UpdateProperty";
import Dashboard from "../pages/dashboard/Dashboard";
import EditProfile from "../components/profile/EditProfile";
import Page404 from "../components/common/pageNotFound/Page404";
import SavedProperty from "../pages/property/SavedProperty";
import About from "../components/common/about/About";
import Contact from "../components/common/contact/Contact";

const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/add-property" element={<AddProperty />} />
      <Route path="/state-wise-property" element={<StateWiseProperty />} />
      <Route path="/single-property" element={<SingleProperty />} />
      <Route path="/listing" element={<ListProperty />} />
      <Route path="/update" element={<UpdateProperty />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/save-properties" element={<SavedProperty />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
export default AuthRoute;
