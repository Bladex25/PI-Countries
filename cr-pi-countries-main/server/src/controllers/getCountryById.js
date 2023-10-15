const { Country, Activity } = require('../db')
const {Op} = require('sequelize');

const getCountryById = async (id) => {
    try {
       const foundCountry = await Country.findOne({
        where: {
            id:  id.toUpperCase(),
        }
       });
       return foundCountry;

    } catch (error) {
        return null;
    }
}

module.exports = {
    getCountryById
}
