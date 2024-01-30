function game() {
    let counter = 0;
    const history = [];

    while (true) {
        const player = prompt("Choose rock, paper, or scissors (history or exit): ");

        if (player.toLowerCase() === "exit") {
            console.log("Goodbye");
            break;
        } else if (player.toLowerCase() === "history") {
            console.log(history);
            continue;
        }

        counter++;
        console.log('Game number: ' + counter);
        const options = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * options.length);
        const computer = options[random];
        console.log(computer);

        function stat() {
            console.log("Computer had: " + computer);
            console.log("You had: " + player.toLowerCase());
        }

        if (player.toLowerCase() === computer) {
            console.log("Results: draw");
            const result = 'Game number ' + counter + '=  draw';
            history.push(result);
            stat();
        } else if (
            (player.toLowerCase() === "scissors" && computer === "rock") ||
            (player.toLowerCase() === "paper" && computer === "scissors") ||
            (player.toLowerCase() === "rock" && computer === "paper")
        ) {
            console.log("Results: lost");
            const result = 'Game number ' + counter + ' = lost';
            history.push(result);
            stat();
        } else if (
            (player.toLowerCase() === "paper" && computer === "rock") ||
            (player.toLowerCase() === "rock" && computer === "scissors") ||
            (player.toLowerCase() === "scissors" && computer === "paper")
        ) {
            console.log("Results: won");
            const result = 'Game number ' + counter + ' = win';
            history.push(result);
            stat();
        } else {
            console.log("Try again");
            continue;
        }
    }
}
game()