import React, { useState } from "react";
import "./JobsCount.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const JobsCount = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="container py-5">
        <div className="d-flex flex-column flex-lg-row justify-content-between text-center gap-3">
          <div className="border py-3 tech-card">
            <h1>
              {counterOn && (
                <CountUp start={10} end={130} duration={2} delay={0} />
              )}
              K +
            </h1>

            <h2>Tech Jobs</h2>
          </div>
          <div className="border py-3 match-card">
            <h1>
              {counterOn && (
                <CountUp start={300} end={567} duration={2} delay={0} />
              )}
              K +
            </h1>
            <h2>Matches Made</h2>
          </div>
          <div className="border py-3 startup-card">
            <h1>
              {counterOn && (
                <CountUp start={5000} end={5670} duration={2} delay={0} />
              )}
              M +
            </h1>
            <h2>Startup Candidates</h2>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default JobsCount;
