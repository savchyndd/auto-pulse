import AdvertsList from "component/AdvertsList/AdvertsList";
import Filter from "component/Filter/Filter";
import Modal from "component/Modal/Modal";
import { Button } from "component/kit/Button/Button";
import CarModalCard from "component/CarModalCard/CarModalCard";
import React, { useState } from "react";
import "./Catalog.scss";
import { useDisableBodyScroll } from "hook/useDisableBodyScroll";
import { useGetAdvertsQuery } from "redux/adverts/advertsSlice";
import { Section } from "component/kit/Section/Section";
const Catalog = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const { data: adverts, error, isLoading } = useGetAdvertsQuery();
  console.log(useGetAdvertsQuery());

  useDisableBodyScroll(isShowModal);

  const handleToggleModal = () => {
    setIsShowModal((prev) => !prev);
  };

  return (
    <>
      <Section>
        <Filter />
        <AdvertsList list={adverts} />
        <Button variant="text">Load more</Button>
      </Section>
      {isShowModal && (
        <Modal onCloseModal={handleToggleModal}>
          <CarModalCard />
        </Modal>
      )}
    </>
  );
};

export default Catalog;
