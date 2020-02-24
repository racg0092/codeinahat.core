const core = require('./core');



const group = [
    {name: "Tito",age: 10, role: "sys_admin"},
    {name: "Pedro", age: 25, role: "sales_sup"},
    {name: "Toney", age: 30, role: "coorp"},
    {name: "Harry", age: 20, role: "coord"},
    {name: "Tito",age: 10, role: "sys_admin"},
]


const g = group.FirstOrDefault();



const g2 = group.Distinct();


console.log(g);
console.log(g2);