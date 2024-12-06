import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { custom_context } from "../../utils/custom_context";
import { getStorage } from "../../utils/storage";

export default function Layout({ children, showSidebar }) {
  const [topbarIsOpen, setTopbarOpen] = useState(false);
  const [showKycModal, setShowKycModal] = useState(false);
  const [profileData, setProfileData] = useState(
    getStorage("logged-in")?.result
  );

  return (
    <>
      <custom_context.ModalContext.Provider
        value={{ showKycModal, setShowKycModal }
        }
      >
        <custom_context.ProfileData.Provider
          value={{ profileData, setProfileData }}
        >
          <Header
            toggleTopbar={() => setTopbarOpen(!topbarIsOpen)}
            topbarIsOpen={topbarIsOpen}
          />
          {
            showSidebar ? (
              <section
                className={(topbarIsOpen ? " collaped" : "") + " _dashBoard_main"}
              >
                <Sidebar topbarIsOpen={topbarIsOpen} />
                <div className="side_mainBox">{children}</div>
              </section>
            ) : (
              children
            )
          }
        </custom_context.ProfileData.Provider>
      </custom_context.ModalContext.Provider>
    </>
  );
}
