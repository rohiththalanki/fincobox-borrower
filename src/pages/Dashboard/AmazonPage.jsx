import React from "react";

export default function AmazonPage() {
  return (
    <div>
      <header className="fincoHeader1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="hamImg_box">
                <img src="image/fincobox_minIcon.png" alt="" />
                <a href="dashboard4.html" className="hamBox">
                  <span />
                  <span />
                  <span />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="adminSide">
                <div className>KYC (60% done)</div>
                <div>
                  My Profile{" "}
                  <span>
                    <img
                      className="adminPro_view"
                      src="image/adminImg.png"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="_dashBoard_main collaped">
        <div className="sidebar ">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Loan Products
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse  "
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <ul className="pg_navigate">
                  <li>
                    <a href>
                      <span>
                        <img src="image/invoiceWhite.png" alt="" />
                      </span>{" "}
                      <span className="invisSpan"> Invoice Discounting</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href>
                      <span>
                        <img src="image/revenueWhite.png" alt="" />
                      </span>{" "}
                      <span className="invisSpan"> Marketplace Financing</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href>
                      <span>
                        <img src="image/inventoryWhite.png" alt="" />
                      </span>{" "}
                      <span className="invisSpan"> Inventory Financing</span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Online Marketplaces
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <ul className="pg_navigate" role="tablist">
                  <li>
                    <button
                      className="nav-link active"
                      id="amazSidnav-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#amazSidnav"
                      type="button"
                      role="tab"
                      aria-controls="amazSidnav"
                      aria-selected="true"
                    >
                      <span>
                        <img src="image/amazon_minIcon.png" alt="" />
                      </span>{" "}
                      <span className="invisSpan"> Amazon</span>{" "}
                    </button>
                  </li>
                  <li>
                    <button
                      className="nav-link"
                      id="noonSidnav-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#noonSidnav"
                      type="button"
                      role="tab"
                      aria-controls="noonSidnav"
                      aria-selected="false"
                    >
                      <span>
                        <img src="image/noon_minIcon.png" alt="" />
                      </span>{" "}
                      <span className="invisSpan"> Noon</span>{" "}
                    </button>
                  </li>
                  <li>
                    <button
                      className="nav-link"
                      id="talbabSidnav-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#talbabSidnav"
                      type="button"
                      role="tab"
                      aria-controls="talbabSidnav"
                      aria-selected="false"
                    >
                      <span>
                        <img src="image/talabat_minIcon.png" alt="" />
                      </span>
                      <span className="invisSpan"> Talabat</span>{" "}
                    </button>
                  </li>
                  <li>
                    <button
                      className="nav-link"
                      id="jaheezSidnav-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#jaheezSidnav"
                      type="button"
                      role="tab"
                      aria-controls="jaheezSidnav"
                      aria-selected="false"
                    >
                      <span>
                        <img src="image/jaheez_minIcon.png" alt="" />
                      </span>{" "}
                      <span className="invisSpan"> Jahez</span>{" "}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="side_mainBox">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="amazSidnav"
              role="tabpanel"
              aria-labelledby="amazSidnav-tab"
              tabIndex={0}
            >
              <div className="_sideM_head">
                <div className="markFinan_board">
                  <h1>
                    <span className="sd_headIcon">
                      <img src="image/amazon_minIcon.png" alt="" />
                    </span>{" "}
                    Amazon
                  </h1>
                </div>
                <nav className="_amazWeb_servBox">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link _interFlex active"
                      id="amazHome-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#amazHome"
                      type="button"
                      role="tab"
                      aria-controls="amazHome"
                      aria-selected="true"
                    >
                      <span className="IcoFle_tab _minImags">
                        <img src="image/invoiceDark.png" alt="" />
                        <span className>Invoice Discounting</span>
                      </span>
                    </button>
                    <button
                      className="nav-link _interFlex"
                      id="noonHome-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#noonHome"
                      type="button"
                      role="tab"
                      aria-controls="noonHome"
                      aria-selected="false"
                    >
                      <span className="IcoFle_tab _minImags">
                        <img src="image/revenueDark.png" alt="" />
                        <span className>Marketplace Financing</span>
                      </span>
                    </button>
                    <button
                      className="nav-link _interFlex"
                      id="talabatHome-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#talabatHome"
                      type="button"
                      role="tab"
                      aria-controls="talabatHome"
                      aria-selected="false"
                    >
                      <span className="IcoFle_tab _minImags">
                        <img src="image/inventoryDark.png" alt="" />
                        <span className>Inventory Financing</span>
                      </span>
                    </button>
                  </div>
                </nav>
                <div className="tab-content grapContent" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="amazHome"
                    role="tabpanel"
                    aria-labelledby="amazHome-tab"
                    tabIndex={0}
                  >
                    <div className="container-fluid">
                      <div className="row _graphRow">
                        <div className="_dynCol">
                          <div className="circGraphBox">
                            <div className="inerCirc_graph">
                              <img src="image/Ring_Chart5.png" alt="" />
                              <div className="circGraph_percent">
                                <p>16.67 %</p>
                              </div>
                            </div>
                            <div className="rp_limitsBox">
                              <div className="_rpLimit top_rpLimit">
                                60,000 AED <span>Available Limit</span>
                              </div>
                              <div className="_rpLimit mid_rpLimit">
                                10,000 AED <span>Used</span>
                              </div>
                              <div className="_rpLimit bot_rpLimit">
                                50,000 AED <span>Balance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box  _sRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Receivables</p>
                                <h6>82,000 AED</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Finco Receivables</p>
                                <h6>10,813 AED</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _lRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Interest days</p>
                                <h6>32</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Fixed Processing Fee</p>
                                <h6>100 AED</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _mRecive">
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Total Invoices</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>5</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Discounted Invoices</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>2</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Closed Invoices</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>1</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="nxtPay_dateBox">
                            <div className="nxtpPar">
                              <p>Next Payment Date</p>
                            </div>
                            <div className="nxtp_inDate">
                              <h4>10th Oct</h4>
                            </div>
                          </div>
                        </div>
                        <div className="_dynFull_col">
                          <div className="file_descTable">
                            <div className="invo_upload">
                              <div className="_invo_innerCol">
                                <h2>Invoices</h2>
                              </div>
                              <div className="_invo_innerCol _invo_builProg">
                                <div className="dropdown">
                                  <button
                                    className="btn invoDropBtn dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    Action
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_outSearch">
                                  <input
                                    className="inv_search"
                                    type="text"
                                    placeholder="Search"
                                    defaultValue
                                  />
                                </div>
                                <div className="_inv_fileUpload_btn">
                                  <a href className="_inv_fileUpload_btn_a">
                                    <span>+</span>
                                    Upload Invoice
                                  </a>
                                </div>
                              </div>
                            </div>
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">
                                    {" "}
                                    <span className="_invTable_chK_span">
                                      <input id="chev" type="checkbox" />
                                    </span>{" "}
                                    <label htmlFor="chev">FILE NAME</label>
                                  </th>
                                  <th scope="col">DESCRIPTION</th>
                                  <th scope="col">AMOUNT</th>
                                  <th scope="col">MATURITY DATE</th>
                                  <th scope="col">UPLOAD DATE</th>
                                  <th scope="col">STATUS</th>
                                  <th scope="col">ACTION</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <span className="_invTable_chK_span">
                                      <input id="chev2" type="checkbox" />
                                    </span>{" "}
                                    <label htmlFor="chev2">
                                      AMJ-Invoice1.pdf
                                    </label>
                                  </td>
                                  <td>Invoices for AMJ Quarter of Amazon</td>
                                  <td>20,000 AED</td>
                                  <td>16-08-2022</td>
                                  <td>16-08-2022</td>
                                  <td>
                                    <span className="inv_appr">Approved</span>{" "}
                                  </td>
                                  <td>...</td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="_invTable_chK_span">
                                      <input id="chev3" type="checkbox" />
                                    </span>{" "}
                                    <label htmlFor="chev3">
                                      JAS-Invoice1.pdf
                                    </label>
                                  </td>
                                  <td>Invoices for JAS Quarter of Amazon</td>
                                  <td>20,000 AED</td>
                                  <td>02-10-2022</td>
                                  <td>02-10-2022</td>
                                  <td>
                                    <span className="inv_rejc">Rejected</span>
                                  </td>
                                  <td>...</td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="_invTable_chK_span">
                                      <input id="chev4" type="checkbox" />
                                    </span>{" "}
                                    <label htmlFor="chev4">
                                      OND-Invoice1.pdf
                                    </label>
                                  </td>
                                  <td>Invoices for OND Quarter of Amazon</td>
                                  <td>20,000 AED</td>
                                  <td>03-01-2023</td>
                                  <td>03-01-2023</td>
                                  <td>
                                    <span className="inv_undRev">
                                      Under review
                                    </span>
                                  </td>
                                  <td>...</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="noonHome"
                    role="tabpanel"
                    aria-labelledby="noonHome-tab"
                    tabIndex={0}
                  >
                    <div className="container-fluid">
                      <div className="row _graphRow">
                        <div className="_dynCol">
                          <div className="circGraphBox">
                            <div className="inerCirc_graph">
                              <img src="image/Ring_Chart5.png" alt="" />
                              <div className="circGraph_percent">
                                <p>16.67 %</p>
                              </div>
                            </div>
                            <div className="rp_limitsBox">
                              <div className="_rpLimit top_rpLimit">
                                60,000 AED <span>Available Limit</span>
                              </div>
                              <div className="_rpLimit mid_rpLimit">
                                10,000 AED <span>Used</span>
                              </div>
                              <div className="_rpLimit bot_rpLimit">
                                50,000 AED <span>Balance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box  _sRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Seller Receivables</p>
                                <h6>82,000 AED</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Finco Receivables</p>
                                <h6>40,813 AED</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _lRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Loan Tenure</p>
                                <h6>75 days</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Payment Cycle </p>
                                <h6>7 days</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _mRecive">
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Total Installments</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>11</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Installments Paid</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>4</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Installments as a % of Sales</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>35%</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="nxtPay_dateBox">
                            <div className="nxtpPar">
                              <p>Next Payment Date</p>
                            </div>
                            <div className="nxtp_inDate">
                              <h4>15th Dec</h4>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row _graphRow">
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Applied</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Apprioved</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Disbursed</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Maturity </p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Amount Left over</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynFull_col">
                              <div className="row">
                                <div id="myChart2" className="chart--container">
                                  <a
                                    href="https://www.zingchart.com/"
                                    rel="noopener"
                                    className="zc-ref"
                                  >
                                    Powered by ZingChart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="talabatHome"
                    role="tabpanel"
                    aria-labelledby="talabatHome-tab"
                    tabIndex={0}
                  >
                    <div className="container-fluid">
                      <div className="row _graphRow">
                        <div className="_dynCol">
                          <div className="circGraphBox">
                            <div className="inerCirc_graph">
                              <img src="image/Ring_Chart5.png" alt="" />
                              <div className="circGraph_percent">
                                <p>16.67 %</p>
                              </div>
                            </div>
                            <div className="rp_limitsBox">
                              <div className="_rpLimit top_rpLimit">
                                60,000 AED <span>Available Limit</span>
                              </div>
                              <div className="_rpLimit mid_rpLimit">
                                10,000 AED <span>Used</span>
                              </div>
                              <div className="_rpLimit bot_rpLimit">
                                50,000 AED <span>Balance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box  _sRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Seller Receivables</p>
                                <h6>82,000 AED</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Finco Receivables</p>
                                <h6>40,813 AED</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _lRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Loan Tenure</p>
                                <h6>75 days</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Payment Cycle </p>
                                <h6>7 days</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _mRecive">
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Total Installments</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>11</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Installments Paid</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>4</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Installments as a % of Sales</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>35%</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="nxtPay_dateBox">
                            <div className="nxtpPar">
                              <p>Next Payment Date</p>
                            </div>
                            <div className="nxtp_inDate">
                              <h4>15th Dec</h4>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row _graphRow">
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Applied</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Apprioved</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Disbursed</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Maturity </p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Amount Left over</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynFull_col">
                              <div className="row">
                                <div
                                  id="myChart_s1"
                                  className="chart--container"
                                >
                                  <a
                                    href="https://www.zingchart.com/"
                                    rel="noopener"
                                    className="zc-ref"
                                  >
                                    Powered by ZingChart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="noonSidnav"
              role="tabpanel"
              aria-labelledby="noonSidnav-tab"
              tabIndex={0}
            >
              <div className="_sideM_head">
                <div className="markFinan_board">
                  <h1>
                    <span className="sd_headIcon">
                      <img src="image/noon_minIcon.png" alt="" />
                    </span>{" "}
                    Noon
                  </h1>
                </div>
                <nav className="_amazWeb_servBox">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link _interFlex active"
                      id="amazHome2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#amazHome2"
                      type="button"
                      role="tab"
                      aria-controls="amazHome2"
                      aria-selected="true"
                    >
                      <span className="IcoFle_tab _minImags">
                        <img src="image/invoiceDark.png" alt="" />
                        <span className>Invoice Discounting</span>
                      </span>
                    </button>
                    <button
                      className="nav-link _interFlex"
                      id="noonHome2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#noonHome2"
                      type="button"
                      role="tab"
                      aria-controls="noonHome2"
                      aria-selected="false"
                    >
                      <span className="IcoFle_tab _minImags">
                        <img src="image/revenueDark.png" alt="" />
                        <span className>Marketplace Financing</span>
                      </span>
                    </button>
                    <button
                      className="nav-link _interFlex"
                      id="talabatHome2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#talabatHome2"
                      type="button"
                      role="tab"
                      aria-controls="talabatHome2"
                      aria-selected="false"
                    >
                      <span className="IcoFle_tab _minImags">
                        <img src="image/inventoryDark.png" alt="" />
                        <span className>Inventory Financing</span>
                      </span>
                    </button>
                  </div>
                </nav>
                <div className="tab-content grapContent" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="amazHome2"
                    role="tabpanel"
                    aria-labelledby="amazHome-tab"
                    tabIndex={0}
                  >
                    <div className="container-fluid">
                      <div className="row _graphRow">
                        <div className="_dynCol">
                          <div className="circGraphBox">
                            <div className="inerCirc_graph">
                              <img src="image/Ring_Chart5.png" alt="" />
                              <div className="circGraph_percent">
                                <p>16.67 %</p>
                              </div>
                            </div>
                            <div className="rp_limitsBox">
                              <div className="_rpLimit top_rpLimit">
                                60,000 AED <span>Available Limit</span>
                              </div>
                              <div className="_rpLimit mid_rpLimit">
                                10,000 AED <span>Used</span>
                              </div>
                              <div className="_rpLimit bot_rpLimit">
                                50,000 AED <span>Balance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box  _sRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Receivables</p>
                                <h6>82,000 AED</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Finco Receivables</p>
                                <h6>10,813 AED</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _lRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Interest days</p>
                                <h6>32</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Fixed Processing Fee</p>
                                <h6>100 AED</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _mRecive">
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Total Invoices</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>5</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Discounted Invoices</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>2</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Closed Invoices</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>1</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="nxtPay_dateBox">
                            <div className="nxtpPar">
                              <p>Next Payment Date</p>
                            </div>
                            <div className="nxtp_inDate">
                              <h4>10th Oct</h4>
                            </div>
                          </div>
                        </div>
                        <div className="_dynFull_col">
                          <div className="file_descTable">
                            <div className="invo_upload">
                              <div className="_invo_innerCol">
                                <h2>Invoices</h2>
                              </div>
                              <div className="_invo_innerCol _invo_builProg">
                                <div className="dropdown">
                                  <button
                                    className="btn invoDropBtn dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    Action
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="_outSearch">
                                  <input
                                    className="inv_search"
                                    type="text"
                                    placeholder="Search"
                                    defaultValue
                                  />
                                </div>
                                <div className="_inv_fileUpload_btn">
                                  <a href className="_inv_fileUpload_btn_a">
                                    <span>+</span>
                                    Upload Invoice
                                  </a>
                                </div>
                              </div>
                            </div>
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">
                                    {" "}
                                    <span className="_invTable_chK_span">
                                      <input id="chev" type="checkbox" />
                                    </span>{" "}
                                    <label htmlFor="chev">FILE NAME</label>
                                  </th>
                                  <th scope="col">DESCRIPTION</th>
                                  <th scope="col">AMOUNT</th>
                                  <th scope="col">MATURITY DATE</th>
                                  <th scope="col">UPLOAD DATE</th>
                                  <th scope="col">STATUS</th>
                                  <th scope="col">ACTION</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <span className="_invTable_chK_span">
                                      <input id="chev2" type="checkbox" />
                                    </span>{" "}
                                    <label htmlFor="chev2">
                                      AMJ-Invoice1.pdf
                                    </label>
                                  </td>
                                  <td>Invoices for AMJ Quarter of Amazon</td>
                                  <td>20,000 AED</td>
                                  <td>16-08-2022</td>
                                  <td>16-08-2022</td>
                                  <td>
                                    <span className="inv_appr">Approved</span>{" "}
                                  </td>
                                  <td>...</td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="_invTable_chK_span">
                                      <input id="chev3" type="checkbox" />
                                    </span>{" "}
                                    <label htmlFor="chev3">
                                      JAS-Invoice1.pdf
                                    </label>
                                  </td>
                                  <td>Invoices for JAS Quarter of Amazon</td>
                                  <td>20,000 AED</td>
                                  <td>02-10-2022</td>
                                  <td>02-10-2022</td>
                                  <td>
                                    <span className="inv_rejc">Rejected</span>
                                  </td>
                                  <td>...</td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="_invTable_chK_span">
                                      <input id="chev4" type="checkbox" />
                                    </span>{" "}
                                    <label htmlFor="chev4">
                                      OND-Invoice1.pdf
                                    </label>
                                  </td>
                                  <td>Invoices for OND Quarter of Amazon</td>
                                  <td>20,000 AED</td>
                                  <td>03-01-2023</td>
                                  <td>03-01-2023</td>
                                  <td>
                                    <span className="inv_undRev">
                                      Under review
                                    </span>
                                  </td>
                                  <td>...</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="noonHome2"
                    role="tabpanel"
                    aria-labelledby="noonHome2-tab"
                    tabIndex={0}
                  >
                    <div className="container-fluid">
                      <div className="row _graphRow">
                        <div className="_dynCol">
                          <div className="circGraphBox">
                            <div className="inerCirc_graph">
                              <img src="image/Ring_Chart5.png" alt="" />
                              <div className="circGraph_percent">
                                <p>16.67 %</p>
                              </div>
                            </div>
                            <div className="rp_limitsBox">
                              <div className="_rpLimit top_rpLimit">
                                60,000 AED <span>Available Limit</span>
                              </div>
                              <div className="_rpLimit mid_rpLimit">
                                10,000 AED <span>Used</span>
                              </div>
                              <div className="_rpLimit bot_rpLimit">
                                50,000 AED <span>Balance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box  _sRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Seller Receivables</p>
                                <h6>82,000 AED</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Finco Receivables</p>
                                <h6>40,813 AED</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _lRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Loan Tenure</p>
                                <h6>75 days</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Payment Cycle </p>
                                <h6>7 days</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _mRecive">
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Total Installments</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>11</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Installments Paid</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>4</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Installments as a % of Sales</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>35%</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="nxtPay_dateBox">
                            <div className="nxtpPar">
                              <p>Next Payment Date</p>
                            </div>
                            <div className="nxtp_inDate">
                              <h4>15th Dec</h4>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row _graphRow">
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Applied</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Apprioved</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Disbursed</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Maturity </p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Amount Left over</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynFull_col">
                              <div className="row">
                                <div id="myChart1" className="chart--container">
                                  <a
                                    href="https://www.zingchart.com/"
                                    rel="noopener"
                                    className="zc-ref"
                                  >
                                    Powered by ZingChart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="talabatHome2"
                    role="tabpanel"
                    aria-labelledby="talabatHome-tab"
                    tabIndex={0}
                  >
                    <div className="container-fluid">
                      <div className="row _graphRow">
                        <div className="_dynCol">
                          <div className="circGraphBox">
                            <div className="inerCirc_graph">
                              <img src="image/Ring_Chart5.png" alt="" />
                              <div className="circGraph_percent">
                                <p>16.67 %</p>
                              </div>
                            </div>
                            <div className="rp_limitsBox">
                              <div className="_rpLimit top_rpLimit">
                                60,000 AED <span>Available Limit</span>
                              </div>
                              <div className="_rpLimit mid_rpLimit">
                                10,000 AED <span>Used</span>
                              </div>
                              <div className="_rpLimit bot_rpLimit">
                                50,000 AED <span>Balance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box  _sRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Seller Receivables</p>
                                <h6>82,000 AED</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Finco Receivables</p>
                                <h6>40,813 AED</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _lRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Loan Tenure</p>
                                <h6>75 days</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Payment Cycle </p>
                                <h6>7 days</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _mRecive">
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Total Installments</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>11</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Installments Paid</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>4</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Installments as a % of Sales</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>35%</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="nxtPay_dateBox">
                            <div className="nxtpPar">
                              <p>Next Payment Date</p>
                            </div>
                            <div className="nxtp_inDate">
                              <h4>15th Dec</h4>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row _graphRow">
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Applied</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Apprioved</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Disbursed</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Maturity </p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Amount Left over</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynFull_col">
                              <div className="row">
                                <div
                                  id="myChart_s2"
                                  className="chart--container"
                                >
                                  <a
                                    href="https://www.zingchart.com/"
                                    rel="noopener"
                                    className="zc-ref"
                                  >
                                    Powered by ZingChart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="talbabSidnav"
              role="tabpanel"
              aria-labelledby="talbabSidnav-tab"
              tabIndex={0}
            >
              <div className="_sideM_head">
                <div className="markFinan_board">
                  <h1>
                    <span className="sd_headIcon">
                      <img src="image/talabat_minIcon.png" alt="" />
                    </span>{" "}
                    Talabat
                  </h1>
                </div>
                <nav className="_amazWeb_servBox">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link _interFlex active"
                      id="noonHome3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#noonHome3"
                      type="button"
                      role="tab"
                      aria-controls="noonHome3"
                      aria-selected="false"
                    >
                      <span className="IcoFle_tab _minImags">
                        <img src="image/revenueDark.png" alt="" />
                        <span className>Marketplace Financing</span>
                      </span>
                    </button>
                  </div>
                </nav>
                <div className="tab-content grapContent" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="noonHome3"
                    role="tabpanel"
                    aria-labelledby="noonHome3-tab"
                    tabIndex={0}
                  >
                    <div className="container-fluid">
                      <div className="row _graphRow">
                        <div className="_dynCol">
                          <div className="circGraphBox">
                            <div className="inerCirc_graph">
                              <img src="image/Ring_Chart5.png" alt="" />
                              <div className="circGraph_percent">
                                <p>16.67 %</p>
                              </div>
                            </div>
                            <div className="rp_limitsBox">
                              <div className="_rpLimit top_rpLimit">
                                60,000 AED <span>Available Limit</span>
                              </div>
                              <div className="_rpLimit mid_rpLimit">
                                10,000 AED <span>Used</span>
                              </div>
                              <div className="_rpLimit bot_rpLimit">
                                50,000 AED <span>Balance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box  _sRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Seller Receivables</p>
                                <h6>82,000 AED</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Finco Receivables</p>
                                <h6>40,813 AED</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _lRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Loan Tenure</p>
                                <h6>75 days</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Payment Cycle </p>
                                <h6>7 days</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _mRecive">
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Total Installments</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>11</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Installments Paid</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>4</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Installments as a % of Sales</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>35%</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="nxtPay_dateBox">
                            <div className="nxtpPar">
                              <p>Next Payment Date</p>
                            </div>
                            <div className="nxtp_inDate">
                              <h4>15th Dec</h4>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row _graphRow">
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Applied</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Apprioved</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Disbursed</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Maturity </p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Amount Left over</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynFull_col">
                              <div className="row">
                                <div id="myChart3" className="chart--container">
                                  <a
                                    href="https://www.zingchart.com/"
                                    rel="noopener"
                                    className="zc-ref"
                                  >
                                    Powered by ZingChart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="jaheezSidnav"
              role="tabpanel"
              aria-labelledby="jaheezSidnav-tab"
              tabIndex={0}
            >
              <div className="_sideM_head">
                <div className="markFinan_board">
                  <h1>
                    {" "}
                    <span className="sd_headIcon">
                      <img src="image/jaheez_minIcon.png" alt="" />
                    </span>
                    Jahez
                  </h1>
                </div>
                <nav className="_amazWeb_servBox">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link _interFlex active"
                      id="noonHome4-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#noonHome4"
                      type="button"
                      role="tab"
                      aria-controls="noonHome4"
                      aria-selected="false"
                    >
                      <span className="IcoFle_tab _minImags">
                        <img src="image/revenueDark.png" alt="" />
                        <span className>Marketplace Financing</span>
                      </span>
                    </button>
                  </div>
                </nav>
                <div className="tab-content grapContent" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="noonHome4"
                    role="tabpanel"
                    aria-labelledby="noonHome4-tab"
                    tabIndex={0}
                  >
                    <div className="container-fluid">
                      <div className="row _graphRow">
                        <div className="_dynCol">
                          <div className="circGraphBox">
                            <div className="inerCirc_graph">
                              <img src="image/Ring_Chart5.png" alt="" />
                              <div className="circGraph_percent">
                                <p>16.67 %</p>
                              </div>
                            </div>
                            <div className="rp_limitsBox">
                              <div className="_rpLimit top_rpLimit">
                                60,000 AED <span>Available Limit</span>
                              </div>
                              <div className="_rpLimit mid_rpLimit">
                                10,000 AED <span>Used</span>
                              </div>
                              <div className="_rpLimit bot_rpLimit">
                                50,000 AED <span>Balance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box  _sRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Seller Receivables</p>
                                <h6>82,000 AED</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Net Finco Receivables</p>
                                <h6>40,813 AED</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _lRecive">
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Loan Tenure</p>
                                <h6>75 days</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div>
                                <img src="image/Ring_Chart1.png" alt="" />
                              </div>
                              <div className="recv_netPra">
                                <p>Payment Cycle </p>
                                <h6>7 days</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="recevaBle_box _mRecive">
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Total Installments</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>11</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Installments Paid</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>4</h6>
                              </div>
                            </div>
                            <div className="recP_devider" />
                            <div className="_recv_firstP">
                              <div className="recv_netPra">
                                <p>Installments as a % of Sales</p>
                              </div>
                              <div className="recv_netPra">
                                <h6>35%</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_dynCol">
                          <div className="nxtPay_dateBox">
                            <div className="nxtpPar">
                              <p>Next Payment Date</p>
                            </div>
                            <div className="nxtp_inDate">
                              <h4>15th Dec</h4>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="row _graphRow">
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Applied</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Apprioved</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Disbursed</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Loan Maturity </p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynCol">
                              <div className="datify_inbox">
                                <div>
                                  <img src="image/Ring_Chart1.png" alt="" />
                                </div>
                                <div>
                                  <p>Amount Left over</p>
                                  <h6>9th Dec’22 </h6>
                                </div>
                              </div>
                            </div>
                            <div className="_dynFull_col">
                              <div className="row">
                                <div id="myChart4" className="chart--container">
                                  <a
                                    href="https://www.zingchart.com/"
                                    rel="noopener"
                                    className="zc-ref"
                                  >
                                    Powered by ZingChart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
