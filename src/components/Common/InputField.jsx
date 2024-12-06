import {
  FormFeedback,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";

export const InputField = (props) => {
  const {
    error,
    label,
    focus,
    preAddon = false,
    postAddon = false,
    inputProps,
    inpId,
  } = props;
  const invalid = !!(focus && error);
  const valid = !!(focus && !error);

  return (
    <>
      <div className="input-group mb-3" id={inpId}>
        {preAddon && (
          <span className="input-group-text border-0" id="basic-addon1">
            {preAddon}
          </span>
        )}
        {inputProps ? (
          inputProps
        ) : (
          <input
            autoComplete="off"
            invalid={invalid}
            valid={valid}
            {...props}
          />
        )}
      </div>
      {invalid && <p className="invalid-feedback">{error}</p>}
    </>
  );
};
