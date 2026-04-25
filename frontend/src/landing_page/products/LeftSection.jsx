function LeftSection({ imageURL, productName, productDesription, link }) {
  return (
    <div className="container mt-5 pt-5">
      <div className="row align-items-center">
        <div className="col-1"></div>
        <div className="col-lg-5 col-md-12 text-center">
          <img src={imageURL} alt="product" className="img-fluid" />
        </div>
        <div className="col-2"></div>
        <div
          className="col-lg-4 col-md-12 text-muted"
          style={{ width: "30%", lineHeight: "1.8" }}
        >
          <h2>{productName}</h2>
          <p>{productDesription}</p>
          {link.length > 0 && (
            <div className="mt-3 d-flex gap-4">
              {link
                .filter((item) => item.label)
                .map((item, ind) => (
                  <a className="text-decoration-none" key={ind} href={item.url}>
                    {item.label} <i className="fa fa-long-arrow-right"></i>
                  </a>
                ))}
            </div>
          )}
          <div className="mt-4">
            <a href={"/"}>
              <img src="/media/images/googlePlayBadge.svg" alt="" />
            </a>

            <a href={"/"} className="ms-3">
              <img src="/media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
