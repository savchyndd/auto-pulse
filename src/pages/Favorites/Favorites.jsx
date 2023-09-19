import AdvertsList from "component/AdvertsList/AdvertsList";
import Filter from "component/Filter/Filter";
import Button from "component/kit/Button/Button";
import Section from "component/kit/Section/Section";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useGetAdvertsQuery } from "redux/adverts/advertsSlice";
import { selectAdvertsFilter } from "redux/filters/filtersSelectors";
import { createArrayWithStep } from "utils/createArrayWithStep";
import { getFilteredAdverts } from "utils/getFilteredAdverts";

const Favorites = () => {
  const filter = useSelector(selectAdvertsFilter);

  const { data: adverts, isLoading } = useGetAdvertsQuery();

  const [currentPage, setCurrentPage] = useState(1);

  let dataFilters = {
    brands: [],
    prices: [],
  };
  let visibleAdverts = useMemo(() => {}, []);

  const limitAdverts = 12;
  let totalAdverts = 0;
  let totalPages = 0;

  if (!isLoading) {
    const favoritedAdverts = adverts.filter(({ favorite }) => favorite);

    visibleAdverts = getFilteredAdverts(favoritedAdverts, filter);

    dataFilters = {
      brands: [...new Set(favoritedAdverts.map(({ make }) => make))],
      prices: createArrayWithStep(
        0,
        Math.max(
          ...new Set(
            favoritedAdverts.map(({ rentalPrice }) =>
              rentalPrice.replace(/(\$)/, "")
            )
          )
        ),
        10
      ),
    };

    totalAdverts = visibleAdverts.length;
    totalPages = !totalAdverts ? 1 : Math.ceil(totalAdverts / limitAdverts);
  }

  const currentAdvertsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * limitAdverts;
    const lastPageIndex = firstPageIndex + limitAdverts;

    return visibleAdverts?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, visibleAdverts]);

  const hundleClickLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };
  return (
    <Section>
      {!isLoading && (
        <>
          <Filter filtersList={dataFilters} />
          <AdvertsList list={currentAdvertsData} />
          {totalPages > currentPage && (
            <Button
              variant="text"
              className="load-more__btn"
              onClick={hundleClickLoadMore}
            >
              Load more
            </Button>
          )}
        </>
      )}
    </Section>
  );
};

export default Favorites;
