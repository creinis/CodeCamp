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















