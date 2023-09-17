import { getCarDetailsDescList } from "utils/getCarDescriptionList";
import DescriptionList from "../kit/DescriptionList/DescriptionList";
import "./CarModalCard.scss";
import DescriptionChipList from "../kit/DescriptionChipList/DescriptionChipList";

const car = {
  id: 9582,
  year: 2008,
  make: "Buick",
  model: "Enclave",
  type: "SUV",
  img: "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
  description:
    "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
  fuelConsumption: "10.5",
  engineSize: "3.6L V6",
  accessories: ["Leather seats", "Panoramic sunroof", "Premium audio system"],
  functionalities: ["Power liftgate", "Remote start", "Blind-spot monitoring"],
  rentalPrice: "$40",
  rentalCompany: "Luxury Car Rentals",
  address: "123 Example Street, Kiev, Ukraine",
  rentalConditions:
    "Minimum age: 25\nValid driver's license\nSecurity deposit required",
  mileage: 5858,
};

function CarModalCard() {
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
    `Milage: ${mileage}`,
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
      <a className="card-modal__btn" href="tel:+380674354543">
        Rental Car
      </a>
    </div>
  );
}

export default CarModalCard;
