require('dotenv').config();

const mongoose = require('mongoose');

const User = require('./models/user');

const InitiateMongoServer = require('./db/connection');
const mongoURI = process.env.MONGODB_URI_DEV;

InitiateMongoServer(mongoURI, true);

const newUser = new User({ name: 'user', password: '123456' });

console.log('Deleting database');
mongoose.connection.dropDatabase()
console.log('Detabase deleted');

newUser.save(function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('New user: ' + newUser.name);
    mongoose.connection.close()
});