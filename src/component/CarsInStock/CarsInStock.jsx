import AdvertsList from "component/AdvertsList/AdvertsList";
import React from "react";
import { useGetAdvertsQuery } from "redux/adverts/advertsSlice";

import "./CarsInStock.scss";
import Button from "component/kit/Button/Button";
import { NavLink } from "react-router-dom";

const CarsInStock = () => {
  const { data: adverts, isLoading } = useGetAdvertsQuery();
  let notAllAdverts = [];

  if (!isLoading) {
    const n = adverts.length >= 8 ? 8 : 4;
    notAllAdverts = adverts.slice(0, n);
  }

  return (
    <div className="in-stock__container">
      {!isLoading && <AdvertsList list={notAllAdverts} />}
      <NavLink className="in-stock__btn" to="/catalog">
        More adverts
      </NavLink>
    </div>
  );
};

export default CarsInStock;
