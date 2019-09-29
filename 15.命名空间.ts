// 内部模块 -> 命名空间 外部模块-> 模块
interface StringValidator {
  isAcceptable(s: string): boolean;
}

let lettersRegexp = /^/;

namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}

let strings = ["hello", "98052", "101"];

declare namespace D3 {
  export interface Selectors {
    select: {
      (selector: string): Selection;
      (element: EventTarget): Selection;
    };
  }

  export interface Event {
    x: number;
    y: number;
  }
  export interface Base extends Selectors {
    event: Event;
  }
}

declare var d3: D3.Base;
