const getCountryByName = require("../../controllers/getCountryByName");

const getCountryByNameHandler = async (req, res) => {
    const {name} = req.query;
    try {
        const response = await getCountryByName(name);
    if (!response){
        throw new Error ('this country does not exist');
    }
    return res.status(200).json(response);
    } catch (error) {
        if(error.message === 'this country does not exist'){
        return res.status(404).send({error: error.message}) 
    }

    return res.status(500).send({error: error.message})
    }
}

module.exports = getCountryByNameHandler;