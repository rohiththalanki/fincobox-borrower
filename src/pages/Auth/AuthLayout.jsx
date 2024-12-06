import React from "react";

export default function AuthLayout({ title, children }) {
  return (
    <section className="anv_flexBar_outer">
      <div className="_inLeft_flexBar">
        <a href>
          <img src="image/fincobox_sgn.png" className="fincoSgn_logo" alt="" />
        </a>
        <div className="grw-capHead text-2xl">
          Unlock growth capital for your business now
        </div>
        <div className="grw_cap_pointBox">
          <div className="flexPoint">
            <div className="flp_sideImg">
              <img src="/image/lt_capPoint.svg" alt="" />
            </div>
            <div className="flp_sideTxt">
              Get access to working capital within 24 hours by converting your
              account receivables into sales.
            </div>
          </div>
          <div className="flexPoint">
            <div className="flp_sideImg">
              <img src="/image/lt_capPoint.svg" alt="" />
            </div>
            <div className="flp_sideTxt">
              Get up to 100% financing of your invoices with easy repayment
              options.
            </div>
          </div>
          <div className="flexPoint">
            <div className="flp_sideImg">
              <img src="/image/lt_capPoint.svg" alt="" />
            </div>
            <div className="flp_sideTxt">
              Experience an end-to-end paperless process with quick disbursals
              of funds.
            </div>
          </div>
        </div>
        {/* <div className="cFounder_bx">
          <div className="ceo_wrt">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ipsum dolor sit amet eiusmod tempor
            incididunt."
          </div>
          <div className="cfd-signBox">
            <div className="rondEd" />
            <div className="signAuth">
              <b className="sign_b">John Dev</b>
              <div className="signPos">Founder &amp; CEO, Bizkart</div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="_inRight_flexBar">
        <div className="on_mobLog_bx">
          <a href>
            <img src="image/fincobox_sgn.png" alt="" />
          </a>
        </div>
        <div className="frmOuter">{children}</div>
      </div>
    </section>
  );
}
