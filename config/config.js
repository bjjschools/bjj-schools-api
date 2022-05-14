require('dotenv').config();

module.exports = {
    dbUrl: process.env.DB_CONNECTION,
    defaultServerPort: process.env.PORT ||"3000"
}