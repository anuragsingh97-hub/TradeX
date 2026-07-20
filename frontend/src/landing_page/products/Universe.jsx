import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container my-5">
      <div className="row text-center">
        <div className="col-12">
          <h4 className="mt-5">The Zerodha Universe</h4>

          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-4 p-4 mt-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            className="img-fluid"
            style={{
              maxWidth: "200px",
              height: "60px",
              objectFit: "contain",
            }}
          />

          <p
            className="text-small text-muted mt-3 px-lg-5"
            style={{ fontSize: "14px" }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-4 p-4 mt-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid"
            style={{
              maxWidth: "200px",
              height: "60px",
              objectFit: "contain",
            }}
          />

          <p
            className="text-small text-muted mt-3 px-lg-5"
            style={{ fontSize: "14px" }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-4 p-4 mt-4">
          <img
            src="media/images/tijori.svg"
            alt="Tijori"
            className="img-fluid"
            style={{
              maxWidth: "200px",
              height: "60px",
              objectFit: "contain",
            }}
          />

          <p
            className="text-small text-muted mt-3 px-lg-5"
            style={{ fontSize: "14px" }}
          >
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        {/* Card 4 */}
        <div className="col-12 col-md-6 col-lg-4 p-4 mt-4">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid"
            style={{
              maxWidth: "200px",
              height: "60px",
              objectFit: "contain",
            }}
          />

          <p
            className="text-small text-muted mt-3 px-lg-5"
            style={{ fontSize: "14px" }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* Card 5 */}
        <div className="col-12 col-md-6 col-lg-4 p-4 mt-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
            style={{
              maxWidth: "200px",
              height: "60px",
              objectFit: "contain",
            }}
          />

          <p
            className="text-small text-muted mt-3 px-lg-5"
            style={{ fontSize: "14px" }}
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        {/* Card 6 */}
        <div className="col-12 col-md-6 col-lg-4 p-4 mt-4">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid"
            style={{
              maxWidth: "150px",
              height: "60px",
              objectFit: "contain",
            }}
          />

          <p
            className="text-small text-muted mt-3 px-lg-5"
            style={{ fontSize: "14px" }}
          >
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        {/* Button */}
        <div className="col-12 mt-5">
          <Link
            to="/signup"
            className="btn btn-primary fs-5 py-2 px-4"
            style={{
              width: "100%",
              maxWidth: "260px",
            }}
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;