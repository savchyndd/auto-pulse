import ChevronDownIcon from "images/icons/ChevronDownIcon";
import "./SelectField.scss";
import { useState } from "react";

const SelectField = (props) => {
  const {
    name,
    id,
    label,
    placeholder = "Enter the text",
    optionList,
    value,
  } = props;

  const [fieldValue, setFieldValue] = useState(value);

  const onChange = (e) => {
    setFieldValue(e.target.value);
  };

  return (
    <div className="select-field__wrapper">
      <label htmlFor={`${id}_${name}`}>{label}</label>
      <select
        name={name}
        value={fieldValue}
        id={`${id}_${name}`}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {optionList.map((item) => (
          <option key={`${name}_${Math.random()}`} value={item}>
            {item}
          </option>
        ))}
      </select>
      <ChevronDownIcon />
    </div>
  );
};

export default SelectField;
