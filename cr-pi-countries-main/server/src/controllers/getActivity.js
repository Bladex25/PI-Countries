const { Activity } = require('../db')

const getActivity = async () => {
    try {
        const activities = await Activity.findAll({
        })
        if (!activities){
            throw new Error ("No Found");
        }
        return activities;

    } catch (error) {
        return null;
    }
}

module.exports = {
    getActivity
}
