const { getActivity } = require("../../controllers/getActivity");


const getActivityHandler = async (req, res) =>{
    
try {
    const response = await getActivity();
    if (!response){
        throw new Error ('No activities found');
    }
    return res.status(200).json(response);
} catch (error) {
    if(error.message === 'No activities found'){
        return res.status(404).send({error: error.message}) 
    }

    return res.status(500).send({error: error.message})
}   

}

module.exports = getActivityHandler;