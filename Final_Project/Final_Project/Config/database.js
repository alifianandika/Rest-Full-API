/**
 * import koneksi mysql
 */
const mysql = require("mysql");

/**
 * import env
 */
// const dotenv = require("dotenv");
// dotenv.config();

/**
 * sekali pakai yah
 */
require("dotenv").config();

/**
 * koneksi mysql
 */
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "laravel_rest",

});

// const {
//     DB_HOST,
//     DB_USER,
//     DB_PASSWORD,
//     DB_DATABASE
// } = process.env;


// const db = mysql.createConnection({
//     host: DB_HOST,
//     user: DB_USER,
//     password: DB_PASSWORD,
//     database: DB_DATABASE,

// });

// eror disini stacknya



/**
 * koneksi database + backtick
 */
db.connect(function(err) {
    if (err){
        console.log(`koneksi error ${err}`);
        return;
    } else {
        console.log(`koneksi berhasil`);
        return;
    }
});


/**
  * export module database
  */
module.exports = db;
