const {namelist} = require("./fileModule.js");

//console.log(nameList);

namelist.then((data) => {
    console.log(data);
    console.log(data.toString());
    const nameArr = data.toString().split(',');
    console.log(nameArr);
});