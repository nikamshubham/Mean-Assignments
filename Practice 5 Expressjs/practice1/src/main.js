const express = require('express');
const app = express();

const db_read = require('./db_read');
const db_add = require('./db_add');

app.get('/', (req, res) => {
    res.send("HEllo World");
})

//http://localhost:3000/alldata?name=ben&species=bulldog&owner=ironman&sex=m
app.get('/alldata', (req, res) => {
    try {
        const data = req.query;
        db_add.addRecordWithJsonParam(data);
        console.log(data);
        res.json("Success");

    } catch (error) {
        console.log(error, "failed");
    }
})

app.get('/allusers', (req, res) => {
    try {
        const data = db_read.GetPetInfo();
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log('failed', error);
    }
})

app.listen(3000);

