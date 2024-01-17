# Lambda

# Step 1

# In this project, you're going to build a simple, yet functional expense tracker in Python.

# Start by defining a function named add_expense that takes three parameters: 
# expenses, amount and category. Use the pass keyword to fill the function body.

def add_expense(expenses, amount, category):
    pass

# Step 2

# A list in Python is a built-in data type that allows you to store many items in a single data structure. 
# In Python, you create a list by putting items inside square brackets [], 
# with each item separated from the following one by a comma.

numbers = [1, 2, 3, 4]

# Create an empty list named expenses. You will use it to store each of your expenses.

expenses = []

# Step 3

# The expenses parameter of your add_expense function will be a list of expenses. 
# You want to be able to add items at the end of your list. For that you can use the .append() list method:

my_list = [2, 4, 7]
my_list.append(3)

#In the example above, after appending 3, my_list would be [2, 4, 7, 3]. 
# Replace pass with a call to the .append() method on the expenses list. 
# Don't pass any arguments to .append() for now.

def add_expense(expenses, amount, category):
    expenses.append()

# Step 4

# A dictionary is another built-in data type in Python. 
# A dictionary is a collection of data in the form of key-value pairs. 
# Dictionaries are defined with curly braces {} and they contain key-value pairs separated by commas. 
# Each key is followed by a colon : and the value:

{"amount": 50.0, "category": "Food"}

# In the example above, amount and category are keys, and 50.0 and Food are their the corresponding values.

# Create a dictionary with a key amount and value of the amount parameter and pass your new dictionary to the .append() call.

def add_expense(expenses, amount, category):
    expenses.append({'amount': amount})

# Step 5

# Add another key-value pair to the dictionary you are appending to the expense list. 
# Use the string category as the key, and the category parameter as the value.

def add_expense(expenses, amount, category):
    expenses.append({'amount': amount, 'category': category})

# Step 6

# Start by defining a function named print_expenses that takes one parameter expenses. 
# This function will later be used to display each expense in your list.

# Fill the body of your new function with a pass statement.

def print_expenses(expenses):
    pass

# Step 7

# Inside the print_expenses function, create a for loop that iterates over each item in the expenses list. 
# Use expense as the loop variable and move pass inside the loop body.

def print_expenses(expenses):
    for expense in expenses:
        pass

# Step 8

# Next, you are going to display the details for each expense.

# Inside the for loop, replace pass with a print() call and pass it the following 
# f-string: f'Amount: {expense}, Category: {expense}'. 
# Leave the placeholders empty for now.

def print_expenses(expenses):
    for expense in expenses:
        print(f'Amount: {expense}, Category: {expense}')

# Step 9

# You can access values in a dictionary through its keys. 
# You need to use the bracket notation and include the key between the square brackets:

my_dict = {"amount": 50.0, "category": "Food"}
my_dict["amount"] # 50.0

# You are currently interpolating the expense dictionary in your f-string. 
# Modify the f-string expression to access the value of the amount key and the category key 
# in the expense dictionary.

def print_expenses(expenses):
    for expense in expenses:
        print(f'Amount: {expense["amount"]}, Category: {expense["category"]}')

# Step 10

# You will need a function to calculate the total amount of expenses. 
# Define a function named total_expenses that takes one parameter expenses. 
# Fill the function body with a pass statement for now.

def total_expenses(expenses):
    pass

# Step 11 - Lambda Function

# Lambda functions are brief, anonymous functions in Python, ideal for simple, one-time tasks. 
# They are defined by the lambda keyword, and they use the following syntax:

lambda x: expr

# In the example above, x is a parameter to be use in the expression expr. 
# Create a test variable and assign it a lambda function that takes an x parameter and returns x * 2.

test = lambda x: x*2

# Step 12

# To call a lambda function you can use the usual function syntax with a pair of parentheses 
# after the variable name.

# Call your test lambda function and pass 3 as the argument. Then, print the result.

test = lambda x: x * 2
print(test(3))

# Step 13

# Lambda functions can be valuably combined with the map() function, 
# which executes a specified function for each element in a collection of objects, such as a list:

map(lambda x: x * 2, [1, 2, 3])

# The result of the example above would be [2, 4, 6], 
# where each item in the list passed to map() has been doubled by the action of the lambda function.

# Modify your print() call to print the result of calling map() with test as the first argument, 
# and [2, 3, 5, 8] as the second argument.

test = lambda x: x * 2
print(map(test, [2, 3, 5, 8]))

# Step 14

# The sum() function returns the sum of the items in the iterable which is passed as its argument. 
# You are going to use sum() together with map() and lambda functions to get the total amount of expenses.

# For now, make a little test and modify your current print() call by passing sum(map(test, [2, 3, 5, 8])) as the argument.

test = lambda x: x * 2
print(sum(map(test, [2, 3, 5, 8])))

# Step 15

# Next, you are going to implement the same logic to the total_expenses function.
# For now, delete both the test function and the print() call.

# Step 16

# Within your total_expenses function, replace pass with a lambda function. 
# Use expense as the parameter and return the value of the amount key in the expense dictionary.

def total_expenses(expenses):
    lambda expense: expense['amount']

# Step 17

# Now, call map() passing your lambda function as the first argument and the expenses list as the second argument.

def total_expenses(expenses):
    map(lambda expense: expense['amount'], expenses)

# Step 18

# Finally, pass your map() call to the sum() function to obtain the total expenses and return the result.

def total_expenses(expenses):
    return sum(map(lambda expense: expense['amount'], expenses))

# Step 19

# Next, define a function named filter_expenses_by_category that takes two parameters: 
# expenses and category. Use pass to fill the function body.

def filter_expenses_by_category(expenses , category):
    pass

# Step 20

# Within the filter_expenses_by_category function, replace pass with a lambda function. 
# Use expense as the parameter and return the comparison between 
# the value of the category key of the expense dictionary and category.

def filter_expenses_by_category(expenses, category):
    lambda expense: expense['category'] == category

# Step 21

# The filter() function allows you to select items from an iterable, such as a list, 
# based on the output of a function:

filter(my_function, my_list)

# filter() returns an iterator in which the elements of my_list are included, 
# for which my_function returns True. An iterator is a special object that enables 
# you to iterate over the elements of a collection, like a list.

# Within the filter_expenses_by_category function, call filter() passing the lambda function 
# you wrote in the previous step as the first argument and the expenses list as the second argument.

def filter_expenses_by_category(expenses, category):
    return filter(lambda expense: expense['category'] == category, expenses)

# Step 23

# The next step is to define the main function, which will be the entry point of the interactive 
# expense tracker program.

# Define a function named main without parameters. 
# Fill the function body with the expenses list you created at the beginning of this project. 
# You will use this list to store the expense records.






