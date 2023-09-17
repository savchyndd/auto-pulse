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
