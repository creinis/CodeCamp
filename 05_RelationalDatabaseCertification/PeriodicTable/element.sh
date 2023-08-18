#!/bin/bash

echo "Please provide an element as an argument."
PSQL="psql --username=freecodecamp --dbname=<database_name> -t --no-align -c"
SYMBOL=$1


DISPLAY_DATA() {
  if [[ -z $2 ]]
  then 
    echo "I could not find that element in the database."
  else
    echo $2
    # display data 
  fi
}

#if input is not a number
if [[ ! $SYMBOL =~ ^[0-9]+$ ]]
then
  # if input is greater than 2 letters
  LENGTH=$(echo -n '$SYMBOL' | wc -m)
  if [[ $LENGTH -gt 2 ]]
  then
    # get data by full name
      DATA=$($PSQL "SELECT * FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE name='$SYMBOL'")
      echo "$DATA" | while  BAR ATOMIC_NUMBER BAR SYMBOL BAR NAME BAR ATOMIC_MASS BAR MELTING BAR BOILING BAR TYPE 
      do
      echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING celsius and a boiling point of $BOILING celsius."
      done
      echo $DATA
  else
      # get data by atomic symbol
      DATA=$($PSQL "SELECT * FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE symbol='$SYMBOL'")
      echo "$DATA" | while  BAR ATOMIC_NUMBER BAR SYMBOL BAR NAME BAR ATOMIC_MASS BAR MELTING BAR BOILING BAR TYPE 
      do
        echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING celsius and a boiling point of $BOILING celsius."
        done
        echo $DATA
  fi

else
  # get data by atomic number
    DATA=$($PSQL "SELECT * FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE atomic_number='$SYMBOL'")
      echo "$DATA" | while  BAR ATOMIC_NUMBER BAR SYMBOL BAR NAME BAR ATOMIC_MASS BAR MELTING BAR BOILING BAR TYPE 
      do
      echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING celsius and a boiling point of $BOILING celsius."
      done
      echo $DATA

fi
fi
echo "Please provide an element as an argument."
PSQL="psql --username=freecodecamp --dbname=periodic_table --tuples-only -c"
SYMBOL=$1


DISPLAY_DATA() {
  if [[ -z $2 ]]
  then 
    echo "I could not find that element in the database."
  else
    echo $2
    # display data 
  fi
}

#if input is not a number
if [[ ! $SYMBOL =~ ^[0-9]+$ ]]
then
  # if input is greater than 2 letters
  LENGTH=$(echo -n '$SYMBOL' | wc -m)
  if [[ $LENGTH -gt 2 ]]
  then
    # get data by full name
      DATA=$($PSQL "SELECT * FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE name='$SYMBOL'")
      echo "$DATA" | while  BAR ATOMIC_NUMBER BAR SYMBOL BAR NAME BAR ATOMIC_MASS BAR MELTING BAR BOILING BAR TYPE 
      do
      echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING celsius and a boiling point of $BOILING celsius."
      done
      echo $DATA
  else
      # get data by atomic symbol
      DATA=$($PSQL "SELECT * FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE symbol='$SYMBOL'")
      echo "$DATA" | while  BAR ATOMIC_NUMBER BAR SYMBOL BAR NAME BAR ATOMIC_MASS BAR MELTING BAR BOILING BAR TYPE 
      do
        echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING celsius and a boiling point of $BOILING celsius."
        done
        echo $DATA
  fi

else
  # get data by atomic number
    DATA=$($PSQL "SELECT * FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE atomic_number=$SYMBOL")
      echo "$DATA" | while  BAR ATOMIC_NUMBER BAR SYMBOL BAR NAME BAR ATOMIC_MASS BAR MELTING BAR BOILING BAR TYPE 
      do
      echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING celsius and a boiling point of $BOILING celsius."
      done
      echo $DATA

fi
