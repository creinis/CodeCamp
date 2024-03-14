

#include <stdlib.h>

int	ft_ultimate_range(int **range, int min, int max)
{
	int	*new_array;
	int	size;
	int	i;

	if (min >= max)
		return (0);
	size = max - min;
	new_array = (int *)malloc(sizeof(int) * size);
	if (new_array == 0)
	{
		*range = 0;
		return (-1);
	}
	i = 0;
	while (min + i != max)
	{
		new_array[i] = min + i;
		i++;
	}
	*range = new_array;
	return (size);
}

