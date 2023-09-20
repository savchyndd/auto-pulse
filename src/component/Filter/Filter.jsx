import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { selectAdvertsFilter } from "redux/filters/filtersSelectors";
import { setAdvertsFilter } from "redux/filters/filtersSlice";

import { removeCommasFromString } from "utils/formatingCommasToNumber";

import FromToField from "component/kit/FromToField/FromToField";
import SelectField from "component/kit/SelectField/SelectField";
import Button from "component/kit/Button/Button";

import "./Filter.scss";
import { toast } from "react-toastify";

const Filter = ({ filtersList }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectAdvertsFilter);

  const handleChangeFilter = (e) => {
    e.preventDefault();

    const { brand, price, from, to } = e.target.elements;

    if (
      (!brand.value || brand.value === "Enter the text") &&
      (!price.value || price.value === "To $") &&
      !from.value &&
      !to.value
    ) {
      toast.info("Please chose one of filters");
      return;
    }

    const newfilters = {
      [brand.name]: brand.value !== "Enter the text" ? brand.value : "",
      [price.name]: price.value !== "To $" ? price.value : "",
      mileage: {
        from: removeCommasFromString(from.value),
        to: removeCommasFromString(to.value),
      },
      prices: [],
    };

    dispatch(setAdvertsFilter(newfilters));
  };

  return (
    <form className="filter" onSubmit={handleChangeFilter}>
      <SelectField
        name="brand"
        label="Car brand"
        value={filter.brand}
        optionList={filtersList.brands}
      />
      <SelectField
        name="price"
        label="Price/ 1 hour"
        placeholder="To $"
        value={filter.price}
        optionList={filtersList.prices}
      />
      <FromToField
        name="mileage"
        label="Сar mileage / km"
        value={filter.mileage}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default Filter;

Filter.propTypes = PropTypes.shape({
  brands: PropTypes.arrayOf(PropTypes.string).isRequired,
  prices: PropTypes.arrayOf(PropTypes.number).isRequired,
}).isRequired;
