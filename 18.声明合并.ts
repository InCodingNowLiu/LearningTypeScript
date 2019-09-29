// 合并接口

interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 };

// 后面的接口具有更高的优先级

interface Cloner {
  clone(animal: Animal): Animal;
}

interface Cloner {
  clone(animal: Sheep): Sheep;
}

interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
}

namespace Animal {
  let haveMuscles = true;

  export function animalsHaveMuscles() {
    return haveMuscles;
  }
}

namespace Animal {
  export function doAnimalsHaveMuscles() {
    return haveMuscles;
  }
}

class Album {
  label: Album.AlbumLabel;
}

namespace Album {
  export class AlbumLabel {}
}

function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}

// 声明联合保证类型安全
namespace buildLabel {
  export let suffix = "";
  export let prefix = "Hello, ";
}

console.log(buildLabel("Sam Smith"));

// 命名空间可以用来扩展枚举类型

enum Color {
  red = 1,
  green = 2,
  blue = 4
}

namespace Color {
  export function mixColor(colorName: string) {
    if (colorName == "yello") {
      return Color.red + Color.green;
    } else if (colorName === "white") {
      return Color.red + Color.green + Color.blue;
    } else if (colorName === "magenta") {
      return Color.red + Color.blue;
    } else if (colorName === "cyan") {
      return Color.green + Color.blue;
    }
  }
}

// 模块扩展

export class Observable<T> {}
