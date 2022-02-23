const array = [
    {id:1, text:"hi"},
    {id:2, text:"hi"},
    {id:3, text:"world"}
];

const filterArray = array.filter(e => e.text === "hi");
console.log(filterArray);