const possiblePlays = ['rock', 'paper', 'scissors']

const generateComputerHand = () => {
  return possiblePlays[Math.floor(Math.random() * 3)]
}

const calculateWinner = (playerHand, computerHand) => {
  switch (playerHand.toLowerCase()) {
    case 'rock':
      if (computerHand === 'scissors') {
        alert(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you win!`
        )
      } else if (computerHand === 'paper') {
        alert(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you lose.`
        )
      } else {
        alert(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, it's a draw.`
        )
      }
      break
    case 'paper':
      if (computerHand === 'rock') {
        alert(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you win!`
        )
      } else if (computerHand === 'scissors') {
        alert(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you lose.`
        )
      } else {
        alert(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, it's a draw.`
        )
      }
      break
    case 'scissors':
      if (computerHand === 'paper') {
        alert(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you win!`
        )
      } else if (computerHand === 'rock') {
        alert(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, you lose.`
        )
      } else {
        alert(
          `Computer picked ${
            computerHand.charAt(0).toUpperCase() + computerHand.slice(1)
          }, it's a draw.`
        )
      }
  }
}

const play = (playerHand) => {
  let computerHand = generateComputerHand()
  if (typeof playerHand !== 'string') {
    alert('Please enter "rock", "paper" or "scissors".')
  } else if (!possiblePlays.includes(playerHand.toLowerCase())) {
    alert('Please enter "rock", "paper" or "scissors".')
  } else {
    calculateWinner(playerHand, computerHand)
  }
}
