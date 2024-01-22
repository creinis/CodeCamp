# Sudoku Solver

# Step 1

# In this project, you will learn about classes and objects by building a sudoku puzzle solver.

# In Python, a class is a blueprint for creating objects. 
# Objects created from a class are instances of that class. You can create a class using this syntax:

# class ClassName:

# First, you will create a 9x9 board by using classes and then populate it with the puzzle values.

# Begin by creating a Board class.

class Board:

# Step 2

# A new instance of a class is created by using the function notation: ClassName(). 
# The instantiation creates an empty object. 
# Classes can have methods, which are like local functions for each instance. 
# Methods are declared as follows:

# class ClassName:
    def method_name():
        pass

# The __init__ method is a special method that allows you to instantiate an object to a customized state. 
# When a class implements an __init__ method, __init__ is automatically called upon instantiation.

# Create an __init__ method inside your Board class.

    def __init__():
        pass

# Step 3

# Add two parameters to the __init__ method, order matters:

#    self: This is a reference to the instance of the class. It is a convention to name this parameter self.
#    board: The board parameter is expected to be passed when creating an instance of the Board class.

# Step 4

# Inside the __init__ method, assign the value of the board parameter (which is passed when creating an 
# instance of the Board class) to an instance variable named board using self.board.

# self.board refers to the board attribute of the instance of the class. 
# It's a variable that belongs to the object created from the Board class.

    def __init__(self, board):
        self.board = board

# Step 5

# Now you will move to the actual construction of the board, which is a 9x9 gird.

# The input puzzle would look like this:

puzzle = [
  [0, 0, 2, 0, 0, 8, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 7, 6, 2],
  [4, 3, 0, 0, 0, 0, 8, 0, 0],
  [0, 5, 0, 0, 3, 0, 0, 9, 0],
  [0, 4, 0, 0, 0, 0, 0, 2, 6],
  [0, 0, 0, 4, 6, 7, 0, 0, 0],
  [0, 8, 6, 7, 0, 4, 0, 0, 0],
  [0, 0, 0, 5, 1, 9, 0, 0, 8],
  [1, 7, 0, 0, 0, 6, 0, 0, 5]
]

# The resulting grid would look like this:

# Define a method __str__ within the Board class. Also, add the self parameter. 
# This method is automatically called when you use the str() function on an instance of the class or when 
# you use print() with the object.

def __str__(self):
    pass

# Step 6

# To create the top border of the board, create an upper_lines variable and assign it the 
# value of f'\n╔═══{"╤═══"*2}{"╦═══"}{"╤═══"*2}{"╦═══"}{"╤═══"*2}╗\n'.

# This string represents the top border of the sudoku board in a visually appealing ASCII art style. 
# It uses special Unicode characters to draw the borders and intersections.

    def __str__(self):
        upper_lines = f'\n╔═══{"╤═══"*2}{"╦═══"}{"╤═══"*2}{"╦═══"}{"╤═══"*2}╗\n'

# Step 7

# To create middle borders of the sudoku board, create a middle_lines variable and assign it the value of 
# f'╟───{"┼───"*2}{"╫───"}{"┼───"*2}{"╫───"}{"┼───"*2}╢\n'.

    def __str__(self):
        upper_lines = f'\n╔═══{"╤═══"*2}{"╦═══"}{"╤═══"*2}{"╦═══"}{"╤═══"*2}╗\n'
        middle_lines = f'╟───{"┼───"*2}{"╫───"}{"┼───"*2}{"╫───"}{"┼───"*2}╢\n'

# Step 8

# To create the bottom border of the sudoku board, create a lower_lines variable and assign it the value of 
# f'╚═══{"╧═══"*2}{"╩═══"}{"╧═══"*2}{"╩═══"}{"╧═══"*2}╝\n'.

        upper_lines = f'\n╔═══{"╤═══"*2}{"╦═══"}{"╤═══"*2}{"╦═══"}{"╤═══"*2}╗\n'
        middle_lines = f'╟───{"┼───"*2}{"╫───"}{"┼───"*2}{"╫───"}{"┼───"*2}╢\n'
        lower_lines = f'╚═══{"╧═══"*2}{"╩═══"}{"╧═══"*2}{"╩═══"}{"╧═══"*2}╝\n'

# Step 9

# Initialize a board_string variable with the content of upper_lines. 
# This will be the starting point for building the entire visual representation of the sudoku board.

        upper_lines = f'\n╔═══{"╤═══"*2}{"╦═══"}{"╤═══"*2}{"╦═══"}{"╤═══"*2}╗\n'
        middle_lines = f'╟───{"┼───"*2}{"╫───"}{"┼───"*2}{"╫───"}{"┼───"*2}╢\n'
        lower_lines = f'╚═══{"╧═══"*2}{"╩═══"}{"╧═══"*2}{"╩═══"}{"╧═══"*2}╝\n'
        board_string = upper_lines

# Step 10

# Now, you need to go over each row in the sudoku board.

# Enumeration is a convenient way to keep track of both the element and its position on a list. 
# The enumerate() function is a built-in function in Python that takes an iterable (such as a list, tuple, 
# or string) and returns an iterator that produces tuples containing indices and corresponding values from 
# the iterable.

# Initiate a for loop to iterate over each row (line) in the sudoku board (self.board).

# Use enumeration to get both the index (index) and the content (line) of each row.

# The general syntax would be like this:

# for x, y in enumerate(parameter):

        for index, line in enumerate(self.board):
            pass

# Step 11

# Inside the loop, initialize an empty list row_list to store the elements of a single row in the sudoku board.

        for index, line in enumerate(self.board):
            row_list = []

# Step 12

# Next, you are going to split each row in three segments, in order to represent the 3x3 squares properly.

# Create a nested for loop to iterate over each segment of the row. 
# Use square_no and part as the iterating variable and the enumerate() function. For now, leave the enumerate() 
# call empty.





















































