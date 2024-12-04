const stoneBtn = document.getElementById("stone-btn");
const parchmentBtn = document.getElementById("parchment-btn");
const shearsBtn = document.getElementById("shears-btn");
const main = document.getElementById("main");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");


let playerScore = 0;
let computerScore = 0;

const randomComputerResult = () => {
	const options = ["Stone", "Parchment", "Shears"];
	const randomIndex = Math.floor(Math.random() * options.length);
	return options[randomIndex];
};

const playerWonTheRound = (player, computer) => {
	if (
		(player === "Stone" && computer === "Shears") ||
		(player === "Shears" && computer === "Parchment") ||
		(player === "Parchment" && computer === "Stone")
	) {
		return true
	}
}

function resetGame() {

}

const roundResult = (playerOption) => {
	if (playerScore === 5 || computerScore === 5) {
		return
	}

	const computerResult = randomComputerResult();

	const existingResultMsg = document.querySelector('.result-msg');
	if (existingResultMsg) {
		existingResultMsg.remove();
	}

	const resultMsg = document.createElement('div');
	resultMsg.classList.add('result-msg')


	if (playerWonTheRound(playerOption, computerResult)) {
		playerScore++;
		resultMsg.textContent = `Player wins! ${playerOption} beats ${computerResult}`;
	} else if (playerOption === computerResult) {
		resultMsg.textContent = `It's a tie!  Both Player and Computer chose ${playerOption}`;
	} else {
		computerScore++;
		resultMsg.textContent = `Computer wins! ${computerResult} beats ${playerOption}`
	}

	main.appendChild(resultMsg);
	playerScoreSpan.textContent = playerScore;
	computerScoreSpan.textContent = computerScore;




	if (playerScore === 5 || computerScore === 5) {
		const winnerMsg = document.createElement('div');
		winnerMsg.classList.add('winner-msg')
		main.appendChild(winnerMsg);
		winnerMsg.innerText = `${playerScore === 5 ? "Player" : "Computer"} has won the game!`;
		const resetGameBtn = document.createElement('button');
		main.appendChild(resetGameBtn);
		resetGameBtn.textContent = "Start a new game"
		resetGameBtn.classList.add('btn')

		resetGameBtn.addEventListener('click', function () {
			playerScore = 0;
			computerScore = 0;
			winnerMsg.remove();
			resetGameBtn.remove();
			resultMsg.remove();
			playerScoreSpan.textContent = playerScore;
			computerScoreSpan.textContent = computerScore;
		})

	}
}

stoneBtn.addEventListener('click', function () {
	roundResult("Stone")
})

parchmentBtn.addEventListener('click', function () {
	roundResult("Parchment")
})

shearsBtn.addEventListener('click', function () {
	roundResult("Shears")
})








