import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center gy-4">
        {/* Left Content */}
        <div className="col-12 col-lg-4 text-center text-lg-start">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>

          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Empty Spacer (Desktop Only) */}
        <div className="d-none d-lg-block col-lg-2"></div>

        {/* Pricing Cards */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="row text-center g-3">
            <div className="col-12 col-sm-6">
              <div className="border p-4 h-100">
                <h1 className="mb-3">₹0</h1>

                <p>
                  Free equity delivery and
                  <br />
                  direct mutual funds
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="border p-4 h-100">
                <h1 className="mb-3">₹20</h1>

                <p>Intraday and F&amp;O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;