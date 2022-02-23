const fs = require("fs").promises;

const namelist = fs.readFile("./nameList.txt");

module.exports = {
    namelist
};