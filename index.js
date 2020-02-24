const core = require('./core');

let test = ['apple','manzana','zee'];


let first = test.Where(i => i.indexOf('z') > -1);

console.log(first);