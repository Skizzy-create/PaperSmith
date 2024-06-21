const mongoose = require('mongoose');
const { optional } = require('zod');

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

const PaperSpecsSchema = new mongoose.Schema({
    sections: { type: Number, default: 1 },
    questions: { type: Number, default: 1 },
    type: { type: String, default: "MCQ" },
    optional: { type: Boolean, default: false },
});

const PaperSchema = new mongoose.Schema({
    title: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    specs: { type: PaperSpecsSchema, default: {} },
    favourite: { type: Boolean, default: false },
    loaction: { type: String, default: 'null' },
});

const FolderNames = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // array of names of the folders
    folders: { type: Array, default: [] }, // can we add new names to array and then remvoe it: yes, how 
    // exapmle: 1. adding a new name of the server, :
});

const User = mongoose.model('User', UserSchema);
const Paper = mongoose.model('Paper', PaperSchema);
const Folder = mongoose.model('FolderNames', FolderNames);

module.exports = {
    User,
    connectDB,
    UserDataSchema,
    Paper,
    Folder,
};