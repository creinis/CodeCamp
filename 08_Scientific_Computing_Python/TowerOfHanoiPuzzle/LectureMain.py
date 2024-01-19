# Tower of Hanoi Puzzle

# Step 1

# In this project, you will solve the mathematical puzzle known as the Tower of Hanoi. 
# The puzzle consists of three rods and a number of disks of different diameters.

# The goal of this puzzle is moving the disks from the first rod to the third rod, following specific 
# rules that restrict placing a larger disk on top of a smaller one.

# Start by creating an empty dictionary named rods to represent the rods.

rods = {}

# Step 2

# The rods dictionary will represent the three rods with their disks. 
# Give it the strings 'A', 'B', and 'C' as keys and set each of them to an empty list.

rods = {'A': [], 'B': [], 'C': []}

# Step 3

# The puzzle starts with the disks piled up on the first rod, in decreasing size. 
# You need to populate your first list with numbers representing the various disk sizes.

# Instead of adding the items manually to the first list, generate a sequence of numbers from 3 to 1 
# by using the range() function and assign it to rods['A'].

# The syntax is range(x, y, h), where x is the starting integer (inclusive), y is the last integer (not inclusive), 
# and h is the difference between a number and the next one in the sequence.

rods = {
    'A': range(3,0,-1),
    'B': [],
    'C': []
}

# Step 4

# Now check the data type of your 'A' key by passing it to the type() function and print the result on the terminal.

print(type(rods['A']))

# Step 5

# The range() function returns an immutable sequence of numbers. 
# As you can see, the data type of rods['A'] is range, but you want it to be a list.

# Pass your range() call to the list() function to do that.

rods = {
    'A': list(range(3, 0, -1)),
    'B': [],
    'C': []
}
print(type(rods['A']))

# Step 6

# Now that the type is list as required, you can remove the print() call.

# Step 7

#The goal of the Tower of Hanoi is moving all the disks to the last rod. 
# To do that, you must follow three simple rules:

#    You can move only top-most disks
#    You can move only one disk at a time
#    You cannot place larger disks on top of smaller ones

#Below your existing code, declare an empty function named move. 
# Later on, you will use that function to move the disks between the rods. For now, to avoid errors, 
# use the pass keyword inside the function body.

def move():
    pass

# Step 8

# At the top of your code, declare a variable named NUMBER_OF_DISKS to store the number of disks and give it 
# the value of 3. 
# Then, replace the first argument passed in to the range() function with your new variable.

NUMBER_OF_DISKS = 3
rods = {
    'A': list(range(NUMBER_OF_DISKS, 0, -1)),
    'B': [],
    'C': []
}

# Step 9

# The Tower of Hanoi puzzle can be solved in 2n - 1 moves, where n is the number of disks. 
# Declare a variable named number_of_moves and assign the total number of moves to this variable.

# The power operator in Python is **.

NUMBER_OF_DISKS = 3
number_of_moves = 2**NUMBER_OF_DISKS -1

# Step 10

# Print the variable you declared in the previous step and feel free to change the number of disks 
# to see how fast the required minimum number of moves increases.

print(number_of_moves)

# Step 11

# Now you can remove your print() call. 
# Then, inside the move() function, remove the pass keyword and print the content of your rods dictionary.

# Step 12

# Now call your function and see the output on the terminal.

NUMBER_OF_DISKS = 3
number_of_moves = 2**NUMBER_OF_DISKS - 1
rods = {
    'A': list(range(NUMBER_OF_DISKS, 0, -1)),
    'B': [],
    'C': []
}
def move():
    print(rods)
move()

# Step 13

# In the Tower of Hanoi puzzle, you can identify the three rods according to their purpose:

#    The first rod is the source, where all the disks are stacked on top of each other at the beginning of the game.
#    The second rod is an auxiliary rod, and it helps in moving the disks to the target rod.
#    The third rod is the target, where all the disks should be placed in order at the end of the game.

# Currently, the move() function does not take any parameters. Change the function declaration to take 4 parameters: n, source, auxiliary, and target. Then, pass NUMBER_OF_DISKS and the strings 'A', 'B', and 'C' as arguments to your function call. The order matters.

def move(n, source, auxiliary, target):
    print(rods)

move(NUMBER_OF_DISKS, 'A', 'B', 'C')

# Step 14

# Before your function call, write a comment saying initiate call from source A to target C with auxiliary B.

# Step 16

# At the end of this project, you will create a recursive solution to the Tower of Hanoi puzzle, 
# but now you are going to explore an iterative approach to this problem.

