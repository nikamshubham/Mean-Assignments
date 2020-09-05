const mysql = require('mysql');
const Promise = require("bluebird");
const config = require('./config');
// Note that the library's classes are not properties of the main export
// so we require and promisifyAll them manually
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

// this will return promise
// let add_db = async (user) => {

//     const connection = mysql.createConnection(config.db_config);

//     await connection.connectAsync();

//     /** logic here **/
//     let sql = 'INSERT INTO USER(EMAIL,PASSWORD)VALUES(?,?)';
//     await connection.queryAsync(sql, [user.email, user.password]);
//     console.log('Connection successful');

//     await connection.endAsync();

// }

let add_db_signup = async (user) => {

    const connection = mysql.createConnection(config.db_config);

    await connection.connectAsync();

    /** logic here **/
    let sql = 'INSERT INTO UserRegisteration(NAME,EMAIL,PASSWORD)VALUES(?,?,?)';
    await connection.queryAsync(sql, [user.name, user.email, user.password]);
    console.log('Connection successful');

    await connection.endAsync();

}

//add_db({ email: "raj@gmail.com", password: "2312dfsdfD2" });

module.exports = {
    //add_db, 
    add_db_signup
}