import React from "react";

export function InvoiceDiscounting() {
  return (
    <section className="_welCome_fincoBox">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10 col-xl-9">
            <div className="outerFinco_welcome">
              <div className="welFinco_head">
                <h4>Welcome to Fincobox</h4>
                <p>
                  Select the below financing options available for you to grow
                  your business
                </p>
              </div>
              <ul
                className="nav nav-tabs _onLine_marTabs"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link _inBuilt_tabs active"
                    id="inv_disc-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#inv_disc-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="inv_disc-tab-pane"
                    aria-selected="true"
                  >
                    <div>
                      <img
                        className="_onL_dark"
                        src="image/invoiceDark.png"
                        alt=""
                      />
                      <img
                        className="_onL_white"
                        src="image/invoiceWhite2.png"
                        alt=""
                      />
                    </div>
                    <p>Invoice Discounting</p>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link _inBuilt_tabs"
                    id="markt_finan-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#markt_finan-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="markt_finan-tab-pane"
                    aria-selected="false"
                  >
                    <div>
                      <img
                        className="_onL_dark"
                        src="image/revenueDark.png"
                        alt=""
                      />
                      <img
                        className="_onL_white"
                        src="image/revenueWhite2.png"
                        alt=""
                      />
                    </div>
                    <p>MarketPlace Financing</p>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link _inBuilt_tabs"
                    id="invent_finan-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#invent_finan-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="invent_finan-tab-pane"
                    aria-selected="false"
                  >
                    <div>
                      <img
                        className="_onL_dark"
                        src="image/inventoryDark.png"
                        alt=""
                      />
                      <img
                        className="_onL_white"
                        src="image/inventoryWhite2.png"
                        alt=""
                      />
                    </div>
                    <p>Inventory Financing</p>
                  </button>
                </li>
              </ul>
              <div
                className="tab-content _onLineMarkt_tabContent"
                id="myTabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="inv_disc-tab-pane"
                  role="tabpanel"
                  aria-labelledby="inv_disc-tab"
                  tabIndex={0}
                >
                  <div className="_innerTab_conGrid">
                    <div className="_inT_gHead">
                      <p>
                        Choose your online marketplace and connect your online
                        account for us to fetch your past performance{" "}
                      </p>
                    </div>
                    <div className="_intabS_wocomImg">
                      <div>
                        <a
                          href="javascript:void(0)"
                          className="_inTabs_anr"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <img src="image/amazon.png" alt="" />
                        </a>
                      </div>
                      <div>
                        <a
                          href="javascript:void(0)"
                          className="_inTabs_anr"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <img src="image/noon_arab.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="_inbul_divider _inb_div_mart" />
                    <div className="_faqInbuilt">
                      <h5>Frequently Asked Questions</h5>
                      <div className="_inbul_divider _inb_div_mart" />
                      <div className="faqs_box">
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
                                Why am I paying every month or every year on a
                                recurring basis?
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse "
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <strong>
                                  This is the first item's accordion body.
                                </strong>{" "}
                                It is shown by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Why am I paying every month or every year on a
                                recurring basis?
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <strong>
                                  This is the second item's accordion body.
                                </strong>
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Why am I paying every month or every year on a
                                recurring basis?
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <strong>
                                  This is the third item's accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
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
                  id="markt_finan-tab-pane"
                  role="tabpanel"
                  aria-labelledby="markt_finan-tab"
                  tabIndex={0}
                >
                  <div className="_innerTab_conGrid">
                    <div className="_inT_gHead">
                      <p>
                        Choose your online marketplace and connect your online
                        account for us to fetch your past performance{" "}
                      </p>
                    </div>
                    <div className="_intabS_wocomImg">
                      <div>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <img src="image/amazon.png" alt="" />
                        </a>
                      </div>
                      <div>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <img src="image/noon_arab.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="_inbul_divider _inb_div_mart" />
                    <div className="_faqInbuilt">
                      <h5>Frequently Asked Questions</h5>
                      <div className="_inbul_divider _inb_div_mart" />
                      <div className="faqs_box">
                        <div className="accordion" id="accordionExample2">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_2One">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse_2One"
                                aria-expanded="false"
                                aria-controls="collapse_2One"
                              >
                                Why am I paying every month or every year on a
                                recurring basis?
                              </button>
                            </h2>
                            <div
                              id="collapse_2One"
                              className="accordion-collapse collapse "
                              aria-labelledby="heading_2One"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <strong>
                                  This is the first item's accordion body.
                                </strong>{" "}
                                It is shown by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_2Two">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse_2Two"
                                aria-expanded="false"
                                aria-controls="collapse_2Two"
                              >
                                Why am I paying every month or every year on a
                                recurring basis?
                              </button>
                            </h2>
                            <div
                              id="collapse_2Two"
                              className="accordion-collapse collapse"
                              aria-labelledby="heading_2Two"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <strong>
                                  This is the second item's accordion body.
                                </strong>
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="heading_2Three"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse_2Three"
                                aria-expanded="false"
                                aria-controls="collapse_2Three"
                              >
                                Why am I paying every month or every year on a
                                recurring basis?
                              </button>
                            </h2>
                            <div
                              id="collapse_2Three"
                              className="accordion-collapse collapse"
                              aria-labelledby="heading_2Three"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <strong>
                                  This is the third item's accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
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
                  id="invent_finan-tab-pane"
                  role="tabpanel"
                  aria-labelledby="invent_finan-tab"
                  tabIndex={0}
                >
                  <div className="_innerTab_conGrid">
                    <div className="_inT_gHead">
                      <p>
                        Choose your online marketplace and connect your online
                        account for us to fetch your past performance{" "}
                      </p>
                    </div>
                    <div className="_intabS_wocomImg">
                      <div>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <img src="image/amazon.png" alt="" />
                        </a>
                      </div>
                      <div>
                        <a
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <img src="image/noon_arab.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="_inbul_divider _inb_div_mart" />
                    <div className="_faqInbuilt">
                      <h5>Frequently Asked Questions</h5>
                      <div className="_inbul_divider _inb_div_mart" />
                      <div className="faqs_box">
                        <div className="accordion" id="accordionExample2">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_3One">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse_3One"
                                aria-expanded="false"
                                aria-controls="collapse_3One"
                              >
                                Why am I paying every month or every year on a
                                recurring basis?
                              </button>
                            </h2>
                            <div
                              id="collapse_3One"
                              className="accordion-collapse collapse "
                              aria-labelledby="heading_3One"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <strong>
                                  This is the first item's accordion body.
                                </strong>{" "}
                                It is shown by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_3Two">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse_3Two"
                                aria-expanded="false"
                                aria-controls="collapse_3Two"
                              >
                                Why am I paying every month or every year on a
                                recurring basis?
                              </button>
                            </h2>
                            <div
                              id="collapse_3Two"
                              className="accordion-collapse collapse"
                              aria-labelledby="heading_3Two"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <strong>
                                  This is the second item's accordion body.
                                </strong>
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="heading_3Three"
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse_3Three"
                                aria-expanded="false"
                                aria-controls="collapse_3Three"
                              >
                                Why am I paying every month or every year on a
                                recurring basis?
                              </button>
                            </h2>
                            <div
                              id="collapse_3Three"
                              className="accordion-collapse collapse"
                              aria-labelledby="heading_3Three"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <strong>
                                  This is the third item's accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
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
  );
}
