# Password Generator Lecture

# Step 1

# A Python module is a file containing code designed to perform specific tasks. 
# The Python standard library contains many modules that you can import and use in your code. 
# You can achieve this by using the import statement followed by the name of the module.

#Start this project by importing the string module.

import string

# Step 2

# You can access the utilities defined inside the imported module through the dot notation. 
# The dot notation works by appending a dot followed by the utility name to the module name. 
# For example, here's how to access the ascii_lowercase constant:

import string


print(string.ascii_lowercase)
# Output: abcdefghijklmnopqrstuvwxyz

# In this project, you are going to use different constants from the string module.
# Declare a new variable called letters and assign string.ascii_letters to this variable.

letters = string.ascii_letters

# Step 3

#Declare two new variables named digits and symbols and assign them string.digits and string.punctuation, 
# respectively.

digits = string.digits
symbols = string.punctuation

# Step 4

# These three variables constitute the possible characters to choose from when generating the password.
# Just before them, add a comment saying Define the possible characters for the password.

# Step 5

# Now declare a variable named all_characters and assign it the result of concatenating your existing variables.

all_characters = letters + digits + symbols

# Step 6

#Your all_characters variable is a string formed by all lowercase and uppercase letters, 
# all the 10 digits and several special characters.

#Just before it, add a comment saying Combine all characters.

# Step 7

# Now print the all_characters variable to see what it looks like.

print(all_characters)
# Output: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

# Step 8

#It is a common convention to place import statements at the top of your code. 
# And additionally, in case of multiple import statements, sort them in alphabetical order to improve readability.

#At the top of your code, import the random module.

import random

# Step 9

# The random module contains a pseudo-random number generator. 
# Most of its functionalities depend on the random() function, 
# which returns a floating point number in the range between 0.0 (inclusive) and 1.0 (exclusive).

# Call the random() function and print the result.

print(random.random())

# Step 10

# The choice() function from the random module takes a sequence and returns a random item of the sequence.
# Modify your print() call to use the choice() function and pass all_characters as the argument.

print(random.choice(all_characters))

# Step 11

# Every time the code runs, you should see a random character from the all_characters string. 
# This is exactly what you want to achieve to create a random password.

# However, the algorithm on which random relies makes the generated pseudo-random numbers predictable. 
# Therefore, although the random module is suitable for the most common applications, 
# it cannot be used for cryptographic purposes, due to its deterministic nature.

# Instead of importing random, import the secrets module. 
# Then change the print() call to use secrets.choice(all_characters).

import secrets
import string


# Define the possible characters for the password
letters = string.ascii_letters
digits = string.digits
symbols = string.punctuation

# Combine all characters
all_characters = letters + digits + symbols

print(all_characters)
print(secrets.choice(all_characters))

# Step 12

# Although the effect might seem equal to random.choice(), 
# secrets ensure you the most secure source of randomness that your operating system can provide.
# Now, delete your two print() calls.

# Step 13

# Declare a generate_password function and write all your code except the import lines inside the function body.

# Step 14

# Your generate_password function needs a few parameters. 
# Start by adding a length parameter.

# Step 15

# At the bottom of your function, declare a password variable and assign an empty string to this variable.

# Step 16

# Below your new variable, add a comment saying Generate password.

# Step 17

# Next, write a for loop with i as the loop variable. 
# Use the range() function to iterate up to the value of the length.
# Inside the loop, use the addition assignment operator to add a random character from 
# all_characters to the current value of password. Use the choice() function from the secrets module for that.

password = ''
# Generate password
for i in range(length):
    password += secrets.choice(all_characters)

# Step 18

# A standalone single underscore is used to represent a value you don't care or that won't be used in your code. 
# Your iteration variable is not actually used.

# Modify your i variable into a single underscore.

password = ''
# Generate password
for _ in range(length):
    password += secrets.choice(all_characters)

# Step 19

# After the loop, add a return statement to your function so it returns the password variable.

# Step 20

# Finally, call the generate_password function with 8 as the argument and assign the function call to a new_password variable.

new_password = generate_password(8)

# Step 21

# Check the result by printing your new variable.

# Step 22

# It seems all fine, but it would be nice to have a way to check that the generated password complies 
# to specific features. For example, a minimum number of special characters, digits, 
# or uppercase/lowercase letters. You are going to take care of that very soon.

# For now, comment out the last two lines of your code.

# Step 23

