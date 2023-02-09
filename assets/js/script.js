// "use strict";

// Task 1

// let number = prompt("Eded daxil et");
// DivisionInto3And7(number);

// function DivisionInto3And7(number) {
//   if (isNaN(number)) {
//     alert("Duzgun daxil edin");
//   } else {
//     if (number % 21 == 0) {
//       alert("3e ve 7e tam bolunur");
//     } else {
//       alert("3e ve 7e tam bolunmur");
//     }
//   }
// }

// Task 2

// let number = prompt("Eded daxil et");

// console.log(Factorial(number));

// function Factorial(number) {
//   if (isNaN(number)) {
//     return "Duzgun daxil edin";
//   } else {
//     let result = 1;

//     if (number < 0) {
//       return "Duzgun daxil edin";
//     } else if (number == 0) {
//       return "Cavab: 1";
//     }

//     for (let i = 1; i <= number; i++) {
//       result *= i;
//     }

//     return `Cavab: ${result}`;
//   }
// }

// Task 3

// let arr = [1, 2, 3, 4, 5, 6];
// CalculateEvenNumsSquare(arr);

// function CalculateEvenNumsSquare(arr) {
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       result += arr[i] ** 2;
//     }
//   }

//   alert(result);
// }

// Task 4

// let gmail = prompt("Email: ");
// let password = prompt("Password: ");
// Login(gmail, password);

// function Login(gmail, password) {
//   if (gmail == "cavid@code.edu.az" && password == "12345") {
//     alert("Girish olundu");
//   } else {
//     alert("Girish ugursuzdur");
//   }
// }

// Task 5

// let arr = [1, 2, 3, 4, 5, 6];
// CalculateOddNums(arr);

// function CalculateOddNums(arr) {
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       result += arr[i];
//     }
//   }

//   alert(result);
// }

// Task 6

// let arr = [1, 2, 3, 4, 5, 6];
// EvenNumsCount(arr);

// function EvenNumsCount(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       count++;
//     }
//   }

//   alert(count);
// }

//Practice

// let numbers = [1, 2, 3, 4, 5, 6, "salam", 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//   //   console.log(numbers[i]);

//   if (numbers[i] == 7) {
//     // break;
//     continue;
//   } else {
//     console.log(numbers[i]);
//   }
// }

// let numbers = [1, 2, 3, 4, 5, 6, "salam", 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//   if (!isNaN(numbers[i])) {
//     if (numbers[i] % 2 == 0) {
//       console.log(numbers[i]);
//     }
//   }
// }

// let numbers = [1, 2, 3, "4", 5, 6];

// for (let i = 0; i < numbers.length; i++) {
//   if (!isNaN(numbers[i]) && typeof numbers[i] == "number") {
//     if (numbers[i] % 2 == 0) {
//       console.log(numbers[i]);
//     }
//   }
// }

// try {
//   let isMarried = true;
//   if (isMarried) {
//     let result = "Married";
//   }
//   console.log(result);
// } catch (error) {
//   console.log("Error var");
// }

// let isMarried = false;

// if (!isMarried) {
//   let text = "Not Married";
//   console.log(text);
// }

// let name = "Rasul";
// let surname = "Hasanov";

// function showText(name, surname) {
//   return name + " " + surname;
// }

// let result = showText(name, surname) + " P414 qrupunda oxuyur"

// console.log(result);

// function sumOfNumbers() {
//   console.log(arguments);
// }

// sumOfNumbers(1, 2, 3, 4, 5, 6);

// console.log(this);

// function showFullData(){
//     console.log(this);
// }

// showFullData();

// let obj = {
//   name: "Rasul",
//   surname: "Hasanov",
//   getData: showFullData()
// };

// console.log(obj);

// let showEmail = () => {
//   console.log("rasulhasanov357@gmail.com");
// };

// showEmail();