
//------------------DATABASE CODE-------------------------

// bring in the pg file 
const pg = require('pg');

// bringing in the database
const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'Bookmarks'
});

module.exports = pool