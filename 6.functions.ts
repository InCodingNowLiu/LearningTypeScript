// 剩余参数
function buildName(firstName: String, ...resetOfName: string[]) {
  return firstName + "" + resetOfName.join(" ");
}

let deck = {
  suits: ["hearts"],
  cards: Array(52),
  createCardPicker: function() {
    return function() {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
    };
  }
};
