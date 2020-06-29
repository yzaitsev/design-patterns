const car_prototype = require('./car_prototype');

const car1 = car_prototype.clone();
const car2 = car_prototype.clone();

car2.addReplaceOption('productYear', 2020);
car2.addReplaceOption('color', 'Orange');

console.log('car1: ', car1.options);
console.log('car2: ', car2.options);