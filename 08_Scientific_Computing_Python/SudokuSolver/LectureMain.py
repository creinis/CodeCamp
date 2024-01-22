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

        for index, line in enumerate(self.board):
          row_list = []
          for square_no, part in enumerate():
              pass

# Step 13

# Now, you need to create the three line segments to pass to the enumerate function.

# Use list slicing to create the three lists of equal length representing the line segment of each 3x3 square 
# and pass them to the enumerate() call. 
# Add start = 1 to start the enumeration from 1 instead of 0.

        for index, line in enumerate(self.board):
            row_list = []
            for square_no, part in enumerate([line[:3], line[3:6], line[6:]], start = 1):

# Step 14

# Now, you would join the elements of the segment (part) with the pipe character (|).

# For that, first, use a for loop for item in part to access all elements.

# Then, use the join() method on the | character to join the elements of the segment (part).

# After that, convert each element to a string using str(item).

                for square_no, part in enumerate([line[:3], line[3:6], line[6:]], start=1):
                    '|'.join(str(item) for item in part)

# Step 15

# Assign the joined string to the variable row_square.

# Step 16

# Extend the row_list with the elements of the row_square string.

            for square_no, part in enumerate([line[:3], line[3:6], line[6:]], start=1):
                row_square = '|'.join(str(item) for item in part)
                row_list.extend(row_square)

# Step 17

# Within the innermost loop, create an if statement to check if the current segment (square_no) is not the 
# last one (i.e., not equal to 3)

# Step 18

# Inside the if block, append a ║ character at the end of row_list.

                if square_no != 3:
                    row_list.append('║')

# Step 19

# Next, you will create a string representation of the row with spaces between each element.

# For that, outside the innermost for loop body, create a string row. 
# Assign the following formatted string f'║ {" ".join(row_list)} ║\n' to it to join the elements of row_list 
# with a space in between.

# Step 20

# When you would pass your input puzzle board, 0 would be used for empty cells.

# For a better visual representation, replace the empty cells in a row with a space using the replace method.

# The replace() method takes two arguments, the first one is the character to be replaced and the second one 
# is the character to be replaced with.

# After replacing, assign the result to a variable row_empty.

            row = f'║ {" ".join(row_list)} ║\n'
            row_empty = row.replace('0', ' ')

# Step 21

# board_string is gradually built up as the loop iterates over each row, creating the full ASCII art 
# representation of the sudoku board.

# Add the modified row_empty string to the board_string.

            row = f'║ {" ".join(row_list)} ║\n'
            row_empty = row.replace('0', ' ')
            board_string += row_empty

# Step 22

# Within the outermost for loop, create an if statement that checks if the current row index is less than 8. 
# This is because the last row of the sudoku board has an index of 8, and you want to handle the last 
# row differently.

        if index < 8:
            pass

# Step 23

# Now, you need to verify if the row is the last row inside a 3x3 square. 
# This occurs when index % 3 is equal to 2.

# Inside your existing if block, nest another if to check that condition.

            if index < 8:
                if index % 3 == 2:
                    pass

# Step 24

# If the current row is the last row of a 3x3 square, in order to create a visually appealing border you need 
# to append a different border string to board_string .

# Inside the if statement, add the following string to the current value of board_string: 
# f'╠═══{"╪═══"*2}{"╬═══"}{"╪═══"*2}{"╬═══"}{"╪═══"*2}╣\n'.

                if index % 3 == 2:
                    board_string += f'╠═══{"╪═══"*2}{"╬═══"}{"╪═══"*2}{"╬═══"}{"╪═══"*2}╣\n'

# Step 25

# Now, to handle other rows, if the inner condition is False, meaning the current row is not the last row of a 
# 3x3 square, append the middle_lines string to board_string. Include this in an else block.

# Recall that middle_lines represents the middle borders of the sudoku board and includes horizontal separators.

                if index % 3 == 2:
                    board_string += f'╠═══{"╪═══"*2}{"╬═══"}{"╪═══"*2}{"╬═══"}{"╪═══"*2}╣\n'
                else:
                    board_string += middle_lines

# Step 26

# Now, you need to handle the last row of the entire board.

# lower_lines represents the bottom border of the entire sudoku board.

# Create an else block to append the lower_lines string to board_string when the outer if condition is false.

            if index < 8:
                if index % 3 == 2:
                    board_string += f'╠═══{"╪═══"*2}{"╬═══"}{"╪═══"*2}{"╬═══"}{"╪═══"*2}╣\n'
                else:
                    board_string += middle_lines
            else:
                board_string += lower_lines

# Step 27

# After the outer loop completes for all rows, return the final board_string. 
# This string contains the complete visual representation of the sudoku board in ASCII art style, 
# including borders and separators.

class Board:
    def __init__(self, board):
        self.board = board

    def __str__(self):
        upper_lines = f'\n╔═══{"╤═══"*2}{"╦═══"}{"╤═══"*2}{"╦═══"}{"╤═══"*2}╗\n'
        middle_lines = f'╟───{"┼───"*2}{"╫───"}{"┼───"*2}{"╫───"}{"┼───"*2}╢\n'
        lower_lines = f'╚═══{"╧═══"*2}{"╩═══"}{"╧═══"*2}{"╩═══"}{"╧═══"*2}╝\n'
        board_string = upper_lines
        for index, line in enumerate(self.board):
            row_list = []
            for square_no, part in enumerate([line[:3], line[3:6], line[6:]], start=1):
                row_square = '|'.join(str(item) for item in part)
                row_list.extend(row_square)
                if square_no != 3:
                    row_list.append('║')

            row = f'║ {" ".join(row_list)} ║\n'
            row_empty = row.replace('0', ' ')
            board_string += row_empty

            if index < 8:
                if index % 3 == 2:
                    board_string += f'╠═══{"╪═══"*2}{"╬═══"}{"╪═══"*2}{"╬═══"}{"╪═══"*2}╣\n'
                else:
                    board_string += middle_lines
            else:
                board_string += lower_lines
        return board_string
    
# Step 28

# Now you will work on a method that finds the empty cells in the sudoku board. 
# For that, within the Board class, create a method named find_empty_cell. 
# It takes self as a parameter, representing the instance of the class. 
# Include the pass keyword inside the function body.















