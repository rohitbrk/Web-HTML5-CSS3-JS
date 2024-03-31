// map - 
const nums = [1, 2, 3, 4, 5];
const sqr_nums = nums.map((item) => item * 2);
console.log(sqr_nums)

// filter - 
const nums2 = [1, 2, 3, 4, 5];
const even_nums = nums2.filter((item) => item % 2 == 0);
console.log(even_nums)

// find - 
const fruits = ["apple", "mango", "watermelon", "orange"];
const target = "mango"
const find_fruit = fruits.find(fruit => fruit === target);
console.log(find_fruit)
