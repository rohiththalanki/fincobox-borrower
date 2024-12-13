import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { InputField, SelectField } from "../../components/Common";
import AuthLayout from "./AuthLayout";
import { signupSchema } from "../../utils/error_schema";
import { signupRequest } from "../../services";
import "./auth.css";
import { FormGroup, Input, Label } from "reactstrap";
import { FloatingField } from "../../components/Common";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import {
  checkFormError,
  getResposeError,
  isObjectValueEmpty,
  queryString,
} from "../../utils";
import { Link } from "react-router-dom";
import Loader from "../../components/Common/Loader";
import {
  industrySectorRequest,
} from "@/services";

export function Signup() {
  const navigate = useNavigate();
  const [industrySectorData, setIndustrySectorData] = useState([]);
  const [inputValue, setInputValue] = useState({
    company_name: "",
    company_type: null,
    company_website: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    user_type: "Borrower",
    tnc: false,
  });
  const [inputError, setInputError] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    company_type: "",
    email: "",
    password: "",
    phone_number: "",
    user_type: "",
    tnc: "",
  });
  const [resError, setResError] = useState("");
  const [toggleEye, setToggleEye] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getIndustrySector = async () => {
    const resp = await industrySectorRequest();
    if (resp?.status) {
      setIndustrySectorData(resp?.results);
    }
  };

  useEffect(() => {
    getIndustrySector();
  }, []);


  const submit = async (e) => {
    e.preventDefault();
    const validationResult = await checkFormError(inputValue, signupSchema);
    if (validationResult === true) {
      setIsLoading(true);
      const { company_type, company_name, company_website, ...data } = inputValue;
      const res = await signupRequest({ ...data, company_details: { company_name, company_type, company_website } });
      if (res?.success) {
        navigate(
          "/verification/" + res?.results?.id + "?" + queryString(res?.results)
        );
      } else {
        setIsLoading(false);
        setResError(getResposeError(res?.error));
      }
    } else {
      setInputError(validationResult);
    }
  };

  const onInputChange = async (name, value) => {
    console.log('name', name, value);
    const stateObj = { ...inputValue, [name]: value };
    setInputValue(stateObj);
    if (isObjectValueEmpty(inputError)) {
      const error = await checkFormError(stateObj, signupSchema);
      setInputError(error);
    }
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={submit}>
        <div className="text-2xl mb-8">
          We need a few details to enable your business growth
        </div>

        <div className="mb-4">
          <FloatingField
            controlId="floatingInput"
            label="Company Name"
            labelClass="_inInput_fx _inInput_signFx"
            type="text"
            id="company_name"
            placeholder="Company Name"
            name="company_name"
            maxLength={100}
            defaultValue
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            focus={!!inputError.company_name}
            error={inputError.company_name}
            value={inputValue.company_name}
          />
        </div>
        <div className="mb-4 flex-1 _inFr_flexBx anvBas_select" style={{ display: "block" }}>
          <SelectField
            boxClass="basic-single"
            classNamePrefix="select"
            placeholder="Company Type"
            labelClass="_inInput_fx _inInput_signFx"
            valueText="id"
            labelText="name"
            options={industrySectorData}
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
              onInputChange("company_type", value)
            }
          />
        </div>
        <div className="mb-4">
          <FloatingField
            controlId="floatingInput"
            label="Company Website"
            labelClass="_inInput_fx _inInput_signFx"
            type="text"
            id="company_website"
            placeholder="Company Website"
            prefix="https://"
            name="company_website"
            maxLength={100}
            defaultValue
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            focus={!!inputError.company_website}
            error={inputError.company_website}
            value={inputValue.company_website}
          />
        </div>
        <div className="mb-4 d-flex justify-content-between">
          <FloatingField
            controlId="floatingInput"
            label="First Name"
            labelClass="_inInput_fx _inInput_signFx"
            type="text"
            id="name"
            placeholder="Name"
            name="first_name"
            maxLength={100}
            defaultValue
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            focus={!!inputError.first_name}
            error={inputError.first_name}
            value={inputValue.first_name}
          />
          <FloatingField
            controlId="floatingInput"
            label="Last Name"
            labelClass="_inInput_fx _inInput_signFx"
            type="text"
            id="name"
            placeholder="Name"
            name="last_name"
            maxLength={100}
            defaultValue
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            focus={!!inputError.last_name}
            error={inputError.last_name}
            value={inputValue.last_name}
          />
        </div>

        <div className="mb-4 relative d-flex justify-content-between">
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
            labelClass="_inInput_fx _inInput_numFx"
            type="number"
            placeholder="Mobile Number"
            name="phone_number"
            defaultValue
            maxLength={50}
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            focus={!!inputError?.phone_number}
            error={inputError.phone_number}
            value={inputValue.phone_number}
          />
        </div>
        <div className="mb-4">
          <FloatingField
            controlId="floatingInput"
            label="Email"
            labelClass="_inInput_fx"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            maxLength={50}
            defaultValue
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            focus={!!inputError.email}
            error={inputError.email}
            value={inputValue.email}
          />
        </div>
        <div className="mb-5 relativePos anvModi_fi">
          <FloatingField
            controlId="floatingInput"
            label="Password"
            labelClass="_inInput_fx"
            type={toggleEye ? "text" : "password"}
            id="password1"
            placeholder="Set a new Password"
            className="password-input"
            name="password"
            maxLength={50}
            defaultValue
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            focus={!!inputError?.password}
            error={inputError.password}
            value={inputValue.password}
          />

          <div className="anvEye_iconTogle">
            {!toggleEye ? (
              <IoMdEye onClick={() => setToggleEye((s) => !s)} />
            ) : (
              <IoMdEyeOff onClick={() => setToggleEye((s) => !s)} />
            )}
          </div>
        </div>
        <div className="flex items-start">
          <FormGroup check>
            <Input
              id="tnc"
              name="tnc"
              type="checkbox"
              className="checkbox"
              onChange={({ target: { name, checked } }) =>
                onInputChange(name, checked)
              }
              // focus={!!inputError?.tnc}
              // invalid={inputError.tnc}
              value={inputValue.tnc}
            />
            <Label
              style={{ fontWeight: "500" }}
              check
              htmlFor="tnc"
              className="font-medium text-gray-700"
            >
              I have read and accept
              <a
                // href="/terms-and-conditions"
                className="text-tertiaryNeon underline"
              >
                Terms and Conditions
              </a>
              and Finco's
              <a className="text-tertiaryNeon underline">Privacy Policy</a>
            </Label>
            {!!inputError?.tnc && (
              <p className="invalid-feedback">{inputError?.tnc}</p>
            )}
          </FormGroup>
        </div>
        <div className="flex items-start mt-4">
          <FormGroup check>
            <Input
              id="whatsapp"
              name="whatsapp"
              type="checkbox"
              className="checkbox"
              onChange={({ target: { name, value } }) =>
                onInputChange(name, value)
              }
            />
            <Label
              style={{ fontWeight: "500" }}
              check
              htmlFor="whatsapp"
              className="font-medium text-gray-700"
            >
              Opt in for <strong> WhatsApp notifications</strong>
            </Label>
          </FormGroup>
        </div>
        {resError && <p className="invalid-feedback">{resError}</p>}
        <div className="mt-4">
          <button
            type="submit"
            className="button sub_primary"
            id="refUrl"
            disabled={isLoading}
          >
            <span>
              <span className="text-base">Send OTP</span>
              {isLoading ? (
                <Loader className="loader_cls" />
              ) : (
                <img
                  src="image/buttonArrow.27e5232.svg"
                  alt="icon"
                  className="absolute right-0 top-0 mt-3 mr-8"
                />
              )}
            </span>
          </button>
        </div>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
