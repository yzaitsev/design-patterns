
const CategoryItem = require('./category-item');
const CategoryGroup = require('./category-group');

const airpods = new CategoryItem('Airpods', 50);
const iphone = new CategoryItem('Iphone 11', 100);
const mac_book = new CategoryItem('MacBook Pro', 300);

const flip_flops = new CategoryItem('Flip Flops 2020', 20);
const snickers = new CategoryItem('Nike Air Max 2020', 120);
const boots = new CategoryItem('Timberland', 150);


const apple_group = new CategoryGroup('Apple products', [airpods, iphone, mac_book]);
const shoes_group = new CategoryGroup('Shoes products', [flip_flops, snickers, boots]);

// === can be print separately
// apple_group.print()
// shoes_group.print()

const all_group = new CategoryGroup('All products by groups', [apple_group, shoes_group]);
console.log(`Total price: $${all_group.total}`);
all_group.print();