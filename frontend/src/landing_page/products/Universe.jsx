import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h4 className="mt-5 ">The Zerodha Universe</h4>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            style={{ width: "200px", height: "60px" }}
            src="media/images/zerodhaFundhouse.png"
          />
          <p className="text-small text-muted mt-3" style={{fontSize:"14px",paddingLeft:"4rem",paddingRight:"4rem"}}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            style={{ width: "200px", height: "60px" }}
            src="media/images/sensibullLogo.svg"
          />
          <p className="text-small text-muted mt-3" style={{fontSize:"14px",paddingLeft:"4rem",paddingRight:"4rem"}}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            style={{ width: "200px", height: "60px" }}
            src="media/images/tijori.svg"
          />
          <p className="text-small text-muted mt-3" style={{fontSize:"14px",paddingLeft:"4rem",paddingRight:"4rem"}}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            style={{ width: "200px", height: "60px" }}
            src="media/images/streakLogo.png"
          />
          <p className="text-small text-muted mt-3" style={{fontSize:"14px",paddingLeft:"4rem",paddingRight:"4rem"}}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            style={{ width: "200px", height: "60px" }}
            src="media/images/smallcaseLogo.png"
          />
          <p className="text-small text-muted mt-3" style={{fontSize:"14px",paddingLeft:"4rem",paddingRight:"4rem"}}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            style={{ width: "150px", height: "60px" }}
            src="media/images/dittoLogo.png"
          />
          <p className="text-small text-muted mt-3 " style={{fontSize:"14px",paddingLeft:"4rem",paddingRight:"4rem"}}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-4"
          style={{ width: "17%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
