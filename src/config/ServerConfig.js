const dotenv = require('dotenv');

//console.log('dotenv is ',dotenv);
dotenv.config();

module.exports = {
    PORT : process.env.PORT,
}