""" import random

def game():
    counter = 0
    history = []
    while True:
        player = input("Choose rock, paper, or scissors (history or exit): ")

        if player.lower() == "exit":
            print("goodbye")
            break
        elif player.lower() == "history":
            print(history)
            continue
        counter = counter + 1
        print("Game number", counter)
        options = ["rock", "paper", "scissors"]
        computer = random.choice(options)
        print(computer)

        def stat():
            print("Computer had: " + computer)
            print("You had: " + player.lower())
        if player.lower() == computer:
            print("Results: draw")
            result = "Game number", counter , "= draw"
            history.append(result)
            stat()
        elif player.lower() == "scissors" and computer == "rock" or player.lower() == "paper" and computer == "scissors" or player.lower() == "rock" and computer == "paper":
            print("Results: lost")
            result = "Game number", counter , "= lost"
            history.append(result)
            stat()
        elif player.lower() == "paper" and computer == "rock" or player.lower() == "rock" and computer == "scissors" or player.lower() == "scissors" and computer == "paper":
            print("Results: won")
            result = "Game number", counter , "= win"
            history.append(result)
            stat()
        else:
            print("try again")
            continue
game()
        
 """