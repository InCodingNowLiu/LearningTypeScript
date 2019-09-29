// Symbols 详解
// symbol 成为了一种新的原声类型 like number / string

let sym1 = Symbol();
let sym2 = Symbol("key");

/**
 * Symbols 是不可改变唯一的
 *  */

let sym3 = Symbol("key");
console.log(sym2 === sym3);

let sym = Symbol();

let obj = {
  [sym]: "value"
};

// symbol 被作用做对象属性的键
console.log(obj[sym]); // "value"

const getClassNameSymbol = Symbol();

class C {
  [getClassNameSymbol]() {
    return "C";
  }
}

let c = new C();
let className = c[getClassNameSymbol];

//
