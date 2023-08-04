import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex flex-sm-column flex-lg-row align-items-center gap-5 header-container">
          <div className="col text-start header-left">
            <h1 className="header-heading">
              AngelList Talent is now Tech-Portals
            </h1>
            <p className="fs-5 py-3">Where startups and job seekers connect.</p>
            <div className="d-flex gap-2">
              <button type="button" className="primary-btn">
                Find your next hire
              </button>
              <button type="button" className="secondary-btn">
                Find your next job
              </button>
            </div>
          </div>
          <div className="col ms-5">
            <div className="row d-flex gap-4">
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-offset="200"
                data-aos-mirror="true"
                data-aos-once="true"
                className="col-5 circle-shape"
              ></div>
              <div
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-offset="200"
                data-aos-mirror="true"
                data-aos-once="true"
                className="col-7 rounded-shape"
              ></div>
            </div>
            <div className="row d-flex gap-4 mt-4">
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="200"
                data-aos-mirror="true"
                data-aos-once="true"
                className="col-5 rounded-shape2"
              ></div>
              <div
                data-aos="fade-left"
                data-aos-duration="2200"
                data-aos-offset="200"
                data-aos-mirror="true"
                data-aos-once="true"
                className="col-7 word-shape"
              >
                <span className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="130"
                    zoomAndPan="magnify"
                    viewBox="0 0 30 30.000001"
                    height="130"
                    preserveAspectRatio="xMidYMid meet"
                    version="1.0"
                  >
                    <defs>
                      <clipPath id="id1">
                        <path
                          d="M 5.753906 2.902344 L 23.898438 2.902344 L 23.898438 26.128906 L 5.753906 26.128906 Z M 5.753906 2.902344 "
                          clip-rule="nonzero"
                        />
                      </clipPath>
                    </defs>
                    <g clip-path="url(#id1)">
                      <path
                        fill="rgb(0%, 0%, 0%)"
                        d="M 16.640625 26.128906 L 13.011719 26.128906 C 12.726562 26.128906 12.496094 25.890625 12.496094 25.601562 L 12.496094 6.597656 L 6.277344 6.597656 C 5.988281 6.597656 5.757812 6.363281 5.757812 6.070312 L 5.757812 3.429688 C 5.757812 3.140625 5.988281 2.902344 6.277344 2.902344 L 23.375 2.902344 C 23.660156 2.902344 23.894531 3.140625 23.894531 3.429688 L 23.894531 6.070312 C 23.894531 6.363281 23.660156 6.597656 23.375 6.597656 L 17.15625 6.597656 L 17.15625 25.601562 C 17.15625 25.890625 16.925781 26.128906 16.640625 26.128906 Z M 16.640625 26.128906 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </svg>
                  <svg height="120" width="25">
                    <g fill="none" stroke="red" stroke-width="12">
                      <path stroke-linecap="square" d="M5 60 l215 0" />
                    </g>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-letter-p"
                    width="130"
                    height="130"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="red"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                    <path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />{" "}
                  </svg>
                </span>
              </div>
            </div>
            <div className="row d-flex gap-4 mt-4">
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-offset="200"
                data-aos-mirror="true"
                data-aos-once="true"
                className="col-7 rounded-shape3"
              ></div>
              <div
                data-aos="fade-left"
                data-aos-duration="1700"
                data-aos-offset="200"
                data-aos-mirror="true"
                data-aos-once="true"
                className="col-5 circle-shape2"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
