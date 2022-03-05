import React from "react";
import TextField from "./TextField";
import CheckboxField from "./CheckboxField";
import SelectField from "./SelectField";
import RadioGroupField from "./RadioGroupField";

const FilterField = (props) => {
  const { type } = props;
  switch (type) {
    case "checkbox":
      return <CheckboxField {...props} />;
    case "radio":
      return <RadioGroupField {...props} />;
    case "select":
      return <SelectField {...props} />;
    case "text":
    default:
      return <TextField {...props} />;
  }
};

export default FilterField;
