import CarsList from "component/AdvertsList/AdvertsList";
import Filter from "component/Filter/Filter";
import Modal from "component/Modal/Modal";
import Button from "component/kit/Button/Button";
import { useDisableBodyScroll } from "hook/useDisableBodyScroll";
import React, { useState } from "react";

const Favorites = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  useDisableBodyScroll(isShowModal);

  const handleToggleModal = () => {
    setIsShowModal((prev) => !prev);
  };

  return (
    <div>
      {/* <Filter /> */}
      <CarsList />
      <Button variant="text">Load more</Button>
      {isShowModal && <Modal />}
    </div>
  );
};

export default Favorites;
