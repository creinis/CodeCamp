# Case Converter Program

# Step 1

# In this project, you are going to learn about list comprehensions in Python by building a program that 
# can take a camelCase or PascalCase formatted string and convert that to a snake_case formatted string.

# List comprehensions in Python are a concise way to construct a list without using loops or the 
# .append() method. Apart from being briefer, list comprehensions often run faster.

# Start defining a new function named convert_to_snake_case() that accepts a string named 
# pascal_or_camel_cased_string as input.

def convert_to_snake_case(pascal_or_camel_cased_string):
    pass

# Step 2

# Now create a new list named snake_cased_char_list inside the function. 
# You can use a set of empty square braces to create the new list.

# This list will hold the characters of the string after you have converted them to snake case.

def convert_to_snake_case(pascal_or_camel_cased_string):
    snake_cased_char_list = [] 

# Step 3

# Now that you have an empty list in place, you can start iterating through the input string 
# and start converting each character to snake case.

# Use a for loop to iterate through the pascal_or_camel_cased_string. 
# Make sure to name the target variable char which is short for character.

def convert_to_snake_case(pascal_or_camel_cased_string):
    snake_cased_char_list = []
    for char in pascal_or_camel_cased_string:
        pass

# Step 4

# Uppercase characters in camel case or pascal case indicate the start of new words.

# Inside the loop body, use an if statement in conjunction with the .isupper() 
# string method to check for uppercase characters and move pass inside the new if statement.

def convert_to_snake_case(pascal_or_camel_cased_string):
    snake_cased_char_list = []
    for char in pascal_or_camel_cased_string:
        if char.isupper():
            pass

# Step 5

# Inside the if statement body, you need to convert any uppercase character to lowercase and prepend 
# an underscore to this lowercase character.

# Use the .lower() string method to convert uppercase characters to lowercase characters. 
# You can then concatenate an underscore to the character using the plus sign.

    #  '_' + char.lower()

#Assign the modified character to a variable named converted_character inside the if statement body.

        if char.isupper():
            converted_character = '_' + char.lower()

# Step 7

# Add an else clause on the same level as the existing if statement, inside the for loop. 
# Add characters that are already in lowercase to the list of converted characters inside the body 
# of the else clause.

        if char.isupper():
            converted_character = '_' + char.lower()
            snake_cased_char_list.append(converted_character)
        else:
            snake_cased_char_list.append(char)

# Step 8

# By the end of the loop, snake_cased_char_list should contain all the converted characters in correct order. 
# Use the .join() string method to convert the list of characters into a string.

    # ''.join(snake_cased_char_list)

# This joins the characters from the list to the empty string on which you called the .join() method. 
# Save the result in a variable named snake_cased_string on the same level as the snake_cased_char_list variable.

    snake_cased_string = ''.join(snake_cased_char_list)

# Step 9

# Strings in camel case start with a capital character. 
# Since you've converted all such characters to lowercase and prepended an underscore to them, 
# chances are, the converted snake case string has a dangling underscode at the start.

# The easiest way to strip such unwanted character is by using the .strip() string method and passing 
# an underscore to the method as argument.

#   snake_cased_string.strip('_')

# Make sure to save the resulting string in a variable named clean_snake_cased_string on the same level 
# as the snake_cased_string variable.

    clean_snake_cased_string = snake_cased_string.strip('_')

# Step 10

# Now all that is left to complete this function is to return the clean_snake_cased_string from the function. 
# So, go ahead and return the string by adding a return statement on the same level as the 
# clean_snake_cased_string variable.

    return clean_snake_cased_string

# Step 12

# Inside the main() function, replace pass with a convert_to_snake_case() call. 
# Pass the string aLongAndComplexString as input to the function and print out the output using the print() function.

def main():
    print(convert_to_snake_case('aLongAndComplexString'))

# Step 13

# Before running the main() function, you need to make sure that the file is running as a script. 
# Add an if statement on the same level as the two existing functions and 
# check whether __name__ == '__main__' evaluates to True or not.

def main():
    print(convert_to_snake_case('aLongAndComplexString'))
if __name__ == '__main__':
    main()

# Step 15

# So far, in this project you have not seen any usage of list comprehensions whatsoever. 
# Like you learned in the first step, list comprehensions are a more concise way of constructing lists in Python.

# Begin the transition to comprehensions by commenting out all the lines of code inside the convert_to_snake_case() function. 
# Don't delete them as they'll be helpful when you implement the logic using a list comprehension.

# Remember to add the pass keyword to the function body to prevent the code from failing during the tests.




