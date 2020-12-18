module.exports = {
   client: 'pg',
   version: '11.5',
   connection: {
       host: 'localhost',
       user: 'postgres',
       password: 'postgres',
       database: 'sistemas'
   },
   migrations: {
       directory: 'src/migrations',
   },
}