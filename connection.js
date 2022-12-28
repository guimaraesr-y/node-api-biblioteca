const mysql = require('mysql');
require('dotenv').config();

function getConnection() {
    return mysql.createConnection({
        host: process.env.HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })
}

module.exports = {
    getConnection
}