import "./home.styles.css";
import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  setOrder,
  setFilter,
  setCurrentPage,
  setPerPage,
} from "../../redux/countriesSlice";

function Home() {
  const countriesArray = useSelector((state) => state.countries.countries);
  const activitiesArray = useSelector((state) => state.activities);
  const dispatch = useDispatch();
  const perPage = useSelector((state) => state.countries.perPage);
  const currentPage = useSelector((state) => state.countries.currentPage);

  const handleOrder = ({ target }) => {
    const order = target.value;
    dispatch(setOrder(order));
    dispatch(setCurrentPage(1));
  };

  const handleFilter = ({ target }) => {
    const filter = target.value;
    dispatch(setFilter(filter));
    dispatch(setCurrentPage(1));
  };

  const handlePage = ({ target }) => {
    const perPage = Number(target.value);
    dispatch(setPerPage(perPage));
  };

  const handleGoToPage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const totalPages = Math.ceil(countriesArray.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedCountries = countriesArray.slice(startIndex, endIndex);

  return (
    <div>
      <select onChange={handleFilter}>
        <option value="all">Filter by Continent</option>
        <option value="africa">Africa</option>
        <option value="antarctica">Antarctica</option>
        <option value="asia">Asia</option>
        <option value="south america">South America</option>
        <option value="north america">North America</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>

      <select onChange={handleFilter}>
        <option value="">Filter by activity</option>
        <option value="all">All</option>
        <option value="countries with activities">
          countries with activities
        </option>
        <option value="countries without activities">
          countries without activities
        </option>
        {activitiesArray?.map((activity, index) => {
          return <option value="">{activity.name}</option>;
        })}
      </select>

      <select onChange={handleOrder}>
        <option value="">Filter by order</option>
        <option value="a-z">Asc</option>
        <option value="z-a">Desc</option>
        <option value="populationAsc">populationAsc</option>
        <option value="populationDesc">populationDesc</option>
      </select>

      <div>
        <button
          onClick={() => handleGoToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<<"}
        </button>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumbers = index + 1;
          return (
            <button key={index} onClick={() => handleGoToPage(pageNumbers)}>
              <span>{pageNumbers}</span>
            </button>
          );
        })}
        <button
          onClick={() => handleGoToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">>"}
        </button>
      </div>

      <div className="">
        <div className="cards">
          {paginatedCountries?.map((country, index) => {
            return (
              <Card
                key={index}
                id={country.id}
                name={country.name}
                flag={country.flag}
                continent={country.continent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
