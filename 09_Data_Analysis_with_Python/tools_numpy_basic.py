import numpy as np

a = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])

print(np.full_like(a, 100))

print(np.zeros((4,2), dtype = 'int32'))

print(np.ones((4,2), dtype = 'int32'))

print(np.full((2,2), 99))

print(np.full_like(4, 4))

print(np.random.rand(4, 2))

print(np.identity(5))

print(np.random.randint(-4, 8, size=(3,3)))


output = np.zeros((7,7))

z = np.ones((5, 5))
z[2, 2] = 5

output[1:-1, 1:-1] = z

# copy array
a = np.array([1,2,3])
b = a.copy()
b[0] = 99

print(a)
print(b)

# Statistics

stats = np.array([[1,2,3],[4,5,6]])

print('exemple array: ', stats)

print('minimum value: ', np.min(stats))

print('maximum value: ', np.max(stats))

print('SUM >>np.sum(stats) will sum all the values: ', np.sum(stats))

print('SUM >>np.sum(stats, axis=0) will sum all the values in the same position: ', np.sum(stats, axis=0))

