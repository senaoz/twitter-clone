const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'twitter',
    password: 'sena',
    port: 5432
});

module.exports = pool;