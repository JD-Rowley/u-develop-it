const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'pheonix1',
        database: 'election'
    }
);

module.exports = db;