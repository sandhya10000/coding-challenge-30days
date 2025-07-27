/**Swapping of two number using third variable using for loop
 * Qusetion 1:
 */

let a = 10,
  b = 30;
for (i = 0; i < 1; i++) {
  let temp = a; //using third variable
  console.log(temp);
  a = b;
  b = temp;
}

console.log(`Result of ${a} and ${b}`); //output:  Result of 30 and 10

/** Swapping of two number without using third variable
 * Qusetion :
 */

let value1 = 20;
let value2 = 30;

for (i = 0; i < 1; i++) {
  value1 = value1 + value2; // 50
  value2 = value1 - value2; // 20
  value1 = value1 - value2; //30
}

console.log(`After swapping: ${value1} and ${value2}`); // output: After swapping: 30 and 20

/** Sum of First N Natural Numbers
Qusetion 2:
*/

function sumFirstNaturalnum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

let abc = sumFirstNaturalnum(10);
console.log(abc); // output:55

/**
 *  Double Each Number in Array (Using map)
Define: - The map method creates a new array by applying a specified operation to each element of the original array.
Qusetion 3:
*/

let arr = [2, 4, 3, 5, 6, 7];

let result = arr.map((item) => item * 2);
console.log(result); // out: [ 4, 8, 6, 10, 12, 14 ]

/**
 *
 * Define : The filter method creates a new array by including only the elements that satisfy a specified condition.
Qusetion 4:
 */

let arr1 = [1, 2, 3, 45, 6, 7, 8, 9, 66];
let result2 = arr1.filter((item) => item % 2 === 0);
console.log(result2); // Output: [ 2, 6, 8, 66 ]

/**
 * Define: -The reduce method returns a single value by applying a specified operation to all elements of the array.
 *  Sum of All Numbers (Using reduce)
 * Qusetion 5:
 */
let reduceR = arr1.reduce((acc, crr) => acc + crr, 0);
console.log(reduceR, "reduceResult----");

/**
 * Convert array to object
 * Qusetion 6:
 */

const users = [
  { name: "Dharya", age: 20 },
  { name: "sandhya", age: 30 },
];

const names = users.map((users) => users.name);
console.log(names);

/**
 *
 * Qusetion 7:
 */
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let arr11 = [1, 2, 3, [4, 5], 6, [7, 8, 9], 10];
let result11 = [];

const fiterArr = (blnkArr) => {
  for (let item of blnkArr) {
    if (Array.isArray(item)) {
      fiterArr(item, arr11);
    } else {
      result11.push(item);
    }
  }
};
fiterArr(arr11);
console.log(result11); //output:[
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]

/**
 * Qusetion 8:
 */
const input = {
  name: "john",
  adress: {
    city: "delhi",
    geo: {
      lat: 23,
      long: 21,
    },
  },
};

// output:
// {
//   name:'john',
//   address.city: 'New York',
//   address.geo.lat : 23,
// address.geo.long :21
// }

/**
 *  From users array, return names of adults
 * Qusetion 9:
 */
const users1 = [
  { name: "A", age: 17 },
  { name: "B", age: 25 },
];

const adults = users1.filter((u) => u.age > 18).map((u) => u.name);
console.log(adults, "adults");

/**
 * Count Occurence in array
 * Qusetion 10:
 */

const arr2 = ["a", "b", "a", "a"];

const ocur = arr2.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  console.log(acc);
  return acc;
}, {});

console.log(ocur);

/**
 * Slice function Extract a portion of an array	 and it is not modify the original array
 *  
 * array.slice(start, end);

 */

let slicearray = [1, 2, 3, 4, 5, 6, 7, 8];
let sliced = slicearray.slice(1, 5);
console.log(sliced, "sliced======");
//output:[ 2, 3, 4, 5 ] sliced======
//Include(add) 1 and exclude(remove) from 5

const slicearr1 = [10, 20, 30, 40, 50];

const sliced1 = slicearr1.slice(1, 4);

console.log(sliced1, "sliced1========="); // [20, 30, 40]
console.log(slicearr1); // Original array remains unchanged

/**
 * splice Add or remove elements from an array
 * splice(start, deleteCount, ...items)
 */

let spliceArray = [12, 34, 45, 67, 87];
let spliced = spliceArray.splice(1, 3);
console.log(spliced, "spliced============");
