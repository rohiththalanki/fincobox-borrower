import React, { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { varificationSchema } from "../../utils/error_schema";
import { otpVerificationRequest, resendEmailOtpRequest } from "../../services";
import { FloatingField } from "../../components/Common";
import {
  checkFormError,
  getResposeError,
  isObjectValueEmpty,
  maskProtectedEmail,
  maskProtectedNumber,
} from "../../utils";
import { useTimerCount } from "../../utils/custom_hook";
import Loader from "../../components/Common/Loader";

export function Verification() {
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const { timer, timer1, resetTimer } = useTimerCount();
  const paramData = Object.fromEntries([...searchParams]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    email_code: "",
    mobile_code: "1234",
  });
  const [inputError, setInputError] = useState({
    email_code: "",
    mobile_code: "",
  });
  const [resError, setResError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const validationResult = await checkFormError(
      inputValue,
      varificationSchema
    );
    if (validationResult === true) {
      setIsLoading(true);
      const res = await otpVerificationRequest({
        email_code: +inputValue?.email_code,
        mobile_code: +inputValue?.mobile_code,
        user_id: params.id,
      });
      if (res?.success) {
        navigate("/login");
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
      const error = await checkFormError(stateObj, varificationSchema);
      setInputError(error);
    }
  };

  const resendOtp = (e) => {
    if (e === 1) {
      resetTimer(e);
    } else {
      resendEmailOtpRequest({ email: paramData?.email }).then((res) => {
        if (res?.success) {
          setResError(res?.results?.message);
        }
        setTimeout(() => {
          setResError("");
        }, [500]);
        resetTimer(e);
      });
    }
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={submit}>
        {/* <div className="text-2xl mb-8">
          Enter the 4-digit OTP sent to Mobile{" "}
          {"\n" + maskProtectedNumber(paramData?.phone_number)}
        </div>
        <div className="mb-4">
          <FloatingField
            controlId="floatingInput"
            label="Mobile OTP"
            labelClass="_inInput_fx"
            type="number"
            placeholder="Mobile OTP"
            name="mobile_code"
            maxLength={4}
            onChange={({ target: { name, value } }) =>
              handleOnChange(name, value)
            }
            focus={!!inputError.mobile_code}
            error={inputError.mobile_code}
            value={inputValue.mobile_code}
          />
          {timer ? (
            <p className="inactive_color mt-2">
              Resend OTP in &nbsp;
              <span className="active_color">{timer} seconds</span>
            </p>
          ) : (
            <p
              className="active_color pointer mt-2"
              onClick={() => resendOtp(1)}
            >
              Resend OTP
            </p>
          )}
        </div> */}
        <div className="text-2xl mb-8 mt-8">
          Enter the 4-digit OTP sent to Email{" "}
          {"\n" + maskProtectedEmail(paramData?.email)}
        </div>
        <div className="mb-4">
          <FloatingField
            controlId="floatingInput"
            label="Email OTP"
            labelClass="_inInput_fx"
            type="number"
            placeholder="Email OTP"
            name="email_code"
            maxLength={4}
            onChange={({ target: { name, value } }) =>
              handleOnChange(name, value)
            }
            focus={!!inputError.email_code}
            error={inputError.email_code}
            value={inputValue.email_code}
          />
          {timer1 ? (
            <p className="inactive_color mt-2">
              Resend OTP in &nbsp;
              <span className="active_color">{timer1} seconds</span>
            </p>
          ) : (
            <p
              className="active_color pointer mt-2"
              onClick={() => resendOtp(2)}
            >
              Resend OTP
            </p>
          )}

          <div data-v-61b8d94b className="text-red-500 text-sm"></div>
        </div>
        {resError && <p className="invalid-feedback">{resError}</p>}
        <div className="mt-4">
          <button
            type="submit"
            className="button sub_primary"
            disabled={isLoading}
          >
            <span>
              <span className="text-base">Verify OTP</span>
              {isLoading ? (
                <Loader className="loader_cls" />
              ) : (
                <img
                  src="/image/buttonArrow.27e5232.svg"
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
