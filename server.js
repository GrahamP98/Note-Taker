const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoute = require('./routes/apiFold/api-routes');
const htmlRoute = require('./routes/htmlFold/html-routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/', htmlRoute);
app.use('/api', apiRoute);

app.listen(PORT, () => {
    console.log('Listening on PORT:' + PORT);
});