# Start by adding a for loop to your function that iterates through the number of moves and prints 
# the current iteration number.

def move(n, source, auxiliary, target):
    for move in range(number_of_moves):
        print(move)
    # display starting configuration
    print(rods)

# Step 17

# The allowed disk movements between the rods exhibit a repetitive pattern occurring every three moves. 
# For example, movements between rod A and rod C are allowed on the first, the fourth and the seventh move, 
# where the remainder of the division between the move number and 3 is equal to 1.

# Inside the previously created for loop, replace the existing print() call with an if statement that is 
# triggered when (i + 1) % 3 == 1. 
# Within this if statement, print f'Move {i + 1} allowed between {source} and {target}' using an f-string. 
# Please, note that i + 1 is the move number since i is zero during the first iteration.

def move(n, source, auxiliary, target):
    # display starting configuration
    print(rods)
    for i in range(number_of_moves):
        if (i + 1) % 3 == 1:
            print(f'Move {i + 1} allowed between {source} and {target}')

# Step 18

# Since you are going to use the expression (i + 1) % 3 multiple times, it is convenient to store it in a variable.

# Just above your if statement, declare a remainder variable and assign the value (i + 1) % 3 to this variable.

def move(n, source, auxiliary, target):
    # display starting configuration
    print(rods)
    for i in range(number_of_moves):
        remainder = (i + 1) % 3
        if (i + 1) % 3 == 1:
            print(f'Move {i + 1} allowed between {source} and {target}')

# Step 19

# Now, replace the expression in the if condition with the remainder variable.

def move(n, source, auxiliary, target):
    # display starting configuration
    print(rods)
    for i in range(number_of_moves):
        remainder = (i + 1) % 3
        if remainder == 1:
            print(f'Move {i + 1} allowed between {source} and {target}')

# Step 20

# When the remainder of the move number divided by 3 is equal to 2, the movement is allowed between 
# A and B (the source and the auxiliary rods).

# Add an elif statement for that. Then, print the appropriate string if the condition is met.

def move(n, source, auxiliary, target):
    # display starting configuration
    print(rods)
    for i in range(number_of_moves):
        remainder = (i + 1) % 3
        if remainder == 1:
            print(f'Move {i + 1} allowed between {source} and {target}')
        elif remainder == 2:
            print(f'Move {i + 1} allowed between {source} and {auxiliary}')

# Step 21

# Finally, when the move number divided by 3 has no remainder, the movement is allowed between B and C.

# Add an elif statement for that. Then, print the appropriate string if the condition is met.

def move(n, source, auxiliary, target):
    # display starting configuration
    print(rods)
    for i in range(number_of_moves):
        remainder = (i + 1) % 3
        if remainder == 1:
            print(f'Move {i + 1} allowed between {source} and {target}')
        elif remainder == 2:
            print(f'Move {i + 1} allowed between {source} and {auxiliary}')
        elif remainder == 0:
            print(f'Move {i + 1} allowed between {auxiliary} and {target}')

# Step 23

# When target is empty, the disk should be moved necessarily from source to target.

# After the declaration of forward, add an if statement to check if rods[target] is empty. If it is, 
# change forward to True.

        if remainder == 1:
            print(f'Move {i + 1} allowed between {source} and {target}')
            forward = False
            if rods[target] == []:
                forward = True
 
#  Step 24

# The other case in which you have to move the disk necessarily from source to target is when the source 
# list is not empty and the last disk in source is lower than the last disk in target.

# Add an elif statement to check this condition. Then, set the forward variable to True if the condition is met.

            if rods[target] == []:
                forward = True
            elif rods[source] and rods[source][-1] < rods[target][-1]:
                forward = True

# Step 25

# Next, below the nested elif statement, add another if statement that should be executed when forward is True. 
# Inside this conditional, print the following f-string: f'Moving disk {rods[source][-1]} from {source} to {target}'.

        if remainder == 1:
            print(f'Move {i + 1} allowed between {source} and {target}')
            forward = False
            if not rods[target]:
                forward = True
            elif rods[source] and rods[source][-1] < rods[target][-1]:
                forward = True
            if forward == True:
                print(f'Moving disk {rods[source][-1]} from {source} to {target}')

# Step 26

# After printing the move, you need to remove the last element from the source rod and append it to target rod. 
# Use the .pop() method and the .append() method for that.

        if remainder == 1:
            print(f'Move {i + 1} allowed between {source} and {target}')
            forward = False
            if not rods[target]:
                forward = True
            elif rods[source] and rods[source][-1] < rods[target][-1]:
                forward = True
            if forward:
                print(f'Moving disk {rods[source][-1]} from {source} to {target}')
                rods[target].append(rods[source].pop())

