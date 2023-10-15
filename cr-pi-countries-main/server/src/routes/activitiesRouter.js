const {Router} = require("express");
const createActivityHandler = require("../handlers/activitiesHandler/createActivityHandler");
const getActivityHandler = require("../handlers/activitiesHandler/getActivityHandler");
const activitiesRouter = Router();

activitiesRouter.post("/", createActivityHandler);
activitiesRouter.get('/', getActivityHandler);

module.exports = activitiesRouter