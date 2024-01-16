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

# Step 14

# find() returns the index of the matching character inside the string. If the character is not found, it returns -1. As you can see, the first character in text, uppercase "H", is not found, since alphabet contains only lowercase letters.
# You can transform a string into its lowercase equivalent with the lower() function. Add another print() call to print text.lower() and see the output.

print(text.lower())

# Step 15

# Remove the last print() call. Then, instead of text[0], pass text[0].lower() to find() and see the output.

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
index = alphabet.find(text[0].lower())
print(index)

# Step 16

# As you can see from the output, "h" is at index 7 in the alphabet string. Now you need to find the letter at index 7 plus the value of shift. For that, you can use the addition operator, +, in the same way you would use it for a mathematical addition.
# Declare a variable named shifted and assign it the alphabet letter at index plus shift.

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
index = alphabet.find(text[0].lower())
print(index)
shifted = alphabet[index + shift]
print(shifted)

# Step 18 - Loop

# Repeating this process for each character in text can be tedious. Thankfully, you can simplify it using a loop. 
# A loop allows you to systematically go through a sequence of elements and execute actions on each one.
# In this case, you'll employ a for loop. Here's how you can iterate over text:

        #  for i in text:

# for is the keyword denoting the loop type. 
# i is a variable that sequentially takes the value of the elements in text. The statement ends with a colon, :.
# Remove everything after the alphabet line. Then write a for loop to iterate over text.

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
# for i in text:

# Step 19

# The code to execute at each iteration — placed after the : — constitutes the body of the loop. This code must be indented. In Python, it is recommended to use 4 spaces per indentation level. This indented level is a code block.

    # for i in text:
    #     <code>

# Give your for loop a body by adding a call to print(i). Remember to indent the loop body.

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'

for i in text:
    print(i)

# Step 22

# The iteration variable can have any valid name, but it's convenient to give it a meaningful name.
# Rename your i variable to char.

for char in text:
    print(char)

# Step 23

# Before printing the current character, declare a variable called index and assign the value returned by alphabet.find(char) to this variable.

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'

for char in text:
    index = alphabet.find(char)
    print(char)

# Step 24

# An argument is an object or an expression passed to a function — between the parentheses — when it is called. 
# The print function can take multiple arguments, separated by a comma.
# Add a second argument to print(char) so that it prints the character and its index inside the alphabet.

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'

for char in text:
    index = alphabet.find(char)
    print(char, index)

# Step 25

# find is again returning -1 for uppercase letters, and for the space character, too. 
# You are going to take care of the space later on.
# For now, instead of iterating over text, change the for loop to iterate over text.lower().


for char in text.lower():
    index = alphabet.find(char)
    print(char, index)

# Step 26

# At the end of your loop body, declare a variable called new_index and assign the value of index + shift to this variable.

for char in text.lower():
    index = alphabet.find(char)
    print(char, index)
    new_index = index + shift

# Step 30

# Now you need to create a new_char variable at the end of your loop body. Set its value to alphabet[new_index].

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'

for char in text.lower():
    index = alphabet.find(char)
    print(char, index)
    new_index = index + shift
    new_char = alphabet[new_index]
    print(new_char)

# Clean Output

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'

for char in text.lower():
    index = alphabet.find(char)
    new_index = index + shift
    new_char = alphabet[new_index]
    print('char:', char, 'new char:', new_char)

# Step 33

# At the moment, the encrypted character is updated in every iteration. 
# It would be better to store the encrypted string in a new variable. 
# Before your for loop, declare a variable called encrypted_text and assign an empty string to this variable ('').

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
encrypted_text = ''
for char in text.lower():
    index = alphabet.find(char)
    new_index = index + shift
    new_char = alphabet[new_index]
    print('char:', char, 'new char:', new_char)

# Step 34

# Now, replace new_char with encrypted_text. Also, modify the print() call to reflect this change.

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
encrypted_text = ''

for char in text.lower():
    index = alphabet.find(char)    
    new_index = index + shift
    encrypted_text = alphabet[new_index]
    print('char:', char, 'encrypted text:', encrypted_text)

# Step 35

# Instead of assigning alphabet[new_index] to encrypted_text, assign the current value of encrypted_text plus alphabet[new_index] to this variable.

for char in text.lower():
    index = alphabet.find(char)
    new_index = index + shift
    encrypted_text = encrypted_text + alphabet[new_index]
    print('char:', char, 'encrypted text:', encrypted_text)

# Step 37

# Comparison operators allow you to compare two objects based on their values. 
# You can use a comparison operator by placing it between the objects you want to compare. 
# They return a Boolean value — namely True or False — depending on the truthfulness of the expression.

    # Python has the following comparison operators:
    # Operator 	Meaning
    # == 	Equal
    # != 	Not equal
    # > 	Greater than
    # < 	Less than
    # ≥ 	Greater than or equal to
    # ≤ 	Less than or equal to

# At the top of your loop, print the result of comparing char with an empty space. 
# Use the equality operator == for that.

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
encrypted_text = ''

for char in text.lower():
    print(char == ' ')
    index = alphabet.find(char)
    new_index = index + shift
    encrypted_text += alphabet[new_index]
    print('char:', char, 'encrypted text:', encrypted_text)