# Step 27

# When forward is False, the disk has to be moved in the opposite direction. 
# Write an else clause for that. Print the move and change the content of the lists accordingly.

            if forward:
                print(f'Moving disk {rods[source][-1]} from {source} to {target}')
                rods[target].append(rods[source].pop())
            else:
                print(f'Moving disk {rods[target][-1]} from {target} to {source}')
                rods[source].append(rods[target].pop())

# Step 28

# Outside the else block, add a comment saying display our progress and print the content of the lists to check that everything is working.

            if forward:
                print(f'Moving disk {rods[source][-1]} from {source} to {target}')
                rods[target].append(rods[source].pop())
            else:
                print(f'Moving disk {rods[target][-1]} from {target} to {source}')
                rods[source].append(rods[target].pop())
            # display our progress
            print(rods)
            
# Step 29

# As you can see, disk 1 is going back and forth every three moves. 
# This happens because you still need to take care of movements between the other rods. 
# Instead of repeating the same code you wrote during the previous few steps and changing the rods, 
# it would be better to move that code inside a function to call in each conditional statement. 
# Declare an empty function named make_allowed_move() and don't forget the pass keyword.

def make_allowed_move():
    pass

# Step 30

# Add two parameters called rod1 and rod2 to your new function.

def make_allowed_move(rod1, rod2):
    pass

# Step 31

# It's time to move some code from the move() function to the make_allowed_move() function. 
# Move the code nested inside the first if statement (except the first print() call) to your new function. 
# Pay close attention to the indentation. Don't forget to remove the pass keyword.

def make_allowed_move(rod1, rod2):
    forward = False
    if not rods[target]:
        forward = True
    elif rods[source] and rods[source][-1] < rods[target][-1]:
        forward = True              
    if forward:
        print(f'Moving disk {rods[source][-1]} from {source} to {target}')
        rods[target].append(rods[source].pop())
    else:
        print(f'Moving disk {rods[target][-1]} from {target} to {source}')
        rods[source].append(rods[target].pop())
    
    # display our progress
    print(rods)

def move(n, source, auxiliary, target):
    # display starting configuration
    print(rods)
    for i in range(number_of_moves):
        remainder = (i + 1) % 3
        if remainder == 1:
            print(f'Move {i + 1} allowed between {source} and {target}')

# Step 32

# make_allowed_move() takes in rod1 and rod2 as parameters. You need a little refactoring here. 
# Change every occurrence of source into rod1.

# Step 33

# Now change each occurrence of target into rod2.

def make_allowed_move(rod1, rod2):    
    forward = False
    if not rods[rod2]:
        forward = True
    elif rods[rod1] and rods[rod1][-1] < rods[rod2][-1]:
        forward = True              
    if forward:
        print(f'Moving disk {rods[rod1][-1]} from {rod1} to {rod2}')
        rods[rod2].append(rods[rod1].pop())
    else:
        print(f'Moving disk {rods[rod2][-1]} from {rod2} to {rod1}')
        rods[rod1].append(rods[rod2].pop())
    
    # display our progress
    print(rods)

# Step 34

# Now call make_allowed_move() and pass in source and target as the arguments.

if remainder == 1:
    print(f'Move {i + 1} allowed between {source} and {target}')
    make_allowed_move(source, target) 

# Step 35

# Call the make_allowed_move() function again inside the two elif clauses, and pass in the correct arguments.

if remainder == 1:
    print(f'Move {i + 1} allowed between {source} and {target}')
    make_allowed_move(source, target)
elif remainder == 2:
    print(f'Move {i + 1} allowed between {source} and {auxiliary}')
    make_allowed_move(source, auxiliary)
elif remainder == 0:
    print(f'Move {i + 1} allowed between {auxiliary} and {target}')
    make_allowed_move(auxiliary, target)

# Step 36

# It looks like it's working! But the output is not very readable. 
# Print a new line character after printing the rods to fix that.

    # display our progress
    print(rods, '\n')
def move(n, source, auxiliary, target):
    # display starting configuration
    print(rods, '\n')

# Step 37

# The iterative solution of Tower of Hanoi might seem complete, but change the number of disks to 4 
# and look at the output.

# Step 38

# The conditionals you wrote previously are only valid for odd numbers of disks.
# Add a nested if to execute when n is odd, and add one indent level to your print() and make_allowed_move() calls.

