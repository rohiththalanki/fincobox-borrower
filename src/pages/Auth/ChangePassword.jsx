import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { chnagePasswordSchema } from "../../utils/error_schema";
import { changePasswordRequest } from "../../services";
import { FloatingField } from "../../components/Common";
import { checkFormError, isObjectValueEmpty } from "../../utils";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import Loader from "../../components/Common/Loader";
import { toast } from "react-toastify";

export function ChangePassword({ toggle }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    new_password: "",
    old_password: "",
    confirm_password: "",
  });
  const [inputError, setInputError] = useState({
    new_password: "",
    old_password: "",
    confirm_password: "",
  });
  const [toggleEye, setToggleEye] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [resError, setResError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const validationResult = await checkFormError(
      inputValue,
      chnagePasswordSchema
    );
    if (validationResult === true) {
      setIsLoading(true);
      const res = await changePasswordRequest(inputValue);
      if (res?.results?.status !== 401) {
        toggle();
        toast.success(res?.results?.message, { position: "top-center" });
      } else {
        setIsLoading(false);
        setResError(res?.results?.message);
      }
    } else {
      setInputError(validationResult);
    }
  };

  const handleOnChange = async (name, value) => {
    const stateObj = { ...inputValue, [name]: value };
    setInputValue(stateObj);
    if (isObjectValueEmpty(inputError)) {
      const error = await checkFormError(stateObj, chnagePasswordSchema);
      setInputError(error);
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="mb-4 relativePos anvModi_fi">
        <FloatingField
          type={toggleEye === "old_password" ? "text" : "password"}
          id="password1"
          label="Old Password"
          placeholder="Old Password"
          className="password-input"
          name="old_password"
          onChange={({ target: { name, value } }) =>
            handleOnChange(name, value)
          }
          focus={!!inputError?.old_password}
          error={inputError?.old_password}
          value={inputValue?.old_password}
        />
        <div className="anvEye_iconTogle">
          {toggleEye === "old_password" ? (
            <IoMdEyeOff onClick={() => setToggleEye(false)} />
          ) : (
            <IoMdEye onClick={() => setToggleEye("old_password")} />
          )}
        </div>
      </div>
      <div className="mb-4 relativePos anvModi_fi">
        <FloatingField
          type={toggleEye === "new_password" ? "text" : "password"}
          id="password1"
          label="New Password"
          placeholder="New Password"
          className="password-input"
          name="new_password"
          onChange={({ target: { name, value } }) =>
            handleOnChange(name, value)
          }
          focus={!!inputError?.new_password}
          error={inputError?.new_password}
          value={inputValue?.new_password}
        />
        <div className="anvEye_iconTogle">
          {toggleEye === "new_password" ? (
            <IoMdEyeOff onClick={() => setToggleEye(false)} />
          ) : (
            <IoMdEye onClick={() => setToggleEye("new_password")} />
          )}
        </div>
      </div>
      <div className="mb-4 relativePos">
        <FloatingField
          type="password"
          id="password1"
          label="Confirm Password"
          placeholder="Confrim Password"
          name="confirm_password"
          onChange={({ target: { name, value } }) =>
            handleOnChange(name, value)
          }
          focus={!!inputError?.confirm_password}
          error={inputError?.confirm_password}
          value={inputValue?.confirm_password}
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
  );
}
