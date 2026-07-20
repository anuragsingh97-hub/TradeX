import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  link,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-5">

        {/* Text */}
        <div
          className="col-12 col-lg-6 text-muted text-center text-lg-start px-3 px-lg-5"
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
                    className="text-decoration-none"
                    key={ind}
                    href={item.url}
                  >
                    {item.label}{" "}
                    <i className="fa fa-long-arrow-right"></i>
                  </a>
                ))}
            </div>
          )}
        </div>

        {/* Image */}
        <div className="col-12 col-lg-6 text-center">
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

      </div>
    </div>
  );
}

export default RightSection;