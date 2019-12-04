const pgp = require('pg-promise') ({
    query: function(e) {
        
    }
});

const options = {
    host: "localhost",
    database: "management_system"
};

const db = pgp(options);

module.exports = db;