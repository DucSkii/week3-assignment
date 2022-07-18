const generateComputerHand = () => {
  let possiblePlays = ['rock', 'paper', 'scissors']

  return possiblePlays[Math.floor(Math.random() * 3)]
}

const play = (playerHand) => {
  let computerHand = generateComputerHand()
  let possiblePlays = ['rock', 'paper', 'scissors']
  if (typeof playerHand !== 'string') {
    alert('Please enter "rock", "paper" or "scissors".')
  } else if (!possiblePlays.includes(playerHand.toLowerCase())) {
    alert('Please enter "rock", "paper" or "scissors".')
  } else {
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
        break
    }
  }
}
