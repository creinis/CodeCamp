#!/bin/bash

PSQL="psql -X --username=freecodecamp --dbname=number_guess --tuples-only -c"

MAIN_PROGRAM() {
# When you run your script, you should prompt the user for a username with Enter your username:, and take a username as input. Your database should allow usernames that are 22 characters
echo -e "\nEnter your username:"
read USERNAME

# If that username has been used before, it should print Welcome back, <username>! You have played <games_played> games, and your best game took <best_game> guesses., with <username> being a users name from the database, <games_played> being the total number of games that user has played, and <best_game> being the fewest number of guesses it took that user to win the game
USERNAME_CHECK=$($PSQL "SELECT  FROM  WHERE" )

if [[ -z $USERNAME_CHECK ]]
then
  NEW_USER=$($PSQL "INSERT INTO  VALUES()")
  echo "Welcome, $USERNAME! It looks like this is your first time here."
else

USERNAME
GAMES_PLAYED
BEST_GAME

echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."

# If the username has not been used before, you should print Welcome, <username>! It looks like this is your first time here.

echo "Welcome, $USERNAME! It looks like this is your first time here."


# The next line printed should be Guess the secret number between 1 and 1000: and input from the user should be read
# Until they guess the secret number, it should print It's lower than that, guess again: if the previous input was higher than the secret number, and It's higher than that, guess again: if the previous input was lower than the secret number. Asking for input each time until they input the secret number.

SECRET_NUMBER=$(( 1 + $RANDOM % 1000 ))
NUMBER_OF_GUESSES=1
echo "Guess the secret number between 1 and 1000:"

while read NUMBER
do
  if [[ ! $NUMBER =~ ^[0-9]+$ ]]
  then
    echo "That is not an integer, guess again:"
#If anything other than an integer is input as a guess, it should print That is not an integer, guess again:
  else
    if [[ $NUMBER -eq $SECRET_NUMBER ]]
    then
    break;
    else
      if [[ $NUMBER -gt $SECRET_NUMBER ]]
      then
        echo "It's lower than that, guess again:"
      elif [[ $NUMBER -lt $SECRET_NUMBER ]]
      then
        echo "It's higher than that, guess again:"
      fi
    fi
  fi
#When the secret number is guessed, your script should print You guessed it in <number_of_guesses> tries. The secret number was <secret_number>. Nice job! and finish running

if [[ $NUMBER_OF_GUESSES == 1 ]]
then
  echo "You guessed it in $NUMBER_OF_GUESSES tries. The secret number was $SECRET_NUMBER. Nice job!"
else
  echo "You guessed it in $NUMBER_OF_GUESSES tries. The secret number was $SECRET_NUMBER. Nice job!"
fi
}


SAVE_USER() {


}

SAVE_GAME() {


}

MAIN_PROGRAM