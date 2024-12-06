import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setStorage } from "../../utils/storage";
import AuthLayout from "./AuthLayout";
import { loginSchema } from "../../utils/error_schema";
import { loginRequest } from "../../services";
import { FloatingField } from "../../components/Common";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { FormGroup, Input, Label } from "reactstrap";
import Loader from "../../components/Common/Loader";
import { checkFormError, isObjectValueEmpty } from "../../utils";

export function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
  });
  const [resError, setResError] = useState("");
  const [toggleEye, setToggleEye] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [active, setActive] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const validationResult = await checkFormError(inputValue, loginSchema);
    if (validationResult === true) {
      setIsLoading(true);
      const res = await loginRequest(inputValue);
      if (res?.success) {
        setStorage("logged-in", { ...res.results });
        navigate("/home");
      } else {
        setIsLoading(false);
        setResError(res?.error?.message || 'Something went wrong!');
      }
    } else {
      setInputError(validationResult);
    }
  };

  const onInputChange = async (name, value) => {
    const stateObj = { ...inputValue, [name]: value };
    setInputValue(stateObj);
    if (isObjectValueEmpty(inputError)) {
      const error = await checkFormError(stateObj, loginSchema);
      setInputError(error);
    }
  };
  return (
    <AuthLayout title="Login">
      <form onSubmit={submit}>
        <div className="text-2xl mb-8">Welcome to Fincobox</div>
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
              onInputChange(name, value)
            }
            focus={!!inputError.email}
            error={inputError.email}
            value={inputValue.email}
          />
        </div>
        <div className=" relativePos">
          <FloatingField
            controlId="floatingInput"
            label="Password"
            labelClass="_inInput_fx"
            type={toggleEye ? "text" : "password"}
            id="password1"
            placeholder="Password"
            name="password"
            maxLength={50}
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            focus={!!inputError.password}
            error={inputError.password}
            value={inputValue.password}
          />

          <div className="anvEye_iconTogle">
            {inputError.password ? (
              ""
            ) : !toggleEye ? (
              <IoMdEye onClick={() => setToggleEye((s) => !s)} />
            ) : (
              <IoMdEyeOff onClick={() => setToggleEye((s) => !s)} />
            )}
          </div>
        </div>
        <div className="check_forget_align">
          <FormGroup check></FormGroup>
          <p className="mt-3 ">
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
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
              <span className="text-base">Log in</span>
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
          Don't have an account? <Link to="/signup">Sign up now</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
