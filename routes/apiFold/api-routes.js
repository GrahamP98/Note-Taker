const route = require('express').Router();
const noteRoute = require('./note-routes');

route.use(noteRoute);

module.exports = route;