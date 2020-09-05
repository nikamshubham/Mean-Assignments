const Promise = require('bluebird');
const mysql = require('mysql');
const config = require('./config');

// Promisify the mysql
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

//added record hardcoded
let addRecord = async () => {
    const connection = mysql.createConnection(config.db_config);

    await connection.connectAsync();
    let sql = "INSERT INTO PET(NAME,SPECIES,OWNER,SEX) VALUES(?,?,?,?)";
    await connection.queryAsync(sql, ['ACE', 'SHIHTZU', 'GOOFY', 'F']);
    console.log('SUCCESSFULLY INSERTED DATA');

    await connection.endAsync();

}

//added record through parameter
let addRecordParam = async (name, species, owner, sex) => {
    const connection = mysql.createConnection(config.db_config);
    await connection.connectAsync();

    /** Logic here **/
    let sql = "INSERT INTO PET(NAME,SPECIES,OWNER,SEX) VALUES (?,?,?,?)";
    await connection.queryAsync(sql, [name, species, owner, sex]);
    console.log("Inserted data Successfully");

    await connection.end();
}

//added record through json parameter
let addRecordWithJsonParam = async (pet) => {
    try {
        const connection = mysql.createConnection(config.db_config);
        await connection.connectAsync();

        /** Logic Here **/
        let sql = "INSERT INTO PET(name,species,owner,sex) VALUES(?,?,?,?)";
        await connection.queryAsync(sql, [pet.name, pet.species, pet.owner, pet.sex]);
        console.log('Inserted data successfully');

        await connection.endAsync();
    } catch (error) {
        console.log('Connection error :=', error);
    }
}

//addRecord();
//addRecordParam('BUDDY', "CHOW CHOW", 'DONALD', 'M');
/*addRecordWithJsonParam({
    name: "DEXTER",
    species: "POODLE",
    owner: "BATMAN",
    sex: 'M'
});*/

module.exports = {
    addRecord, addRecordParam, addRecordWithJsonParam
}