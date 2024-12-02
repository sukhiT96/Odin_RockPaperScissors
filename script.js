
let round = 0;
let win = 0;
let tie = 0;
let lose = 0;
let current_status;


let roundsContainer = document.querySelector("#round_result_container");

let userChoiceButton = document.querySelector("#player_buttons");

userChoiceButton.addEventListener("click", (e) => {
    if ((e.target.id !== "rock" && e.target.id !== "paper" && e.target.id !== "scissors") && round ==5) {
      alert("Game has ended. Please reset using reset button.");     
    } else if (e.target.id !== "rock" && e.target.id !== "paper" && e.target.id !== "scissors") {
      alert ("You need to choose by clicking on any of the three choices");
    } 
    else {
      let target = e.target;
      let player;
      let computer;
  
    switch(target.id) {
      case "rock":
        player = "R";
        break;
      case "paper":
        player = "P";
        break;
      case "scissors":
        player = "P";
        break;
    }

    function randomiser() {
      let random_choice = (Math.floor(Math.random()*(3))) + 1;
      if (random_choice === 1) {
        console.log (`Computer's Choice for round ${round+1}: Rock`);
        computer = "R";
        return computer;
      } else if (random_choice === 2) {
        console.log (`Computer's Choice for round ${round+1}: Paper`);
        computer = "P";
        return computer;
      } else {
        console.log (`Computer's Choice for round ${round+1}: Scissors`);
        computer = "S";
        return computer;
      };
    };

    randomiser();
    function game_logic () {
      let combo = player + computer;
      
      let round_result;
      if (combo === "RR" | combo === "PP"| combo === "SS") {
          round_result = "Tie";
          let roundOutcome = document.createElement("li");
          roundOutcome.textContent = `Round ${round+1}: ${round_result}`;
          roundsContainer.appendChild(roundOutcome);
        
          tie++;
          round++;
        } else if (combo === "RP" | combo === "PS"| combo === "SR") {
          round_result = "You Lost";
    
          let roundOutcome = document.createElement("li");
          roundOutcome.textContent = `Round ${round+1}: ${round_result}`;
          roundsContainer.appendChild(roundOutcome);
    
          lose++;
          round++;
        } else {
          round_result = "You Win";
          let roundOutcome = document.createElement("li");
          roundOutcome.textContent = `Round ${round+1}: ${round_result}`;
          roundsContainer.appendChild(roundOutcome);
          win++;
          round++;
        };    
        console.log(combo);
    };
    game_logic();
    resultAlert();
    };
  });

  function resultAlert (round) {
    if (win + lose + tie === 5) {
      if (win > lose && tie > 0) {
          console.log (`Congrats! You won ${win} rounds out of 5 and tied ${tie} rounds. You won the game!`);
          alert (`Congrats! You won ${win} rounds out of 5 and tied ${tie} rounds. You won the game. Press Reset to start new game.`);
      } else if (win > lose && tie === 0) {
          console.log (`Congrats! You won ${win} rounds out of 5 rounds. You won the game!`);
          alert (`Congrats! You won ${win} rounds out of 5. You won the game. Press Reset to start new game.`);
      }
        else if (lose > win && tie > 0) {
          console.log (`Oops! You lost ${lose} rounds out of 5 and tied ${tie} rounds. You lost the game!`);
          alert (`Oops! You lost ${lose} rounds out of 5 and tied ${tie} rounds. You lost the game! Press Reset to start new game.`);
      } else if (lose > win && tie === 0) {
        console.log (`Oops! You lost ${lose} rounds out of 5 rounds. You lost the game!`);
          alert (`Oops! You lost ${lose} rounds out of 5 rounds. You lost the game! Press Reset to start new game.`);
      } else {
          console.log (`It's a draw! You tied ${tie} rounds out of 5 rounds. Won ${win} rounds and lost ${lose} rounds. The game will reset now`);
          alert (`It's a draw! You tied ${tie}. Press Reset to start new game.`);
      };
    } else {console.log("i am working")};

  };
  

  let reset = document.querySelector("#reset");

  reset.addEventListener ("click", () => location.reload());


  
  


  // userChoiceButton.addEventListener("click", (e) =>
  //   {if (round === 5) {
  //     e.preventDefault();
  //   } else {
  //     alert("Game ended. Resetting now");
  //     round = 0;
  //     win = 0;
  //     tie = 0;
  //     lose = 0;
  //   }
  // });



// function player_input() {
  
//   let answer;
  
// };

// function randomiser() {
//   let random_choice = (Math.floor(Math.random()*(3))) + 1;
//   if (random_choice === 1) {
//     console.log (`Computer's Choice for round ${round+1}: Rock`);
//     return computer = "R"
//   } else if (random_choice === 2) {
//     console.log (`Computer's Choice for round ${round+1}: Paper`);
//     return computer = "P"
//   } else {
//     console.log (`Computer's Choice for round ${round+1}: Scissors`);
//     return "S";
//   };
// };

// function game_logic () {
//   let combo = player + computer;
  
//   let round_result;
//   if (combo === "RR" | combo === "PP"| combo === "SS") {
//       round_result = "Tie";
//       let roundOutcome = document.createElement("span");
//       roundOutcome.textConent = `Round ${round+1}: ${round_result}`;
//       roundsContainer.appendChild(roundOutcome);
    
//       tie++;
//       round++;
//     } else if (combo === "RP" | combo === "PS"| combo === "SR") {
//       round_result = "You Lost";

//       let roundOutcome = document.createElement("span");
//       roundOutcome.textConent = `Round ${round+1}: ${round_result}`;
//       roundsContainer.appendChild(roundOutcome);

//       lose++;
//       round++;
//     } else {
//       round_result = "You Win";
//       let roundOutcome = document.createElement("span");
//       roundOutcome.textConent = `Round ${round+1}: ${round_result}`;
//       roundsContainer.appendChild(roundOutcome);
//       win++;
//       round++;
//     };    
//     console.log(combo);
// };

// for (let i = 1; i < 6; i ++) {
//   game_logic();
// };