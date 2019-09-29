// // example of class

// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }

// let greeter = new Greeter("World");

// // 继承的详细用法

// class Animal {
//   move(distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}m.`);
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Woof! Woof!");
//   }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

// // 更进一步的使用

// class AnimalFurther {
//   name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
//   move(distance: number = 0) {
//     console.log(`move instance ${distance}`);
//   }
// }

// class Snake extends AnimalFurther {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distance = 5) {
//     console.log(`Snake`);
//     super.move(distance);
//   }
// }

// class Horse extends AnimalFurther {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distance = 10) {
//     console.log(`Horse`);
//     super.move(distance);
//   }
// }
// let sam = new Snake(`Sammy the python`);
// let tom: Animal = new Horse(`Tommy the Palomino`);

// sam.move();
// tom.move(34);

// // test information
// class Anima1 {
//   [x: string]: string;
//   private name: string;
//   private name1: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }

// class Animal3 extends Anima1 {
//   constructor(theName: string) {
//     super(theName);
//   }

//   public getNmae() {
//     // console.log(`${this.name}`);
//   }
// }

// class Animal2 {
//   public name: string;
//   private name1: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }

// let test1 = new Anima1("1");
// let test2 = new Animal2("2");

// // test1 = test2;
// // console.log((test1 = test2));

// // example 3
// class OctOps {
//   readonly numberOfleg: number = 8;
//   constructor(readonly name: string) {}
// }

// let a1 = new OctOps("1");
// console.log(a1.name);

// // 存取器

// class Empolyee {
//   fullName: string;
// }

// let employee = new Empolyee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//   console.log(employee.fullName);
// }

// let passcode = "secret passcode";

// class Employee2 {
//   private _fullName: string;
//   get fullName(): string {
//     return this._fullName;
//   }

//   set fullName(newName: string) {
//     if (passcode && passcode == "secret passcode") {
//       this._fullName = newName;
//     } else {
//       console.log("Error: Un");
//     }
//   }
// }

// let employee2 = new Employee2();
// employee2.fullName = "QAQ";
// if (employee2.fullName) {
//   console.log("1");
// }

// // 静态属性, 必须用class 访问

// class Grid {
//   static origin = { x: 0, y: 0 };
//   caculateDistanceFromOrigin(point: { x: number; y: number }) {
//     let XDist = point.x - Grid.origin.x;
//     let yDist = point.y - Grid.origin.y;
//     return Math.sqrt(XDist * XDist + yDist);
//   }
// }

// // 抽象类 跟oc swift 差不多
// abstract class Department {
//   constructor(public name: string) {}

//   printName(): void {
//     console.log("Department name");
//   }

//   abstract printMeeting(): void;
// }

// class AccountingDepartment extends Department {
//   constructor() {
//     super("Accounting and Auditing");
//   }
//   printMeeting(): void {
//     console.log("What happend");
//   }

//   generateReports(): void {
//     console.log("generateReports....");
//   }
// }

// let department: Department;
// // department = new Department();
// department = new AccountingDepartment();
// department.printName();
// department.printMeeting();

// // 高级技巧

// class GreeterGao {
//   greeting: string;
// }

// let greeter1: GreeterGao;

// greeter1 = new GreeterGao();

// let greeterMaker: typeof GreeterGao = GreeterGao;
// console.log(typeof GreeterGao);
// greeterMaker.standardGreeting = "Hey, there!";

// let greeter2: Greeter = new greeterMaker();

// console.log(greeter2.greet());

class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
console.log(typeof Greeter);
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

// 把类当做接口使用

class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}
let point3d: Point3d = { x: 1, y: 2, z: 3 };
