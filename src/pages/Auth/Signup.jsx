import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { InputField } from "../../components/Common/InputField";
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

export function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    user_type: "Borrower",
    business_type: "Individual",
    tnc: false,
  });
  const [inputError, setInputError] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    user_type: "",
    tnc: "",
  });
  const [resError, setResError] = useState("");
  const [toggleEye, setToggleEye] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const validationResult = await checkFormError(inputValue, signupSchema);
    if (validationResult === true) {
      setIsLoading(true);
      const res = await signupRequest(inputValue);
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
        <div>
          <FormGroup>
            <p>Business Type</p>
            <FormGroup className="d-flex ">
              <FormGroup check>
                <Input
                  className={
                    (inputValue.business_type === "Individual"
                      ? "bussion_type_check_active "
                      : "") + "bussion_type_check pointer"
                  }
                  id="Individual"
                  name="radio1"
                  type="radio"
                  value={inputValue.business_type}
                  checked={inputValue.business_type === "Individual"}
                  onChange={() => onInputChange("business_type", "Individual")}
                />
                <Label
                  for="Individual"
                  className="pointer"
                  style={{ fontWeight: "400", marginRight: "50px" }}
                  check
                >
                  Individual
                </Label>
              </FormGroup>

              <FormGroup check>
                <Input
                  className={
                    (inputValue.business_type === "Business"
                      ? "bussion_type_check_active "
                      : "") + "bussion_type_check pointer"
                  }
                  id="Business"
                  name="radio1"
                  type="radio"
                  value={inputValue.business_type}
                  onChange={() => onInputChange("business_type", "Business")}
                />
                <Label
                  for="Business"
                  className="pointer"
                  style={{ fontWeight: "400" }}
                  check
                >
                  Business
                </Label>
              </FormGroup>
            </FormGroup>
          </FormGroup>
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
        <p className="mt-3 mx-5 ">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
