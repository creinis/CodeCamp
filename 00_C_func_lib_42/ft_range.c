

#include <stdlib.h>

int	*ft_range(int min, int max);

int	*ft_range(int min, int max)
{
	int	*new_array;
	int	size;
	int	i;

	if (min >= max)
		return (0);
	size = max - min;
	new_array = (int *)malloc(sizeof(int) * size);
	i = 0;
	while (min + i != max)
	{
		new_array[i] = min + i;
		i++;
	}
	return (new_array);
}

