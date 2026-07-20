import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  link,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-5">

        {/* Left Spacer (Desktop Only) */}
        <div className="d-none d-lg-block col-lg-1"></div>

        {/* Product Image */}
        <div className="col-12 col-lg-5 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Middle Spacer (Desktop Only) */}
        <div className="d-none d-lg-block col-lg-2"></div>

        {/* Product Details */}
        <div
          className="col-12 col-lg-4 text-muted text-center text-lg-start"
          style={{ lineHeight: "1.8" }}
        >
          <h2>{productName}</h2>

          <p>{productDesription}</p>

          {link.length > 0 && (
            <div className="mt-3 d-flex flex-column flex-sm-row gap-3 gap-sm-4 justify-content-center justify-content-lg-start">
              {link
                .filter((item) => item.label)
                .map((item, ind) => (
                  <a
                    key={ind}
                    className="text-decoration-none"
                    href={item.url}
                  >
                    {item.label}{" "}
                    <i className="fa fa-long-arrow-right"></i>
                  </a>
                ))}
            </div>
          )}

          {/* Store Buttons */}
          <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
            <a href="/">
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxWidth: "160px" }}
              />
            </a>

            <a href="/">
              <img
                src="/media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxWidth: "160px" }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;