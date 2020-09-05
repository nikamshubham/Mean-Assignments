const Promise = require("bluebird");
const mysql = require("mysql");

// Promisify the mysql
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let GetQuery = async () => {

    try {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Shubham@123',
            database: 'userinfo'

        });
        //start the connection 
        await connection.connectAsync();

        /** logic */
        let sql = "SELECT * FROM pet";
        let Result = connection.queryAsync(sql);

        //End the connection
        await connection.endAsync();
        console.log('Connection Successful', Result);

    } catch (error) {
        console.log('Error is  = ', error);
    }


}

GetQuery();

