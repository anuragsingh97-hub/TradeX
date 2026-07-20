import React from "react";

function Hero() {
  return (
    <div className="container py-5">
      <div className="row text-center">
        <div className="col-12">
          <h2 className="mt-4 mt-md-5">Charges</h2>
          <p className="fs-5 text-muted">
            List of all charges and taxes
          </p>
        </div>

        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-4 mt-5">
          <img
            src="media/images/pricing0.svg"
            alt="Free equity delivery"
            className="img-fluid"
            style={{ maxHeight: "200px" }}
          />

          <h2 className="mb-4 mt-4 fs-3">
            Free equity delivery
          </h2>

          <p className="text-muted lh-lg px-2 px-lg-3">
            All equity delivery investments (NSE, BSE), are absolutely free —
            ₹ 0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-4 mt-5">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday"
            className="img-fluid"
            style={{ maxHeight: "200px" }}
          />

          <h2 className="mb-4 mt-4 fs-3">
            Intraday and F&O trades
          </h2>

          <p className="text-muted lh-lg px-2 px-lg-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
            Flat ₹20 on all option trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-4 mt-5 mx-md-auto">
          <img
            src="media/images/pricing0.svg"
            alt="Direct MF"
            className="img-fluid"
            style={{ maxHeight: "200px" }}
          />

          <h2 className="mb-4 mt-4 fs-3">
            Free direct MF
          </h2>

          <p className="text-muted lh-lg px-2 px-lg-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;