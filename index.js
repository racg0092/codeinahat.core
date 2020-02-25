const core = require('./core');



const group = [
    {name: "Tito",age: 10, role: "sys_admin", email: 'asdhkjhda'},
    {name: "Pedro", age: 25, role: "sales_sup", email: 'pedro@gmail.com'},
    {name: "Toney", age: 30, role: "coorp", email: 'tes@1111'},
    {name: "Harry", age: 20, role: "coord", email: 'harry@yahoo.es'},
    {name: "Tito",age: 10, role: "sys_admin", email: 'tio'},
]


const g = group.FirstOrDefault();



const g2 = group.Distinct();

console.log(group[4].email.IsEmail());
console.log(g);
console.log(g2);