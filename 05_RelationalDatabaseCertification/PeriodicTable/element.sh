#!/bin/bash

PSQL="psql -X --username=freecodecamp --dbname=periodic_table --tuples-only -c"

MAIN() {
  if [[ -z $1 ]]
  then 
    echo "Please provide an element as an argument."
  else
    PART03_DISPLAY_DATA $1
  fi
}

PART03_DISPLAY_DATA() {
INPUT_DATA=$1
#if input is not a number
if [[ ! $INPUT_DATA =~ ^[0-9]+$ ]]
then
    ATOMIC_NUMBER=$(echo $($PSQL "SELECT  atomic_number FROM elements WHERE symbol='$INPUT_DATA' OR name='$INPUT_DATA'; ") | sed 's/ //g')
else
    ATOMIC_NUMBER=$(echo $($PSQL "SELECT  atomic_number FROM elements WHERE atomic_number='$INPUT_DATA'; ") | sed 's/ //g')
fi  

if [[ -z $ATOMIC_NUMBER ]]
then
  echo "I could not find that element in the database."
else
TYPE_ID=$(echo $($PSQL "SELECT type_id FROM properties WHERE atomic_number=$ATOMIC_NUMBER;") | sed 's/ //g') 
NAME=$(echo $($PSQL "SELECT name FROM elements WHERE atomic_number=$ATOMIC_NUMBER;") | sed 's/ //g') 
SYMBOL=$(echo $($PSQL "SELECT symbol FROM elements WHERE atomic_number=$ATOMIC_NUMBER;") | sed 's/ //g') 
ATOMIC_MASS=$(echo $($PSQL "SELECT atomic_mass FROM properties WHERE atomic_number=$ATOMIC_NUMBER;") | sed 's/ //g') 
MELTING=$(echo $($PSQL "SELECT melting_point_celsius FROM properties WHERE atomic_number=$ATOMIC_NUMBER;") | sed 's/ //g') 
BOILING=$(echo $($PSQL "SELECT boiling_point_celsius FROM properties WHERE atomic_number=$ATOMIC_NUMBER;") | sed 's/ //g') 
TYPE=$(echo $($PSQL "SELECT type FROM elements FELT JOIN properties USING(atomic_number) LEFT JOIN types USING(type_id) WHERE atomic_number=$ATOMIC_NUMBER;") | sed 's/ //g') 

echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING celsius and a boiling point of $BOILING celsius."

fi
}


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
    NAME_UNIQUE=$($PSQL "ALTER TABLE elements ADD UNIQUE(name);")
    echo "SYMBOL_UNIQUE : $SYMBOL_UNIQUE"
    echo "NAME_UNIQUE : $NAME_UNIQUE"
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
    ADD_COLUMN_TYPE=$($PSQL "ALTER TABLE types ADD COLUMN type VARCHAR(15) NOT NULL;")
    echo "ADD_COLUMN_TYPE  : $ADD_COLUMN_TYPE"
#You should add three rows to your types table whose values are the three different types from the properties table
    INSERT_INTO_TYPES_ROWS=$($PSQL "INSERT INTO types(type) SELECT DISTINCT(type) FROM properties;")
    echo "INSERT_INTO_TYPES_ROWS  : $INSERT_INTO_TYPES_ROWS"
#Your properties table should have a type_id foreign key column that references the type_id column from the types table. It should be an INT with the NOT NULL constraint
    ADD_TYPE_ID_IN_PROP_TABLE=$($PSQL "ALTER TABLE properties ADD COLUMN type_id INT;")
    TYPE_ID_SET_FK=$($PSQL "ALTER TABLE properties ADD FOREIGN KEY(type_id) REFERENCES types(type_id) ;")
    echo "ADD_TYPE_ID_IN_PROP_TABLE : $ADD_TYPE_ID_IN_PROP_TABLE"
    echo "TYPE_ID_SET_FK  : $TYPE_ID_SET_FK"
