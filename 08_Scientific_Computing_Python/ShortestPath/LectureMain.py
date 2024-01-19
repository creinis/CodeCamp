# Shortest Path Algorithm
# the algorithm to calculate the shortest path between each node in your new graph.

# Step 1

#So far, you have already met different data types:

#    Immutable data types, such as integers, strings, tuples, and Booleans.
#    Mutable data types, such as lists.

#A dictionary is a mutable data type and it is identified by a pair of curly braces, {}.

#Start by creating a variable called copper and assign it an empty dictionary using a pair of curly braces, 
# in the same way you would create an empty list with a pair of square brackets.

copper = {}

# Step 2

# Dictionaries store data in the form of key-value pairs. 
# A key is separated from the correspondent value by a colon. 
# And each key-value pair is separated from the following pair by a comma:

my_dict = {
    'name': 'Michael',
    'occupation': 'Lumberjack'
}

# Add a new key-value pair to your dictionary. 
# Use the string species as the key, and the string guinea pig as the value.

copper = {'species': 'guinea pig'}

# Step 3

# Keys must be unique within a dictionary and they can be only immutable data types. 
# This means you cannot use a list or another dictionary as keys.

# Add another key age to your dictionary and give it the integer number 2 as value.

copper = {'species': 'guinea pig', 'age' : 2}

# Step 4

# You can access the data stored in a dictionary through its keys:

my_dict = {
    'name': 'Michael',
    'occupation': 'Lumberjack'
}

my_dict['name'] # 'Michael'

# After your dictionary, follow the example above to access the species key of copper and print the result.

copper = {
    'species': 'guinea pig',
    'age': 2
}
print(copper['species'])

# Step 5

# Now, modify your existing print() call to print the value of the age key.

# Step 6

#To add a new key-value pair after declaring a dictionary, 
# you can indicate the key in the same way you would access an existing key, 
# and set the value of the new key by using the assignment operator:

my_dict = {
    'name': 'Michael',
    'occupation': 'Lumberjack'
}

my_dict['country'] = 'Canada'

# Delete your print() call. Then, after declaring copper, add the key food to your dictionary 
# and set its value to hay.

copper = {
    'species': 'guinea pig',
    'age': 2
}
copper['food'] = 'hay'

# Step 7

#Now, at the bottom of your code, print copper.

# Step 8

# The same syntax can be used to change the value of an existing key.
# Just before the print() call, access the species key and reassign its value to Cavia porcellus

copper = {
    'species': 'guinea pig',
    'age': 2
}
copper['food'] = 'hay'
copper['species'] = 'Cavia porcellus'
print(copper)

# Step 9

# You can remove a key-value pair from a dictionary by using the del keyword. The syntax is the following:

my_dict = {
    'name': 'Michael',
    'occupation': 'Lumberjack'
}

del my_dict['occupation']

# Just before your print() call, use the del keyword to delete the age key and its value from copper.

del copper['age']

# Step 10

# Now that you got the basic aspects of dictionaries, you can proceed to build the shortest path algorithm.
# Delete every line of code after the declaration of the copper dictionary.

# Step 11

# Graphs are data structures representing relations between pairs of elements. 
# These elements, called nodes, can be real-life objects, entities, points in space or others. 
# The connections between the nodes are called the edges.

# For example, a graph can be used to represent two points in the space, A and B, connected by a path. 
# A graph like this will be made of two nodes connected by an edge.

# Rename the copper dictionary into my_graph. This will represent the graph to test your algorithm.

# Step 12

# Now, replace the existent keys with the strings A and B — one for each node. 
# Then, replace each value with the string representing the node connected to the key.

my_graph = {
    'A': 'B',
    'B': 'A'
}

# Step 13

# Add another node connected to B to your graph and call it C.

# Modify your existing dictionary to represent this arrangement. 
# Use a list to represent the multiple connections of your B node.

my_graph = {
    'A': 'B',
    'B': ['A', 'C'],
    'C': 'B'
}

# Step 14

# Add one last node, D, which is connected with A and C. 
# Modify your dictionary to represent this structure. 
# Again, use a list to represent multiple connections.

my_graph = {
    'A': ['D', 'B'],
    'B': ['A', 'C'],
    'C': ['D', 'B'],
    'D': ['A', 'C']
}

# Step 15

# A graph is called a weighted graph when its edges are associated with weights, representing a distance, 
# time or other quantitative value.

