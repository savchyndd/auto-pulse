import { useState } from "react";
import { useDisableBodyScroll } from "hook/useDisableBodyScroll";

import HeartIcon from "images/icons/HeartIcon";

import DescriptionList from "component/kit/DescriptionList/DescriptionList";
import Button from "component/kit/Button/Button";
import CarModalCard from "component/CarModalCard/CarModalCard";
import Modal from "component/Modal/Modal";

import { getCarDescList } from "utils/getCarDescriptionList";

import "./CarCard.scss";
import { useUpdateFavoriteAdvertByIdMutation } from "redux/adverts/advertsSlice";

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
      console.log({ favorite: !favorite });
    } catch (error) {
      console.warn(error);
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
