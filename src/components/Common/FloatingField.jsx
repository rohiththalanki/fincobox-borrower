import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { Label, FormGroup, Input } from "reactstrap";

export const FloatingField = (props) => {
  const { error, label, focus, labelClass, boxClass, ui, postaddon ,errorClass} = props;
  const invalid = !!(focus && error);
  const valid = !!(focus && !error);
  if (ui !== "strap") {
    return (
      <>
        <FloatingLabel
          label={label}
          className={(labelClass ? labelClass : "") + " " + " _inInput_fx"}
        >
          <Form.Control
            controlId="floatingInput"
            autoComplete="off"
            isInvalid={invalid}
            valid={valid}
            {...props}
          />
          {invalid && <p className={errorClass+" invalid-feedback"}>{error}</p>}
        </FloatingLabel>
      </>
    );
  } else {
    return (
      <>
        <FormGroup floating>
          <Input
            autoComplete="off"
            invalid={invalid}
            valid={valid}
            {...props}
          />
          <Label className={labelClass}>{label}</Label>
          {invalid && <p className="invalid-feedback">{error}</p>}
        </FormGroup>
      </>
    );
  }
};
