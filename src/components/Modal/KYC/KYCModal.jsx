import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import arrImg from "@/assets/cst_whtArrow.png";
import "./kyc.css";
import { modalFormSchema } from "../../../utils/error_schema";
import {
  checkFormError,
  firstLetterCapital,
  formateDatewithJoin,
  getResponseAllErrors,
} from "../../../utils";
import {
  DateInput,
  FloatingField,
  InputField,
  SelectField,
} from "../../Common";
import DropzoneField from "../../Common/DropzoneField";
import { getStorage, setStorage } from "../../../utils/storage";
import PhoneInput from "react-phone-input-2";
import {
  businessKycCompanyType,
  businessKycBusinessSegment,
  businessKycSmeSegment,
  kycCTabMenu,
} from "../../../utils/constant";
import {
  citiesRequest,
  industrySectorRequest,
  nationalityRequest,
  occupationRequest,
  businessKycRequest,
  personalKycRequest,
  getKycData,
  updateUserDetail,
} from "../../../services";
import { FaCheckCircle } from "react-icons/fa";
import { SuccessKYCModal } from "./SuccessKYCModal ";
import Loader from "../../Common/Loader";
import { custom_context } from "../../../utils/custom_context";

export function KYCModal(props) {
  const { show, setShow } = props;
  const initialValue = {
    first_name: "",
    last_name: "",
    email: "",
    occupation: null,
    nationality: null,
    address: "",
    city: null,
    po_box: "",
    address_proof: "",
    emirates_id_number: "",
    emirates_id_expiry_date: "",
    emirates_id_front: "",
    emirates_id_back: "",
    passport_number: "",
    passport_issue_date: "",
    passport_expiry_date: "",
    passport_front: "",
    passport_back: "",
    business_name: "",
    company_type: null,
    business_segment: null,
    sme_segment: null,
    industry_sector: null,
    tin_number: "",
    business_document: "",
    business_type: "",
  };
  const { setProfileData } = useContext(custom_context.ProfileData);

  const [inputValue, setInputValue] = useState(initialValue);
  const [initialFormValue, setInitialFormValue] = useState(initialValue);
  const menuList = kycCTabMenu
    .filter((item) =>
      inputValue?.business_type === "Business"
        ? item
        : inputValue?.business_type === "Individual" &&
        inputValue?.business_type === item?.value
    )
    .reduce((itemArray, item) => {
      itemArray.push(...item?.submenu);
      return itemArray;
    }, []);

  const [kycDetails, setKycDetails] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [inputError, setInputError] = useState("");

  const [activeStep, setActiveStep] = useState("gnl_info");
  const [verifiedStep, setVerifiedStep] = useState(menuList);
  const [cityData, setCityData] = useState([]);
  const [occupationData, setOccupationData] = useState([]);
  const [nationalityData, setNationalityData] = useState([]);
  const [industrySectorData, setIndustrySectorData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const data = getStorage("logged-in")?.result;

  useEffect(() => {
    getKycDetails(data?.business_type);
    CallUserInfo(data);
    getOccupation();
    getNationality();
    getCities();
    getIndustrySector();
  }, []);

  useEffect(() => {
    if (
      occupationData.length &&
      cityData.length &&
      nationalityData.length &&
      kycDetails?.occupation
    ) {
      const occupationLabel = occupationData.find(
        (value) => value.id == kycDetails?.occupation
      );

      const nationalityLabel = nationalityData.find(
        (value) => value.id == kycDetails?.nationality
      );
      const cityLabel = cityData.find((value) => value.id == kycDetails?.city);

      const industrySectorLabel = industrySectorData.find(
        (value) => value.id == kycDetails?.industry_sector
      );
      setInputValue((s) => {
        const obj = {
          ...s,
          ...kycDetails,
          occupation: occupationLabel?.id
            ? {
              value: occupationLabel?.id,
              label: occupationLabel?.occupation,
            }
            : null,
          nationality: nationalityLabel?.id
            ? {
              value: nationalityLabel?.id,
              label: nationalityLabel?.nationality,
            }
            : null,
          city: cityLabel?.id
            ? {
              value: cityLabel?.id,
              label: cityLabel?.name,
            }
            : null,
          industry_sector: industrySectorLabel?.id
            ? {
              value: industrySectorLabel?.id,
              label: industrySectorLabel?.name,
            }
            : null,
          business_segment: kycDetails?.business_segment
            ? {
              value: kycDetails?.business_segment,
              label: firstLetterCapital(kycDetails?.business_segment),
            }
            : null,
          company_type: kycDetails?.company_type
            ? {
              value: kycDetails?.company_type,
              label: firstLetterCapital(kycDetails?.company_type),
            }
            : null,
          sme_segment: kycDetails?.sme_segment
            ? {
              value: kycDetails?.sme_segment,
              label: firstLetterCapital(kycDetails?.sme_segment),
            }
            : null,
        };
        setInitialFormValue(obj);
        return obj;
      });
      if (+kycDetails?.get_completion_percentage === 100) {
        setVerifiedStep(menuList.map((item) => ({ ...item, status: true })));
      }
    }
  }, [
    nationalityData,
    cityData,
    occupationData,
    kycDetails,
    industrySectorData,
  ]);

  const handleClose = () => {
    setShow(false);
    setVerifiedStep(menuList);
    setInputValue(initialValue);
    setActiveStep("gnl_info");
    setInputError("");
  };

  const CallUserInfo = (data) => {
    setInputValue((s) => ({
      ...s,
      user: data.id,
      first_name: data?.first_name,
      last_name: data?.last_name,
      email: data?.email,
      business_type: data?.business_type,
      phone_number: data?.phone_number,
    }));
  };

  const getKycDetails = async (data) => {
    const resp = await getKycData(data);
    if (resp?.status) {
      setKycDetails(resp?.results[0]);
    }
  };

  const getCities = async () => {
    const resp = await citiesRequest();
    if (resp?.status) {
      setCityData(resp?.results);
    }
  };

  const getOccupation = async () => {
    const resp = await occupationRequest();
    if (resp?.status) {
      setOccupationData(resp?.results);
    }
  };

  const getNationality = async () => {
    const resp = await nationalityRequest();
    if (resp?.status) {
      setNationalityData(resp?.results);
    }
  };

  const getIndustrySector = async () => {
    const resp = await industrySectorRequest();
    if (resp?.status) {
      setIndustrySectorData(resp?.results);
    }
  };
  const submit = async (step) => {
    const validationResult = await checkFormError(
      inputValue,
      modalFormSchema(activeStep, step === undefined ? "final" : "")
    );
    const activeMenu = menuList.find((item) => item.value === activeStep),
      activeId = activeMenu?.id,
      stepID = menuList.find((item) => item.value === step)?.id;
    const isValid =
      (activeId === undefined && step === "incorp_detail") || activeId > stepID
        ? true
        : validationResult === true;
    if (isValid) {
      if (step && activeId < stepID) {
        activeAndVerifiedStep(step);
      }
      setIsLoading(true);
      const payload = {
        ...inputValue,
        business_segment: inputValue?.business_segment?.value,
        occupation: inputValue?.occupation?.value,
        nationality: inputValue?.nationality?.value,
        city: inputValue?.city?.value,
        company_type: inputValue?.company_type?.value,
        industry_sector: inputValue?.industry_sector?.value,
        sme_segment: inputValue?.sme_segment?.value,
        status: "submitted_for_review",
      };
      if (inputValue?.emirates_id_expiry_date) {
        payload["emirates_id_expiry_date"] = formateDatewithJoin(
          inputValue?.emirates_id_expiry_date
        );
      }
      if (inputValue?.passport_expiry_date) {
        payload["passport_expiry_date"] = formateDatewithJoin(
          inputValue?.passport_expiry_date
        );
      }
      if (inputValue?.passport_issue_date) {
        payload["passport_issue_date"] = formateDatewithJoin(
          inputValue?.passport_issue_date
        );
      }
      delete payload.first_name;
      delete payload.last_name;
      delete payload.email;
      delete payload.created;
      delete payload.modified;
      delete payload.get_completion_percentage;

      if (inputValue?.business_type === "Individual") {
        delete payload.company_type;
        delete payload.industry_sector;
        delete payload.sme_segment;
        delete payload.business_segment;
        delete payload.business_name;
        delete payload.business_document;
      }
      const fromData = new FormData();
      for (const key in payload) {
        if (
          key === "address_proof" ||
          key === "emirates_id_front" ||
          key === "emirates_id_back" ||
          key === "business_document" ||
          key === "passport_back" ||
          key === "passport_front"
        ) {
          if (
            Object.hasOwnProperty.call(payload, key) &&
            !!payload[key] &&
            typeof payload[key] !== "string"
          ) {
            fromData.append(key, payload[key]);
          }
        } else {
          if (Object.hasOwnProperty.call(payload, key) && !!payload[key]) {
            fromData.append(key, payload[key]);
          }
        }
      }
      if (
        stepID === undefined ||
        (activeId < stepID &&
          JSON.stringify(initialFormValue) !== JSON.stringify(inputValue))
      ) {
        handleKycRequest(fromData, step);
      } else {
        activeAndVerifiedStep(step);
      }
    } else {
      const nestErrorObj = {};
      for (const key in validationResult) {
        if (Object.hasOwnProperty.call(validationResult, key)) {
          if (!activeMenu?.filed.includes(key)) {
            nestErrorObj[key] = validationResult[key];
          }
        }
      }
      setInputError({
        resError: { ...inputError?.resError, ...nestErrorObj },
        ...validationResult,
      });
    }
  };

  const handleKycRequest = async (fromData, step) => {
    if (inputValue.business_type === data?.business_type) {
      updateUserKYC(fromData, step);
    } else {
      const result = await updateUserDetail({
        business_type: inputValue.business_type,
        id: inputValue?.user,
      });
      if (result?.results) {
        setStorage("logged-in", {
          ...getStorage("logged-in"),
          result: result?.results,
        });
        updateUserKYC(fromData, step);
      } else {
        setIsLoading(false);
      }
    }
  };

  const updateUserKYC = async (fromData, step) => {
    if (inputValue?.business_type === "Individual") {
      const resp = await personalKycRequest(
        fromData,
        inputValue?.id ? inputValue?.id : false
      );
      handleAPIResponse(resp, step);
    }

    if (inputValue?.business_type === "Business") {
      const res = await businessKycRequest(
        fromData,
        inputValue?.id ? inputValue?.id : false
      );
      handleAPIResponse(res, step);
    }
  };

  const handleAPIResponse = (resp, step) => {
    if (resp?.success) {
      const get_completion_percentage =
        resp?.results?.get_completion_percentage;
      const userDetails = {
        ...getStorage("logged-in")?.result,
        kyc_details: {
          get_completion_percentage,
          rejection_reason: resp?.results?.rejection_reason,
          status: resp?.results?.status,
        },
      };
      setStorage("logged-in", {
        ...getStorage("logged-in"),
        result: userDetails,
      });
      setProfileData(userDetails);
      activeAndVerifiedStep(step);
      if (step === undefined) {
        setShowSuccessModal(true);
      }
      setIsLoading(false);
      getKycDetails(inputValue?.business_type);
      setInputError("");
    } else {
      setIsLoading(false);
      setInputError((s) => ({
        ...s,
        ...getResponseAllErrors(resp?.error),
        resError: getResponseAllErrors(resp?.error),
      }));
    }
  };
  const activeAndVerifiedStep = (step) => {
    const activeMenu = menuList.find((item) => item.value === activeStep);
    if (step) {
      setActiveStep(step);
      setVerifiedStep((s) => {
        if (!s.some((list) => list?.value === activeStep)) {
          s.push({ ...activeMenu, status: true });
        }
        return s;
      });
    }
    setIsLoading(false);
  };
  const handleOnChange = async (name, value) => {
    let stateObj = { ...inputValue, [name]: value };
    setInputValue((s) => {
      stateObj = { ...s, [name]: value };
      return stateObj;
    });
    if (!!inputError) { //false
      const activeMenu = menuList.find((item) => item.value === activeStep);
      const validationResult = await checkFormError(
        stateObj,
        modalFormSchema(activeStep)
      );
      // setInputError((s) => ({ resError: s.resError, ...error }));
      setInputError((s) => {
        const obj = {};
        for (const key in s?.resError) {
          if (Object.hasOwnProperty.call(s?.resError, key)) {
            if (!activeMenu?.filed.includes(key)) {
              obj[key] = s?.resError[key];
            }
          }
        }
        return {
          resError: { ...obj },
          ...validationResult,
        };
      });
    }
  };

  const showResponseError = () => {
    const resError = inputError?.resError;
    let error = [];
    for (const key in resError) {
      if (Object.hasOwnProperty.call(resError, key)) {
        error.push(
          <p className="m-0">
            <b>{key} : </b> {resError[key]}
          </p>
        );
      }
    }
    return error;
  };

  return (
    <Modal
      className={"anvKyc_tpModal " + (showSuccessModal ? "success_modal" : "")}
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="xl"
      centered
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          KYC Updation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="kycProc_otrBdy">
        <Tab.Container id="left-tabs-example" defaultActiveKey="gnl_info">
          <div className="kycProc_sdBar">
            <Nav variant="pills" className="flex-column">
              {kycCTabMenu
                .filter((item) =>
                  inputValue?.business_type === "Business"
                    ? item
                    : inputValue?.business_type === "Individual" &&
                    inputValue?.business_type === item?.value
                )
                .map((menu, ind) => (
                  <React.Fragment key={menu?.label + ind}>
                    <div className="kycProc_TabHd">
                      <span>{menu?.label}</span>
                    </div>
                    {menu?.submenu.map((submenu, key) => (
                      <Nav.Item key={submenu?.label + key}>
                        <Nav.Link
                          type="submit"
                          onClick={() => submit(submenu?.value)}
                          className={
                            (submenu?.value === activeStep ? "active " : "") +
                            "d-flex justify-content-between"
                          }
                        >
                          {submenu?.label}
                          {verifiedStep.some(
                            (item) =>
                              item?.status === true &&
                              item?.value === submenu?.value
                          ) &&
                            submenu?.value !== activeStep && (
                              <span>
                                <FaCheckCircle
                                  className="active_check_icon"
                                  color="#21CEB6"
                                />
                              </span>
                            )}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </React.Fragment>
                ))}
            </Nav>
          </div>

          <div className="kycProc_sdContent">
            <div className="kycContent_ht">
              <Tab.Content>
                <Tab.Pane active={activeStep === "gnl_info"}>
                  <div className="_innerKyc_grid">
                    <div className="_inKycHead">
                      <h1>General Information</h1>
                      <p>
                        We need a few more details about you and your business
                      </p>
                    </div>

                    <div className="_inFr_flexBx">
                      <FloatingField
                        // ui="strap"
                        controlId="floatingInput"
                        label="First Name"
                        labelClass="_inInput_fx"
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        disabled
                        focus={!!inputError?.first_name}
                        error={inputError?.first_name}
                        value={inputValue.first_name}
                      />

                      <FloatingField
                        controlId="floatingInput"
                        label="Last Name"
                        labelClass="_inInput_fx"
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        disabled
                        focus={!!inputError?.last_name}
                        error={inputError?.last_name}
                        value={inputValue.last_name}
                      />
                    </div>

                    <div className="businesType_bx">
                      <div className="bsy_head">
                        <h6>Business Type</h6>
                      </div>

                      <div className="businesType_otr">
                        <div
                          className={
                            (inputValue?.business_type === "Individual"
                              ? "active "
                              : "") + " innrBsy_type"
                          }
                          onClick={() =>
                            setInputValue((s) => ({
                              ...s,
                              business_type: "Individual",
                            }))
                          }
                        >
                          {/* <div className="bsy_circle">
                            <span></span>
                          </div> */}
                          <div className="bsy_para">Individual</div>
                        </div>

                        <div
                          className={
                            (inputValue?.business_type === "Business"
                              ? "active "
                              : "") + " innrBsy_type"
                          }
                          onClick={() =>
                            setInputValue((s) => ({
                              ...s,
                              business_type: "Business",
                            }))
                          }
                        >
                          {/* <div className="bsy_circle">
                            <span></span>
                          </div> */}
                          <div className="bsy_para">Business</div>
                        </div>
                      </div>
                    </div>

                    <div className="_inFr_flexBx">
                      <FloatingField
                        controlId="floatingInput"
                        label="Email ID"
                        labelClass=""
                        type="text"
                        placeholder="Email ID"
                        name="email"
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        disabled
                        focus={!!inputError?.email}
                        error={inputError?.email}
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
                          name="phone_number"
                          defaultValue
                          maxLength={50}
                          onChange={({ target: { name, value } }) =>
                            handleOnChange(name, value)
                          }
                          disabled
                          focus={!!inputError?.phone_number}
                          error={inputError?.phone_number}
                          value={inputValue.phone_number}
                        />
                      </div>
                    </div>

                    <div className="_inFr_flexBx anvBas_select">
                      <SelectField
                        boxClass="basic-single"
                        classNamePrefix="select"
                        placeholder="Occupation"
                        valueText="id"
                        labelText="occupation"
                        options={occupationData}
                        name="occupation"
                        error={
                          inputError?.occupation
                            ? inputError?.occupation
                            : inputError?.["occupation.value"]
                        }
                        focus={
                          !!inputError?.["occupation.value"] ||
                          !!inputError?.occupation
                        }
                        selectedOption={inputValue.occupation}
                        setSelectedOption={(value) =>
                          handleOnChange("occupation", value)
                        }
                      />
                      <SelectField
                        boxClass="basic-single"
                        classNamePrefix="select"
                        placeholder="Nationality"
                        valueText="id"
                        labelText="nationality"
                        options={nationalityData}
                        name="nationality"
                        error={
                          inputError?.nationality
                            ? inputError?.nationality
                            : inputError?.["nationality.value"]
                        }
                        focus={
                          !!inputError?.["nationality.value"] ||
                          !!inputError?.nationality
                        }
                        selectedOption={inputValue.nationality}
                        setSelectedOption={(value) =>
                          handleOnChange("nationality", value)
                        }
                      />
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane active={activeStep === "addrs"}>
                  <div className="_innerKyc_grid">
                    <div className="_inKycHead">
                      <h1>Address Details</h1>
                      <p>
                        We need a few more details about you and your business
                      </p>
                    </div>

                    <div className="_inFr_flexBx">
                      <FloatingField
                        className="w-100 "
                        controlId="floatingInput"
                        label="Address *"
                        labelClass="_inInput_fx w-100 fullW-d100"
                        as="textarea"
                        placeholder="Address"
                        name="address"
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        focus={!!inputError?.address}
                        error={inputError?.address}
                        value={inputValue.address}
                      />
                    </div>

                    <div className="_inFr_flexBx anvBas_select">
                      <SelectField
                        boxClass="basic-single"
                        classNamePrefix="select"
                        placeholder="City"
                        valueText="id"
                        labelText="name"
                        options={cityData}
                        name="city"
                        error={
                          inputError?.city
                            ? inputError?.city
                            : inputError?.["city.value"]
                        }
                        focus={
                          !!inputError?.["city.value"] || !!inputError?.city
                        }
                        selectedOption={inputValue.city}
                        setSelectedOption={(value) =>
                          handleOnChange("city", value)
                        }
                      />

                      <FloatingField
                        controlId="floatingInput"
                        label="Enter your PO BOX"
                        labelClass="_inInput_fx"
                        type="text"
                        placeholder="Enter your PO BOX"
                        name="po_box"
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        focus={!!inputError?.po_box}
                        error={inputError?.po_box}
                        value={inputValue.po_box}
                      />
                    </div>

                    <div className="_inFr_flexBx">
                      <div className="fileAdd_bx">
                        <p>Proof of Residential Address in UAE*</p>
                        <div
                          className={
                            (inputError?.address_proof ? "error " : "") +
                            "_attachBx"
                          }
                        >
                          <DropzoneField
                            title="Address proof"
                            htmlFor="attach"
                            value={
                              !!inputValue.address_proof &&
                              typeof inputValue.address_proof === "string"
                            }
                            handleOnChange={(value) =>
                              handleOnChange("address_proof", value)
                            }
                          />
                        </div>
                        <span className="fil_addBottom_para">
                          Ejari, Utility bill or bank statement from last 3
                          months
                        </span>

                        {!!inputError?.address_proof && (
                          <p className="invalid-feedback">
                            {inputError?.address_proof}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane active={activeStep === "doc_verify"}>
                  <div className="_innerKyc_grid ing_exMarg">
                    <div className="_inKycHead">
                      <h1>Document Verification</h1>
                      <p>
                        We need a few more details about you and your business
                      </p>
                    </div>

                    <div className="_inFr_flexBx">
                      <div
                        className="_inInput_fx fulWid _upLine_head"
                        style={{ flex: "0 0 100%" }}
                      >
                        <h4>Emirate ID's</h4>
                      </div>

                      <div className="fileAdd_bx">
                        <p className="_upLoad_uPara">
                          Upload Emirates ID (front) *
                        </p>
                        <div
                          className={
                            (inputError?.emirates_id_front ? "error " : "") +
                            "_attachBx"
                          }
                        >
                          <DropzoneField
                            title="Emirates ID Front"
                            htmlFor="attach_2"
                            value={
                              !!inputValue.emirates_id_front &&
                              typeof inputValue.emirates_id_front === "string"
                            }
                            handleOnChange={(value) =>
                              handleOnChange("emirates_id_front", value)
                            }
                          />
                        </div>
                        {!!inputError?.emirates_id_front && (
                          <p className="invalid-feedback">
                            {inputError?.emirates_id_front}
                          </p>
                        )}
                      </div>

                      <div className="fileAdd_bx">
                        <p className="_upLoad_uPara">
                          Upload Emirates ID (Back) *
                        </p>
                        <div
                          className={
                            (inputError?.emirates_id_back ? "error " : "") +
                            "_attachBx"
                          }
                        >
                          <DropzoneField
                            title="Emirates ID Back"
                            htmlFor="attach_3"
                            value={
                              !!inputValue.emirates_id_back &&
                              typeof inputValue.emirates_id_back === "string"
                            }
                            handleOnChange={(value) =>
                              handleOnChange("emirates_id_back", value)
                            }
                          />
                        </div>
                        {!!inputError?.emirates_id_back && (
                          <p className="invalid-feedback">
                            {inputError?.emirates_id_back}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="_inFr_flexBx">
                      <FloatingField
                        controlId="floatingInput"
                        label="Enter your Emirate ID"
                        labelClass="_inInput_fx"
                        type="text"
                        placeholder="Enter your Emirate ID"
                        name="emirates_id_number"
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        focus={!!inputError?.emirates_id_number}
                        error={inputError?.emirates_id_number}
                        value={inputValue.emirates_id_number}
                      />

                      <fieldset
                        className={`_anvDate_pickOuter_box ${!!inputError?.emirates_id_expiry_date ? " error" : ""
                          }`}
                      >
                        <label
                          htmlFor="Expiry_Date"
                          className={
                            inputValue?.emirates_id_expiry_date && "filled"
                          }
                        >
                          Expiry Date <span>*</span>
                        </label>
                        <DateInput
                          id="Expiry_Date"
                          placeholderText="Expiry Date"
                          name="emirates_id_expiry_date"
                          dateFormat="dd-MMM-yyyy"
                          value={
                            inputValue?.emirates_id_expiry_date
                              ? new Date(inputValue?.emirates_id_expiry_date)
                              : ""
                          }
                          handleOnChange={(value) =>
                            handleOnChange("emirates_id_expiry_date", value)
                          }
                        />
                        <i className="fa-regular fa-calendar"></i>
                        {!!inputError?.emirates_id_expiry_date && (
                          <p className="invalid-feedback">
                            {inputError?.emirates_id_expiry_date}
                          </p>
                        )}
                      </fieldset>
                    </div>

                    <div className="_inFr_flexBx">
                      <div
                        className="_inInput_fx fulWid _upLine_head"
                        style={{ flex: "0 0 100%" }}
                      >
                        <h4>Passport Details</h4>
                      </div>

                      <div className="fileAdd_bx">
                        <p className="_upLoad_uPara">
                          Upload Passport page (Front) *
                        </p>
                        <div
                          className={
                            (inputError?.passport_front ? "error " : "") +
                            "_attachBx"
                          }
                        >
                          <DropzoneField
                            title="Passport Front"
                            htmlFor="attach_4"
                            value={
                              !!inputValue.passport_front &&
                              typeof inputValue.passport_front === "string"
                            }
                            handleOnChange={(value) =>
                              handleOnChange("passport_front", value)
                            }
                          />
                        </div>
                        {!!inputError?.passport_front && (
                          <p className="invalid-feedback">
                            {inputError?.passport_front}
                          </p>
                        )}
                      </div>

                      <div className="fileAdd_bx">
                        <p className="_upLoad_uPara">
                          Upload Passport page (Back) *
                        </p>
                        <div
                          className={
                            (inputError?.passport_back ? "error " : "") +
                            "_attachBx"
                          }
                        >
                          <DropzoneField
                            title="Passport Back"
                            htmlFor="attach_5"
                            value={
                              !!inputValue.passport_back &&
                              typeof inputValue.passport_back === "string"
                            }
                            handleOnChange={(value) =>
                              handleOnChange("passport_back", value)
                            }
                          />
                        </div>
                        {!!inputError?.passport_back && (
                          <p className="invalid-feedback">
                            {inputError?.passport_back}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="_inFr_flexBx">
                      <FloatingField
                        controlId="floatingInput"
                        label="Passport Number"
                        labelClass="_inInput_fx"
                        type="text"
                        placeholder="Passport Number"
                        name="passport_number"
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        focus={!!inputError?.passport_number}
                        error={inputError?.passport_number}
                        value={inputValue.passport_number}
                      />
                    </div>

                    <div className="_inFr_flexBx">
                      <fieldset
                        className={`_anvDate_pickOuter_box ${!!inputError?.passport_issue_date ? " error" : ""
                          }`}
                      >
                        <label
                          htmlFor="passPort_issue"
                          className={
                            inputValue?.passport_issue_date && "filled"
                          }
                        >
                          Passport Issue Date <span>*</span>
                        </label>
                        <DateInput
                          id="passPort_issue"
                          placeholderText="Passport Issue Date"
                          value={
                            inputValue?.passport_issue_date
                              ? new Date(inputValue?.passport_issue_date)
                              : ""
                          }
                          name="passport_issue_date"
                          handleOnChange={(value) =>
                            handleOnChange("passport_issue_date", value)
                          }
                          dateFormat="dd-MMM-yyyy"
                          maxDate={new Date()}
                        />
                        <i className="fa-regular fa-calendar"></i>
                        {!!inputError?.passport_issue_date && (
                          <p className="invalid-feedback">
                            {inputError?.passport_issue_date}
                          </p>
                        )}
                      </fieldset>

                      <fieldset
                        className={`_anvDate_pickOuter_box ${!!inputError?.passport_expiry_date ? " error" : ""
                          }`}
                      >
                        <label
                          htmlFor="passPort_expired"
                          className={
                            inputValue?.passport_expiry_date && "filled"
                          }
                        >
                          Passport Expiry Date <span>*</span>
                        </label>
                        <DateInput
                          id="passPort_expired"
                          placeholderText="Passport Expiry Date"
                          value={
                            inputValue?.passport_expiry_date
                              ? new Date(inputValue?.passport_expiry_date)
                              : ""
                          }
                          name="passport_expiry_date"
                          handleOnChange={(value) =>
                            handleOnChange("passport_expiry_date", value)
                          }
                          dateFormat="dd-MMM-yyyy"
                        />
                        <i className="fa-regular fa-calendar"></i>
                        {!!inputError?.passport_expiry_date && (
                          <p className="invalid-feedback">
                            {inputError?.passport_expiry_date}
                          </p>
                        )}
                      </fieldset>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane active={activeStep === "incorp_detail"}>
                  <div className="_innerKyc_grid ing_exMarg">
                    <div className="_inKycHead">
                      <h1>Incorporation details</h1>
                      <p>
                        We need a few more details about you and your business
                      </p>
                    </div>

                    <div className="_inFr_flexBx anvBas_select">
                      <FloatingField
                        controlId="floatingInput"
                        label="Your Business Name"
                        labelClass="_inInput_fx"
                        type="text"
                        placeholder="Your Business Name"
                        name="business_name"
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        focus={!!inputError?.business_name}
                        error={inputError?.business_name}
                        value={inputValue.business_name}
                      />
                      <SelectField
                        boxClass="basic-single"
                        classNamePrefix="select"
                        placeholder="Type of company*"
                        valueText="value"
                        labelText="label"
                        options={businessKycCompanyType}
                        name="company_type"
                        error={
                          inputError?.company_type
                            ? inputError?.company_type
                            : inputError?.["company_type.value"]
                        }
                        focus={
                          !!inputError?.["company_type.value"] ||
                          !!inputError?.company_type
                        }
                        selectedOption={inputValue.company_type}
                        setSelectedOption={(value) =>
                          handleOnChange("company_type", value)
                        }
                      />
                    </div>

                    <div className="_inFr_flexBx anvBas_select">
                      <SelectField
                        boxClass="basic-single"
                        classNamePrefix="select"
                        placeholder="Select Business Segment*"
                        valueText="value"
                        labelText="label"
                        options={businessKycBusinessSegment}
                        name="business_segment"
                        error={
                          inputError?.business_segment
                            ? inputError?.business_segment
                            : inputError?.["business_segment.value"]
                        }
                        focus={
                          !!inputError?.["business_segment.value"] ||
                          !!inputError?.business_segment
                        }
                        selectedOption={inputValue.business_segment}
                        setSelectedOption={(value) =>
                          handleOnChange("business_segment", value)
                        }
                      />

                      <SelectField
                        boxClass="basic-single"
                        classNamePrefix="select"
                        placeholder="Select SME Segment*"
                        valueText="value"
                        labelText="label"
                        options={businessKycSmeSegment}
                        name="sme_segment"
                        error={
                          inputError?.sme_segment
                            ? inputError?.sme_segment
                            : inputError?.["sme_segment.value"]
                        }
                        focus={
                          !!inputError?.["sme_segment.value"] ||
                          !!inputError?.sme_segment
                        }
                        selectedOption={inputValue?.sme_segment}
                        setSelectedOption={(value) =>
                          handleOnChange("sme_segment", value)
                        }
                      />
                    </div>

                    <div className="_inFr_flexBx anvBas_select">
                      <SelectField
                        boxClass="basic-single"
                        classNamePrefix="select"
                        placeholder="Industry Sector*"
                        valueText="id"
                        labelText="name"
                        options={industrySectorData}
                        name="industry_sector"
                        error={
                          inputError?.industry_sector
                            ? inputError?.industry_sector
                            : inputError?.["industry_sector.value"]
                        }
                        focus={
                          !!inputError?.["industry_sector.value"] ||
                          !!inputError?.industry_sector
                        }
                        selectedOption={inputValue.industry_sector}
                        setSelectedOption={(value) =>
                          handleOnChange("industry_sector", value)
                        }
                      />
                    </div>

                    <div className="_inFr_flexBx">
                      <div
                        className="_inInput_fx fulWid _upLine_head"
                        style={{ flex: "0 0 100%" }}
                      >
                        <p>
                          Trade License or Certificate of incorporation /
                          Partnership deed *
                        </p>
                      </div>

                      <div className="fileAdd_bx">
                        <div
                          className={
                            (inputError?.business_document ? "error " : "") +
                            "_attachBx"
                          }
                        >
                          <DropzoneField
                            title="Business Document"
                            htmlFor="attach_6"
                            value={
                              !!inputValue.business_document &&
                              typeof inputValue.business_document === "string"
                            }
                            handleOnChange={(value) =>
                              handleOnChange("business_document", value)
                            }
                          />
                        </div>
                        {!!inputError?.business_document && (
                          <p className="invalid-feedback">
                            {inputError?.business_document}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="_inFr_flexBx">
                      <FloatingField
                        controlId="floatingInput"
                        label="Enter TIN Details"
                        labelClass="_inInput_fx"
                        type="text"
                        placeholder="Enter TIN Details"
                        name="tin_number"
                        onChange={({ target: { name, value } }) =>
                          handleOnChange(name, value)
                        }
                        focus={!!inputError?.tin_number}
                        error={inputError?.tin_number}
                        value={inputValue.tin_number}
                      />
                      <div
                        className="_inInput_fx fulWid _upLine_head"
                        style={{ flex: "0 0 100%" }}
                      >
                        <p className="mt-2">TIN (need UAE equivalent) *</p>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
            <Modal.Footer>
              <div className={inputError?.resError && "anvFlex-root"}>
                {inputError?.resError && (
                  <p className="invalid-feedback">
                    {showResponseError().map((item) => item)}
                  </p>
                )}
                <Button
                  variant="primary"
                  className="anvSv_btn"
                  onClick={() =>
                    submit(
                      menuList[
                        menuList.findIndex(
                          (item) => item?.value === activeStep
                        ) + 1
                      ]?.value
                    )
                  }
                  disabled={isLoading}
                >
                  <span>
                    <span class="text-base">Save & Continue</span>
                    {isLoading ? (
                      <Loader className="loader_kycBtn" />
                    ) : (
                      <img src={arrImg} className="arrCon_btn" />
                    )}
                  </span>
                </Button>
              </div>
            </Modal.Footer>
          </div>
          {showSuccessModal && (
            <SuccessKYCModal
              show={showSuccessModal}
              setShow={() => {
                setShowSuccessModal();
                handleClose();
              }}
            />
          )}
        </Tab.Container>
      </Modal.Body>
    </Modal>
  );
}
