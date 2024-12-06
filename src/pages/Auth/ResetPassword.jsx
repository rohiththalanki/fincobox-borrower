import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { resetPasswordSchema } from "../../utils/error_schema";
import {
  resetPasswordRequest,
  verifyPasswordResetRequest,
} from "../../services";
import {
  checkFormError,
  getResposeError,
  maskProtectedEmail,
} from "../../utils";
import { FloatingField } from "../../components/Common";
import { useTimerCount } from "../../utils/custom_hook";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import Loader from "../../components/Common/Loader";

export function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const { timer, resetTimer } = useTimerCount();
  const [toggleEye, setToggleEye] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formValue, setFormValue] = useState({
    code: "",
    password: "",
    confirmPassword: "",
  });
  const [inputError, setInputError] = useState({
    code: "",
    password: "",
    confirmPassword: "",
  });
  const [resError, setResError] = useState("");

  useEffect(() => {
    if (location?.state === null) {
      navigate(-1);
    }
  }, [location?.state]);

  const submit = async (e) => {
    e.preventDefault();
    const validationResult = await checkFormError(
      formValue,
      resetPasswordSchema
    );
    if (validationResult === true) {
      setIsLoading(true);
      const res = await verifyPasswordResetRequest({
        ...location?.state,
        code: +formValue?.code,
        password: formValue?.password,
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

  const onInputChange = async (name, value) => {
    setFormValue((s) => ({ ...s, [name]: value }));
    if (!!inputError) {
      const validationResult = await checkFormError(
        { ...formValue, [name]: value },
        resetPasswordSchema
      );
      setInputError(validationResult);
    }
  };

  const resendOtp = async (e) => {
    const res = await resetPasswordRequest({
      ...location?.state,
    });
    if (res?.success) {
      setResError(res?.results?.message);
    }
    setTimeout(() => {
      setResError("");
    }, [500]);
    resetTimer(e);
  };

  return (
    <AuthLayout title="Reset Password">
      <form onSubmit={submit} autoComplete={false}>
        <div className="text-2xl mb-8 ">
          Enter the 4-digit OTP sent to Email{" "}
          {"\n" + maskProtectedEmail(location?.state?.email)}
        </div>
        <div className="mb-3">
          <FloatingField
            controlId="floatingInput"
            type="number"
            placeholder="Email OTP"
            label="Email OTP"
            labelClass="_inInput_fx"
            id="email_otp"
            name="code"
            maxLength={4}
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            focus={!!inputError.code}
            error={inputError.code}
            value={formValue.code}
          />

          {timer ? (
            <p className="mt-2 inactive_color">
              Resend OTP in &nbsp;
              <span className="active_color">{timer} seconds</span>
            </p>
          ) : (
            <p
              className="mt-2 active_color pointer"
              onClick={() => resendOtp(1)}
            >
              Resend OTP
            </p>
          )}
        </div>
        <div className="text-2xl mb-4">Reset Password</div>
        <div className="mb-4 relativePos anvModi_fi">
          <FloatingField
            controlId="floatingInput"
            label="New Password"
            labelClass="_inInput_fx"
            type={toggleEye ? "text" : "password"}
            placeholder="New Password"
            className="password-input"
            name="password"
            maxLength={50}
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            focus={!!inputError.password}
            error={inputError.password}
            value={formValue.password}
          />
          <div className="anvEye_iconTogle">
            {!toggleEye ? (
              <IoMdEye onClick={() => setToggleEye((s) => !s)} />
            ) : (
              <IoMdEyeOff onClick={() => setToggleEye((s) => !s)} />
            )}
          </div>
        </div>
        <div className="mb-4">
          <FloatingField
            controlId="floatingInput"
            label="Confirm Password"
            labelClass="_inInput_fx"
            type="password"
            id="password1"
            placeholder="Confrim Password"
            name="confirmPassword"
            maxLength={50}
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            focus={!!inputError.confirmPassword}
            error={inputError.confirmPassword}
            value={formValue.confirmPassword}
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
              <span className="text-base"> Reset Password</span>
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
        <p className="mt-3">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
