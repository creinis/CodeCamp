# Step 01
# Create a variable called number and assign it the value 5

number = 5

# Step 2
# Delete your number variable and its value. 
# Then, declare another variable called text and assign the string Hello World to this variable.

text = 'Hello World'

# Step 3
# Print your text variable to the screen by including the variable name between the opening and closing parentheses of the print() function.

print(text)

# Step 4
# Now, instead of printing text, print just the character at index 6

print(text[6])

# Step 5
# You can also access string characters starting from the end of the string. The last character has an index of -1, the second to last -2 and so on. 
# Now modify your existing print() call to print the last character in your string.

print(text[-1])

# Step 6
# Modify your existing print() call to print len(text).

print(len(text))

# Step 7
# Another useful built-in function is type(), which returns the data type of a variable. 
# Modify your print call to print the data type of text.

print(type(text))

# Step 8
# Now go to a new line and create another variable called shift and assign the value 3 to this variable.

text = 'Hello World'
print(type(text))
shift = 3

# Step 9
# And now print your new variable.

print(shift)
print (type(shift))

# Step 11

# Key aspects of variable naming in Python are:

#    Some words are reserved keywords (e.g. for, while, True). They have a special meaning in Python, so you cannot use them for variable names.
#    Variable names cannot start with a number, and they can only contain alpha-numeric characters or underscores.
#    Variable names are case sensitive, i.e. my_var is different to my_Var and MY_VAR.
#    Finally, it is a common convention to write variable names using snake_case, where each space is replaced by an underscore character and the words are written in lowercase letters.

# Remove both calls to print() and declare another variable called alphabet. Assign the string abcdefghijklmnopqrstuvwxyz to this variable.

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'

# Step 12 - Caesar cipher

# The first kind of cipher you are going to build is called a Caesar cipher. Specifically, you will take each letter in your message, find its position in the alphabet, take the letter located after 3 positions, and replace the original letter with the new letter.
# Start by finding the position of the first letter in the string. One way is to use the built-in find() function:
# a_string.find(char)
# Above, char is the character you want to locate, and a_string is the string you want to parse.
# At the end of your code, call find() on your alphabet string and pass text[0] to the function.

alphabet.find(text[0])

# Step 13

# Now assign the value returned by alphabet.find(text[0]) to a variable named index. Then, print its value.

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
index = alphabet.find(text[0])
print(index)



