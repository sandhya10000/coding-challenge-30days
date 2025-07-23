let a = 5,
  b = 10;

// Using third variable
let temp = a;
a = b;
b = temp;
console.log("After swap using temp:", a, b);

// Without third variable
a = a + b;
b = a - b;
a = a - b;
console.log("After swap without temp:", a, b);