# Next, you are going to give your function more parameters that will act as constraints for 
# the generated password.

# Modify your function declaration by adding nums, special_chars, uppercase, 
# and lowercase in this order after the existent length parameter.

def generate_password(length, nums, special_chars, uppercase, lowercase):

# Step 24

# Put your password variable declaration and the following for loop inside a while loop. 
# Use True as the condition for your new loop.

    while True:
        password = ''
        # Generate password
        for _ in range(length):
            password += secrets.choice(all_characters)

# Step 25

# After your for loop, create a constraints variable and assign an empty list to this variable.

# Step 26

# A tuple is another built-in data structure in Python. 
# Tuples are very much like lists, but they are defined with parentheses (), 
# instead of square brackets. Also, tuples are immutable, unlike lists.

my_tuple = ('larch', 1, True)

# Your constraints list is going to store tuples. 
# The first item of each tuple will be a constraint parameter.

# Add a tuple to your list. 
# Use nums as the first item and an empty string as the second item.

constraints = [(nums, '')]

# Step 27

# The re module allows you to use regular expressions in your code. 
# You will learn more about regular expressions very soon.

# For now, add an import statement at the top of your code to import the re module.

import re
import secrets
import string

# Step 28

# A regular expression, or regex, is a pattern used to match a specific combination of characters inside a string. 
# It is a valid alternative to if/else conditional statements when you need to match or find patterns 
# inside a string for validation purposes, character replacement, and others.

#The compile() function from the re module compiles the string passed as the argument into 
# a regular expression object that can be used by other re methods.

#Declare a new pattern variable and assign the value of re.compile('i') to this variable.

pattern = re.compile('i')

# Step 29

# The search() function from the re module analyzes the string passed as the argument looking for the 
# first place where the regex pattern matches the string.

# Declare a variable called quote and assign the string Not all those who wander are lost. to this variable. 
# Then, print the result of pattern.search(quote).

pattern = re.compile('i')
quote = 'Not all those who wander are lost.'
print(pattern.search(quote))

# Step 30

# The value None is returned since i is not found inside the parsed string.
# Now, modify your pattern into l and see the result.

# Step 31

# As you can see from the output, now your regex matches the first l inside the string.

# In your pattern, you can add a quantifier after a character to specify how many times that character 
# should be repeated. For example, the + quantifier means it should repeat one or more times.

# Add a + quantifier to your pattern.

pattern = re.compile('l+')

# Step 32

# You can obtain the same result without using the compile() function. 
# Modify your pattern variable into the literal string l+. 
# Then, change the print() call to print re.search(pattern, quote).

# To write a literal string that includes the characters "l+" in Python, 
# you can use single or double quotes to define the string

pattern = 'l+'
quote = 'Not all those who wander are lost.'
print(re.search(pattern, quote))

# Step 33

# To check that the generated password meets the required features, 
# you are going to use the findall() function from the re module. 
# It's similar to search but it returns a list with all the occurrences of the matched pattern.

# Replace the search() call with findall() and check the output.

print(re.findall(pattern, quote))

# Step 34

# A character class is indicated by square brackets and matches one character among those specified 
# between the brackets. For example, ma[dnt] matches either mad, man, or mat.

# Modify your pattern to match a w followed by either h or a.

# Step 35

# Now, turn the empty string in the constraint tuple into a regex pattern to match a single digit. 
# Use a character class specifying each digit from 0 to 9.

constraints = [
    (nums, '[0123456789]')
]  

# Step 36

# Character classes also allow you to indicate a range of characters to match. 
# You need to specify the starting and the ending characters separated by an hyphen, -. 
# Characters follow the Unicode order.

# Modify your pattern variable to match any letter t preceded by a lowercase letter in the quote variable. 
# Use the range of characters from a to z for that.

pattern = '[a-z]t'

# Step 37

# Now, modify the pattern in your constraint tuple to indicate the range of all digits using square brackets.

# Step 38

# The caret, ^, placed at the beginning of the character class, matches all the characters 
# except those specified in the class.

# Add a ^ as the first character inside your character class and see what happens.

# Step 39

# Add a new tuple to the constraints list. 
# Use lowercase as the first item and a regex pattern that matches a single lowercase letter as the second item.

constraints = [
(nums, '[0-9]'),(lowercase, '[a-z]')
]        

# Step 41

