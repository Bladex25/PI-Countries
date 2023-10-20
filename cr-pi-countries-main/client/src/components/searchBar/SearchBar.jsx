import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setCountries,
  setCountriesbyName,
  setCurrentPage,
} from "../../redux/countriesSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(setCountriesbyName(searchTerm));
    dispatch(setCurrentPage(1));
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        id="input"
        type="text"
        placeholder="Busqueda"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
