import React from "react";
import "./JobSeeker.css";
import { AiOutlineStar } from "react-icons/ai";
import { FaMixer, FaMousePointer, FaRegNewspaper } from "react-icons/fa";

const JobSeeker = () => {
  return (
    <div className="container py-5">
      <div className="row d-flex flex-column flex-md-row flex-lg-row align-items-center gap-5">
        <div className="col">
          <img
            className="w-100"
            src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128701db7e63c6_Frame%20283-min.png"
            alt=""
          />
        </div>
        <div className="col">
          <div>
            <h4>GOT TALENT?</h4>
            <h1 className="py-4">Why job seekers love us</h1>
            <span className="d-flex gap-3">
              <AiOutlineStar className="icon" />
              <p>
                Unique jobs at startups and tech companies you <br /> cant find
                anywhere else
              </p>
            </span>
            <span className="d-flex gap-3">
              <FaMousePointer className="icon" />
              <p>
                Say goodbye to cover letters - your profile is all <br /> you
                need. One click to apply and you are done.
              </p>
            </span>
            <span className="d-flex gap-3">
              <FaRegNewspaper className="icon" />
              <p>
                Everything you need to know to job search - <br />
                including seeing salary and stock options upfront <br /> when
                looking
              </p>
            </span>
            <span className="d-flex gap-3">
              <FaMixer className="icon" />
              <p>
                Connect directly with founders at top startups - no <br /> third
                party recruiters allowed
              </p>
            </span>
            <div className="d-flex gap-2 mt-4">
              <button type="button" className="primary-btn">
                Learn More
              </button>
              <button type="button" className="secondary-btn">
                Sign up now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeeker;
