import React from "react";

function Hero() {
  return (
    <div style={{ backgroundColor: "#f0f0f0", minHeight: "220px" }}>
      <div className="container py-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
          <h1
            className="mb-0"
            style={{
              fontWeight: "500",
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
            }}
          >
            Support Portal
          </h1>

          <button className="btn btn-primary px-4 py-2">
            My tickets
          </button>
        </div>

        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <i className="fa fa-search text-muted"></i>
          </span>

          <input
            type="text"
            className="form-control border-start-0 py-3"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;