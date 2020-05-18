const core = require("@actions/core");
const path = require('path');
const fs = require('fs');


const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");

console.log(`Hello ${firstGreeting}`);
console.log(`Hello ${secondGreeting}`);
if (thirdGreeting) {
    console.log(`Hello ${thirdGreeting}`);
}

const directoryPath = './';
// const directoryPath = path.join(__dirname, 'Document');

fs.readdir(directoryPath, function (err, files) {
    console.log('Reading files in dir: ' + directoryPath);
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach(function (file) {
        console.log('File: ' + file);
    });
});