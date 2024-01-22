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

    def find_empty_cell(self):
        pass

# Step 29

# Inside the find_empty_cell method, create a for loop and use the enumerate() function to iterate over each row 
# in the sudoku board.

# Use row for the index of the current row and contents for the elements of the current row.

    def find_empty_cell(self):
        for row, contents in enumerate(self.board):
            pass

# Step 30

# In the body of the for loop, add a try block.

# Step 31

# In the try block, attempt to find the index of the first occurrence of 0 in the current row using 
# contents.index(0). Store the results in the variable col.

# Step 32

# If 0 is found, the code immediately returns a tuple (row, col) with the row index and column index of the 
# empty cell.

# Return the row and col values

# Step 33

# Create an except block to handle the ValueError exception that is thrown if 0 is not found.

# Step 34

# If the value 0 is not present in the current row, an exception would be thrown and the except block would 
# execute.

# The except block should pass and continue to the next row. Achieve this by using pass.

# Step 35

# If the loop completes without finding any empty cells, the method should return None to indicate that 
# the sudoku board is filled.

# Return None outside the for loop block.

def find_empty_cell(self):
    for row, contents in enumerate(self.board):
        try:
            col = contents.index(0)
            return row, col
        except ValueError:
            pass
    return None

# Step 36

# Next, you will work on a method that checks if a given number can be inserted into a specified row of 
# the sudoku board.

# Create a method named valid_in_row. It should take three parameters:

#    self: representing the instance of the class.
#    row: representing the row index.
#    num: representing the number to be checked.

# Also, don't forget to add the pass keyword in the function body.

def valid_in_row(self, row, num):
    pass

# Step 38

# If num is not in the row, the expression evaluates to True and it means the number is valid for insertion.

# If num is in the row, the expression evaluates to False and insertion would violate the rules.

# Return the value from the expression you wrote in the previous step, so that the validity of a number 
# can be checked.

def valid_in_row(self, row, num):
    return num not in self.board[row]

# Step 39

# Next, you will create a method that checks if a number can be inserted in a specified column of the 
# sudoku board by checking if the number is not already present in that column for any row.

# For that, within the Board class, create a method named valid_in_col.

# It should take three parameters:

#    self: representing the instance of the class.
#    col: representing the column index.
#    num: representing the number to be checked.

def valid_in_col(self, col, num):
    pass

# Step 40

# Now, you need to check if a given number is not equal to the number in the specified column of the current row.

# For that, first, iterate over the rows of the 2D list self.board using a for loop in the range 0 to 8. 
# Use row as the iteration variable.

def valid_in_col(self, col, num):
    for row in range(9):
        pass

# Step 41

# For each element in the specified column (col) of the current row (row), check whether the value at 
# the current position in the 2D list is not equal to the provided num.

def valid_in_col(self, col, num):
    self.board[row][col] != num

# Step 42

# This expression generates a list of boolean values representing whether the condition 
# self.board[row][col] != num is True or False for each element in the specified column across all rows.

# Pass this generator expression to the all() function to check if all the elements in the column are different 
# from num.

# Recall that the syntax of the all function is as follows:

all(
    self.board[row][col] != num
    for row in range(9)
    )

# Step 43

# Return the result of the all() function call.


def valid_in_col(self, col, num):
    return all(
        self.board[row][col] != num
        for row in range(9)
    )

# Step 44

# Next, you will work on a method that checks if a number can be inserted in the 3x3 square.

# Inside the Board class, create a method named valid_in_square.

# It should take four parameters:

#    self: represents the instance of the class.
#    row: represents the row index.
#    col: represents the column index.
#    num: represents the number to be checked.

def valid_in_square(self, row, col, num):
    pass

# Step 45

# Now you need to calculate the starting row index for the 3x3 block in the board grid.

# For that, ensure that the starting row index for each 3x3 block is a multiple of 3.

# This can be achieved by this mathematical operation: (row // 3) * 3. 
# Assign the result of this calculation to row_start.

# Step 46

# Next, you need to calculate the starting column index for the 3x3 block in the board grid.

# For that, ensure that the starting row index for each 3x3 block is a multiple of 3.

# Similar to the previous step, this can be achieved by this mathematical operation: (col // 3) * 3. 
# Assign the result of this calculation to col_start.

