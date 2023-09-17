import "./SelectField.scss";

export const SelectField = (props) => {
  const { name, id, label, selectList } = props;

  return (
    <form>
      <label form={name}>{label}</label>
      <select name={name} id={id}>
        {selectList.map((item) => (
          <option key={`${name}_${Math.random()}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </form>
  );
};
