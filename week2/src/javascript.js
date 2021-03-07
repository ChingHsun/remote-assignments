//Assignment 1: Function and Array
//Complete the function below to find the max number of the passing array of numbers.
//Reminder: you cannot use built-in Math.max() or sort() to complete this assignment.
function max(numbers) {
  // your code here, for-loop method preferred
  let number = null;
  numbers.forEach((element) => {
    if (element > number) {
      number = element;
    }
  });
  console.log("Assignment 1 ans:", number);
}
max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7

//----------------------------------------------

//Assignment 2: Object
// In JavaScript, there are many different sets of syntax for creating objects. In the code below,
// function parameters are encapsulated into an object, try using at least two ways to create a
// proper object as a parameter of the calculate function.
function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}
console.log("Assignment 2 ans1:", calculate({ op: "+", n1: 3, n2: 4 }));

class ObjectForCalculate {
  constructor(op, n1, n2) {
    this.op = op;
    this.n1 = n1;
    this.n2 = n2;
  }
}

console.log("Assignment 2 ans2:", calculate(new ObjectForCalculate("-", 5, 1)));

//----------------------------------------------

//Assignment 3: Function, Array, and Object
//Complete the function below to calculate the average price of all the products.
function avg(data) {
  // your code here
  let result = null;
  for (let i = 0; i < data.products.length; i++) {
    result += data.products[i].price;
  }
  result = result / data.products.length;

  console.log("Assignment 3 ans:", result);
}
avg({
  size: 3,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
}); // show the average price of all products

//----------------------------------------------

// Assignment 5: Algorithm Practice (Advanced Optional)
// Given an array of integers, return indices of the two numbers such that they add up to a
// specific target. You may assume that each input would have exactly one solution, and you
// may not use the same element twice.
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log("Assignment 5 ans:", twoSum([2, 7, 11, 15], 9));
