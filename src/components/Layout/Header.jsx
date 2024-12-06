import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { clearStorage, getStorage } from "../../utils/storage";
import { firstCharacterOfWord } from "../../utils/utils";
import { icon } from "../Icon";
import { ChangePasswordModal } from "../Modal";
import { custom_context } from "../../utils/custom_context";

const Header = (props) => {
  const { topbarIsOpen, toggleTopbar } = props;
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [isOpenChangePassword, setOpenChangePassword] = useState(false);

  const [userDetails, setUserDetails] = useState(
    getStorage("logged-in")?.result
  );
  const { showKycModal, setShowKycModal } = useContext(
    custom_context.ModalContext
  );

  useEffect(() => {
    if (!showKycModal) {
      setUserDetails(getStorage("logged-in")?.result);
    }
  }, [showKycModal]);

  const handleLogout = () => {
    const callBack = () => {
      navigate("/login");
    };
    clearStorage(callBack);
  };
  return (
    <header className="fincoHeader1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className={(topbarIsOpen ? " _miniHam" : "") + " hamImg_box"}>
              <img
                src={`image/${topbarIsOpen ? "fincobox_minIcon" : "fincoBox"
                  }.png`}
                alt=""
              />
              {/* <a className="hamBox pointer" onClick={() => toggleTopbar()}>
                <span />
                <span />
                <span />
              </a> */}
            </div>
          </div>
          <div className="col-6">
            <div className="adminSide">
              <div className="btn" onClick={() => setShowKycModal(true)}>
                {getStorage("logged-in")?.result?.kyc_details
                  ?.get_completion_percentage
                  ? `KYC (${getStorage("logged-in")?.result?.kyc_details
                    ?.get_completion_percentage
                  }% done)`
                  : `KYC (0% done)`}
              </div>
              <Dropdown
                isOpen={collapsed}
                onClick={() => setCollapsed(!collapsed)}
                toggle={() => setCollapsed(!collapsed)}
                direction={"down"}
              >
                <DropdownToggle className="bg-none nav-link">
                  <div
                    onClick={() => setCollapsed(!collapsed)}
                    className="d-flex justify-content-arround align-items-center"
                  >
                    My Profile{" "}
                    <span onClick={() => setCollapsed(!collapsed)}>
                      {false ? (
                        <img
                          className="adminPro_view"
                          src="image/adminImg.png"
                          alt="image"
                        />
                      ) : (
                        <span className="rounded-circle profile_avatar">
                          {userDetails?.first_name
                            ? firstCharacterOfWord(
                              userDetails?.first_name +
                              " " +
                              userDetails?.last_name
                            )
                            : "NA"}
                        </span>
                      )}
                    </span>
                  </div>
                </DropdownToggle>
                <DropdownMenu className="m-0 p-0">
                  <div
                    className="p-2 pointer action_button border"
                    onClick={() => setOpenChangePassword(true)}
                  >
                    Change password
                  </div>
                  <div
                    className="p-2 pointer action_button border"
                    onClick={() => handleLogout()}
                  >
                    {icon.LogoutIcon} Log out
                  </div>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          {isOpenChangePassword && (
            <ChangePasswordModal
              isOpen={isOpenChangePassword}
              toggleModal={setOpenChangePassword}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
