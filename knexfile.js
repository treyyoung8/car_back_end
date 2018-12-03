
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/cars'
    },
    
    production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
    }

};
