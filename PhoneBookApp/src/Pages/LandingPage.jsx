import React from "react";
import { Link } from "react-bootstrap-icons";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import LandingContent from "../Components/LandingContent";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="landing-container bg-dark">
        <LandingContent/>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
