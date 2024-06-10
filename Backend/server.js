const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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