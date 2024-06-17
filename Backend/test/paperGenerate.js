// function to read the readme.md, store the data in a object and then return the object.
const fs = require('fs');
const path = require('path');


function paperGenerate() {
    let pathdir = __dirname;
    console.log("path = ", pathdir);
    const data = fs.readFileSync(path.join(__dirname, '/README.md'), 'utf8');
    return data;
}

module.exports = paperGenerate;