const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;
const apiRoute = require('./routes/apiFold');
const htmlRoute = require('./routes/htmlFold');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/', htmlRoute);
app.use('/api', apiRoute);

app.listen(PORT, () => {
    console.log('Listening on PORT:' + PORT);
});

