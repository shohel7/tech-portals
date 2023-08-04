import React from "react";
import "./SignupGoogle.css";

const SignupGoogle = () => {
  return (
    <div className="container">
      <div className="border rounded py-4 px-4">
        <div className="d-flex flex-column flex-lg-row gap-4">
          <input
            type="email"
            className="py-2 px-2 input-email"
            placeholder="Enter your email address"
          />
          <span className="d-flex flex-column flex-lg-row gap-3 align-items-center">
            <button type="button" className="contact-btn">
              Sign Up
            </button>
            <span className="fw-semibold text-secondary">or</span>
            <button type="button" className="signin-btn">
              Sign up with Google
            </button>
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center py-3">
        <p className="text-secondary">
          Looking to fund raise or invest in the next generation of great <br />
          startups? AngelList Venture can now be found at{" "}
          <a href="">AngelList.com</a>.
        </p>
        <p className="text-secondary">
          Already have an account? <a href="">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupGoogle;
