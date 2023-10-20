import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const countriesArray = useSelector((state) => state.countries.countries);
  const country = countriesArray.find((country) => country.id === id);
  return (
    <div>
      <h1>{country?.name}</h1>
      <img src={country?.flag} alt={`Bandera de ${country.name}`} />
      <h2>Continent: {country?.continent}</h2>
      <h3>Capital: {country?.capital}</h3>
      <h3>Subregion: {country?.subregion}</h3>
      <h3>Area: {country?.area}</h3>
      <h3>Population: {country?.population}</h3>
    </div>
  );
}

export default Detail;