# Add one last tuple to your list. 
# Use the special_chars parameter as the first item and an empty string as the second item.

constraints = [
    (nums, '[0-9]'),
    (lowercase, '[a-z]'),
    (uppercase, '[A-Z]'),
    (special_chars, '')
]        

# Step 42

# The dot character is a wildcard that matches any character in a string — except for a newline character 
# by default. Modify pattern to match the entire string. Use a . followed by the + quantifier.

pattern = '.+'

# Step 43

# If you need to match a character that has a special meaning in the pattern, such as . or +, 
# you can escape it by prepending a backslash character, \. 
# For example, this matches a literal plus sign: \+.

# Modify pattern so that it matches a single literal dot.

# Step 44

# Python provides a particular type of string called raw string. 
# Raw strings are prefixed with a r. 
# The key distinction from regular strings lies in how they handle the backslash character: 
# in raw strings, backslashes are treated as literal characters rather than escape characters. 
# When writing regular expressions, using raw strings is a good practice, since they can usually 
# contain a lot of \ characters.

# Turn your pattern string into a raw string by prefixing it with a r.

pattern = r'\.'

# Step 45

# Now, turn the four patterns from the constraints list into raw strings.

constraints = [
    (nums, r'[0-9]'),
    (lowercase, r'[a-z]'),
    (uppercase, r'[A-Z]'),
    (special_chars, r'')
]        

# Step 47

# In a character class, you can combine multiple ranges by writing one range after another inside 
# the square brackets (without any additional characters). 
# For example: [a-d3-6] is the combination of [a-d] and [3-6].

# Now, create your fourth pattern to match any non-alphanumeric character. 
# Combine the a-z, A-Z, and 0-9 ranges into a single character class and add a ^ as the first character 
# to negate the pattern.

constraints = [
    (nums, r'\d'),
    (lowercase, r'[a-z]'),
    (uppercase, r'[A-Z]'),
    (special_chars, r'[^a-zA-Z0-9]')
]    

# Step 48

# In the same way the [0-9] class is equivalent to \d, the [^0-9] class is equivalent to \D. 
# Alphanumeric characters can be matched with \w and non-alphanumeric characters can be matched with \W.

# Replace the [^a-zA-Z0-9] character class with \W.

# Step 51

# Since the underscore character is a valid character for variable names, it is included in the \w character class (equivalent to [a-zA-Z0-9_]), 
# which can be conveniently used to match variable names.

# Therefore, the \W character class is equivalent to [^a-zA-Z0-9_] with the underscore character that is 
# not matched. For this reason you cannot use it to match all your special characters.
# Delete the last three lines in your code.

# Step 52

# Now, combine your raw string with an f-string and interpolate your symbols variable inside the character class. 
# Remember that you can interpolate a variable within an f-string using curly brackets { }.

[(special_chars, fr'[{symbols}]')]

# Step 53

# Below the constraints list, add a comment saying Check constraints.

# Step 54

# After your new comment, write a for loop to iterate over the constraints list. 
# Use constraint and pattern as the iterating variables.

# Check constraints
for constraint, pattern in constraints:
    pass    

# Step 55

# Inside the for loop, call the findall() function passing pattern and password as the arguments.

# Check constraints
for constraint, pattern in constraints:
    re.findall(pattern, password)

# Step 56

# You are interested in the number of elements in the list returned by the findall() function.

# Pass your existent findall() call to the len() function.

# Check constraints
for constraint, pattern in constraints:
    len(re.findall(pattern, password))  

# Step 57

# Inside your for loop, compare constraint and the length of the list returned by findall(). 
# Use the <= operator for that.

# Check constraints
for constraint, pattern in constraints:
    constraint <= len(re.findall(pattern, password))

# Step 58

# Right before your for loop, declare a count variable and assign the value zero to this variable.

# Step 59

#Turn the expression inside your for loop into an if statement. 
# Use the expression you wrote in the previous step as the if condition. Inside the new conditional statement, 
# increment the count value by 1.

# Check constraints
count = 0
for constraint, pattern in constraints:
    if constraint <= len(re.findall(pattern, password)):
        count += 1

# Step 60

# Finally, after the for loop, create an if statement to check if count is equal to 4 and break out 
# of the while loop by using the break statement.

        # Check constraints
        count = 0
        for constraint, pattern in constraints:
            if constraint <= len(re.findall(pattern, password)):
                count += 1
        if count == 4:
            break

# 


















