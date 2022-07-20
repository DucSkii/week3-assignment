const possiblePlays = ['rock', 'paper', 'scissors']

const generateComputerHand = () => {
  return possiblePlays[Math.floor(Math.random() * 3)]
}

let userScore = 0
let computerScore = 0

const calculateWinner = (playerHand, computerHand) => {
  switch (playerHand.toLowerCase()) {
    case 'rock':
      if (computerHand === 'scissors') {
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you win!`
        )
        userScore++
      } else if (computerHand === 'paper') {
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you lose.`
        )
        computerScore++
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
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you win!`
        )
        userScore++
      } else if (computerHand === 'scissors') {
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you lose.`
        )
        computerScore++
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
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you win!`
        )
        userScore++
      } else if (computerHand === 'rock') {
        console.log(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you lose.`
        )
        computerScore++
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

const playRound = (playerHand) => {
  if (typeof playerHand !== 'string') {
    alert('Please enter "rock", "paper" or "scissors".')
    document.location.reload()
  } else if (!possiblePlays.includes(playerHand.toLowerCase())) {
    alert('Please enter "rock", "paper" or "scissors".')
    document.location.reload()
  } else {
    for (let i = 0; i < 5; i++) {
      play(playerHand)
    }
    console.log(`User: ${userScore} | Computer: ${computerScore}`)
  }
}

const gameStart = () => {
  let playerHand = prompt('Please enter "Rock", "Paper" or "Scissors."')
  return playRound(playerHand)
}
gameStart()
