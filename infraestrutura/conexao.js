const mysql = require('mysql2');

const conexao = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'gabrus199820',
    database: 'agenda-petshop'
});

module.exports = conexao