# In your case, these weights will be the distances between each node, or point in space. 
# To represent a weighted graph you can modify your dictionary, using a list of tuples for each value.

# The first element in the tuple will be the connected node, and the second element will be an integer number 
# indicating the distance.

# Modify my_graph["A"] into a list of tuples, considering the following distances:

    # Edge 	Weight
    # A-B 	3
    # B-C 	4
    # C-D 	7
    # D-A 	1

my_graph = {
    'A': [('B', 3), ('D', 1)],
    'B': [('A', 3), ('C', 4)],
    'C': [('B', 4), ('D', 7)],
    'D': [('A', 1), ('C', 7)]
}

# Step 18

# Now you are going to start developing the algorithm to calculate the shortest path between each node 
# in your new graph.

# Declare an empty function called shortest_path and don't forget the pass keyword.

def shortest_path():
    pass

# Step 19

# The algorithm will start at a specified node. 
# Then it will explore the graph to find the shortest path between the starting node, or source, 
# and all the other nodes.

# For that your function needs two parameters: graph, and start. Add them to your function declaration.

# Step 20

# To keep track of the visited nodes, you need a list of all the nodes in the graph. 
# Once a node is visited, it will be removed from that list.

# Now, replace the pass keyword with a variable named unvisited and assign it an empty list.

def shortest_path(graph, start):
    unvisited = []

# Step 21

# Create a for loop to iterate over your graph, and append each node to the unvisited list.

def shortest_path(graph, start):
    unvisited = []
    for node in graph:
        unvisited.append(node)

# Step 22

# While the algorithm explores the graph, it should keep track of the currently known shortest distance between 
# the starting node and the other nodes.

# Before your for loop, create a new variable named distances and assign it an empty dictionary.

# Step 23

# The distance from the starting node is zero, because the algorithm begins its assessment right from there.
# After appending node to unvisited in your loop, create an if statement that triggers if the node is equal to the starting node. Then assign 0 to that node inside the distances dictionary.

def shortest_path(graph, start):
    unvisited = []
    distances = {}
    for node in graph:
        unvisited.append(node)
        if node == start:
            distances[node] = 0

# Step 24

# At the beginning, all the other nodes in the graph are considered to be at infinite distance from the 
# source node, because the distance has not been determined yet.

#Create an else clause and assign an infinite value to the node in the distances dictionary. 
# For that, use the float() function with the string inf as argument to generate a floating point number 
# representing the positive infinity.

def shortest_path(graph, start):
    unvisited = []
    distances = {}
    for node in graph:
        unvisited.append(node)
        if node == start:
            distances[node] = 0
        else:
            distances[node] = float('inf')

# Step 25

# After your for loop, add a print() call and pass in the following string to see the values of 
# the variables you have created: f'Unvisited: {unvisited}\nDistances: {distances}'.

def shortest_path(graph, start):
    unvisited = []
    distances = {}
    for node in graph:
        unvisited.append(node)
        if node == start:
            distances[node] = 0
        else:
            distances[node] = float('inf')
    print(f'Unvisited: {unvisited}\nDistances: {distances}')

# Step 26

# Now, call your function passing my_graph and 'A' as the arguments.

def shortest_path(graph, start):
    unvisited = []
    distances = {}
    for node in graph:
        unvisited.append(node)
        if node == start:
            distances[node] = 0
        else:
            distances[node] = float('inf')
    print(f'Unvisited: {unvisited}\nDistances: {distances}')
shortest_path(my_graph, 'A')

# Step 27

# All the distances in distances are set to infinite, except for the starting node. 
# The unvisited list contains all the nodes in your graph. 
# But actually, you don't need that for loop to achieve this result.

# Remove your for loop with its entire body.

def shortest_path(graph, start):
    unvisited = []
    distances = {}
    
    print(f'Unvisited: {unvisited}\nDistances: {distances}')
    
shortest_path(my_graph, 'A')

# Step 28

# The list() type constructor enables you to build a list from an iterable.

# Modify the assignment of your unvisited variable to use list(), and pass graph as the iterable.

def shortest_path(graph, start):
    unvisited = list(graph)
    distances = {}
    
    print(f'Unvisited: {unvisited}\nDistances: {distances}')
    
shortest_path(my_graph, 'A')

# Step 29

# With a dictionary comprehension, you can create a dictionary starting from an existing dictionary:

