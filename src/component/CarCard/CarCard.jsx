import { useState } from "react";
import PropTypes from "prop-types";

import { toast } from "react-toastify";

import { useDisableBodyScroll } from "hook/useDisableBodyScroll";
import { useUpdateFavoriteAdvertByIdMutation } from "redux/adverts/advertsSlice";

import { getCarDescList } from "utils/getCarDescriptionList";

import HeartIcon from "images/icons/HeartIcon";

import DescriptionList from "component/kit/DescriptionList/DescriptionList";
import Button from "component/kit/Button/Button";
import CarModalCard from "component/CarModalCard/CarModalCard";
import Modal from "component/Modal/Modal";

import "./CarCard.scss";

const CarCard = ({ car }) => {
  const { id, img, make, model, year, rentalPrice, favorite } = car;

  const [isShowModal, setIsShowModal] = useState(false);

  const [updateFavoriteAdvertById] = useUpdateFavoriteAdvertByIdMutation();
  useDisableBodyScroll(isShowModal);

  const descriptionList = getCarDescList(car);

  const handleToggleModal = () => {
    setIsShowModal((prev) => !prev);
  };

  const handleToggleFavorite = async (id) => {
    try {
      updateFavoriteAdvertById({ id, favorite: !favorite });
    } catch (error) {
      toast.warn("Sorry something wrong");
    }
  };

  return (
    <li>
      <div className="card">
        <div className="card__wrapper">
          <div className="card__thumb-img">
            <img src={img} alt={make} loading="lazy" />
            <Button variant="text" onClick={() => handleToggleFavorite(id)}>
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

        <Button className="card__btn" onClick={handleToggleModal}>
          Learn more
        </Button>
      </div>
      {isShowModal && (
        <Modal onCloseModal={handleToggleModal}>
          <CarModalCard car={car} />
        </Modal>
      )}
    </li>
  );
};

export default CarCard;

// import PropTypes from "prop-types";
// Button.propTypes = {
//   type: PropTypes.string,
//   children: PropTypes.node,
//   variant: PropTypes.string,
//   size: PropTypes.string,
//   className: PropTypes.string,
//   onClick: PropTypes.func,
// };

CarCard.propTypes = PropTypes.shape({
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
}).isRequired;
