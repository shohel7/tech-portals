import React from "react";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import SignupGoogle from "../SignupGoogle/SignupGoogle";
import OurTeam from "../OurTeam/OurTeam";
import JobsCount from "../JobsCount/JobsCount";
import JobSeeker from "../JobSeeker/JobSeeker";

const Home = () => {
  return (
    <div className="px-4">
      <Navigation />
      <Header />
      <SignupGoogle />
      <OurTeam />
      <JobsCount />
      <JobSeeker />
    </div>
  );
};

export default Home;
