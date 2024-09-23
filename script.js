function rollDice() {
  for (let i = 1; i <= 5; i++) {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      document.getElementById(`die${i}`).value = randomNum; 
  }
}