// const prompt = require('prompt-sync')({sigint:true})
const div = document.querySelectorAll(".div");
div.forEach((e) => {
  e.addEventListener("click", () => game(e.textContent));
});
const users = document.querySelector(".user");
const computers = document.querySelector(".computer");

let any = ["rock", "paper", "scissors"];
const getRandom = () => {
  let num = Math.floor(Math.random() * any.length);
  console.log(`the value is ${num}`);
  return any[num];
};

// const userSelection =prompt("what do you choose: ")

let count = 0;
let counter = 0;
let plays = 0;
const game = (user) => {
  let node = document.createElement("p");
  node = node.innerHTML = user;
  users.textContent = user;

  computer = getRandom();
  computers.textContent = computer;
  const value = user.toLowerCase();
  console.log(` this is your value: ${user}`);
  console.log(` this is your computer value: ${computer}`);

  if (user === computer) {
  } else if (value == "rock" && computer == "scissors") {
    count++;
  } else if (value == "paper" && computer == "rock") {
    count++;
  } else if (value == "scissors" && computer == "paper") {
    count++;
  } else {
    counter++;
  }
  newfunc();
};
const newfunc = () => {
  if (counter + count >= 5) {

    if (count === counter) {
      console.log("It's a tie");
    } else if (count > counter) {
      alert("Congrats you've won");
    } else {
      alert("you lose");
    }
    alert("Game Over");
    users.textContent=""
    computers.textContent=""
    count=0;
    counter=0;
  }
};
