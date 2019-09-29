// 交叉类型

// function extend<T, U>(first: T, second: U): T & U {
//   let result = <T & U>{};
//   for (let id in first) {
//     (<any>result)[id] = (<any>first)[id];
//   }
//   for (let id in second) {
//     if (!result.hasOwnProperty(id)) {
//       (<any>result)[id] = (<any>second)[id];
//     }
//   }
//   return result;
// }

// class Person1 {
//   constructor(public name: string) {}
// }

// interface Loggable {
//   log(): void;
// }

// class ConsoleLogger implements Loggable {
//   log() {}
// }

// var jim = extend(new Person1("Jim"), new ConsoleLogger());
// var n = jim.name;
// // jim.log();

// // 联合类型(Union Types)
// function padLeft(value: string, padding: any) {
//   if (typeof padding === "number") {
//     return Array(padding + 1).join(" ") + value;
//   }
//   if (typeof padding === "string") {
//     return padding + value;
//   }
//   throw new Error(`Expected string or number, got '${padding}'.`);
// }

// padLeft("hello world", 4);

// // 联合类型作为参数

// function padLeft1(value: string, padding: string | number) {}

// // let indentedString = padLeft1("hello world", true);

// // 联合类型 我们只能访问联合类型里面的共有成员
// interface Bird {
//   fly();
//   layEggs();
// }

// interface Fish {
//   swim();
//   layEggs();
// }

// function getSmallPet(): Fish | Bird {
//   return <Fish | Bird>{};
// }

// let pet = getSmallPet();
// // pet.layEggs();
// // pet.fly(); // Error

// // 用户自定义的类型保护
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (<Fish>pet).swim !== undefined;
// }

// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }

// //typeof 类型保护

// function isNumber(x: any): x is number {
//   return typeof x === "number";
// }

// function isString(x: any): x is string {
//   return typeof x === "string";
// }

// // instance
// interface Padder {
//   getPaddingString(): string;
// }

// class SpaceRepeatingPadder implements Padder {
//   constructor(private numSpaces: number) {}
//   getPaddingString() {
//     return Array(this.numSpaces + 1).join(" ");
//   }
// }

// class StringPadder implements Padder {
//   constructor(private value: string) {}
//   getPaddingString() {
//     return this.value;
//   }
// }

// function getRandomPadder() {
//   return Math.random() < 0.5
//     ? new SpaceRepeatingPadder(4)
//     : new StringPadder(" ");
// }

// function broken(name: string | null): string {
//   function postfix(epithet: string) {
//     return name.charAt(0) + ". the" + epithet;
//   }
//   name = name || "Bob";
//   return postfix("great");
// }

// function fixed(name: string | null): string {
//   function postfix(epithet: string) {
//     return name!.charAt(0) + " . the " + epithet;
//   }
//   name = name || "bob";
//   return postfix("greate");
// }

// // 类型别名
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameOrResolver): Name {
//   if (typeof n === "string") {
//     return n;
//   } else {
//     return n();
//   }
// }

// // 类型别名也可以是泛型
// type Container<T> = { value: T };

// type Tree<T> = {
//   value: T;
//   left: Tree<T>;
//   right: Tree<T>;
// };

// // 与交叉类型一起使用
// type LinkedList<T> = T & { next: LinkedList<T> };
// interface Person {
//   name: string;
// }

// var people: LinkedList<Person>;
// var s = people.name;
// s = people.next.name;

// // l类型别名不能出现在声明右侧的任何地方

// // error
// // type Yikes = Array<Yikes>;

// // 接口和类型别名
// type Alias = { num: number };
// interface Interface {
//   num: number;
// }

// declare function aliased(arg: Alias): Alias;
// declare function interfaced(arg: Interface): Interface;

// class testExtends implements Alias {
//   num: number;
//   constructor(private name: string) {}
// }

// // class testExtends2 extends Alias {

// // }

// // 字符串字面量的类型

// type Easing = "ease-in" | "ease-out" | "ease-in-out";

// class UIElement {
//   animate(dx: number, dy: number, easing: Easing) {
//     if (easing === "ease-in") {
//     } else if (easing === "ease-out") {
//     } else if (easing == "ease-in-out") {
//     } else {
//     }
//   }
// }

// let button = new UIElement();
// button.animate(0, 0, "ease-in");
// // button.animate(0, 0, "uneasy");

// function foo(x: number) {
//   // if (x !== 1 || x !== 2) {
//   // }
// }

// // 标签联合或代数数据类型
// interface Square {
//   kind: "square";
//   size: number;
// }
// interface Rectangle {
//   kind: "rectangle";
//   width: number;
//   height: number;
// }

// interface Circle {
//   kind: "circle";
//   radius: number;
// }

// type Shape = Square | Rectangle | Circle;

// function area(s: Shape) {
//   switch (s.kind) {
//     case "square":
//       return s.size + s.size;
//     case "rectangle":
//       return s.height * s.width;
//     case "circle":
//       return Math.PI * s.radius * 2;
//   }
// }

// //使用never 进行完整性检查

// function assertNever(x: never): never {
//   throw new Error("Unexpected object: " + x);
// }

// // function area(s: Shape) {
// //   switch(s.kind)
// // }

// 多态的this 类型

class BasicCalculator {
  public constructor(protected value: number = 0) {}
  public currentValue(): number {
    return this.value;
  }
  public add(operand: number): this {
    this.value += operand;
    return this;
  }
  public mutiply(operand: number): this {
    this.value *= operand;
    return this;
  }
}

let v = new BasicCalculator(2)
  .mutiply(5)
  .add(1)
  .currentValue();

// 测试一下 this

class Scienti extends BasicCalculator {
  public constructor(value = 0) {
    super(value);
  }
  public sin() {
    this.value = Math.sin(this.value);
    return this;
  }
}

let sa = new Scienti(20)
  .mutiply(5)
  .sin()
  .add(1)
  .currentValue();
console.log(sa);
// 类型索引

function pluck(o, names) {
  return names.map(n => o[n]);
}

function pluckT<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "1",
  age: 35
};

let strings: string[] = pluck(person, ["name"]); // ok, string[]
pluckT(person, ["age"]);

// 第二个操作符号 索引访问操作符
function getPo<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}

// 索引类型和字符串索引签名
interface Ma1p<T> {
  [key: string]: T;
}

let keys: keyof Ma1p<number>;
let value: Ma1p<number>["foo"];

// 类型映射

type Keys = "Option1" | "Option2";

type Flags = { [K in Keys]: boolean };

// ts 在 2.8 lib.d.ts 里增加一些预定义的有条件类型

// Exclude<T, U>

type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;

type T02 = Exclude<string | number | (() => void), Function>;
type T03 = Extract<string | number | (() => void), Function>;
type T04 = NonNullable<string | number | undefined>;
type T05 = NonNullable<(() => string) | string[] | null | undefined>;

function f1(s: string) {
  return { a: 1, b: s };
}

class C {
  x = 0;
  y = 0;
}

type T10 = ReturnType<() => string>;
type T11 = ReturnType<(s: string) => void>;
type T12 = ReturnType<<T>() => T>;
