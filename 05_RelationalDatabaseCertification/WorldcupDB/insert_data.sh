#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.

# clear tables
echo $($PSQL "TRUNCATE TABLE games, teams")

cat games.csv | while IFS="," read YEAR ROUND WINNER OPPONENT WINNER_GOALS OPPONENT_GOALS
do
# skit first line from games-csv
if [[ $YEAR != "year" ]]
then
  # get team_id winner case
  WINNER_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")
    # if not found
      if [[ -z $WINNER_ID ]]  
      then
      # insert team name
      INSERT_WINNER_RESULT=$($PSQL "INSERT INTO teams(name) VALUES('$WINNER')")
        #console log confirmation
        if [[ $INSERT_WINNER_RESULT == "INSERT 0 1" ]]
        then
          echo "Inserted into teams table, $WINNER"
        fi
      fi
  # get team_id opponent case
  OPPONENT_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT'")
    # if not found
    if [[ -z $OPPONENT_ID ]]
    then
      INSERT_OPPONENT_RESULT=$($PSQL "INSERT INTO teams(name) VALUES('$OPPONENT')")
        #console log confirmation
        if [[ $INSERT_OPPONENT_RESULT == "INSERT 0 1" ]]
        then
          echo "Inserted into teams table, $OPPONENT"
        fi
    fi
# get winner_id and opponent_id to input in games table
WINNER_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")
OPPONENT_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT'")
INSERT_DATA_RESULT=$($PSQL "INSERT INTO games(winner_id, opponent_id, round, year, winner_goals, opponent_goals) VALUES($WINNER_ID, $OPPONENT_ID, '$ROUND', $YEAR, $WINNER_GOALS, $OPPONENT_GOALS)")

fi

done



