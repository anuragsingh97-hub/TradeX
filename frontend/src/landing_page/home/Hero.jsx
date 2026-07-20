import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container py-4 py-md-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="img-fluid mb-4"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <div className="col-12 col-lg-10">
          <h1 className="mt-3 mt-md-5 display-6 display-md-4">
            Invest in everything
          </h1>

          <p className="fs-6 fs-md-5 px-2">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>

          <Link
            to="/signup"
            className="btn btn-primary fs-5 py-2 px-4 mt-3 mb-5"
            style={{
              width: "100%",
              maxWidth: "250px",
            }}
          >
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;