// 1. Boolean Type
let isDone: boolean = false;
log(isDone);

// 2. Number Type, all is floating point values
let decimal: number = 6;
log(decimal);

let hex: number = 0xf00d;
log(hex);

let binary: number = 0b1010;
log(binary);

let octal: number = 0o744;
log(octal);

// 3. String type typescript also use " and ', but for code format we suggest to use '
let color: string = "blue";
color = "red";

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age +
  1} years old next month.`;

log(sentence);

// 4. Array
let list: number[] = [1, 2, 3, 4];
let listSecondWay: Array<number> = [1, 2, 3];

// 5. Tuple
let x: [string, number];
x = ["hello", 10];
// x = [10, "hello"]; // Error

console.log(x[0].substring(1));
// console.log(x[1].substring(1)); //Error

// x[3] = "world";
// console.log(x[5].toString());

//6. Enum, default start with number 0
enum Color {
  Red = 1,
  Green = 2,
  Blue = 0xf00d // To do, 枚举可以采用位运算
}
let colorName: string = Color[2];
log(colorName);

log(Color.Red);

function log(logInfo: any) {
  console.log(`${JSON.stringify(logInfo)}`);
}

//7. Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let notSureTwo: any = 4;
// notSure.ifItExists();
// notSure.toFixed();

let prettySure: Object = 4;
// prettySure.toFixed();

let listThree: any[] = [1, true, "free"];
listThree[1] = 100;
log(listThree);

// 8. void
function warnUser(): void {
  console.log("This is my warning message");
}
// void only assign null and undefined to them
let unusable: void = undefined;

//9. Null and Undefined
let u: undefined = undefined;
let n: null = null;

// 9. Never
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}
function fail() {
  return error("Something failed");
}

function infiniteLoop(): never {
  while (true) {}
}

//10. Object
declare function create(o: object | null): void;

create({ prop: 0 });
create(null);
create(42); //Error
create("string"); // Error
create(false); //Error
create(undefined); // Error

let someValue = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue2 = "this is a string";
let strLength: number = (someValue as string).length;
