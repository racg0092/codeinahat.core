const core = require('./core');

let test = ['a','b','c'];


let first = test.FirstOrDefault(i => i === 'c');

console.log(first);