// 内部模块称作命名空间 外部模块简称为模块

// 模块可以声明他的依赖

// declare module "SomeModule" {
//   export function fn(): string;
// }

import * as m from "SomeModule";

export namespace Shapes {
  export class Triangle {}
  export class Square {}
}

export class Triangle {}

export class Square {}

import * as shapes from "./shapes";
let t = new shapes.Triangle();
