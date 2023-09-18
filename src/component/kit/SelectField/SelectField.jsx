import ChevronDownIcon from "images/icons/ChevronDownIcon";
import "./SelectField.scss";

const SelectField = (props) => {
  const {
    name,
    id,
    label,
    placeholder = "Enter the text",
    optionList,
    onChange,
  } = props;

  return (
    <div className="select-field__wrapper">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={id} placeholder={placeholder} onChange={onChange}>
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
