import ChevronDownIcon from "images/icons/ChevronDownIcon";
import "./SelectField.scss";

const SelectField = (props) => {
  const { name, id, label, placeholder = "Enter the text", optionList } = props;

  return (
    <div className="select-field__wrapper">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={id} placeholder={placeholder}>
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
