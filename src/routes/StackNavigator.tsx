import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/common/header/Header";
import AuthRoute from "./AuthRoute";
import Footer from "../components/common/footer/Footer";

export default function StackNavigator() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AuthRoute />
        <Footer />
      </BrowserRouter>
    </>
  );
}