def valid_in_square(self, row, col, num):
        row_start = (row // 3) * 3
        col_start = (col // 3) * 3

# Step 47

# Create a for loop that starts at row_start and ends just before row_start + 3. 
# You can use the range() function to generate the sequence. 
# As an example, if row_start is 3, the loop will iterate over the numbers 3, 4, and 5.

def valid_in_square(self, row, col, num):
    row_start = (row // 3) * 3
    col_start=(col // 3) * 3
    for i in range(row_start, row_start + 3):
        pass

# Step 48

# Inside the loop created in the previous step, nest another for loop to iterate over a sequence of 
# three elements starting at col_start. Again, use the range() function to generate the sequence.

        for row_no in range(row_start, row_start + 3):
            for col_no in range(col_start, col_start + 3):
                pass

# Step 49

# The next step is to check if the specified number (num) is already present in the current cell of the 3x3 square.

# Inside the inner for loop, create an if statement that checks if the current cell in self.board is equal to num.

            for col_no in range(col_start, col_start + 3):
                if self.board[row_no][col_no] == num:
                    pass

# Step 50

# Inside the if block, return False to indicate that the number cannot be inserted into the square.

# Step 51

# If the number is not present, it can be inserted into the square without violating the rules of sudoku.

# Return True in that case, and pay attention to the indentation.

    def valid_in_square(self, row, col, num):
        row_start = (row // 3) * 3
        col_start=(col // 3) * 3
        for row_no in range(row_start, row_start + 3):
            for col_no in range(col_start, col_start + 3):
                if self.board[row_no][col_no] == num:
                    return False
        return True

# Step 52

# Within the Board class, create another method is_valid. It would take three parameters:

#    self (representing the instance of the class),
#    empty (a tuple representing the row and column indices of an empty cell)
#   num (representing the number to be checked).

#This method checks if a given number is a valid choice for an empty cell in the sudoku board by validating its compatibility with the row, column, and 3x3 square of the specified empty cell.

def is_valid(self, empty, num):
    pass

# Step 53

# Inside the method, unpack the empty tuple into row and col.

    def is_valid(self, empty, num):
        row, col = empty

# Step 54

# Check if the number is valid for insertion in the specified row by calling self.valid_in_row(row, num) 
# Assign the result to valid_in_row

    def is_valid(self, empty, num):
        row, col = empty
        valid_in_row = self.valid_in_row(row, num)

# Step 55

# Check if the number is valid for insertion in the specified column by calling self.valid_in_col(col, num)

# Assign the result to valid_in_col.

    def is_valid(self, empty, num):
        row, col = empty
        valid_in_row = self.valid_in_row(row, num)
        valid_in_col = self.valid_in_col(col, num)

# Step 56

# Check if the number is valid for insertion in the 3x3 square that contains the specified cell by calling 
# self.valid_in_square(row, col, num).

# Assign the result to valid_in_square.

    def is_valid(self, empty, num):
        row, col = empty
        valid_in_row = self.valid_in_row(row, num)
        valid_in_col = self.valid_in_col(col, num)
        valid_in_square = self.valid_in_square(row, col, num)

# Step 57

# Insert valid_in_row, valid_in_col, and valid_in_square into a list and pass it to the all() function. 
# This will verify that all the function calls return True.

# Step 58

# Now, return the result of the all() call.

    def is_valid(self, empty, num):
        row, col = empty
        valid_in_row = self.valid_in_row(row, num)
        valid_in_col = self.valid_in_col(col, num)
        valid_in_square = self.valid_in_square(row, col, num)
        return all(
            [valid_in_row, valid_in_col, valid_in_square]
        )

# Step 59

# Next, you will work on a method that attempts to solve the sudoku in-place, meaning it would modify 
# the existing sudoku board rather than creating a new one.

# Within the board class, create a method solver that takes one argument(self, representing the instance of 
# the class).

def solver(self):
        pass

# Step 60 Passed

# First, check if there are any empty cells left in the sudoku board.

# Use the find_empty_cell function call on self.

# Also, use the walrus operator (:=) to assign the result of self.find_empty_cell() to the variable next_empty.

# By using the walrus operator, you can combine the assignment and the conditional check into a single line, making the code more concise and readable.

def solver(self):
    (next_empty := self.find_empty_cell())

# Step 61

# Place the condition in an if statement and check if it is None

def solver(self):
    if (next_empty := self.find_empty_cell()) is None:
        pass

# Step 62

# If there are no empty cells (i.e., next_empty is None), the puzzle is solved. So, return True.

def solver(self):
    if (next_empty := self.find_empty_cell()) is None:
        return True

# Step 63

# Create an else block to cater the case where there are empty cells and the puzzle is unsolved.

def solver(self):
    if (next_empty := self.find_empty_cell()) is None:
        return True
    else:
        return False

# Step 64

# If still there are empty cells, create a loop in the else block that iterates over numbers from 1 to 9 (inclusive).

def solver(self):
    if (next_empty := self.find_empty_cell()) is None:
        return True
    else:
        for num in range(1, 10):
            pass

# Step 65

# For each number (guess), check if the number is a valid choice for the current empty cell using 
# self.is_valid(next_empty, guess)

def solver(self):
    if (next_empty := self.find_empty_cell()) is None:
        return True
    else:
        for guess in range(1, 10):
            guess = self.is_valid(next_empty, guess)

# Step 66

# If the guess is valid, the method updates the sudoku board with the guess by assigning guess to the 
# cell specified by next_empty.

# Unpack the next_empty tuple to row, col.

def solver(self):
    if (next_empty := self.find_empty_cell()) is None:
        return True
    else:
        for guess in range(1, 10):
            if self.is_valid(next_empty, guess):
                row, col = next_empty

# Step 67

# Access the cell at the given row and column in the sudoku board, and assign it the value of guess.

            if self.is_valid(next_empty, guess):
                row, col = next_empty
                self.board[row][col] = guess

# Step 68

# While staying in the if block, recursively call self.solver() to try to solve the rest of the sudoku.

# Step 69

# If the recursive call to self.solver() returns True, it means the sudoku is solved.

# If the recursive call returns True, return True from the method.

                if self.is_valid(next_empty, guess):
                    row, col = next_empty
                    self.board[row][col] = guess
                    if self.solver():
                        return True

# Step 70

# If self.solver() returns False, this means the guess led to an unsolvable sudoku.

# Outside the innermost if block, undo the guess by setting the cell value back to 0.

                if self.is_valid(next_empty, guess):
                    row, col = next_empty
                    self.board[row][col] = guess
                    if self.solver():
                        return True
                    self.board[row][col] = 0

# Step 71

# Make your method return False when none of the guesses leads to a solution.

    def solver(self):
        if (next_empty := self.find_empty_cell()) is None:
            return True
        else:
            for guess in range(1, 10):
                if self.is_valid(next_empty, guess):
                    row, col = next_empty
                    self.board[row][col] = guess
                    if self.solver():
                        return True
                    self.board[row][col] = 0
            return False

# Step 72

# Outside the class definition, create a function to print and solve the sudoku board.

# Name it solve_sudoku. It should take a single parameter board that is a 2D list.

def solve_sudoku(board):
    pass

# Step 73

# Inside the solve_sudoku function, create a gameboard variable and assign it an instance of the Board class 
# passing board as the argument.

# This initializes the sudoku board with the given initial state.

def solve_sudoku(board):
    gameboard = Board(board)

# Step 74

# Now, add another print() call passing gameboard as the argument to print the current state of the sudoku board.

# Add a print call to print the following: f'\nPuzzle to solve:\n{gameboard}'.

# Step 75

# Create an if statement that checks if the solver() method call from the gameboard object returns True.

# Then, add a print() call inside the if block passing the following string: '\nSolved puzzle:'.

def solve_sudoku(board):
    gameboard = Board(board)
    print(f'\nPuzzle to solve:\n{gameboard}')
    if gameboard.solver():
        print('\nSolved puzzle:')

# Step 76

# Add another print call to print the current state of the board.

    if gameboard.solver():
        print('\nSolved puzzle:')
        print(gameboard)

# Step 77

# Create an else clause and print the following string inside the new else block: 
# '\nThe provided puzzle is unsolvable.'.

def solve_sudoku(board):
    gameboard = Board(board)
    print(f'\nPuzzle to solve:\n{gameboard}')
    if gameboard.solver():
        print('\nSolved puzzle:')
        print(gameboard)
    else:
        print('\nThe provided puzzle is unsolvable.')

# Step 78

# In the end, return your instance of the Board class, which represents the final state of the sudoku board 
# after attempting to solve it.

def solve_sudoku(board):
    gameboard = Board(board)
    print(f'\nPuzzle to solve:\n{gameboard}')
    if gameboard.solver():
        print('\nSolved puzzle:')
        print(gameboard)

    else:
        print('\nThe provided puzzle is unsolvable.')
    return gameboard

# Step 79

# Now it's time to play the game!

# A puzzle has been given in the code.

# Call the solve_sudoku method with puzzle as input.

# Now, you can see the solved puzzle as the output.

# With this, you are finished with building the sudoku solver!

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

solve_sudoku(puzzle)


