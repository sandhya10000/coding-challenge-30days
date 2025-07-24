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
