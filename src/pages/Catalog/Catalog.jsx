import { useGetAdvertsQuery } from "redux/adverts/advertsSlice";

import Section from "component/kit/Section/Section";
import Button from "component/kit/Button/Button";
import AdvertsList from "component/AdvertsList/AdvertsList";
import Filter from "component/Filter/Filter";

import "./Catalog.scss";

const Catalog = () => {
  const { data: adverts, isLoading } = useGetAdvertsQuery();
  let dataFilters = { brands: [], price: [], mileage: [] };

  if (!isLoading) {
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
      {!isLoading && <AdvertsList list={adverts} />}
      <Button variant="text">Load more</Button>
    </Section>
  );
};

export default Catalog;
