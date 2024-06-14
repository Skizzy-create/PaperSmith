const mongoose = require('mongoose');

async function connectDB(CONN_STRING) {
    try {
        await mongoose.connect(CONN_STRING);
        console.log("Successfully connected to MongoDB database!");
        return true;
    } catch (err) {
        console.error("Error connecting to MongoDB:", "\n", err);
        return false;
    }
}

const UserDataSchema = new mongoose.Schema({
    Credits: { type: Number, default: 100 },
    Premium: { type: Boolean, default: false },
    NoOfPapers: { type: Number, default: 0 },
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    userData: { type: UserDataSchema, } // Reference the UserDataSchema
});


const User = mongoose.model('User', UserSchema);

module.exports = {
    User,
    connectDB,
    UserDataSchema
};