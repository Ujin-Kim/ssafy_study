const chicken = [
    {name:"머리", quantity:1},
    {name:"날개", quantity:2},
    {name:"닭다리", quantity:2},
    {name:"닭가슴살", quantity:1},
    {name:"닭발", quantity:2},
];

console.log(chicken.find(e => e.name === "닭다리"));
console.log(chicken.findIndex(e => e.name === "닭다리"));