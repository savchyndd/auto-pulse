import FromToField from "component/kit/FromToField/FromToField";
import SelectField from "component/kit/SelectField/SelectField";
import Button from "component/kit/Button/Button";

import "./Filter.scss";

const Filter = ({ filtersList }) => {
  return (
    <div className="filter">
      <SelectField
        name="brand"
        label="Car brand"
        optionList={filtersList.brands}
      />
      <SelectField
        name="price"
        label="Price/ 1 hour"
        placeholder="To $"
        optionList={filtersList.price}
      />
      {/*  <FromToField />*/}
      <Button>Search</Button>
    </div>
  );
};

export default Filter;
