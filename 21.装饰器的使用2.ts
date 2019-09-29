import "reflect-metadata";

const requireMetadataKey = Symbol("required");

function required(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  let existingRequiredParameters: number[] =
    Reflect.getOwnMetadata(requireMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(
    requireMetadataKey,
    existingRequiredParameters,
    target,
    propertyKey
  );
}

// function validate(
//   target: any,
//   propertyName: string,
//   descriptor: TypedPropertyDescriptor<Function>
// ) {
//   let method = descriptor.value;
//   descriptor.value = function() {
//     let requiredParameters: number[] = Reflect.getOwnMetadata(
//       requireMetadataKey,
//       target,
//       propertyName
//     );
//     if (requiredParameters) {
//       for (let parameterIndex of requiredParameters) {
//         if (
//           parameterIndex >= arguments.length ||
//           arguments[parameterIndex] === undefined
//         ) {
//           throw new Error("Missing required argument.");
//         }
//       }
//     }
//     return method.apply(this, arguments);
//   };
// }

class Point {
  x: number;
  y: number;
}

class Line {
  private _p0: Point;
  private _p1: Point;

  @validate
  @Reflect.metadata('design:type', Point)
  set p0(value: Point) {
    this._p0 = value;
  }
  get p0() {
    return this._p0;
  }

  @validate
  @Reflect.metadata('design: type', Point)
  set p1(value: Point) {
    this._p1 = value;
  }
  get p1() {
    return this._p1;
  }
}

function validate<T>(target: any, propertyKey; strings, descriptor: TypedPropertyDescriptor<T>) {
    let set = descriptor.set;
    descriptor.set = function(value: T) {
        let type = Reflect.getMetadata('design:type', target, propertyKey)
        if (!(value instanceof type)) {
            throw new TypeError('Invalid type.')
        }
        set(value)
    }
}
