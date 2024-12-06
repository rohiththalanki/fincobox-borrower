import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import arrImg from "@/assets/cst_whtArrow.png";
import "./kyc.css";
import { loanFormSchema } from "../../../utils/error_schema";
import {
  checkFormError,
  formateDatewithJoin,
  isObjectValueEmpty,
} from "../../../utils";
import {
  DateInput,
  FloatingField,
  InputField,
  SelectField,
} from "../../Common";
import DropzoneField from "../../Common/DropzoneField";
import { getStorage } from "../../../utils/storage";
import PhoneInput from "react-phone-input-2";
import {
  kycCTabMenu,
  platformList,
  financingList,
} from "../../../utils/constant";
import { createLoanRequest, updateLoanRequest } from "../../../services";
import Loader from "../../Common/Loader";
import { custom_context } from "../../../utils/custom_context";
import { toast } from "react-toastify";
import { SuccessKYCModal } from "./SuccessKYCModal ";
import { UploadInvoiceModal } from "./UploadInvoiceModal";
import { Link } from "react-router-dom";

const formObj = {
  invoice_number: "",
  invoice_files: "",
};

export const LoanKYCModal = (props) => {
  const { profileData } = useContext(custom_context.ProfileData);
  const { show, onHide, callLoan } = props;
  const initialValue = {
    merchant: profileData?.id,
    email: profileData?.email,
    phone: profileData?.phone_number,
    platform: null,
    type_of_finacing: null,
    // invoice_number: "",
    // invoice_files:"",
    merchant_type: (profileData?.business_type).toLowerCase(),
    loan_amount_requested: "",
    disbursement_proposed_date: "",
    tenure: "",
    bank_account_details: null,
    beneficiary_account_title: "",
    beneficiary_account_number: "",
    beneficiary_bank_name: "",
    swift_code: "",
    status: "submitted_for_review",
  };
  const [inputValue, setInputValue] = useState(show?.id ? show : initialValue);
  const [inputError, setInputError] = useState("");
  const [showResponseError, setResError] = useState();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showInvoiceModal, setInvoiceModal] = useState(false);
  const [formValue, setFormValue] = useState([formObj]);
  useEffect(() => {
    // setInputValue(show);
    if (show?.id) {
      if (platformList.length && financingList.length) {
        const platformLabel = platformList.find(
          (item) => item.value == show?.platform
        );
        const financingLabel = financingList.find(
          (item) => item.value == show?.type_of_finacing
        );
        setInputValue((s) => {
          const obj = {
            ...s,
            ...show,
            platform: platformLabel?.value
              ? {
                value: platformLabel?.value,
                label: platformLabel?.label,
              }
              : null,
            type_of_finacing: financingLabel?.value
              ? {
                value: financingLabel?.value,
                label: financingLabel?.label,
              }
              : null,
          };
          return obj;
        });
      }
      setFormValue(
        show?.loan_invoices.map((item) => ({
          ...item,
          invoice_files: item?.invoice_files,
          id: item?.id,
        }))
      );
    }
  }, [show]);

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("merchant_type", inputValue?.merchant_type);
    formData.append("merchant", inputValue?.merchant);
    formData.append("email", inputValue?.email);
    formData.append("phone", inputValue?.phone);
    formData.append("platform", inputValue?.platform?.value);
    formData.append("type_of_finacing", inputValue?.type_of_finacing?.value);
    if (!show?.id) {
      formValue?.map((item) => {
        if (typeof inputValue?.invoice_files !== "string") {
          formData.append("invoice_number", item?.invoice_number);
          formData.append(
            "invoice_files",
            typeof item?.invoice_files === "string" ? null : item?.invoice_files
          );
        }
      });
    }
    formData.append("loan_amount_requested", inputValue?.loan_amount_requested);
    formData.append(
      "disbursement_proposed_date",
      formateDatewithJoin(inputValue?.disbursement_proposed_date)
    );
    formData.append("tenure", inputValue?.tenure);
    formData.append(
      "beneficiary_account_title",
      inputValue?.beneficiary_account_title
    );
    formData.append(
      "beneficiary_account_number",
      inputValue?.beneficiary_account_number
    );
    formData.append("beneficiary_bank_name", inputValue?.beneficiary_bank_name);
    formData.append("swift_code", inputValue?.swift_code);
    formData.append("status", inputValue?.status);
    formData.append("bank_account_details", inputValue?.bank_account_details);

    const validationResult = await checkFormError(inputValue, loanFormSchema);
    if (validationResult === true) {
      setIsLoading(true);
      if (show?.id) {
        handleUpdate(formData, show?.id);
      } else {
        handleCreate(formData);
      }
    } else {
      setInputError(validationResult);
    }
  };

  const handleCreate = async (data) => {
    const resp = await createLoanRequest(data);
    if (resp?.status === 201) {
      toast.success(resp?.message, { position: "top-center" });
      onHide();
      setShowSuccessModal(true);
    } else {
      setIsLoading(false);
      setResError(resp?.results?.message);
    }
  };

  const handleUpdate = async (data, id) => {
    const resp = await updateLoanRequest(data, id);
    if (resp?.status === 200) {
      toast.success(resp?.message, { position: "top-center" });
      onHide();
    } else {
      setIsLoading(false);
      setResError(resp?.results?.message);
    }
  };

  const handleOnChange = async (name, value) => {
    const stateObj = { ...inputValue, [name]: value };
    setInputValue(stateObj);
    if (!!inputError) {
      if (isObjectValueEmpty(inputError)) {
        const error = await checkFormError(stateObj, loanFormSchema);
        setInputError(error);
      }
    }
  };

  const openFileInNewTab = (file) => {
    if (typeof file === "string") {
      window.open(file, "_blank");
    } else {
      const fileUrl = URL.createObjectURL(file); // Replace with the actual URL of your file
      window.open(fileUrl, "_blank");
    }
  };
  return (
    <>
      <Modal
        className={
          "anvKyc_tpModal " + (showSuccessModal ? "success_modal" : "")
        }
        show={show}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
        size="xl"
        centered
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modal-90h"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Loan Application
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={submit}>
          <Modal.Body className="kycProc_otrBdy">
            <div className="kycProc_sdContent w-100 mx-5 my-3">
              <div className="kycContent_ht">
                <div className="_innerKyc_grid">
                  <div className="_inKycHead">
                    <h1>General Information</h1>
                    <p>Please fill the form in order to apply for loan.</p>
                  </div>

                  <div className="_inFr_flexBx">
                    <FloatingField
                      controlId="floatingInput"
                      label="Email ID"
                      labelClass=""
                      type="text"
                      placeholder="Email ID"
                      name="email"
                      disabled
                      onChange={({ target: { name, value } }) =>
                        handleOnChange(name, value)
                      }
                      // focus={!!inputError?.email}
                      // error={inputError?.email}
                      value={inputValue.email}
                    />

                    <div className="_inInput_fx _inDual_flex">
                      <InputField
                        inpId="anv_inpCont_si"
                        inputProps={
                          <PhoneInput
                            countryCodeEditable={false}
                            placeholder="Mobile Number"
                            className="text-input caret-transparent"
                            name="mobile_number"
                            country={"ae"}
                            onlyCountries={["ae"]}
                            autoComplete="off"
                          />
                        }
                      />
                      <FloatingField
                        controlId="floatingInput"
                        label="Mobile Number"
                        labelClass="anvMob_fq_bx"
                        type="number"
                        placeholder="Mobile Number"
                        name="phone"
                        disabled
                        defaultValue
                        maxLength={50}
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        // focus={!!inputError?.phone}
                        // error={inputError?.phone}
                        value={inputValue.phone}
                      />
                    </div>
                  </div>
                  <div className="_inFr_flexBx anvBas_select">
                    <SelectField
                      boxClass="basic-single"
                      classNamePrefix="select"
                      placeholder="Anchor Platform"
                      valueText="value"
                      labelText="label"
                      options={platformList}
                      name="platform"
                      error={
                        inputError?.platform
                          ? inputError?.platform
                          : inputError?.["platform.value"]
                      }
                      focus={
                        !!inputError?.["platform.value"] ||
                        !!inputError?.platform
                      }
                      selectedOption={inputValue.platform}
                      setSelectedOption={(value) =>
                        handleOnChange("platform", value)
                      }
                    />
                    <SelectField
                      boxClass="basic-single"
                      classNamePrefix="select"
                      placeholder="Type of Financing"
                      valueText="value"
                      labelText="label"
                      options={financingList}
                      name="type_of_finacing"
                      error={
                        inputError?.type_of_finacing
                          ? inputError?.type_of_finacing
                          : inputError?.["type_of_finacing.value"]
                      }
                      focus={
                        !!inputError?.["type_of_finacing.value"] ||
                        !!inputError?.type_of_finacing
                      }
                      selectedOption={inputValue.type_of_finacing}
                      setSelectedOption={(value) =>
                        handleOnChange("type_of_finacing", value)
                      }
                    />
                  </div>
                  {/* <div className="_inFr_flexBx align-items-end"> */}
                  {/* <FloatingField
                      controlId="floatingInput"
                      label="Invoice Number"
                      labelClass="_inInput_fx"
                      type="text"
                      placeholder="Invoice number"
                      name="invoice"
                      onChange={({ target: { name, value } }) =>
                        handleOnChange(name, value)
                      }
                      focus={!!inputError?.invoice}
                      error={inputError?.invoice}
                      value={inputValue.invoice}
                    />
                    <div className="fileAdd_bx">
                      <p className="_upLoad_uPara">Upload Invoice </p>
                      <div
                        className={
                          (inputError?.upload_invoice ? "error " : "") +
                          "_attachBx"
                        }
                      >
                        <DropzoneField
                          title="Update Invoice Doc."
                          htmlFor="attach_2"
                          value={
                            !!inputValue.upload_invoice &&
                            typeof inputValue.upload_invoice === "string"
                          }
                          handleOnChange={(value) =>
                            handleOnChange("upload_invoice", value)
                          }
                        />
                      </div>
                      {!!inputError?.upload_invoice && (
                        <p className="invalid-feedback">
                          {inputError?.upload_invoice}
                        </p>
                      )}
                    </div> */}
                  {/* </div> */}

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="invoiceMsg">
                      {formValue[0]?.invoice_number === ""
                        ? "No Invoices Uploaded Yet"
                        : `${formValue?.length} Invoice Uploaded`}
                    </div>
                    <button
                      type="button"
                      className="invMod_addBtn "
                      onClick={() => setInvoiceModal(true)}
                    >
                      Manage Invoices
                    </button>
                  </div>

                  <>
                    {formValue[0]?.invoice_number === "" ? (
                      ""
                    ) : (
                      <div className="responSive_table">
                        <table className="table table-striped invMod_table">
                          <thead>
                            <tr>
                              <th>S.no</th>
                              <th>Invoice Number</th>
                              <th>Uploaded Invoice</th>
                            </tr>
                          </thead>
                          <tbody>
                            {formValue?.map((item, i) => {
                              return (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  <td>{item?.invoice_number}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="viewBtn_table"
                                      onClick={() =>
                                        openFileInNewTab(item?.invoice_files)
                                      }
                                    >
                                      View
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </>
                  <div className="_inFr_flexBx align-items-end">
                    <div className="businesType_bx2">
                      <div className="bsy_head">
                        <h6>Business Type</h6>
                      </div>
                      <div className="businesType_otr">
                        <div
                          className={
                            (inputValue?.merchant_type === "individual"
                              ? "active "
                              : "") + " innrBsy_type not_allowed"
                          }
                        >
                          {/* <div className="bsy_circle">
                            <span></span>
                          </div> */}
                          <div className="bsy_para">Individual</div>
                        </div>

                        <div
                          className={
                            (inputValue?.merchant_type === "business"
                              ? "active "
                              : "") + " innrBsy_type not_allowed"
                          }
                        >
                          {/* <div className="bsy_circle">
                            <span></span>
                          </div> */}
                          <div className="bsy_para">Business</div>
                        </div>
                      </div>
                    </div>
                    <FloatingField
                      controlId="floatingInput"
                      label="Enter Loan Amount (AED)"
                      labelClass="_inInput_fx"
                      type="text"
                      placeholder="Enter Loan Amount (AED)"
                      name="loan_amount_requested"
                      onChange={({ target: { name, value } }) =>
                        handleOnChange(name, value)
                      }
                      focus={!!inputError?.loan_amount_requested}
                      error={inputError?.loan_amount_requested}
                      value={inputValue.loan_amount_requested}
                    />
                  </div>
                  <div className="_inFr_flexBx">
                    <FloatingField
                      controlId="floatingInput"
                      label="Enter Loan Tenure (in days)"
                      labelClass="_inInput_fx"
                      type="text"
                      placeholder="First Name"
                      name="tenure"
                      onChange={({ target: { name, value } }) =>
                        handleOnChange(name, value)
                      }
                      focus={!!inputError?.tenure}
                      error={inputError?.tenure}
                      value={inputValue.tenure}
                    />

                    <fieldset
                      className={`_anvDate_pickOuter_box ${!!inputError?.disbursement_proposed_date ? " error" : ""
                        }`}
                    >
                      <label
                        htmlFor="passPort_issue"
                        className={
                          inputValue?.disbursement_proposed_date && "filled"
                        }
                      >
                        Disbursement proposed date
                      </label>
                      <DateInput
                        id="passPort_issue"
                        placeholderText="Passport Issue Date"
                        value={
                          inputValue?.disbursement_proposed_date
                            ? new Date(inputValue?.disbursement_proposed_date)
                            : ""
                        }
                        name="disbursement_proposed_date"
                        handleOnChange={(value) =>
                          handleOnChange("disbursement_proposed_date", value)
                        }
                        dateFormat="dd-MMM-yyyy"
                        minDate={new Date()}
                      />
                      <i className="fa-regular fa-calendar"></i>
                      {!!inputError?.disbursement_proposed_date && (
                        <p className="invalid-feedback">
                          {inputError?.disbursement_proposed_date}
                        </p>
                      )}
                    </fieldset>
                  </div>
                  <div className="bankDetail_cont">
                    <div>
                      <h6>Bank account details</h6>
                    </div>
                    <div className="_inFr_flexBx mb-3">
                      <FloatingField
                        controlId="floatingInput"
                        label="Account Beneficiary Name"
                        labelClass="_inInput_fx"
                        type="text"
                        placeholder="First Name"
                        name="beneficiary_bank_name"
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        focus={!!inputError?.beneficiary_bank_name}
                        error={inputError?.beneficiary_bank_name}
                        value={inputValue.beneficiary_bank_name}
                      />

                      <FloatingField
                        controlId="floatingInput"
                        label="Bank account number / IBAN"
                        labelClass="_inInput_fx"
                        type="text"
                        placeholder="Last Name"
                        name="beneficiary_account_number"
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        focus={!!inputError?.beneficiary_account_number}
                        error={inputError?.beneficiary_account_number}
                        value={inputValue.beneficiary_account_number}
                      />
                    </div>
                    <div className="_inFr_flexBx">
                      <FloatingField
                        controlId="floatingInput"
                        label="Bank Name"
                        labelClass="_inInput_fx"
                        type="text"
                        placeholder="First Name"
                        name="beneficiary_account_title"
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        focus={!!inputError?.beneficiary_account_title}
                        error={inputError?.beneficiary_account_title}
                        value={inputValue.beneficiary_account_title}
                      />

                      <FloatingField
                        controlId="floatingInput"
                        label="Swift Code"
                        labelClass="_inInput_fx"
                        type="text"
                        placeholder="Last Name"
                        name="swift_code"
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        focus={!!inputError?.swift_code}
                        error={inputError?.swift_code}
                        value={inputValue.swift_code}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className={inputError?.resError && "anvFlex-root"}>
              {inputError?.resError && (
                <p className="invalid-feedback">
                  {/* {showResponseError().map((item) => item)} */}
                </p>
              )}

              <Button
                variant="primary"
                type="submit"
                className="anvSv_btn"
                disabled={isLoading}
              >
                <span>
                  <span className="text-base">Save & Continue</span>
                  {isLoading ? (
                    <Loader className="loader_kycBtn" />
                  ) : (
                    <img src={arrImg} className="arrCon_btn" />
                  )}
                </span>
              </Button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
      {showSuccessModal && (
        <SuccessKYCModal
          show={showSuccessModal}
          setShow={() => {
            setShowSuccessModal(!showSuccessModal);
            onHide();
          }}
        />
      )}
      <UploadInvoiceModal
        show={showInvoiceModal}
        initialFormValue={
          show?.loan_invoices
            ? show?.loan_invoices.map((item) => ({
              ...item,
            }))
            : [formObj]
        }
        setShow={() => {
          setInvoiceModal(!showInvoiceModal);
        }}
        callLoan={() => callLoan()}
        formValue={formValue}
        setFormValue={setFormValue}
        loanId={show?.id}
      />
    </>
  );
};
