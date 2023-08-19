#!/bin/bash

PSQL="psql -X --username=freecodecamp --dbname=periodic_table --tuples-only -c"

MAIN() {
  if [[ -z $1 ]]
  then 
    echo "Please provide an element as an argument."
  else
    echo $1
  fi
}

PART03_DISPLAY_DATA() {

}

#if input is not a number
if [[ ! $SYMBOL =~ ^[0-9]+$ ]]
then
  # if input is greater than 2 letters
  LENGTH=$(echo -n "$SYMBOL" | wc -m)
  if [[ $LENGTH -gt 2 ]]
  then
    # get data by full name
      DATA=$($PSQL "SELECT * FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE name='$SYMBOL'")
      echo "$DATA" | while read BAR BAR ATOMIC_NUMBER BAR SYMBOL BAR NAME BAR ATOMIC_MASS BAR MELTING BAR BOILING BAR TYPE 
      do
      echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING celsius and a boiling point of $BOILING celsius."
      done
      echo $DATA
  else
      # get data by atomic symbol
      DATA=$($PSQL "SELECT * FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE symbol='$SYMBOL'")
      echo "$DATA" | while read BAR BAR ATOMIC_NUMBER BAR SYMBOL BAR NAME BAR ATOMIC_MASS BAR MELTING BAR BOILING BAR TYPE 
      do
        echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING celsius and a boiling point of $BOILING celsius."
        done
        echo $DATA
  fi

else
  # get data by atomic number
    DATA=$($PSQL "SELECT * FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE atomic_number=$SYMBOL")
      echo "$DATA" | while read BAR BAR ATOMIC_NUMBER BAR SYMBOL BAR NAME BAR ATOMIC_MASS BAR MELTING BAR BOILING BAR TYPE 
      do
      echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING celsius and a boiling point of $BOILING celsius."
      done
      echo $DATA

fi


PART02_FIX_DATABASE() {

#You should rename the weight column to atomic_mass
    RENAME_WEIGHT=$($PSQL "ALTER TABLE properties RENAME COLUMN weight TO atomic_mass;")
    echo "RENAME_WEIGHT : $RENAME_WEIGHT"
#You should rename the melting_point column to melting_point_celsius and the boiling_point column to boiling_point_celsius
    RENAME_MELTING_POINT=$($PSQL "ALTER TABLE properties RENAME COLUMN melting_point TO melting_point_celsius;")
    RENAME_BOILING_POINT=$($PSQL "ALTER TABLE properties RENAME COLUMN boiling_point TO boiling_point_celsius;")
    echo "RENAME_MELTING_POINT : $RENAME_MELTING_POINT"
    echo "RENAME_BOILING_POINT : $RENAME_BOILING_POINT"
#Your melting_point_celsius and boiling_point_celsius columns should not accept null values
    MELTING_NOT_NULL=$($PSQL "ALTER TABLE properties ALTER COLUMN melting_point_celsius SET NOT NULL;")
    BOILING_NOT_NULL=$($PSQL "ALTER TABLE properties ALTER COLUMN boiling_point_celsius SET NOT NULL;")
    echo "MELTING_NOT_NULL : $MELTING_NOT_NULL"
    echo "BOILING_NOT_NULL : $BOILING_NOT_NULL"
#You should add the UNIQUE constraint to the symbol and name columns from the elements table
    SYMBOL_UNIQUE=$($PSQL "ALTER TABLE elements ADD UNIQUE(symbol);")
    echo "SYMBOL_UNIQUE : $SYMBOL_UNIQUE"
#Your symbol and name columns should have the NOT NULL constraint
    SYMBOL_NOT_NULL=$($PSQL "ALTER TABLE elements ALTER COLUMN symbol SET NOT NULL;")
    NAME_NOT_NULL=$($PSQL "ALTER TABLE elements ALTER COLUMN name SET NOT NULL;")
    echo "SYMBOL_NOT_NULL : $SYMBOL_NOT_NULL"
    echo "NAME_NOT_NULL : $NAME_NOT_NULL"
#You should set the atomic_number column from the properties table as a foreign key that references the column of the same name in the elements table
    ATOMIC_NUMBER_SET_FK=$($PSQL "ALTER TABLE properties ADD FOREIGN KEY (atomic_number) REFERENCES elements(atomic_number);")
    echo "ATOMIC_NUMBER_SET_FK  : $ATOMIC_NUMBER_SET_FK"
#You should create a types table that will store the three types of elements
    CREATE_TABLE_TYPES=$($PSQL "CREATE TABLE types();")
    echo "CREATE_TABLE_TYPES  : $CREATE_TABLE_TYPES"
#Your types table should have a type_id column that is an integer and the primary key
    ADD_COLUMN_TYPE_ID=$($PSQL "ALTER TABLE types ADD COLUMN type_id SERIAL PRIMARY KEY;")
    echo "ADD_COLUMN_TYPE_ID  : $ADD_COLUMN_TYPE_ID"
#Your types table should have a type column that's a VARCHAR and cannot be null. It will store the different types from the type column in the properties table
    =$($PSQL " ;")
#You should add three rows to your types table whose values are the three different types from the properties table
=$($PSQL " ;")
#Your properties table should have a type_id foreign key column that references the type_id column from the types table. It should be an INT with the NOT NULL constraint
=$($PSQL " ;")
#Each row in your properties table should have a type_id value that links to the correct type from the types table
=$($PSQL " ;")
#You should capitalize the first letter of all the symbol values in the elements table. Be careful to only capitalize the letter and not change any others
=$($PSQL " ;")
#You should remove all the trailing zeros after the decimals from each row of the atomic_mass column. You may need to adjust a data type to DECIMAL for this. The final values they should be are in the atomic_mass.txt file
=$($PSQL " ;")
#You should add the element with atomic number 9 to your database. Its name is Fluorine, symbol is F, mass is 18.998, melting point is -220, boiling point is -188.1, and it's a nonmetal
=$($PSQL " ;")
#You should add the element with atomic number 10 to your database. Its name is Neon, symbol is Ne, mass is 20.18, melting point is -248.6, boiling point is -246.1, and it's a nonmetal
=$($PSQL " ;")
#You should delete the non existent element, whose atomic_number is 1000, from the two tables
=$($PSQL " ;")
#Your properties table should not have a type column
=$($PSQL " ;")
}


