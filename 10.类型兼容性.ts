interface Named {
  name: string;
}

class Person {
  name: string;
}

let p: Named;

p = new Person();

let x: Named;
let y = { name: "Alice", location: "Seattle" };
x = y;

// 检查函数参数时使用相同的规则
function greet(n: Named) {
  console.log("Hello, " + n.name);
}

greet(y);

// 比较两个函数

let x1 = (a: number) => 0;
let y1 = (b: number, s: string) => 0;
y1 = x1;

let items = [1, 2, 3];
items.forEach((item, index, array) => {
  console.log(item);
});

// 函数参数

enum EventType {
  Mouse,
  Keyboard
}

interface Event {
  timestamp: number;
}

interface MouseEvent extends Event {
  x3: number;
  y3: number;
}

interface KeyEvent extends Event {
  keyCode: number;
}

function listenEvent(eventType: EventType, handler: (n: Event) => void) {}

listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

listenEvent(EventType.Mouse, (e: Event) =>
  console.log((<MouseEvent>e).x + "," + (<MouseEvent>e).y)
);

//可选参数及剩余参数
function invokeLater(args: any[], callback: (...args: any[]) => void) {}

invokeLater([1, 2], (x, y) => console.log(x + "," + y));
invokeLater([1, 2], (x?, y?) => console.log(x + "," + y));

//类的pick
class Animal {
  feet: number;
  constructor(name: string, numFeet: number) {}
}

class Size {
  feet: number;
  constructor(numFeet: number) {}
}

let a: Animal;
let s: Size;
a = s;
s = a;

/**
 * 泛型
 * */

interface Empty<T> {}

let x5: Empty<number>;
let y5: Empty<string>;
//ok , beacause y matches structure of x
x = y;

// 含有成员变量

interface NotEmpty<T> {
  data: T;
}
