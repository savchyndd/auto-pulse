import { useGetAdvertsQuery } from "redux/adverts/advertsSlice";

import { Section } from "component/kit/Section/Section";
import { Button } from "component/kit/Button/Button";
import AdvertsList from "component/AdvertsList/AdvertsList";
import Filter from "component/Filter/Filter";

import "./Catalog.scss";

const Catalog = () => {
  const { data: adverts, error, isLoading } = useGetAdvertsQuery();

  return (
    <Section>
      <Filter />
      <AdvertsList list={adverts} />
      <Button variant="text">Load more</Button>
    </Section>
  );
};

export default Catalog;
