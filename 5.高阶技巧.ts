class GreeterSkill {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello" + this.greeting;
  }
}

let greeterTest: GreeterSkill;
greeterTest = new GreeterSkill("world");
console.log(greeterTest.greet());
