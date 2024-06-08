//function for connecting to mongodb database
var mongoose = require('mongoose');
const dbConnection = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/express-mongo-crud');
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error);
        throw new Error('Unable to connect to database');
    }
}
module.exports = {
    dbConnection
}