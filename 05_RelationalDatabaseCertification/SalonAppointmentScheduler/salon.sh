#!/bin/bash

PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"

echo -e "\n~~~~~~~~~~ MY SALON ~~~~~~~~~~\n"

echo -e "Welcome to MY SALON, how can I help you?\n"

# get available services
AVAILABLE_SERVICES=$($PSQL "SELECT service_id, name FROM services ORDER BY service_id;")

# first prompt
MAIN_MENU() {

  if [[ $1 ]]
  then
    echo -e "\n$1"
  fi

# available services Menu
  echo "$AVAILABLE_SERVICES" | while read SERVICE_ID BAR NAME
  do
    echo "$SERVICE_ID) $NAME"
  done

  read SERVICE_ID_SELECTED
  
  case $SERVICE_ID_SELECTED in
  [1-4]) PASS ;;
  *) MAIN_MENU "I could not find that service. What would you like today?" ;;
  esac
}
  #if [[ ! $SERVICE_ID_SELECTED =~ ^[0-9]+$ ]]
   # then
       
    #fi
    #if [[ -z $SERVICE_ID_SELECTED ]]
    #then
     # echo -e "\nI could not find that service. What would you like today?"
     # MAIN_MENU
   # fi
  PASS() {
# service selected
SERVICE_ID_SELECTED=$($PSQL "SELECT service_id FROM services WHERE service_id = '$SERVICE_ID_SELECTED'")

# get customer info
echo -e "What's your phone number?"
read CUSTOMER_PHONE
CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone = '$CUSTOMER_PHONE'")

# if not found
if [[ -z $CUSTOMER_NAME ]]
then
# get new customer name
echo -e "I don't have a record for that phone number, what's your name?"
read CUSTOMER_NAME

# insert new customer
INSERT_CUSTOMER_RESULT=$($PSQL "INSERT INTO customers(phone, name) VALUES('$CUSTOMER_PHONE', '$CUSTOMER_NAME')")
fi

# get customer_id
CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone = '$CUSTOMER_PHONE'")

# get service time
NAME_OF_SERVICE_ID_SELECTED=$($PSQL "SELECT name FROM services WHERE service_id = '$SERVICE_ID_SELECTED'")
SERVICE_NAME_FORMATTED=$(echo $NAME_OF_SERVICE_ID_SELECTED | sed -E 's/\s//g')
CUSTOMER_NAME_FORMATTED=$(echo $CUSTOMER_NAME | sed -E 's/\s//g')
echo -e "What time would you like your $SERVICE_NAME_FORMATTED, $CUSTOMER_NAME_FORMATTED?"
read SERVICE_TIME

# insert appointment
INSERT_APPOINTMENT=$($PSQL "INSERT INTO appointments(service_id, customer_id, time) VALUES('$SERVICE_ID_SELECTED', '$CUSTOMER_ID', '$SERVICE_TIME')")

# formating output print
SERVICE_TIME_FORMATTED=$(echo $SERVICE_TIME | sed -E 's/ //')

# display appointment info / send confirmation message
echo -e "\nI have put you down for a "$SERVICE_NAME_FORMATTED" at "$SERVICE_TIME", "$CUSTOMER_NAME_FORMATTED".\n"

}

MAIN_MENU