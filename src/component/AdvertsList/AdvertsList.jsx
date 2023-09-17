import PropTypes from "prop-types";

import CarCard from "component/CarCard/CarCard";

import "./AdvertsList.scss";

const AdvertsList = ({ list = [] }) => {
  return (
    <ul className="adverts__list">
      {list.map((item) => (
        <CarCard key={`${item.make}_${Math.random(1)}`} car={item} />
      ))}
    </ul>
  );
};

export default AdvertsList;

AdvertsList.propTypes = {
  list: PropTypes.array,
  //   (
  //   PropTypes.shape({
  //     id: number,
  //     year: number,
  //     make: string,
  //     model: string,
  //     type: string,
  //     img: string,
  //     description: string,
  //     fuelConsumption: string,
  //     engineSize: string,
  //     accessories: array,
  //     functionalities: array,
  //     rentalPrice: string,
  //     rentalCompany: string,
  //     address: string,
  //     rentalConditions: string,
  //     mileage: number,
  //   })
  // ).isRequired,
};
