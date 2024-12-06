import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { emailSchema } from "../../utils/error_schema";
import { resetPasswordRequest } from "../../services";
import {
  checkFormError,
  getResposeError,
  isObjectValueEmpty,
} from "../../utils";
import { FloatingField } from "../../components/Common";
import Loader from "../../components/Common/Loader";

export function ForgotPassword() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
  });
  const [inputError, setInputError] = useState({
    email: "",
  });
  const [resError, setResError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const validationResult = await checkFormError(inputValue, emailSchema);
    if (validationResult === true) {
      setIsLoading(true);
      const res = await resetPasswordRequest(inputValue);
      if (res?.success) {
        navigate("/reset-password", { state: inputValue });
      } else {
        setIsLoading(false);
        setResError(getResposeError(res?.error));
      }
    } else {
      setInputError(validationResult);
    }
  };

  const handleOnChange = async (name, value) => {
    const stateObj = { ...inputValue, [name]: value };
    setInputValue(stateObj);
    if (isObjectValueEmpty(inputError)) {
      const error = await checkFormError(stateObj, emailSchema);
      setInputError(error);
    }
  };

  return (
    <AuthLayout title="Forgot Password">
      <form onSubmit={submit}>
        <div className="text-2xl mb-8">Forgot Password</div>
        <div className="mb-4">
          <FloatingField
            controlId="floatingInput"
            type="email"
            placeholder="Email"
            label="Email"
            labelClass="_inInput_fx"
            id="email"
            name="email"
            maxLength={50}
            onChange={({ target: { name, value } }) =>
              handleOnChange(name, value)
            }
            focus={!!inputError.email}
            error={inputError.email}
            value={inputValue.email}
          />
        </div>
        <div className="mt-4">
          {resError && <p className="invalid-feedback">{resError}</p>}
          <button
            type="submit"
            className="button sub_primary mt-2"
            id="refUrl"
            disabled={isLoading}
          >
            <span>
              <span className="text-base">Submit</span>
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
      </form>
    </AuthLayout>
  );
}
