const mysql = require("mysql");
const Promise = require("bluebird");
const config = require("./config");


// Promisify the mysql
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


// READ ALL PET TALLE DATA
let GetPetInfo = async () => {
    try {
        //create connection step 1 
        const connection = mysql.createConnection(config.db_config)

        // connect to db 
        await connection.connectAsync();

        let sql = "SELECT * FROM PET";
        const result = await connection.queryAsync(sql);
        console.log(result);

        console.log('connection success');

        //end that connection
        await connection.endAsync();
        //
        return result;
    } catch (error) {
        console.log('Connection failed error - ', error);
    }

}

// READ ALL PET BY QUERY 
let GetPetInfoByQuery = async () => {
    try {
        const connection = mysql.createConnection(config.db_config);

        await connection.connectAsync();

        /**Write logic here */

        let sql = 'SELECT * FROM PET WHERE NAME=?';
        let operation = await connection.queryAsync(sql, ["aero"]);
        console.log(operation);

        await connection.endAsync();
        return operation;
    } catch (error) {
        console.log("Connection failed error :-", error);
    }

}

//READ PET BY QUERY BY PASSING PARAMETER
let readPetByQueryParams = async (name, species) => {
    try {
        const connection = mysql.createConnection(config.db_config);
        await connection.connectAsync();

        /** logic here **/
        let sql = "SELECT * FROM PET WHERE NAME=? AND SPECIES=?";
        let operation = await connection.queryAsync(sql, [name, species]);
        console.log(operation);

        await connection.endAsync();
        return operation;

    } catch (error) {
        console.log("Connection failed - ", error);
    }
}

//READ PET BY PASSING JSON OBJECT AS PARAMETER
let readPetByQueryJsonParam = async (pet) => {
    try {
        const connection = mysql.createConnection(config.db_config);

        await connection.connectAsync();

        /** Write logic here**/
        let sql = "SELECT * FROM PET WHERE NAME=? AND SPECIES=?";
        let operation = await connection.queryAsync(sql, [pet.name, pet.species])
        console.log(operation);

        await connection.endAsync();
        return operation;
    } catch (error) {
        console.log('Connection failed error-'.error);
    }
}

//GetPetInfo();

//GetPetInfoByQuery();

//readPetByQueryParams('auro', 'beagle');

//readPetByQueryJsonParam({ name: 'auro', species: 'beagle' });

module.exports = {
    GetPetInfo, GetPetInfoByQuery, readPetByQueryParams, readPetByQueryJsonParam
}