import PropTypes from "prop-types";

import { getCarDetailsDescList } from "utils/getCarDescriptionList";
import { formatingCommasToNumber } from "utils/formatingCommasToNumber";

import DescriptionList from "../kit/DescriptionList/DescriptionList";
import DescriptionChipList from "../kit/DescriptionChipList/DescriptionChipList";

import "./CarModalCard.scss";

function CarModalCard({ car }) {
  const {
    img,
    make,
    model,
    year,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = car;
  const descriptionList = getCarDetailsDescList(car);

  const rentalConditionsArray = [
    ...rentalConditions.split("\n"),
    `Milage: ${formatingCommasToNumber(mileage.toString())}`,
    `Price: ${rentalPrice}`,
  ];

  return (
    <div className="card-modal">
      <img
        className="card-modal__img"
        src={img}
        aria-label={`${make} ${model}`}
      />
      <div className="card-modal__car-header">
        <h3>
          {`${make} `}
          <span>{model}</span>
          {`, ${year}`}
        </h3>
        <DescriptionList list={descriptionList} size="medium" />
        <p>{description}</p>
      </div>

      <div className="card-modal__accessories">
        <h4>Accessories and functionalities:</h4>
        <div>
          <DescriptionList list={accessories} />
          <DescriptionList list={functionalities} />
        </div>
      </div>
      <div className="card-modal__rental-conditions">
        <h4>Rental Conditions:</h4>
        <DescriptionChipList list={rentalConditionsArray} />
      </div>
      <a className="card-modal__btn" href="tel:+380730000000">
        Rental Car
      </a>
    </div>
  );
}

export default CarModalCard;

CarModalCard.propTypes = PropTypes.shape({
  id: PropTypes.string,
  year: PropTypes.number.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  type: PropTypes.string,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fuelConsumption: PropTypes.string,
  engineSize: PropTypes.string,
  accessories: PropTypes.array.isRequired,
  functionalities: PropTypes.array.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  rentalCompany: PropTypes.string,
  address: PropTypes.string.isRequired,
  rentalConditions: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  favorite: PropTypes.bool,
}).isRequired;
