const arr = [];

function upresults(message) {
    document.getElementById("results").innerHTML = `<p>${message}</p>`;
}

function uphistory() {
    const history = document.getElementById("history");
    history.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        history.insertAdjacentHTML('beforeend', `<div>Trial ${i + 1}: ${arr[i]}</div>`);
    }
}


function play(playerChoice) {
    if (playerChoice === "exit") {
        upresults("Goodbye");
        arr.length = 0; 
        uphistory(); 
        return;
    }

    if (playerChoice === "historybtn") {
        uphistory();
        return;
    }

    const options = ["rock", "paper", "scissors"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    const result = compare(playerChoice, computerChoice);
    upresults(result);

    arr.push(`YOU: ${playerChoice} vs COMPUTER: ${computerChoice} - ${result}`);
}

function compare(player, computer) {
    if (player === computer) {
        return "It's a draw! 🏳";
    } else if (
        (player === "scissors" && computer === "rock") ||
        (player === "paper" && computer === "scissors") ||
        (player === "rock" && computer === "paper")
    ) {
        return "You lost! ✖";
    } else {
        return "You won! ✔";
    }
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        play(button.id);
    });
});