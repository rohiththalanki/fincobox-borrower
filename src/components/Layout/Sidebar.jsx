import React from "react";

const Sidebar = ({ topbarIsOpen }) => {
  return (
    <div className="sidebar ">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={(!topbarIsOpen ? " collapsed" : "") + " accordion-button"}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded={topbarIsOpen}
              aria-controls="collapseOne"
            >
              Loan Products
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <ul className="pg_navigate" role="tablist">
              <li>
                <button
                  className="nav-link active"
                  id="inDisc-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#inDisc"
                  type="button"
                  role="tab"
                  aria-controls="inDisc"
                  aria-selected="true"
                >
                  <span>
                    <img src="image/invoiceWhite.png" alt="" />
                  </span>{" "}
                  <span className="invisSpan"> Invoice Discounting</span>{" "}
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  id="marFinan-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#marFinan"
                  type="button"
                  role="tab"
                  aria-controls="marFinan"
                  aria-selected="false"
                >
                  <span>
                    <img src="image/revenueWhite.png" alt="" />
                  </span>{" "}
                  <span className="invisSpan"> Marketplace Financing</span>{" "}
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  id="invenFinan-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#invenFinan"
                  type="button"
                  role="tab"
                  aria-controls="invenFinan"
                  aria-selected="false"
                >
                  <span>
                    <img src="image/inventoryWhite.png" alt="" />
                  </span>{" "}
                  <span className="invisSpan"> Inventory Financing</span>{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={(!topbarIsOpen ? " collapsed" : "") + " accordion-button"}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded={topbarIsOpen}
              aria-controls="collapseTwo"
            >
              Online Marketplaces
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <ul className="pg_navigate">
              <li>
                <a href>
                  <span>
                    <img src="image/amazon_minIcon.png" alt="" />
                  </span>{" "}
                  <span className="invisSpan"> Amazon</span>{" "}
                </a>
              </li>
              <li>
                <a href>
                  <span>
                    <img src="image/noon_minIcon.png" alt="" />
                  </span>{" "}
                  <span className="invisSpan"> Noon</span>{" "}
                </a>
              </li>
              <li>
                <a href>
                  <span>
                    <img src="image/talabat_minIcon.png" alt="" />
                  </span>{" "}
                  <span className="invisSpan"> Talabat</span>{" "}
                </a>
              </li>
              <li>
                <a href>
                  <span>
                    <img src="image/jaheez_minIcon.png" alt="" />
                  </span>{" "}
                  <span className="invisSpan"> Jahez</span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
