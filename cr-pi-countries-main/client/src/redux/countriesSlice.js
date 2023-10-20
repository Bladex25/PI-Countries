import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [],
	allCountries: [],
	activities: [],
	countryDetails: {},
    order: "a-z",
    filter: "all",
    perPage: 10,
    currentPage: 1,
};

 const countriesSlice = createSlice({
    name : "countries",
    initialState,
    reducers: {
        setCountries : (state, action) =>{
            state.countries = action.payload
            state.allCountries = action.payload
        },
        setOrder : (state, action) =>{
            state.order = action.payload

            if(action.payload === "a-z"){
                state.countries.sort((a,b) =>{
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0;
                }
                )
            }
            else if (action.payload === "z-a"){
                state.countries.sort((a,b) =>{
                    if(a.name > b.name){
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1;
                    }
                    return 0;
                }
                )
            }
            else if(action.payload === "populationAsc"){
                state.countries.sort((a,b) =>{
                    if(a.population > b.population){
                        return 1;
                    }
                    if(b.population > a.population){
                        return -1;
                    }
                    return 0;
                }
                )
            }
            else if (action.payload === "populationDesc"){
                state.countries.sort((a,b) =>{
                    if(a.population > b.population){
                        return -1;
                    }
                    if(b.population > a.population){
                        return 1;
                    }
                    return 0;
                }
                )
            }
        },
        setFilter : (state, action) =>{
            state.filter = action.payload
            if(action.payload === "all"){
                state.countries = state.allCountries
            }
            else if(action.payload === "africa"){
                state.countries = state.allCountries.filter((country) => country.continent.toLowerCase() === "africa");

            }
            else if (action.payload === "antarctica"){
                state.countries = state.allCountries.filter((country) => country.continent.toLowerCase() === "antarctica");
            }
            else if(action.payload === "asia"){
                state.countries = state.allCountries.filter((country) => country.continent.toLowerCase() === "asia");
            }
            else if(action.payload === "europe"){
                state.countries = state.allCountries.filter((country) => country.continent.toLowerCase() === "europe");
            }
            else if(action.payload === "oceania"){
                state.countries = state.allCountries.filter((country) => country.continent.toLowerCase() === "oceania");
            }
            else if(action.payload === "south america"){
                state.countries = state.allCountries.filter((country) => country.continent.toLowerCase() === "south america");
            }
            else if(action.payload === "north america"){
                state.countries = state.allCountries.filter((country) => country.continent.toLowerCase() === "north america");
            }
            else if(action.payload === "countries with activities"){
                state.countries = state.allCountries.filter((country) => country.activities.length > 0);
            }
            else if (action.payload === "countries without activities"){
                state.countries = state.allCountries.filter((country) => country.activities.length === 0);
            }
            else if (action.payload === state.countries.find(country => country.activities.includes(action.payload))) {
                state.countries = state.allCountries.filter(country => country.activities.includes(action.payload));
            }

        },
        setPerPage : (state, action) =>{
            state.perPage = action.payload
        },
        setCurrentPage : (state, action) =>{
            state.currentPage = action.payload
        },
        setCountriesbyName : (state, action) =>{
            state.countries = action.payload
            state.countries = state.allCountries.filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase()));
        },
    }
})

export const {setCountries, setOrder, setFilter,setPerPage, setCurrentPage, setCountriesbyName} = countriesSlice.actions;
export default countriesSlice.reducer;