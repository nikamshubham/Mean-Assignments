const express = require('express');
const app = express();


// http://localhost:3000/ :: URL :: API :: REST API
// http://localhost:3000/?name=ben?species=bulldog?owner=ironman?sex=m

app.get('/', (req, res) => {
    const name = req.query.name;
    const species = req.query.species;
    const owner = req.query.owner;
    const sex = req.query.sex;
    const json = { name: 'BEN', species: 'BULLDOF', owner: 'IRONMAN', sex: 'M' };

    res.json(json);
})

// http://localhost:3000/addpet?name=ben?species=bulldog?owner=ironman?sex=m
app.get('/addpet', (req, res) => {
    const json = { id: 100, title: "I am Search API!!" };
    res.json(json);
})


app.listen(3000);