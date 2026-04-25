function RightSection({
  imageURL,
  productName,
  productDesription,
  link,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        
        <div className="col-lg-6 col-md-12 text-muted" style={{padding:"10%", lineHeight: "1.8"}}>
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
        </div>

        <div className="col-lg-6 col-md-12 text-center">
          <img src={imageURL} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;