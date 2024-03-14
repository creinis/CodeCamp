

#include <unistd.h>

void	write_string(char *str)
{
	int	i;

	i = 0;
	while (*str)
		i++;
	write(1, str, i);
}

void	write_error(char *str)
{
	int	i;

	i = 0;
	while (str[i])
		i++;
	write(2, str, i);
}