# Step 38 - if

# Currently, spaces get encrypted as c. 
# To maintain the original spacing in the plain message, you'll require a conditional if statement. 
# This is composed of the if keyword, a condition, and a colon :.

# if <condition>:
#     <code>

# At the top of your for loop, replace print(char == ' ') with an if statement. 
# The condition of this if statement should evaluate to True if char is an empty space and False otherwise. 
# Inside the if body, print the string space!. Remember to indent this line.

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
encrypted_text = ''

for char in text.lower():
    if char == ' ':
        print('space!')
    index = alphabet.find(char)
    new_index = index + shift
    encrypted_text += alphabet[new_index]
    print('char:', char, 'encrypted text:', encrypted_text)

# Step 39

# Now, instead of printing space!, use the addition assignment operator to add the space to the current value of encrypted_text.

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
encrypted_text = ''

for char in text.lower():
    if char == ' ':
        encrypted_text += char
    index = alphabet.find(char)
    new_index = index + shift
    encrypted_text += alphabet[new_index]
    print('char:', char, 'encrypted text:', encrypted_text)

# Step 40

# A conditional statement can also have an else clause. 
# This clause can be added to the end of an if statement to execute alternative code if the condition is false:

    # if condition:
    #     <code>
    # else:
    #     <code>

# As you can see in your output, when the loop iterations reach the space, a space is added to the encrypted string. 
# Then the code outside the if block executes and a c is added to the encrypted string.
# To fix it, add an else clause after encrypted_text += char and indent all the subsequent lines of code.

text = 'Hello World'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
encrypted_text = ''

for char in text.lower():
    if char == ' ':
        encrypted_text += char
    else:
        index = alphabet.find(char)
        new_index = index + shift
        encrypted_text += alphabet[new_index]
        print('char:', char, 'encrypted text:', encrypted_text)

# Step 42

# When the loop reaches the letter Z, the sum index + shift exceeds the length of the string alphabet.
# In this case, the modulo operator, %, can be used to return the remainder of the division between two numbers. 
# For example: 5 % 2 is equal to 1, because 5 divided by 2 has a quotient of 2 and a remainder of 1.

# Surround index + shift with parentheses, and modulo the expression with 26, which is the alphabet length.

text = 'Hello Zaira'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
encrypted_text = ''

for char in text.lower():
    if char == ' ':
        encrypted_text += char
    else:
        index = alphabet.find(char)
        new_index = (index + shift)% 26
        encrypted_text += alphabet[new_index]
        print('char:', char, 'encrypted text:', encrypted_text)

# Step 43

# If you wish to incorporate additional characters into the alphabet string, 
# such as digits or special characters, 
# you'll find it's necessary to manually modify the right operand of the modulo operation.

# Replace 26 with len(alphabet) to avoid this issue.
 
text = 'Hello Zaira'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
encrypted_text = ''

for char in text.lower():
    if char == ' ':
        encrypted_text += char
    else:
        index = alphabet.find(char)
        new_index = (index + shift) % len(alphabet)
        encrypted_text += alphabet[new_index]
        print('char:', char, 'encrypted text:', encrypted_text)

# Std Outuput

text = 'Hello Zaira'
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
encrypted_text = ''

for char in text.lower():
    if char == ' ':
        encrypted_text += char
    else:
        index = alphabet.find(char)
        new_index = (index + shift) % len(alphabet)
        encrypted_text += alphabet[new_index]

print('plain text:', text)
print('encrypted text:', encrypted_text)

# Step 46 - Function def

# A function is essentially a reusable block of code. 
# You have already met some built-in functions, like print(), find() and len(). 
# But you can also define custom functions like this:

    # def function_name():
    #     <code>

# A function declaration starts with the def keyword followed by the function name — a valid variable name — and a pair of parentheses. 
# The declaration ends with a colon.
# Right after your shift variable, declare a function called caesar and indent the following lines, so they become the function body.

text = 'Hello Zaira'
shift = 3
def caesar():
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    encrypted_text = ''

    for char in text.lower():
        if char == ' ':
            encrypted_text += char
        else:
            index = alphabet.find(char)
            new_index = (index + shift) % len(alphabet)
            encrypted_text += alphabet[new_index]
    print('plain text:', text)
    print('encrypted text:', encrypted_text)

caesar()

# Step 48

# Now you should see the output again. 
# Although this approach works, it doesn't significantly enhance the code's reusability. 
# Repeatedly calling your function will result in the same outcome. 
# However, functions can be declared with parameters to introduce versatility and customization:

    # def function_name(param_1, param_2):
    #     <code>

# Parameters are variables that you can use inside your function. 
# A function can be declared with different number of parameters. 
# In the example above, param_1 and param_2 are parameters.

# Modify your function declaration so that it takes two parameters called message and offset.

text = 'Hello Zaira'
shift = 3

def caesar(message, offset):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    encrypted_text = ''

    for char in message.lower():
        if char == ' ':
            encrypted_text += char
        else:
            index = alphabet.find(char)
            new_index = (index + offset) % len(alphabet)
            encrypted_text += alphabet[new_index]
    print('plain text:', message)
    print('encrypted text:', encrypted_text)

caesar(text, shift)

# 


