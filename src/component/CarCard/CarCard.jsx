import HeartIcon from "images/icons/HeartIcon";
import "./CarCard.scss";
import DescriptionList from "component/kit/DescriptionList/DescriptionList";
import { Button } from "component/kit/Button/Button";
import { getCarDescList } from "utils/getCarDescriptionList";

const CarCard = ({ car }) => {
  const { id, img, make, model, year, rentalPrice } = car;
  const favorite = false;
  const descriptionList = getCarDescList(car);

  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__thumb-img">
          <img src={img} alt={make} loading="lazy" />
          <Button variant="text">
            <HeartIcon className={favorite ? "favorited" : ""} />
          </Button>
        </div>
        <div className="card__thumb-title">
          <h3>
            {`${make} `}
            <span>{model}</span>
            {`, ${year}`}
          </h3>
          <p>{rentalPrice}</p>
        </div>
        <DescriptionList list={descriptionList} size="small" />
      </div>

      <Button className="card__btn">Learn more</Button>
    </div>
  );
};

export default CarCard;

// {
//   "id": 9582,
//   "year": 2008,
//   "make": "Buick",
//   "model": "Enclave",
//   "type": "SUV",
//   "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
//   "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
//   "fuelConsumption": "10.5",
//   "engineSize": "3.6L V6",
//   "accessories": [
//    "Leather seats",
//    "Panoramic sunroof",
//    "Premium audio system"
//   ],
//   "functionalities": [
//    "Power liftgate",
//    "Remote start",
//    "Blind-spot monitoring"
//   ],
//   "rentalPrice": "$40",
//   "rentalCompany": "Luxury Car Rentals",
//   "address": "123 Example Street, Kiev, Ukraine",
//   "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
//   "mileage": 5858
//  }
