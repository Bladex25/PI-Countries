const axios = require("axios");
const {Countries_API} = process.env;
const {Country} = require("../db")


module.exports = async() => {
    try {
        const {data} = await axios(Countries_API);

        const countries = data.map((ct) =>({
            
            id: ct.cca3,
            name: ct.name.common,
            flag: ct.flags.svg,
            continent : ct.continents[0],
            capital: ct.capital ? ct.capital[0] : "No Capital",
            subregion: ct.subregion ? ct.subregion : "No Data",
            area : ct.area,
            population: ct.population


        }
        ));
          await Country.bulkCreate(countries);
    } catch (error) {

    }
  
    
    
}