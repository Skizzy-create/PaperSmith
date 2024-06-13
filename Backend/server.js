const express = require('express');
const bodyParser = require('body-parser');
const { countTime, countRequests } = require('./middlewares/logs.');
const authRoutes = require("./routes/authRoutes");
const { connectDB } = require('./database/databseOPS');
require('dotenv').config();
cors = require('cors');


const app = express();
const port = 3000;

//connecting to the database
const connectDBWithRetry = () => {
    connectDB(process.env.MONGOOSE_CONNECTION_STRING)
        .then(() => {
            console.log('Connected to the database');
        })
        .catch((error) => {
            console.error('Failed to connect to the database:', error);
            setTimeout(connectDBWithRetry, 2000);
        });
};

connectDBWithRetry();


// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true // Allow cookies to be sent
}));
app.use(bodyParser.json());
app.use(countTime);
app.use(countRequests);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// different routes
app.use('/user', authRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
    console.log("Houme Route")
    res.status(200).json({ 'msg': "Home Page" })
});

app.listen(port, () => {
    console.log(`Sever running on https://localhost:${port}`);
});