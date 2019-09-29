// //1. var declarations

// var a = 10;

// function f() {
//   var message = "hello world";
//   return message;
// }
// // console.log(f());

// function f1() {
//   var a = 10;
//   return function g() {
//     var b = a + 1;
//     return b;
//   };
// }
// var g = f1();

// function f2() {
//   var a = 1;
//   a = 2;
//   var b = g();
//   return b;
//   function g() {
//     return a;
//   }
// }
// // console.log(f2());
// // console.log(g());

// function f3(shouldInitialize: boolean) {
//   if (shouldInitialize) {
//     var x = 10;
//   }
//   return x;
// }

// function log(logInfo: any) {
//   console.log(`${JSON.stringify(logInfo)}`);
// }

// // log(f3(false));
// // log(f3(true));

// function sumMatrix(matrix: number[][]) {
//   var sum = 0;
//   for (var i = 0; i < matrix.length; i++) {
//     var currentRow = matrix[i];
//     for (var i = 0; i < currentRow.length; i++) {
//       sum += currentRow[i];
//     }
//   }
//   return sum;
// }
// // log(sumMatrix([[1, 2, 3], [2, 3, 4]]));

// // for and timeout
// // for (var a = 1; a < 10; a++) {
// //   setTimeout(() => {
// //     console.log(a * 100);
// //   }, 100 * a);
// // }
// log("======IIFE======");
// // use IIFE 立即执行函数
// // for (var i = 1; i < 10; i++) {
// //   (function(i) {
// //     setTimeout(() => {
// //       console.log(i);
// //     }, 100 * i);
// //   })(i);
// // }

// // let declarations

// let hello = "Hello!";

// //block-scoping

// function fb(input: boolean) {
//   let a = 100;
//   if (input) {
//     let b = a + 1;
//     return b;
//   }
//   // return b;
// }

// // try {
// //   throw "oh, no!";
// // } catch (e) {
// //   console.log("Oh well");
// // }

// // e++;
// // let e;

// function foo() {
//   return m;
// }

// foo();
// let m;

// function h(x) {
//   var x;
//   var x;
//   if (true) {
//     return x;
//   }
// }

// let e = 10;
// // let e = 20;

// // function fw(x) {
// //   let x = 100;
// // }

// function g1() {
//   let x = 10;
//   // var x = 100;
// }

// function fc(condition, x) {
//   if (condition) {
//     let x = 100;
//     return x;
//   }
//   return x;
// }

// // log(fc(false, 0));
// // log(fc(true, 0));

// function sumMatrix1(matrix: number[][]) {
//   let sum = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     var currentRow = matrix[i];
//     for (let i = 0; i < currentRow.length; i++) {
//       sum += currentRow[i];
//     }
//   }
//   return sum;
// }

// // log(sumMatrix1([[1, 2, 3], [1, 2, 3]]));

// function theCityThatAlwaysSleeps() {
//   let getCity;
//   if (true) {
//     let city = "Seattle";
//     getCity = function() {
//       return city;
//     };
//   }
//   return getCity();
// }

// log(theCityThatAlwaysSleeps());

// // for (let i = 0; i < 10; i++) {
// //   setTimeout(() => {
// //     console.log(i);
// //   }, 100 * i);
// // }

// // const declarations
// const numLivesForCat = 9;

// const kitty = {
//   name: "Aurora",
//   numLives: numLivesForCat
// };
// // kitty = {
// //   name: "Danielle",
// //   numLives: numLivesForCat
// // };

// kitty.name = "Rory";
// kitty.name = "Kitty";
// kitty.name = "Cat";
// kitty.numLives--;
// log(kitty);

// let input = [1, 2];
// let [first, second] = input;
// log(first);
// log(second);

// first = input[0];
// second = input[1];
// [first, second] = [second, first];

// function ftest([first, second]: [number, number]) {
//   console.log(first);
//   console.log(second);
// }

// ftest([1, 2]);

// let [first1, ...rest] = [1, 2, 3, 4];
// console.log(first1);
// console.log(rest);

// let [first2] = [1, 2, 3, 4];
// console.log(first2);

// let [, second1, , fourth] = [1, 2, 3, 4];
// console.log(second1);
// console.log(fourth);

// let tuple: [number, string, boolean] = [7, "hello", true];
// // let [ad, b, c] = tuple;

// // let [adc, bd, cd, ef] = tuple;

// let [ac, ...bc] = tuple;
// let [ae, b, c, ...d] = tuple;

// let [dd] = tuple;
// let [, bdd] = tuple;

// // Object destructuring
// let o = {
//   a1: "foo",
//   b2: 12,
//   c2: "bar"
// };

// let { a1, b2 } = o;
// ({ a1, b2 } = { a1: "1", b2: 1 });

let o = {
  a: "foo",
  b: 12,
  c: "bar"
};

// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;

//Property renaming

// let { a: newName1, b: newName2 } = o;
// =
let newName1 = o.a;
let newName2 = o.b;

console.log(newName1);
console.log(newName2);

// let newName1 = o.a;
// let newName2 = o.b;

let { a, b }: { a: string; b: number } = o;

// Default values

function keepWholeObject(wholeObject: { a: string; b?: number }) {
  let { a, b = 1001 } = wholeObject;
  console.log({ a, b });
}

keepWholeObject({ a: "1", b: 2 });

// Function declarations
type C = { a: string; b?: number };
function f({ a, b }: C): void {}

// set default values

f1();
f1({ a: "1" });
f1({});

f2({ a: "yes" });
f2();
// f2({});

//Spread
//Spread Array
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(bothPlus);

//Spread Object
let defaults = { food: "spicy", price: "$$", ambiance: "nosiy" };
let search = { ...defaults, food: "rich" };
let search2 = { food: "rich", ...defaults };
console.log(search);
console.log(search2);

//Spread Object will lost method
class C1 {
  p = 12;
  m() {}
}
let c = new C1();
let clone = { ...c };
clone.p;
// clone.m();

function f1({ a = "", b = 0 } = {}): void {}
function f2({ a, b = 0 } = { a: "" }): void {}

f1({});
f2({ a: "1" });
