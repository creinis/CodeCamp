import numpy as np


def calculate(input_list):

  if len(input_list) != 9:
    raise ValueError("List must contain nine numbers.")
  else:
    matrix = np.array(input_list).reshape(3, 3)
    calculations = {
        # Mean
        'mean':
        [list(matrix.mean(axis=0)),
         list(matrix.mean(axis=1)),
         matrix.mean()],

        # Variance
        'variance':
        [list(matrix.var(axis=0)),
         list(matrix.var(axis=1)),
         matrix.var()],

        # Standard Deviation
        'standard deviation':
        [list(matrix.std(axis=0)),
         list(matrix.std(axis=1)),
         matrix.std()],

        # Max
        'max':
        [list(matrix.max(axis=0)),
         list(matrix.max(axis=1)),
         matrix.max()],

        # Min
        'min':
        [list(matrix.min(axis=0)),
         list(matrix.min(axis=1)),
         matrix.min()],

        # Sum
        'sum':
        [list(matrix.sum(axis=0)),
         list(matrix.sum(axis=1)),
         matrix.sum()],
    }

  return calculations
