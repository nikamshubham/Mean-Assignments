const mysql = require("mysql");
const Promise = require("bluebird");

// Promisify the mysql
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let getResult = async () => {

    const Connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Shubham@123",
        database: 'userinfo'
    })

    await Connection.connectAsync()
    /**logic */
    // let sql = 'SELECT * FROM pet';
    // let result = Connection.queryAsync(sql);
    console.log('Connection Success');

    await Connection.endAsync();
    // console.log(result);
}

getResult();
