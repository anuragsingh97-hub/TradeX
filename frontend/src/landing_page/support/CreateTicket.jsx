import React, { useState } from "react";
import "./CreateTicket.css";

function CreateTicket({ title, icon, link }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="tickets-box mb-2">
        <div
          className="tickets-header d-flex justify-content-between align-items-center"
          onClick={() => setOpen(!open)}
        >
          <div className="d-flex align-items-center">
            <span className="icon-box">
              <i className={icon}></i>
            </span>

            <span
              className="ms-3 fw-normal"
              style={{
                fontSize: "clamp(16px,2vw,20px)",
                opacity: "90%",
              }}
            >
              {title}
            </span>
          </div>

          <span className={`arrow ${open ? "rotate" : ""}`}>
            <i className="fa fa-angle-down fa-lg"></i>
          </span>
        </div>
      </div>

      <div className={`tickets-content ${open ? "show" : ""}`}>
        <ul className="tickets-link mb-0">
          {link.map((item, ind) => (
            <a
              key={ind}
              style={{ textDecoration: "none" }}
              href="/"
            >
              <li>{item}</li>
            </a>
          ))}
        </ul>
      </div>

      <br />
    </>
  );
}

export default CreateTicket;