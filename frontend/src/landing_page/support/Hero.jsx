import React from "react";
function Hero() {
  return (
    <div style={{ backgroundColor: "#f0f0f0", minHeight: "200px" }}>
      <div className="container py-5">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 style={{ fontWeight: "500" }}>Support Portal</h1>

          <button className="btn btn-primary px-4 py-2">My tickets</button>
        </div>

        {/* Search Box */}
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
