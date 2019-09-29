// // //查找满足where条件的user记录
// // const aspenUsers = await User.findAll({ where });

// // //提取email 并且过滤重复的email
// // const emails = new Set(_.map(aspenUsers, "email"));

// // // 筛选出result.users中email属性的值在emails数组中的元素, 并且赋值给result.user
// // result.users = _.filter(result.users, e => {
// //   return emails.has(e.email);
// // });

// function d(b: { label: string }) {
//   console.log(b.label);
// }

// interface LabeledValue {
//   label: string;
// }

// function printLabel(labelObj: LabeledValue) {
//   console.log(labelObj.label);
// }

// let obj = { size: 10, label: "111" };
// printLabel(obj);

// enum USerType {
//   ADMIN = "ADMIN",
//   NORMAL = "NORMAL",
//   CLIENT = "CLIENT"
// }

// const ggg = {
//   ADMIN: "ADMIN",
//   NORMAL: "NORMAL",
//   CLIENT: "CLIENT"
// };

// const userRole: USerType = USerType.NORMAL; // "NORMAL";
// // use enum
// if (userRole === USerType.NORMAL) {
// }

// // use object

// if (userRole === ggg.NORMAL) {
// }

// ggg.NORMAL;

// let a1: number[] = [1, 2, 3, 4];
// let a2;

// // const string = `const lodash = require('lodash') const a = () => {const b = [1,2,3,4,5]; return lodash.groupBy('111')}`;

// // eval(string);

// //Option

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   return {
//     color: config.color,
//     area: config.width
//   };
// }
// let mySquare = createSquare({ color: "red", width: 100 });

// // let a1 = createSquare({ colour: "red", width: 100 });
// let a3 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
// console.log(a3);

// interface otherPro {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }

// const a5 = (a: { name: string; id: number }) => {};

// // const b5 = arg => {
// //   return a(...arg);
// // };

// // readonly property
// interface Point {
//   readonly x: number;
// }
// let test2: Point = { x: 1 };
// test2.x = 1;

// let b3: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = b3;
// // b3 = ro; // readonly can not assign to number[]

// b3 = ro as number[];

// interface SquareConfig1 {
//   color?: string;
//   width?: number;
// }

// function createSquare1(config: SquareConfig1): { color: string; area: number } {
//   return {
//     color: "color",
//     area: 1
//   };
// }
// // let mySquare1 = createSquare({ colour: "red", width: 100 });

// // Function Types
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// class Aniam {
//   name: string;
// }
// class Dog extends Aniam {
//   bread: string;
// }

// interface NotOkay {
//   //   [y: number]: Aniam;
//   [x: string]: Dog;
// }

// // Class Types
// interface ClockInterface {
//   currentTime: Date;
// }

// class Clock implements ClockInterface {
//   currentTime: Date = new Date();
//   constructor() {}
// }

// interface ClockConstructor {
//   new (hour: number, minute: number);
// }
// class Clock2 implements ClockConstructor {}

// class Control {
//   private state: any;
// }
// interface SelectableControl extends Control {
//   select(): void;
// }
// class Button extends Control implements SelectableControl {
//   constructor() {
//       super();
//   }
//   select() {
//     this.state = 1;
//   }
// }

// class Control {
//   private state: any;
// }
// interface SelectControl extends Control {
//   select(): void;
// }

// class SelectControlTest extends Control implements SelectControl {
//   select() {}
// }

interface Control {
  select1(): void;
}
interface SelectControl extends Control {
  select(): void;
}

class SelectControlTest implements SelectControl {
  select() {}
  select1() {}
}

// tuple

let x: [string, number];
x = ["hello", 10];
// x = [10, "hello"];

enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;

enum Color2 {
  Red = 1,
  Green,
  Blue
}
let colorName: string = Color2[2];
console.log(colorName);

let notSure: any = 4;
notSure.ifItExists();
notSure.toFixed();

let prettySure: Object = 4;
// prettySure.toFixed();

function warnUser(): void {
  console.log("This is my warning message");
}

let unusable: void = undefined;

let u: undefined = undefined;
let n: null = null;

// Object

declare function create(o: object | null): void;
create({ prop: 0 });

let someValue: any = "This is a string";
let strLength: number = (<string>someValue).length;

strLength = (someValue as string).length;

// let ro: ReadonlyArray<number> = a;

// ro[0] = 12;

interface ClockConstructor1 {
  new (hour: number, minute: number);
}

//为什么呢 当一个雷实现了一个借口的时候, 只对其示例进行检查, 但是constructor 存在于静态部分

class Clock3 implements ClockConstructor1 {
  currentTime: Date;
  constructor(h: number, m: number) {}
}

// 接口的继承

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

// 混合类型

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function(start: number) {};
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}

let c111 = getCounter();
c111(10);
c111.reset();
c111.interval = 15.0;

interface what {
  name: string;
}

class whatHappen {
  test() {
    console.log("test");
  }
}

interface whatInterface extends whatHappen {}

// error
class whatHappenInterface implements whatInterface {
  test() {
    console.log("waht happend test ");
  }
}
