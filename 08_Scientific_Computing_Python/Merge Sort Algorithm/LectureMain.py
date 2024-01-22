# Merge Sort Algorithm

# Step 1

# In this project, you'll learn data structures by building the merge sort algorithm.

# This is a sorting algorithm that uses the divide-and-conquer principle to sort collections of data. 
# That is, it 'divides' a collection into smaller sub-parts, and 'conquers' the sub-parts by sorting them 
# independently, then merges the sorted sub-parts.

# Create a function called merge_sort. This function will handle the task of sorting a list of numbers.

# Use the pass keyword in the function body.

def merge_sort():
    pass

# Step 2

# You'll need a parameter that denotes the data collection to be sorted. 
# Create a parameter called array in the merge_sort function.

def merge_sort(array):
    pass

# Step 3

# The merge sort algorithm mainly performs three actions:

#    Divide an unsorted sequence of items into sub-parts
#    Sort the items in the sub-parts
#    Merge the sorted sub-parts

# The above happens recursively until the sub-parts are merged into the complete sorted sequence. 
# Let's start by dividing the sequence.

# First, replace the pass keyword with a variable middle_point. 
# Use the integer division operator (//) to divide the length of the array list by 2 and assign the result 
# to your new middle_point variable. 
# Remember to indent your code.

def merge_sort(array):
    middle_point = len(array) // 2

# Step 4

# In the previous step, you got the mid point. 
# You can use it to divide array into two and assign each part to new variables.

# Use the slice syntax to extract the left half of array and assign it to a variable named left_part.

def merge_sort(array):
    middle_point = len(array) // 2
    left_part = array[:middle_point]

# Step 5

# Use the slice syntax to extract the right half of array and assign it to a variable named right_part.

def merge_sort(array):
    middle_point = len(array) // 2
    left_part = array[:middle_point]
    right_part = array[middle_point:]

# Step 6

# Now that you've divided the array list into two separate lists, you'll keep dividing each list until every 
# element stands alone in its own list. 
# A list with a single number is always sorted.

# To do that, recursively call merge_sort inside your function.

def merge_sort(array):
    if len(array) <= 1:
        return array

    middle_point = len(array) // 2
    left_part = array[:middle_point]
    right_part = array[middle_point:]
    merge_sort()

# Step 7

# Pass left_part as the argument to the merge_sort() call you added in the last step.

# Step 8

# Call the merge_sort() function again. Do not pass in any argument for now.

# Step 9

# Pass right_part as the argument to the merge_sort() call you added in the last step.

    merge_sort(left_part)
    merge_sort(right_part)

# Step 10

# Now it's time to sort and merge the lists (left_part and right_part) into the original array.

# You can do this by comparing elements on both lists, and merging the smaller element to the main list. 
# You are going to do this comparison for all the indexes in left_part and right_part.

# Create three variables: left_array_index, right_array_index, and sorted_index and set their values to 0. 
# These variables will help you keep track of each index during the sorting process.

    left_array_index = 0
    right_array_index = 0
    sorted_index = 0

# Step 11

# Inside your function, create a while loop that compares an element in left_part to an element in right_part, 
# and merges the smaller element to the main array list.

# Create two conditions for the loop: one that checks whether the left_array_index is less than the length of 
# left_part and another condition that checks whether right_array_index is less than the length of right_part.

    while left_array_index < len(left_part) and right_array_index < len(right_part):
        pass

# Step 12

# Within the while loop, replace pass with an if statement that checks if the index of left_part is 
# less than the index of right_part.

# Use the pass keyword in the body of the if statement.

    while left_array_index < len(left_part) and right_array_index < len(right_part):
        if left_part[left_array_index] < right_part[right_array_index]:
            pass

# Step 13

# When the if condition evaluates to True, it means that the element in the left_part list is smaller than 
# the element it is being compared to in the right_part list.

# In that case, you can assign the left_part index to the sorted array.

# Inside the if block, remove pass and assign left_part[left_array_index] to array[sorted_index].

    while left_array_index < len(left_part) and right_array_index < len(right_part):
        if left_part[left_array_index] < right_part[right_array_index]:
            array[sorted_index] = left_part[left_array_index]

# Step 14

# After assigning the left_part index to the sorted array, increment left_array_index by 1.

        if left_part[left_array_index] < right_part[right_array_index]:
            array[sorted_index] = left_part[left_array_index]
            left_array_index += 1

