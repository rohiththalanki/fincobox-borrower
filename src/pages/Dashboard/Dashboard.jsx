import React, { useContext, useEffect, useState } from "react";
import { Button } from "reactstrap";
import { KYCModal } from "../../components/Modal";
import { LoanKYCModal } from "../../components/Modal/KYC/LoanKYCModal";
import { kycStatus } from "../../utils/constant";
import { firstLetterCapital } from "../../utils";
import { custom_context } from "../../utils/custom_context";
import { getKycData, getLoanRequest } from "../../services";
import { getStorage, setStorage } from "../../utils/storage";

export function Dashboard() {
  const { showKycModal, setShowKycModal } = useContext(
    custom_context.ModalContext
  );
  const [loanDetails, setLoanDetails] = useState("");
  const [showloanKyc, setLoanKyc] = useState(false);
  const [kycDetails, setKycDetails] = useState({});

  const { profileData } = useContext(custom_context.ProfileData);
  const userKycStatus =
    kycStatus[kycDetails?.status ? kycDetails?.status : "incomplete"]?.label;
  const data = getStorage("logged-in")?.result;
  const { setProfileData } = useContext(custom_context.ProfileData);

  useEffect(() => {
    if (!showKycModal) {
      getLoanDetails();
    }
  }, [showloanKyc]);

  useEffect(() => {
    getKycDetails();
  }, [showKycModal]);

  const getKycDetails = async (data) => {
    const resp = await getKycData(data?.business_type);
    if (resp?.status) {
      const get_completion_percentage =
        resp?.results[0]?.get_completion_percentage;
      const userDetails = {
        ...getStorage("logged-in")?.result,
        kyc_details: {
          get_completion_percentage,
          rejection_reason: resp?.results[0]?.rejection_reason,
          status: resp?.results[0]?.status,
        },
      };
      setStorage("logged-in", {
        ...getStorage("logged-in"),
        result: userDetails,
      });
      setProfileData(userDetails);
      setKycDetails(resp?.results[0]);
    }
  };

  const getLoanDetails = async () => {
    const resp = await getLoanRequest();
    if (resp?.status) {
      setLoanDetails(resp?.results);
    }
  };

  return (
    <section className="_welCome_fincoBox">
      <div className="container container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12 col-xl-12">
            <div className="outerFinco_welcome _kycCompletionBx">
              <div className="dash_containerDiv">
                <span className="_adminName">
                  Hi, {firstLetterCapital(profileData?.first_name)}{" "}
                  {firstLetterCapital(profileData?.last_name)}
                </span>
                <div className="dash_containSubDiv">
                  <div className="dash_contentDiv">
                    <div className="dash_statusDiv">
                      <h4>
                        KYC Status-{" "}
                        {kycDetails?.get_completion_percentage
                          ? kycDetails?.get_completion_percentage
                          : 0}
                        % Completed
                      </h4>
                      <div
                        className={`dash_pendingDiv ${userKycStatus === "In Review" ||
                          userKycStatus === "Completed"
                          ? " success"
                          : ""
                          }`}
                      >
                        <span
                          className={` ${userKycStatus === "In Review" ||
                            userKycStatus === "Completed"
                            ? " success"
                            : ""
                            }`}
                        >
                          {userKycStatus}
                        </span>
                      </div>
                    </div>
                    <div className="dash_statusPara">
                      <p>
                        You can click Update Details to modify and resubmit
                        correct details. Update Details
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button
                      color="primary"
                      onClick={() => setShowKycModal(true)}
                    >
                      Update Details
                    </Button>
                  </div>
                  {kycDetails?.rejection_reason &&
                    kycDetails?.rejection_reason !== null &&
                    kycDetails?.rejection_reason !== "None" &&
                    kycDetails?.rejection_reason !== "" && (
                      <div className="dash_alertDiv">
                        <p>{kycDetails?.rejection_reason}</p>
                      </div>
                    )}
                </div>
                <div className="dash_containSubDiv mt-4">
                  <div className="dash_contentDiv">
                    <div className="dash_statusDiv">
                      <h4>Loan Application </h4>
                      <div
                        className={`dash_pendingDiv ${loanDetails[0]?.status === "In Review" ||
                          loanDetails[0]?.status === "completed"
                          ? " success"
                          : ""
                          }`}
                      >
                        <span
                          className={` ${loanDetails[0]?.status === "In Review" ||
                            loanDetails[0]?.status === "completed"
                            ? " success"
                            : ""
                            }`}
                        >
                          {
                            kycStatus[
                              loanDetails[0]?.status
                                ? loanDetails[0]?.status
                                : "incomplete"
                            ]?.label
                          }
                        </span>
                      </div>
                    </div>
                    <div className="dash_statusPara">
                      <p>Apply For loan here </p>
                    </div>
                  </div>
                  {/* <div>
                    <button onClick={() => setLoanKyc(true)}>button</button>
                  </div> */}
                  <div>
                    {loanDetails[0]?.merchant ? (
                      <Button
                        color="primary"
                        onClick={() => setLoanKyc(loanDetails[0])}
                        disabled={
                          userKycStatus !== "Completed" ||
                          loanDetails[0]?.status === "completed"
                        }
                      >
                        Update loan
                      </Button>
                    ) : (
                      <Button
                        color="primary"
                        onClick={() => setLoanKyc(true)}
                        disabled={
                          userKycStatus !== "Completed" ||
                          loanDetails[0]?.status === "completed"
                        }
                      >
                        Apply for loan
                      </Button>
                    )}
                  </div>
                  {loanDetails[0]?.rejection_reason &&
                    loanDetails[0]?.rejection_reason !== null &&
                    loanDetails[0]?.rejection_reason !== "None" &&
                    loanDetails[0]?.rejection_reason !== "" && (
                      <>
                        {/* <div className="dash_alertDiv">
                        <p>{loanDetails[0]?.rejection_reason}</p>
                      </div> */}
                        <div className="dash_success_alertDiv">
                          <p>{loanDetails[0]?.rejection_reason}</p>
                        </div>
                      </>
                    )}
                </div>
                <div className="_kycProg_barAdd">
                  <div className="dash_blankDiv"></div>
                  <div className="dash_blankDiv"></div>
                  <div className="dash_blankDiv"></div>
                  <div className="dash_blankDiv"></div>
                  <div className="dash_blankDiv"></div>
                  <div className="dash_blankDiv"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showloanKyc && (
        <LoanKYCModal
          show={showloanKyc}
          onHide={() => setLoanKyc(!showloanKyc)}
          callLoan={() => getLoanDetails()}
        />
      )}
      {showKycModal && (
        <KYCModal show={showKycModal} setShow={setShowKycModal} />
      )}
    </section>
  );
}
