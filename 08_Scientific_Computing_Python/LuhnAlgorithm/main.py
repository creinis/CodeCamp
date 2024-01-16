# Step 1

#In this project, you will implement the Luhn Algorithm. 
# This algorithm is a formula to validate a variety of identification numbers.

# Start by declaring a function called main. Use the pass keyword to avoid an error.

def main():
    pass

# Step 2

# Replace the pass statement with a variable named card_number and a value of 4111-1111-4555-1142.

def main():
    card_number = "4111-1111-4555-1142"

# Step 3

# Python comes with built-in classes that can help us with string manipulation. 
# One of them is the str class. It has a method called maketrans that can help us create a translation table. 
# This table can be used to replace characters in a string:

str.maketrans({'t': 'c', 'l': 'b'})

# The above, when called on a string, will replace all t characters with c and all l characters with b.

# Create a variable called card_translation and assign it a translation table to replace all - and characters with an empty string.

def main():
    card_number = '4111-1111-4555-1142'
    card_translation = str.maketrans({'-':'', ' ':''})

# Step 4

# Defining the translation does not in itself translate the string. 
# The translate method must be called on the string to be translated with the translation table as an argument:

my_string = "tamperlot"
translation_table = str.maketrans({'t': 'c', 'l': 'b'})
translated_string = my_string.translate(translation_table)

# Create a variable called translated_card_number and assign it the result of 
# calling the translate method on card_number with card_translation as an argument.

def main():
    card_number = '4111-1111-4555-1142'
    card_translation = str.maketrans({'-': '', ' ': ''})
    translated_card_number = card_number.translate(card_translation)
    print(translated_card_number)

main()

# Step 7

# Define a function verify_card_number with a parameter card_number, and use the pass keyword to make the function do nothing.

def verify_card_number(card_number):
    pass

# Step 8

# Within your main function, call the verify_card_number function and pass in the translated_card_number variable as an argument.

def main():
    card_number = '4111-1111-4555-1142'
    card_translation = str.maketrans({'-': '', ' ': ''})
    translated_card_number = card_number.translate(card_translation)
    verify_card_number(translated_card_number)
    print(translated_card_number)

# Step 9

# The Luhn algorithm is as follows:

#     From the right to left, double the value of every second digit; if the product is greater than 9, sum the digits of the products.
#     Take the sum of all the digits.
#     If the sum of all the digits is a multiple of 10, then the number is valid; else it is not valid.

# Assume an example of an account number "7992739871" that will have a check digit added, making it of the form 7992739871x:

    # Account number      7   9  9  2  7  3  9   8  7  1  x
    # Double every other  7  18  9  4  7  6  9  16  7  2  x
    # Sum 2-char digits   7   9  9  4  7  6  9   7  7  2  x

# Replace the pass statement with a variable sum_of_odd_digits and a value of 0.

def verify_card_number(card_number):
    sum_of_odd_digits = 0

# Step 10

# You have accessed elements (characters) of a string before, using the index operator []. 
# You can also use the index operator to access a range of characters in a string with string[x:y:h]:

my_string = 'camperbot'
camper = my_string[0:6]
cp = my_string[0:6:3]

# Where x is the starting index, y is the ending index, and h is the step (the amount of characters to skip over).

# Create a variable named card_number_reversed and assign it the value of the first 4 characters of card_number.

def verify_card_number(card_number):
    sum_of_odd_digits = 0
    card_number_reversed = card_number[0:4][::-1]
    print(card_number_reversed)

# Step 12

# Change card_number_reversed to be every second digit of the first four digits of card_number.

def verify_card_number(card_number):
    sum_of_odd_digits = 0
    card_number_reversed = card_number[0:4:2]
    print(card_number_reversed)

# Step 13

# Reverse the order of the digits in the last four digits of card_number, 
# by using a slice with a step of -1. You can use either negative or positive indices 
# for the start and end indices.

def verify_card_number(card_number):
    sum_of_odd_digits = 0
    card_number_reversed = card_number[-1:-5:-1]
    print(card_number_reversed)

# Step 14

# Just as the step is optional, a start at 0 and an end at the end of the slice are optional:

my_string = 'camperbot'
camperbot = my_string[::]

# Assign the reverse of the full card_number string to the card_number_reversed variable.

def verify_card_number(card_number):
    sum_of_odd_digits = 0
    card_number_reversed = card_number[::-1]
    print(card_number_reversed)

# Step 17

# Within the verify_card_number function, create a variable odd_digits that contains every other digit of the card_number_reversed string.

def verify_card_number(card_number):
    sum_of_odd_digits = 0
    card_number_reversed = card_number[::-1]
    odd_digits = card_number_reversed[::2]

# Step 19

# Use a for loop to iterate over each digit in the odd_digits list. 
# Move your print call from the previous step into the for loop, and change it to print each digit.

def verify_card_number(card_number):
    sum_of_odd_digits = 0
    card_number_reversed = card_number[::-1]
    odd_digits = card_number_reversed[::2]
    for digit in odd_digits:
        print(digit)

# Step 20

# Within the for loop, use the += operator to add the digit to the sum_of_odd_digits variable.


def verify_card_number(card_number):
    sum_of_odd_digits = 0
    card_number_reversed = card_number[::-1]
    odd_digits = card_number_reversed[::2]

    for digit in odd_digits:
        sum_of_odd_digits += digit
        print(digit)

# 