{key: val for key in dict}

# You want to keep track of the paths between the starting node and each other node.

# After the distances variable, create a paths variable and assign it a dictionary with all the keys from graph. 
# Assign an empty list to each key and use a dictionary comprehension to build your dictionary.

def shortest_path(graph, start):
    unvisited = list(graph)
    distances = {}
    paths = {node: [] for node in graph}
    print(f'Unvisited: {unvisited}\nDistances: {distances}')
    
shortest_path(my_graph, 'A')

# Step 30

# Dictionary comprehensions support conditional if/else syntax too:

{key: val_1 if condition else val_2 for key in dict}

# Use a dictionary comprehension to create a dictionary based in graph and assign it to the distances variable. 
# Give the key a value of zero if the node is equal to the starting node, and infinite otherwise. 
# Use float('inf') to achieve the latter.

def shortest_path(graph, start):
    unvisited = list(graph)
    distances = {node: 0 if node == start else float('inf') for node in graph}
    paths = {node: [] for node in graph}
    print(f'Unvisited: {unvisited}\nDistances: {distances}')
    
shortest_path(my_graph, 'A')

# Step 31

# Since the algorithm begins its assessment from the starting node, after creating the paths dictionary, 
# you need to add the starting node to its own list in the paths dictionary.

# Use the append() method to append start to the paths[start] list.

def shortest_path(graph, start):
    unvisited = list(graph)
    distances = {node: 0 if node == start else float('inf') for node in graph}
    paths = {node: [] for node in graph}
    paths[start].append(start)
    print(f'Unvisited: {unvisited}\nDistances: {distances}')
    
shortest_path(my_graph, 'A')

# Step 32

# Add \nPaths: {paths} at the end of the f-string passed to the print call, 
# so that it prints the paths variable, too.

# Step 33

# Your function is going to explore all the nodes connected to the starting node. 
# It will calculate the shortest paths for all of them. 
# Then, it will remove the starting node from the unvisited nodes.

# Next, the closest neighbor node will be visited and the process will be repeated until all the nodes are visited.

# From now on, you are going to work on the main loop that explores the nodes in the graph. 
# To avoid issues with running an infinite loop during the algorithm development, 
# turn your function call into a comment.

def shortest_path(graph, start):
    unvisited = list(graph)
    distances = {node: 0 if node == start else float('inf') for node in graph}
    paths = {node: [] for node in graph}
    paths[start].append(start)
    
    print(f'Unvisited: {unvisited}\nDistances: {distances}\nPaths: {paths}')
    
#shortest_path(my_graph, 'A')

# Step 34

# Before the print call, create a while loop that runs while unvisited is not empty. 
# Use the pass keyword to fill the loop body.

def shortest_path(graph, start):
    unvisited = list(graph)
    distances = {node: 0 if node == start else float('inf') for node in graph}
    paths = {node: [] for node in graph}
    paths[start].append(start)
    while unvisited:
        pass
    print(f'Unvisited: {unvisited}\nDistances: {distances}\nPaths: {paths}')
    
#shortest_path(my_graph, 'A')

# Step 35

# Inside the while loop, the first thing to do is define the current node to visit. 
# For that you can use the min() function. It returns the smallest item from the iterable passed as the argument.

# Remove pass, then create a variable called current and assign it min(unvisited).

    while unvisited:
        current = min(unvisited)

# Step 36

# min() takes also a keyword-only argument. 
# Passing a function as an additional argument to min(), you can modify the way the list items are compared.

# The result of the line you've just written in the previous step is the node that comes first in 
# alphabetical order. Instead you want to select the unvisited node having the smallest distance 
# from the starting node.

# Pass key=distances.get as the second argument to your min() call. 
# In this way, the comparison will take place depending on the value each unvisited list item has 
# inside the distances dictionary.

    while unvisited:
        current = min(unvisited, key=distances.get)

# Step 37

# After the current variable assignment, create a for loop to iterate over the tuples in the graph[current] list. 
# You will need two iterating variables for that.

    while unvisited:
        current = min(unvisited, key=distances.get)
        for A, B in graph[current]:
            pass

# Step 38

# Create an if statement to check if the distance of the neighbor node (the second item in the processed tuple) 
# plus the distance of current is less than the currently known distance of the neighbor node 
# (the first item in the processed tuple).

# Use the pass keyword to temporarily fill the body of the if.

        for node, distance in graph[current]:
            if distance + distances[current] < distances[node]:
                pass

