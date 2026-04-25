import React, { useState } from "react";
import "./CreateTicket.css";

function CreateTicket({ title, icon, link }) {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="tickets-box">
      <div className="tickets-header" onClick={() => setOpen(!open)}>
        <div className="d-flex align-items-center">
          <span className="icon-box"><i class={icon}></i></span>
          <span style={{fontSize:"18px", opacity:"90%"}} className="ms-3 fs-5 ">{title}</span>
        </div>

        <span className={`arrow ${open ? "rotate" : ""}`}><i class="fa fa-angle-down fa-lg"></i></span>
      </div>

     </div>
     <div className={`tickets-content ${open ? "show" : ""} border`} >
        <ul className="tickets-link">
            {link.map((item, ind) => (
              <a style={{textDecoration:"none"}} href="/"><li key={ind}>{item}</li></a>
            ))}
        </ul>
      </div>
      <br />
      </>
  );
}

export default CreateTicket;
