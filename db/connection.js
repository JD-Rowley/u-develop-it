const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Sh4tteredgrave',
        database: 'election'
    }
);

module.exports = db;