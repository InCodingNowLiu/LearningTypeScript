function identity(arg: number): number {
  return arg;
}

function identity1(arg: any): any {
  return arg;
}

function identity2<T>(arge: T): T {
  return arge;
}

let output = identity2<string>("mystring");

output = identity2("mystring");

interface GenericIdentityFn {
  <T>(arg: T): T;
}

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
};

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// loggingIdentity(3);

loggingIdentity({ length: 1, value: 3 });

// 在泛型约束中使用类型参数
function getProperty(ob: T, key: K) {
  return ob[key];
}


