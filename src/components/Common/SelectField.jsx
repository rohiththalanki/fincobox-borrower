
import React from "react";
import Select, { components } from "react-select";

import { FormFeedback } from "reactstrap";

export const SelectField = (props) => {
  const { ValueContainer, Placeholder } = components;
  const CustomValueContainer = ({ children, ...props }) => {
    return (
      <ValueContainer {...props}>
        <Placeholder {...props} isFocused={props.isFocused}>
          {props.selectProps.placeholder}
        </Placeholder>
        {React.Children.map(children, (child) =>
          child && child.type !== Placeholder ? child : null
        )}
      </ValueContainer>
    );
  };

  const {
    placeholder,
    options,
    selectedOption,
    setSelectedOption,
    valueText,
    labelText,
    error,
    focus,
    boxClass,
    className,
    classNamePrefix,
  } = props;
  const invalid = !!(focus && error);
  const valid = !!(focus && !error);

  return (
    <div className={boxClass}>
      <Select
        className={className}
        styles={{
          container: (base) => {
            if (invalid) {
              return {
                ...base,
                border: "1px solid #dc3545",
                borderRadius: "4px",
              };
            } else {
              return {
                ...base,
              };
            }
          },
          valueContainer: (provided, state) => ({
            ...provided,
            overflow: "visible",
          }),
        }}
        components={{
          ValueContainer: CustomValueContainer,
        }}
        value={selectedOption}
        classNamePrefix={classNamePrefix}
        onChange={setSelectedOption}
        options={
          valueText === "value" && labelText === "label"
            ? options
            : options.map((item) => ({
                value: item[valueText],
                label: item[labelText],
              }))
        }
        placeholder={placeholder}
      />
      {invalid && <FormFeedback>{error}</FormFeedback>}
    </div>
  );
};