# Step 15

# In a previous step, you assigned the element in the left_part to the array list because it was smaller. 
# But this will not always be the case. In some comparison cases, the element on the right could be smaller.

# Create an else clause to execute when the left_part index is not less than the right_part index.

# Inside the else block, assign right_part[right_array_index] to array[sorted_index].

# Step 16

# Still within the else block, increment right_array_index by 1.


        if left_part[left_array_index] < right_part[right_array_index]:
            array[sorted_index] = left_part[left_array_index]
            left_array_index += 1
        else:
            array[sorted_index] = right_part[right_array_index]
            right_array_index += 1

# Step 17

# The if and else statements you created in the previous steps will assign elements to the sorted array.

# Each element assigned to the sorted array takes up an index in the list. 
# So you have to move to the next index without an element.

# Below the if/else block, but still within the while loop increment sorted_index by 1. 
# This should not be in the body of the if or else statement

    while left_array_index < len(left_part) and right_array_index < len(right_part):
        if left_part[left_array_index] < right_part[right_array_index]:
            array[sorted_index] = left_part[left_array_index]
            left_array_index += 1
        else:
            array[sorted_index] = right_part[right_array_index]
            right_array_index += 1
        sorted_index += 1

# Step 18

# The while loop you created compares one element from left_part with another in right_part, 
# then adds the smaller element to the main array list.

# It will continue this operation until there are no elements left to be compared. 
# But left_part may still have elements left while right_part has none, and vice versa.

# Create another while loop to copy the remaining elements in left_part into the array list. 
# Use left_array_index < len(left_part) for the while condition.

    while left_array_index < len(left_part):
        pass

# Step 19

# Remove the pass keyword. 
# For the while loop's code block, assign left_part[left_array_index] to array[sorted_index].

    while left_array_index < len(left_part):
        array[sorted_index] = left_part[left_array_index]

# Step 20

# Still within the while loop, increment the value of left_array_index by 1.

    while left_array_index < len(left_part):
        array[sorted_index] = left_part[left_array_index]
        left_array_index += 1

# Step 21

# The last thing to do for the while loop is to move to the next index in the sorted array.

# Using the augmented assignment addition operator, add 1 to the value of sorted_index.

    while left_array_index < len(left_part):
        array[sorted_index] = left_part[left_array_index]
        left_array_index += 1
        sorted_index += 1

# Step 22

# Now, you are going to replicate the same while loop logic for right_part.

# Create a while loop that runs when right_array_index is less than len(right_part), and use the pass keyword 
# in the body of the loop.

    while right_array_index < len(right_part):
        pass

# Step 23

# Within the while loop, assign right_part[right_array_index] to array[sorted_index].

# Step 24

# Now, use the += operator to increment right_array_index by 1.

# Step 25

# For the last step in the while loop, increment sorted_index by 1.

    while right_array_index < len(right_part):
        array[sorted_index] = right_part[right_array_index]
        right_array_index += 1
        sorted_index += 1

# Step 26

# Before testing the merge_sort() function, you need to create a base case that stops the function execution 
# when the length of array is less than or equal to 1.

# This base case will stop the recursion call. 
# Without it, the merge sort operation would continue to run even when the list has been sorted or has 
# no element in it.

# Right after the function declaration, create an if statement with this condition: len(array) <= 1. 
# Use the pass keyword in the function's body.

def merge_sort(array):
    if len(array) <= 1:
        pass

# Step 27

# Replace the pass keyword within the if statement with a return statement. 
# This will stop the execution of the merge_sort function when the given condition is true.

def merge_sort(array):
    if len(array) <= 1:
        return array

# Step 28

# You can use the __name__ variable to determine if a Python script is being run as the main program or if it is 
# being imported as a module (code written in another Python file).

# If the value of __name__ is set to '__main__', it implies that the current script is the main program, 
# and not a module.

# In this project, you'll use the current script as the main program.

# Create an if statement that checks whether the value of __name__ is '__main__'.

# Use the pass keyword in the body of the if statement.

if __name__ == '__main__':
    pass

# Step 29

# It's time to test the merge_sort function!

# Replace pass with a list called numbers, and assign this list to it: [4, 10, 6, 14, 2, 1, 8, 5]







