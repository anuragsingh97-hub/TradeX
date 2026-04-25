import React from "react";

function Brokerage() {
  return (
    <>
      <div className="container" style={{ padding: "50px" }}>
        <span className="fs-3">Equity</span>
        <span className="fs-3 ms-5">Currency</span>
        <span className="fs-3 ms-5">Commodity</span>
        <div className="table-container-1 p-0">
          <table
            className="table table-striped border"
            style={{ height: "600px" }}
          >
            <thead>
              <tr>
                <th className="col-1"></th>
                <th className="col-2">Equity delivery</th>
                <th className="col-3">Equity intraday</th>
                <th className="col-3">F&O - Futures</th>
                <th className="col-3">F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on the sell side</td>
                <td>0.025% on the sell side</td>
                <td>
                  <li>
                    0.15% of the intrinsic value on options that are bought and
                    exercised
                  </li>
                  <li>0.15% on sell side (on premium)</li>
                </td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>NSE: 0.00307% BSE: 0.00375%</td>
                <td>NSE: 0.00307% BSE: 0.00375%</td>
                <td>NSE: 0.00183% BSE: 0</td>
                <td>NSE: 0.03553% (on premium)BSE: 0.0325% (on premium)</td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td>SBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.015% or ₹1500 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center fs-4 mt-5 mb-5">
          {" "}
          <a style={{ textDecoration: "none" }} href="">
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </p>
        <h3 style={{ marginTop: "110px" }} className="mb-3 fs-4">
          Charges for account opening
        </h3>
        <div className="table-container-2 p-0">
          <table
            className="table table-striped border"
            style={{ height: "300px" }}
          >
            <thead>
              <tr>
                <th className="col-5">Type of account</th>
                <th className="col-1"></th>
                <th className="col-1"></th>
                <th className="col-3"></th>
                <th className="col-2"> Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button
                    style={{
                      height: "25px",
                      width: "50px",
                      fontSize: "12px",
                      padding: "2px",
                      backgroundColor: "#5bb05b",
                      color: "white",
                    }}
                    type="button"
                    class="btn"
                  >
                    FREE
                  </button>
                </td>
              </tr>
              <tr>
                <td>Online account</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button
                    style={{
                      height: "25px",
                      width: "50px",
                      fontSize: "12px",
                      padding: "2px",
                      backgroundColor: "#5bb05b",
                      color: "white",
                    }}
                    type="button"
                    class="btn"
                  >
                    FREE
                  </button>
                </td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td></td>
                <td></td>
                <td></td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ marginTop: "110px" }} className="mb-3 fs-4">
          Demat AMC (Annual Maintenance Charge)
        </h3>
        <div className="table-container-2 p-0">
          <table
            className="table table-striped border"
            style={{ height: "100px" }}
          >
            <thead>
              <tr>
                <th className="col-5">Value of holdings</th>
                <th className="col-3">AMC</th>
                <th className="col-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to ₹4 lakh</td>
                <td>
                  <button
                    style={{
                      height: "25px",
                      width: "50px",
                      fontSize: "12px",
                      padding: "2px",
                      backgroundColor: "#5bb05b",
                      color: "white",
                    }}
                    type="button"
                    class="btn"
                  >
                    FREE*
                  </button>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>₹4 lakh - ₹10 lakh</td>
                <td>₹ 100 per year, charged quarterly*</td>
                <td></td>
              </tr>
              <tr>
                <td>Above ₹10 lakh</td>
                <td>₹ 300 per year, charged quarterly</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: "13px" }} className="">
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA,{" "}
          <a style={{ textDecoration: "none" }} href="">
            click here.
          </a>
        </p>
        <h3 style={{ marginTop: "110px" }} className="mb-3 fs-4">
          Charges for optional value added services
        </h3>
        <div className="table-container-3">
          <table
            className="table table-striped border"
            style={{ height: "200px" }}
          >
            <thead>
              <tr>
                <th className="col-3">Service</th>
                <th className="col-3">Billing Frquency</th>
                <th className="col-3">Charges</th>
                <th className="col-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
                <td></td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy & Invest More: 100 | SIP: 10</td>
                <td></td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: 500 | Personal: Free</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ marginTop: "110px" }} className="mb-3 fs-4">
          Changed explained
        </h3>
        <div className="row">
          <div className="col-6">
            <h6 className="text-muted mb-3">
              Securities/Commodities transaction tax
            </h6>
            <p style={{ fontSize: "13px" }}>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p style={{ fontSize: "13px" }}>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>

            <h6 className="text-muted mb-3">Transaction/Turnover Charges</h6>
            <p style={{ fontSize: "13px" }}>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p style={{ fontSize: "13px" }}>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p style={{ fontSize: "13px" }}>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p style={{ fontSize: "13px" }}>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p style={{ fontSize: "13px" }}>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>

            <h6 className="text-muted mb-3">Call & trade</h6>
            <p style={{ fontSize: "13px" }}>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>

            <h6 className="text-muted mb-3">Stamp charges</h6>
            <p style={{ fontSize: "13px" }}>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>

            <h6 className="text-muted">NRI brokerage charges</h6>
            <div className="p-3">
              <li style={{ fontSize: "13px" }}>
                For a non-PIS account, 0.5% or ₹50 per executed order for equity
                and F&O (whichever is lower).
              </li>
              <li style={{ fontSize: "13px" }}>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li style={{ fontSize: "13px" }}>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </div>
            <h6 className="text-muted mb-3">Stamp charges</h6>
            <p style={{ fontSize: "13px" }}>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
            <h6 className="text-muted mb-3">
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h6>
            <div className="p-3">
              <li style={{ fontSize: "13px" }}>
                Equity and Futures - ₹0.01 per crore + GST of the traded value.
              </li>
              <li style={{ fontSize: "13px" }}>
                Options - ₹0.01 per crore + GST traded value (premium value).
              </li>
              <li style={{ fontSize: "13px" }}>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </div>
            <h6 className="text-muted mb-3">Margin Trading Facility (MTF)</h6>
            <div className="p-3">
              <li style={{ fontSize: "13px" }}>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </li>
              <li style={{ fontSize: "13px" }}>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li style={{ fontSize: "13px" }}>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </div>
          </div>
          <div className="col-6 ">
            <h6 className="text-muted mb-3">Account with debit balance</h6>
            <p style={{ fontSize: "13px" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
            <h6 className="text-muted mb-3">SEBI Charges</h6>
            <p style={{ fontSize: "13px" }}>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
            <h6 className="text-muted mb-3">
              DP (Depository participant) charges
            </h6>
            <p style={{ fontSize: "13px" }}>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <p style={{ fontSize: "13px" }}>
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
            </p>
            <p style={{ fontSize: "13px" }}>
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>
            <h6 className="text-muted mb-3">Pledging charges</h6>
            <p style={{ fontSize: "13px" }}>
              ₹30 + GST per pledge request per ISIN.
            </p>
            <h6 className="text-muted mb-3">
              AMC (Account maintenance charges)
            </h6>
            <p style={{ fontSize: "13px" }}>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA, Click here
            </p>
            <p style={{ fontSize: "13px" }}>
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC, Click here
            </p>

            <h6 className="text-muted mb-3">Corporate action order charges</h6>
            <p style={{ fontSize: "13px" }}>
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>
            <h6 className="text-muted mb-3">Off-market transfer charges</h6>
            <p style={{ fontSize: "13px" }}>₹25 per transaction.</p>
            <h6 className="text-muted mb-3">Physical CMR request</h6>
            <p style={{ fontSize: "13px" }}>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
            <h6 className="text-muted mb-3">Payment gateway charges</h6>
            <p style={{ fontSize: "13px" }}>
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
            <h6 className="text-muted mb-3">Delayed Payment Charges</h6>
            <p style={{ fontSize: "13px" }}>
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account. Learn more.
            </p>
            <h6 className="text-muted mb-3">
              Trading using 3-in-1 account with block functionality
            </h6>
            <div className="p-3">
              <li style={{ fontSize: "13px" }}>
                Delivery & MTF Brokerage: 0.5% per executed order.
              </li>
              <li style={{ fontSize: "13px" }}>
                Intraday Brokerage: 0.05% per executed order.
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
