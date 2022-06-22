const path = require('path');
const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

routes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
    
});

routes.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = routes;