// const prompt = require('prompt-sync')({sigint:true})
let any =["rock","paper","scissors"]
const getRandom = ()=>{
    let num = Math.floor(Math.random()*(any.length))
    console.log(`the value is ${num}`)
    return any[num]
}

// const userSelection =prompt("what do you choose: ")

let count =0
let counter =0
const game=(user)=>{
    let val = true
    while (val) {
      user = prompt("what do you choose: ");
      if (any.includes(user)) {
        val = false;
      }
    }
   computer = getRandom()
    const value = user.toLowerCase();
    console.log(` this is your value: ${user}`);
    console.log(` this is your computer value: ${computer}`)
    // console.log("1")

     if(user===computer){
        console.log("2");
        return "Its a tie"

    }
    else if (value=="rock"&&computer=="scissors"){
        count++
    console.log("3");

    }
    else if (value=="paper" &&computer=="rock"){
    console.log("4");
    count++;
    }
    else if(value=="scissors"&& computer=="paper"){
    console.log("5");
    count++;
    }
    else{
    console.log("6");
    counter++;
    }
}
const newfunc =()=>{
    for(let i=0;i<5;i++){
        game()
    }
    if (count===counter){
        return "It's a tie"
    }
    else if(count>counter){
        return "Congrats you've won"
    }
    else{
        return "you lose"
    }

}
// console.log(newfunc())

// document.addEventListener("load", game());

