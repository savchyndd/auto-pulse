import PropTypes from "prop-types";

import CarCard from "component/CarCard/CarCard";

import "./AdvertsList.scss";

const AdvertsList = ({ list = [] }) => {
  return list.length ? (
    <ul className="adverts__list">
      {list.map((item) => (
        <CarCard key={`${item.make}_${Math.random(1)}`} car={item} />
      ))}
    </ul>
  ) : (
    <p className="adverts__no-content">
      Sorry, there are no cars with this request in stock...
    </p>
  );
};

export default AdvertsList;

AdvertsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      fuelConsumption: PropTypes.string.isRequired,
      engineSize: PropTypes.string.isRequired,
      accessories: PropTypes.array.isRequired,
      functionalities: PropTypes.array.isRequired,
      rentalPrice: PropTypes.string.isRequired,
      rentalCompany: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      rentalConditions: PropTypes.string.isRequired,
      mileage: PropTypes.number.isRequired,
      favorite: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