if remainder == 1:
    if n % 2 != 0:
        print(f'Move {i + 1} allowed between {source} and {target}')
        make_allowed_move(source, target)

# Step 39

# If the number of disks is even and the remainder equals 1, the move is allowed between the source rod 
# and the auxiliary rod. Add an else clause to print the allowed movement and call make_allowed_move() 
# with the correct arguments.

# If you look at the output, you can see that the execution stops at the third move because of an IndexError. 
# This happens because the code is still incomplete and needs an else clause that you will be writing soon. 
# To make it work, turn your make_allowed_move() call into a comment.

        if remainder == 1:
            if n % 2 != 0:
                print(f'Move {i + 1} allowed between {source} and {target}')
                make_allowed_move(source, target)
            else:
                print(f'Move {i + 1} allowed between {source} and {auxiliary}')
                # make_allowed_move(source, auxiliary)

# Step 40

# Now you need to do the same with your elif statement: put the print() and make_allowed_move() calls 
# inside an if statement to execute when n is odd.

# Also, turn the # make_allowed_move(source, auxiliary) comment into code.

        else:
            print(f'Move {i + 1} allowed between {source} and {auxiliary}')
            make_allowed_move(source, auxiliary)            

elif remainder == 2:
    if n % 2 != 0:
        print(f'Move {i + 1} allowed between {source} and {auxiliary}')
        make_allowed_move(source, auxiliary)

# Step 41

# Finally, add an else clause that prints the allowed move and call make_allowed_move. 
# Try to figure out the correct arguments.

    elif remainder == 2:
        if n % 2 != 0:
            print(f'Move {i + 1} allowed between {source} and {auxiliary}')
            make_allowed_move(source, auxiliary)
        else:
            print(f'Move {i + 1} allowed between {source} and {target}')
            make_allowed_move(source, target)

# Step 42

# That's all for the iterative solution. 
# From now on you are going to build a function that makes use of a recursive approach. 
# Recursion is when a function calls itself. In this case, you are going to use recursion to calculate smaller 
# versions of the same problem.

# Delete the whole body of the move function except for the comment and the first print call. 
# Leave the function declaration as is.

# >>>> COMPLETO CODE BEFORE TRANSFORMING <<<<

NUMBER_OF_DISKS = 4
number_of_moves = 2 ** NUMBER_OF_DISKS - 1
rods = {
    'A': list(range(NUMBER_OF_DISKS, 0, -1)),
    'B': [],
    'C': []
}

def make_allowed_move(rod1, rod2):    
    forward = False
    if not rods[rod2]:
        forward = True
    elif rods[rod1] and rods[rod1][-1] < rods[rod2][-1]:
        forward = True              
    if forward:
        print(f'Moving disk {rods[rod1][-1]} from {rod1} to {rod2}')
        rods[rod2].append(rods[rod1].pop())
    else:
        print(f'Moving disk {rods[rod2][-1]} from {rod2} to {rod1}')
        rods[rod1].append(rods[rod2].pop())
    
    # display our progress
    print(rods, '\n')

def move(n, source, auxiliary, target):
    # display starting configuration
    print(rods, '\n')
    for i in range(number_of_moves):
        remainder = (i + 1) % 3
        if remainder == 1:
            if n % 2 != 0:
                print(f'Move {i + 1} allowed between {source} and {target}')
                make_allowed_move(source, target)
            else:
                print(f'Move {i + 1} allowed between {source} and {auxiliary}')
                make_allowed_move(source, auxiliary)
        elif remainder == 2:
            if n % 2 != 0:
                print(f'Move {i + 1} allowed between {source} and {auxiliary}')
                make_allowed_move(source, auxiliary)
            else:
                print(f'Move {i + 1} allowed between {source} and {target}')
                make_allowed_move(source, target)
        elif remainder == 0:
            print(f'Move {i + 1} allowed between {auxiliary} and {target}')
            make_allowed_move(auxiliary, target)           

# initiate call from source A to target C with auxiliary B
move(NUMBER_OF_DISKS, 'A', 'B', 'C')

# Step 42

# That's all for the iterative solution. From now on you are going to build a function that makes use of a recursive approach. 
# Recursion is when a function calls itself. In this case, you are going to use recursion to calculate smaller versions of the same problem.
# Delete the whole body of the move function except for the comment and the first print call. Leave the function declaration as is.

# Step 43

# You won't need make_allowed_move and number_of_moves, either. Delete the whole function and the variable.


































