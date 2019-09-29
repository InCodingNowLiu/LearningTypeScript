enum FileAccess {
  None,
  // 微云赛, 编程的搞的高级用法
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write
  //computed member
}

enum E {
  Foo,
  Bar
}

// function f(x: E) {
//   if (x !== E.Foo || x !== E.Bar) {
//   }
// }

// 反向映射
enum EA {
  A
}

let a22 = EA.A;

// 运行是的枚举

enum ET {
  X,
  Y,
  Z
}

function f1(obj: { X: number }) {
  return obj.X;
}

f1(ET);

// 使用const 枚举
const enum Directions {
  Up,
  Down,
  Left,
  right
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.right
];

console.log(directions);

// 外部枚举, 当前代码里面没有类似的使用场景

declare enum Enum {
  A = 1,
  B,
  C = 2
}
