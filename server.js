// /**
//  *
//  * @param {string} filename Takes in the filename of the datasource
//  * @returns {object[]} Returns an array of objects
//  */
//  const readDB = (filename) => {
//     const data = fs.readFileSync(filename, 'utf8');
//     return data.length ? JSON.parse(data) : [];
//   }
//   /**
//    *
//    * @param {string} filename
//    * @param {object[]} data
//    */
//   const updateDB = (filename, data) => {
//     // Convert the data to a string so we can save it
//     const stringData = JSON.stringify(data, null, 2);
  
//     // Write the string to a file
//     fs.writeFile(filename, stringData, (err) =>
//       err
//         ? console.error(err)
//         : console.log(
//             `Data has been written to JSON file`
//           )
//     );
//   };
const fs = require('fs');
const express = require('express');
// const { json } = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// const { urlencoded } = require('body-parser');
// const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static('./assets'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.get('/api/notes', (req, res) => res.json(data));

app.post('/api/notes', (req, res) => {
    fs.writeFileSync('./db/db.json', JSON.stringify(data), function(err) {
        if (err) throw (err);
    });

    res.json(data);
});


app.listen(PORT);

