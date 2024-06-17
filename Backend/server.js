const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { countTime, countRequests } = require('./middlewares/logs.')
const authRoutes = require('./routes/authRoutes')
const paperRoutes = require('./routes/paperRoute');
const folderRoutes = require('./routes/folderRoutes');
const { connectDB } = require('./database/databseOPS');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = 3000;

// Connecting to the database
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
app.use(cookieParser());
app.use(countTime);
app.use(countRequests);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Different routes
app.use('/user', authRoutes);
app.use('/paper', paperRoutes);
app.use('/folder', folderRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
    console.log("Home Route");
    res.status(200).json({ 'msg': "Home Page" });
});

app.listen(port, () => {
    console.log(`Server running on https://localhost:${port}`);
});
