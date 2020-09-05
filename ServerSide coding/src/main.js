const db_add = require('./db_add');
const express = require('express');
const app = express();

// created an WEB API/link
// http://localhost:3000/adduser?email=pk@gmail.com&password=123456
app.get('/adduser', async (req, res) => {
    try {
        const input = req.query;
        console.log(input);
        // calling db logic
        // add_db method is async that is non blocking 
        // getting promise from db_add method to handle that response or reject we need to mention await to hold the result
        await db_add.add_db(input);

        const JSON = { message: "Success" };
        res.json(JSON);
    } catch (err) {
        const json = { message: "Failure", err };

        res.json(json);
    }
})

// http://localhost:3000/register?name=shubham&email=pk@gmail.com&password=123456
app.get('/register', async (req, res) => {

    try {
        let input = req.query;
        console.log(input);
        await db_add.add_db_signup(input);
        res.json({ message: "Successfully added data" });
    } catch (error) {
        res.json({ message: "Failure", err });
    }
})

// started web server
app.listen(3000);