
  const resultDiv = document.getElementById("result");
  const userScoreEl = document.getElementById("userScore");
  const computerScoreEl = document.getElementById("computerScore");
  const userChoiceIcon = document.getElementById("userChoiceIcon");
  const computerChoiceIcon = document.getElementById("computerChoiceIcon");
  let userScore = 0;
  let computerScore = 0;

  const icons = {
    rock: '<i class="fa fa-hand-fist text-warning"></i>',
    paper: '<i class="fa fa-hand text-info"></i>',
    scissors: '<i class="fa fa-hand-scissors text-danger"></i>'
  };

  function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const outcome = getWinner(userChoice, computerChoice);

    // Show choices visually
    userChoiceIcon.innerHTML = icons[userChoice];
    computerChoiceIcon.innerHTML = icons[computerChoice];

    // Animate result
    resultDiv.style.opacity = 0;
    setTimeout(() => {
      if (outcome === "win") {
        userScore++;
        resultDiv.innerHTML = `<span style='color:#28a745'>You Win!</span> <i class='fa fa-trophy text-warning'></i>`;
      } else if (outcome === "lose") {
        computerScore++;
        resultDiv.innerHTML = `<span style='color:#dc3545'>You Lose!</span> <i class='fa fa-face-frown text-danger'></i>`;
      } else {
        resultDiv.innerHTML = `<span style='color:#ffc107'>It's a Draw!</span> <i class='fa fa-face-meh text-warning'></i>`;
      }
      resultDiv.style.opacity = 1;
    }, 180);

    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;
  }

  function getWinner(user, computer) {
    if (user === computer) return "draw";
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      return "win";
    }
    return "lose";
  }

  setTimeout(() => {
  console.log(
    "%c✨ Designed and Developed by Harsh Pandey",
    "color: #007bff; font-weight: bold; font-size: 16px;"
  );
  console.log(
    "%c🔗 https://lucifer01430.github.io/Portfolio/",
    "color: #28a745; font-size: 14px;"
  );
}, 2000);


  function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreEl.textContent = "0";
    computerScoreEl.textContent = "0";
    userChoiceIcon.innerHTML = "-";
    computerChoiceIcon.innerHTML = "-";
    resultDiv.innerHTML = "Make your move!";
  }

