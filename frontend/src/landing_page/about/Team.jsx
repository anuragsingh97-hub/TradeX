import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row py-3 mt-5 border-top">
        <div className="col-12">
          <h1 className="text-center">People</h1>
        </div>
      </div>

      {/* Content */}
      <div
        className="row py-4 text-muted align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        {/* Image */}
        <div className="col-12 col-lg-6 text-center mb-5 mb-lg-0">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle"
            style={{
              width: "250px",
              maxWidth: "70%",
              height: "auto",
            }}
          />

          <h4 className="mt-4">Nithin Kamath</h4>

          <h6>Founder, CEO</h6>
        </div>

        {/* Text */}
        <div className="col-12 col-lg-6 px-3 px-lg-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;