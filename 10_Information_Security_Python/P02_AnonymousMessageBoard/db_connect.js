const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB, {
            useNewParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('db successfully connected');
    } catch (err) {
        console.error('Error in db connection', err);
        process.exit(1);
    }
};

mongoose.connection.on('disconnected', connectDB);

module.exports = connectDB;
