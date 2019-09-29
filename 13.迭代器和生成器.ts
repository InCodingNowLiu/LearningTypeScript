//Symbol iterator 负责迭代

// for of 遍历可迭代的对象 调用对象Symbol.iterator 方法

let someArray = [1, "string", false];
for (let entry of someArray) {
  console.log(entry);
}

// for of 迭代值 for in 迭代键列表
let list = [4, 5, 6];
for (let i in list) {
  console.log(i);
}

for (let i of list) {
  console.log(i);
}

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
  console.log(pet);
}

for (let pet of pets) {
  console.log(pet);
}
