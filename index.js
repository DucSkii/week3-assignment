const possiblePlays = ['rock', 'paper', 'scissors']

const generateComputerHand = () => {
  return possiblePlays[Math.floor(Math.random() * 3)]
}

let playerScore = 0
let computerScore = 0

const calculateWinner = (playerHand, computerHand) => {
  switch (playerHand.toLowerCase().trim()) {
    case 'rock':
      if (computerHand === 'scissors') {
        playerScore++
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you win!`
        )
      } else if (computerHand === 'paper') {
        computerScore++
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you lose.`
        )
      } else {
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, it's a draw.`
        )
      }
      break
    case 'paper':
      if (computerHand === 'rock') {
        playerScore++
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you win!`
        )
      } else if (computerHand === 'scissors') {
        computerScore++
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you lose.`
        )
      } else {
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, it's a draw.`
        )
      }
      break
    case 'scissors':
      if (computerHand === 'paper') {
        playerScore++
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you win!`
        )
      } else if (computerHand === 'rock') {
        computerScore++
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you lose.`
        )
      } else {
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, it's a draw.`
        )
      }
  }
}

const play = (playerHand) => {
  let computerHand = generateComputerHand()
  calculateWinner(playerHand, computerHand)
}

const gameStart = () => {
  for (let i = 0; i < 5; i++) {
    let playerHand = prompt('Please enter "Rock", "Paper" or "Scissors."')
    if (typeof playerHand !== 'string') {
      console.log('Please enter "rock", "paper" or "scissors".')
      i--
    } else if (!possiblePlays.includes(playerHand.toLowerCase().trim())) {
      console.log('Please enter "rock", "paper" or "scissors".')
      i--
    } else {
      play(playerHand)
    }
  }
  console.log(`User Score: ${playerScore} | Computer Score: ${computerScore}`)
  if (playerScore < computerScore) {
    console.log('You Lose.')
  } else if (playerScore > computerScore) {
    console.log('You Win!')
  } else {
    console.log("It's a draw.")
  }
}

gameStart()
