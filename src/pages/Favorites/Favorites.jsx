import AdvertsList from "component/AdvertsList/AdvertsList";
import CarsList from "component/AdvertsList/AdvertsList";
import Filter from "component/Filter/Filter";
import Modal from "component/Modal/Modal";
import Button from "component/kit/Button/Button";
import Section from "component/kit/Section/Section";
import { useDisableBodyScroll } from "hook/useDisableBodyScroll";
import React, { useState } from "react";
import { useGetAdvertsQuery } from "redux/adverts/advertsSlice";

const Favorites = () => {
  const { data: adverts, isLoading } = useGetAdvertsQuery();
  let favoritedAdverts = [];
  let dataFilters = { brands: [], price: [], mileage: [] };

  if (!isLoading) {
    favoritedAdverts = adverts.filter(({ favorite }) => favorite);
    dataFilters = {
      brands: [...new Set(adverts.map(({ make }) => make))],
      price: [0, 10, 20, 30],
      mileage: [
        0,
        Math.max(
          ...new Set(
            adverts.map(({ rentalPrice }) => rentalPrice.replace(/(\$)/, ""))
          )
        ),
      ],
    };
  }

  return (
    <Section>
      <Filter filtersList={dataFilters} />
      {!isLoading && <AdvertsList list={favoritedAdverts} />}
      <Button variant="text">Load more</Button>
    </Section>
  );
};

export default Favorites;
