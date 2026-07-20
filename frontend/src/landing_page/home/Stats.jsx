import React from "react";

function State() {
  return (
    <div className="container py-4 py-lg-5">
      <div className="row align-items-center gy-5">
        {/* Left Content */}
        <div className="col-12 col-lg-6 px-3 px-lg-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Tradex with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4">The Tradex universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right Image */}
        <div className="col-12 col-lg-6 px-3 px-lg-5 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />

          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-4">
            <a href="" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default State;