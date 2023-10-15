const createActivity = require("../../controllers/createActivity");

const createActivityHandler = async (req, res) => {
    const {name, difficulty, duration , season, countries} = req.body;
    try {
       const response = await createActivity(name, difficulty, duration, season, countries);
     if(!name || !difficulty || !duration || !season){
        throw new Error ('missing data');
    } 
        return res.status(200).json(response) 
    }catch (error) {
        if(error.message === 'missing data'){
        return res.status(404).send({error: error.message}) 
    }
        return res.status(500).send({error: error.message})
    }
}

module.exports = createActivityHandler;