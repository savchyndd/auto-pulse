import FromToField from "component/kit/FromToField/FromToField";
import SelectField from "component/kit/SelectField/SelectField";
import Button from "component/kit/Button/Button";

import "./Filter.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectAdvertsFilter } from "redux/filters/filtersSelectors";
import { setAdvertsFilter } from "redux/filters/filtersSlice";

const Filter = ({ filtersList }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectAdvertsFilter);

  const handleChangeFilter = ({ currentTarget }) => {
    dispatch(setAdvertsFilter({ [currentTarget.name]: currentTarget.value }));
    console.log("Таргет", currentTarget.name, currentTarget.value);
  };

  return (
    <div className="filter">
      <SelectField
        name="brand"
        label="Car brand"
        optionList={filtersList.brands}
        onChange={handleChangeFilter}
      />
      <SelectField
        name="price"
        label="Price/ 1 hour"
        placeholder="To $"
        optionList={filtersList.price}
        onChange={handleChangeFilter}
      />
      {/*  <FromToField />*/}
      <Button>Search</Button>
    </div>
  );
};

export default Filter;
