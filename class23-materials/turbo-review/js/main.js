// // *Variables*
// // // Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
// let sent = "wtf you want?"
// if (sent.indexOf('?') > -1){
//     alert('stop asking questions')
// }

// // //Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
// // let multi = " jr. dev here are some words for you cul"
// let stuff = "I am a junior dev or a software engineer"
// alert(stuff.replaceAll('junior dev', "software enginner"))


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
      let choice = Math.random();
      if(choice < .66){
          return('paper')
      } else if(choice < .33){
          return('scissors')
      } else{
          return('rock')
      }
}

// rockPaperScissors()


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(pChoice){
    let botChoice = rockPaperScissors()
    if((pChoice === "rock" && botChoice === "scissors") || (pChoice === "scissors" && botChoice === "paper") || (pChoice === "paper" && botChoice === "rock")){
        alert("you won!")
    } else if(pChoice === botChoice){
        alert('ne gange pas putain')
    } else {
        alert("tu as perdu")
    }
}

checkWin("paper")
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
