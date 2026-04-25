import React, { useState } from "react";

import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
import "./SupportPage.css";
function SupportPage() {
  return (
    <>
      <Hero />
      <div className="container mt-5">
        <div className="row">
          {/* LEFT SIDE */}
          <div className="col-lg-8">
            <CreateTicket
              title="Account Opening"
              icon="fa fa-plus-circle"
              link={[
                "Resident individual",
                "Minor",
                "Non Resident Indian (NRI)",
                "Company, Partnership, HUF and LLP",
                "Glossary"
              ]}
            />
            <CreateTicket
              title="Your Zerodha Account"
              icon="fa fa-user-circle"
              link={[
                "Your Profile",
                "Account Modification",
                "Client Master Report (CMR) and Dipository participant (DP)",
                "Nomination",
                "Transfer and conversion securities"
              ]}
            />
            <CreateTicket
              title="Kite"
              icon="fa fa-line-chart"
              link={[
                "IPO",
                "Tranding FAQs",
                "Margin Trading Facility (MTF) and Margins",
                "Charts and orders",
                "Alert and Nudges",
                "General"
              ]}
            />
            <CreateTicket
              title="Funds"
              icon="fa fa-rupee-sign"
              link={[
                "Add money",
                "Withdraw money",
                "Add bank account",
                "eMandates",
              ]}
            />
            <CreateTicket
              title="Console"
              icon="fa fa-bullseye"
              link={[
                "Portfolio",
                "Corporate actions",
                "Funds statement",
                "Report",
                "profile",
                "Segments"
              ]}
            />
            <CreateTicket
              title="Coin"
              icon="fa fa-pie-chart"
              link={[
                "Mutual funds",
                "National Pansion Schema (NPS)",
                "Fixed Deposit (FD)",
                "Feature on Coin",
                "Payment and Orders",
                "Gernal"
              ]}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-4">
            {/* Notice Box */}
            <div className="notice-box mb-4">
              <ul>
                <li><a style={{fontSize:"1.1rem"}} href="">Latest Intraday leverages and Square-off timings</a></li>
                <li> <a style={{fontSize:"1.1rem"}} href="">Surveillance measure on scrips - April 2026</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="quick-links">
              <h5>Quick links</h5>
              <ul>
                <li><a style={{textDecoration:"none"}} href=""> 1. Track account opening</a></li>
                <li><a style={{textDecoration:"none"}} href=""> 2. Track segment activation</a></li>
                <li><a style={{textDecoration:"none"}} href=""> 3. Intraday margins</a></li>
                <li><a style={{textDecoration:"none"}} href=""> 4. Kite user manual</a></li>
                <li><a style={{textDecoration:"none"}} href=""> 5. Learn how to create a ticket</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportPage;
