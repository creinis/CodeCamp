

#include <stdlib.h>

int	ft_strlen(char *str)
{
	int	i;

	i = 0;
	if (!*str)
		return (0);
	while (str[i])
		i++;
	return (i);
}

int	get_combined_length(int size, char **strs, char *sep)
{
	int		i;
	int		combined_length;

	i = 0;
	combined_length = 0;
	while (i < size)
	{
		combined_length += ft_strlen(strs[i]);
		combined_length += ft_strlen(sep);
		i++;
	}
	return (combined_length);
}

int	cpy_string_no_null(char *dst, char *src)
{
	int	i;

	i = 0;
	while (src[i])
	{
		dst[i] = src[i];
		i++;
	}
	return (i);
}

char	*ft_strjoin(int size, char **strs, char *sep)
{
	int		combined_length;
	char	*output;
	char	*output_it;
	int		i;

	i = 0;
	combined_length = get_combined_length(size, strs, sep);
	output = malloc(combined_length + 1);
	if (output == 0)
		return (0);
	output_it = output;
	while (i < size)
	{
		output_it += cpy_string_no_null(output_it, strs[i]);
		if (i != size - 1)
			output_it += cpy_string_no_null(output_it, sep);
		i++;
	}
	*output_it = 0;
	return (output);
}

