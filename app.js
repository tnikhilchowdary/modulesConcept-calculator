const math = require('./math');
const calculator = require('./calculator');

console.log(math.add(10,3 ));
console.log(math.sub(10, 4));

console.log('Add:', calculator.add(10, 5));
console.log('Sub:', calculator.sub(10., 4));
console.log("Mul:", calculator.mul(10,10));
console.log("Div:", calculator.div(10,5));

