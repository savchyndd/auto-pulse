import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { useGetAdvertsQuery } from "redux/adverts/advertsSlice";
import { selectAdvertsFilter } from "redux/filters/filtersSelectors";

import { createArrayWithStep } from "utils/createArrayWithStep";
import { getFilteredAdverts } from "utils/getFilteredAdverts";

import AdvertsList from "component/AdvertsList/AdvertsList";
import Filter from "component/Filter/Filter";
import Button from "component/kit/Button/Button";
import Loader from "component/kit/Loader/Loader";
import Section from "component/kit/Section/Section";

import "./Favorite.scss";

const Favorites = () => {
  const filter = useSelector(selectAdvertsFilter);

  const { data: adverts, isLoading } = useGetAdvertsQuery();

  const [currentPage, setCurrentPage] = useState(1);

  let dataFilters = {
    brands: [],
    prices: [],
  };
  let visibleAdverts = useMemo(() => {}, []);

  const limitAdverts = 8;
  let totalAdverts = 0;
  let totalPages = 0;

  if (!isLoading) {
    const favoritedAdverts = adverts.filter(({ favorite }) => favorite);

    visibleAdverts = getFilteredAdverts(favoritedAdverts, filter);

    dataFilters = {
      brands: ["All", ...new Set(favoritedAdverts.map(({ make }) => make))],
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

  const hundleClickRetuntToStart = () => {
    setCurrentPage(1);
    window.scrollTo(0, 0);
  };

  return (
    <Section>
      {isLoading && <Loader />}

      {!isLoading && (
        <div className="favorite__container">
          <div className="favorite__filter-wrapper">
            <Filter filtersList={dataFilters} />
          </div>
          <div className="favorite__adverts-wrapper">
            <AdvertsList list={currentAdvertsData} />
            <div className="buttons__wrapper">
              {totalPages > currentPage && (
                <Button
                  variant="text"
                  className="load-more__btn"
                  onClick={hundleClickLoadMore}
                >
                  Load more
                </Button>
              )}
              {currentPage !== 1 && (
                <Button
                  variant="text"
                  className="load-more__btn"
                  onClick={hundleClickRetuntToStart}
                >
                  Return to 1 page
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Favorites;