#Each row in your properties table should have a type_id value that links to the correct type from the types table
    UPDATE_TYPE_ID_VALUES=$($PSQL "UPDATE properties SET type_id = (SELECT type_id FROM types WHERE properties.type = types.type);")
    TYPE_ID_NOT_NULL=$($PSQL "ALTER TABLE properties ALTER COLUMN type_id SET NOT NULL;")
    echo "UPDATE_TYPE_ID_VALUES : $UPDATE_TYPE_ID_VALUES"
    echo "TYPE_ID_NOT_NULL  : $TYPE_ID_NOT_NULL"
#You should capitalize the first letter of all the symbol values in the elements table. Be careful to only capitalize the letter and not change any others
    UPDATE_CAPITALIZE_SYMBOLS=$($PSQL "UPDATE elements SET symbol=INITCAP(symbol);")
    echo "UPDATE_CAPITALIZE_SYMBOLS : $UPDATE_CAPITALIZE_SYMBOLS"
#You should remove all the trailing zeros after the decimals from each row of the atomic_mass column. You may need to adjust a data type to DECIMAL for this. The final values they should be are in the atomic_mass.txt file
    ALTER_ATOMIC_MASS=$($PSQL "ALTER TABLE properties ALTER COLUMN atomic_mass TYPE VARCHAR(9);")
    UPDATE_FLOAT_ATOMIC_MASS=$($PSQL "UPDATE properties SET atomic_mass=CAST(atomic_mass AS FLOAT) ;")
    echo "ALTER_ATOMIC_MASS : $ALTER_ATOMIC_MASS"
    echo "UPDATE_FLOAT_ATOMIC_MASS  : $UPDATE_FLOAT_ATOMIC_MASS"
#You should add the element with atomic number 9 to your database. Its name is Fluorine, symbol is F, mass is 18.998, melting point is -220, boiling point is -188.1, and it's a nonmetal
    INSERT_ELEMENT_F=$($PSQL "INSERT INTO elements(atomic_number, symbol, name) VALUES(9, 'F', 'Fluorine');")
    INSERT_PROPERTIES_F=$($PSQL "INSERT INTO properties(atomic_number, type, melting_point_celsius, boiling_point_celsius, type_id, atomic_mass) VALUES(9, 'nonmetal', -220, -188.1, 3, '18.998') ;")
    echo "INSERT_ELEMENT_F  : $INSERT_ELEMENT_F"
    echo "INSERT_PROPERTIES_F : $INSERT_PROPERTIES_F"
#You should add the element with atomic number 10 to your database. Its name is Neon, symbol is Ne, mass is 20.18, melting point is -248.6, boiling point is -246.1, and it's a nonmetal
    INSERT_ELEMENT_NE=$($PSQL "INSERT INTO elements(atomic_number, symbol, name) VALUES(10, 'Ne', 'Neon');")
    INSERT_PROPERTIES_NE=$($PSQL "INSERT INTO properties(atomic_number, type, melting_point_celsius, boiling_point_celsius, type_id, atomic_mass) VALUES(10, 'nonmetal', -248.6, -246.1, 3, '20.18') ;")
    echo "INSERT_ELEMENT_NE : $INSERT_ELEMENT_NE"
    echo "INSERT_PROPERTIES_NE : $INSERT_PROPERTIES_NE"
#You should delete the non existent element, whose atomic_number is 1000, from the two tables
    DELETE_1000_PROP_TABLE=$($PSQL "DELETE FROM properties WHERE atomic_number=1000;")
    DELETE_1000_ELEMENTS_TABLE=$($PSQL "DELETE FROM elements WHERE atomic_number=1000;")
    echo "DELETE_1000_PROP_TABLE  : $DELETE_1000_PROP_TABLE"
    echo "DELETE_1000_ELEMENTS_TABLE  : $DELETE_1000_ELEMENTS_TABLE"
#Your properties table should not have a type column
    DELETE_COLUMN_TYPE=$($PSQL "ALTER TABLE properties DROP COLUMN type;")
    echo "DELETE_COLUMN_TYPE  : $DELETE_COLUMN_TYPE"
}

START() {
CHECK=$($PSQL "SELECT * FROM elements WHERE atomic_number=1000;")
if [[ $CHECK -gt 0 ]]
then
  PART02_FIX_DATABASE
  clear
fi
MAIN $1
}

START $1