# Step 39

# Inside your new if block, delete pass and reassign the neighbor node distance to the sum of the neighbor node 
# distance plus the distance of current.

            if distance + distances[current] < distances[node]:
                distances[node] = distance + distances[current]

# Step 40

# Once the distance to a node is set inside the distances dictionary, 
# you need to keep track of the path to that node, too. 
# If the distance for the node in the processed tuple has been updated, the last item in its path 
# is the node itself.

# Inside your conditional, nest another if statement that triggers when the last element of 
# paths[node] is equal to node.

    while unvisited:
        current = min(unvisited, key=distances.get)
        for node, distance in graph[current]:
            if distance + distances[current] < distances[node]:
                distances[node] = distance + distances[current]
                if paths[node][-1] == node:
                    pass

# Step 41

# Now remove pass and assign paths[current] to paths[node].

    while unvisited:
        current = min(unvisited, key=distances.get)
        for node, distance in graph[current]:
            if distance + distances[current] < distances[node]:
                distances[node] = distance + distances[current]
                if paths[node][-1] == node:
                    paths[node] = paths[current]

# Step 42

# Next, create an else statement and use the extend() function to add the current node path to the neighbor 
# node path.

                if paths[node][-1] == node:
                    paths[node] = paths[current]
                else:
                    paths[node].extend(paths[current])

# Step 43

# Finally, outside the nested conditionals, append the neighbor node to its path.

    while unvisited:
        current = min(unvisited, key=distances.get)
        for node, distance in graph[current]:
            if distance + distances[current] < distances[node]:
                distances[node] = distance + distances[current]
                if paths[node][-1] == node:
                    paths[node] = paths[current]
                else:
                    paths[node].extend(paths[current])
                paths[node].append(node)

# Step 44

# Terminate the while loop by removing the current node from the unvisited list. 
# Pay attention to the indentation.

    while unvisited:
        current = min(unvisited, key=distances.get)
        for node, distance in graph[current]:
            if distance + distances[current] < distances[node]:
                distances[node] = distance + distances[current]
                if paths[node][-1] == node:
                    paths[node] = paths[current]
                else:
                    paths[node].extend(paths[current])
                paths[node].append(node)
        unvisited.remove(current)

# Step 45

# If you try to uncomment your function call, it won't work. 
# You have a couple of bugs to fix. The first one happens because in the nested if you are trying to access 
# that might not exist in your paths dictionary. So, you need to be sure that paths[node] is not empty before 
# accessing paths[node][-1].

# Add an additional condition to your nested if statement to ensure that paths[node] is non-empty 
# before accessing paths[node][-1].

if paths[node] and paths[node][-1] == node:
    paths[node] = paths[current][:]

# Step 47

# The other bug is subtle. When a shorter distance is found for a neighbor node, paths[current] gets assigned 
# to the neighbor node path, paths[node].

# This means both variables point to the same list. Since lists are mutable, when you append the neighbor node 
# to its path, both paths[node] and paths[current] are modified because they are the same list. 
# This results in wrong paths, although the distances are correct.

# Fix that bug by assigning a copy of paths[current] to the neighbor node path. 
# Modify the existing assignment inside your if block.

if paths[node] and paths[node][-1] == node:
    paths[node] = paths[current][:]

# Step 48

# The algorithm is complete but you can improve the output. 
# Also, you can provide the function with an additional argument to return only the path between two nodes.

# Add target as the third parameter to your function declaration and give it the default value of an empty string.

# Step 49

# Python provides a concise way to write if/else conditionals by using the ternary syntax:

    # val_1 if condition else val_2

# The expression above evaluates to val_1 if condition is true, otherwise to val_2.

# Delete your print call and create a variable called targets_to_print after your while loop. 
# Use the ternary syntax to assign it [target] when target is truthy, and graph otherwise.

    targets_to_print = [target] if target else graph
    
shortest_path(my_graph, 'A')

# Step 50

# Create a for loop to iterate over targets_to_print and print the following f-string: 
# f'\n{start}-{node} distance: {distances[node]}\nPath: {" -> ".join(paths[node])}'.

targets_to_print = [target] if target else graph
for node in targets_to_print:
    print(f'\n{start}-{node} distance: {distances[node]}\nPath: {" -> ".join(paths[node])}')

shortest_path(my_graph, 'A')

# 

