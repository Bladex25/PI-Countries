const { Country, Activity } = require('../db')

const getCountries = async () => {
    try {
        const countries = await Country.findAll({
            include: Activity,
        })
        if (!countries){
            throw new Error ("No Found");
        }
        return countries;

    } catch (error) {
        return null;
    }
}

module.exports = {
    getCountries
}
