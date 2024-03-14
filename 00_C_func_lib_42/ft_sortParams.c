

#include <unistd.h>

int	my_strcmp(char *s1, char *s2);

int	my_strcmp(char *s1, char *s2)
{
	while (*s1 == *s2)
	{
		if (*s1 == 0)
			return (*s1 - *s2);
		s1 += 1;
		s2 += 1;
	}
	return (*s1 - *s2);
}

void	print_string(char *str, int repetition)
{
	int	length;

	length = 0;
	while (str[length])
	{
		length++;
	}
	while (repetition--)
	{
		write(1, str, length);
		write(1, "\n", 1);
	}
}

int	print_next(int argc, char **argv, int j, int *last_printed)
{
	int	i;
	int	repetition;
	int	next_print;

	next_print = -1;
	i = 1;
	while (i < argc)
	{
		if (*last_printed == -1 || my_strcmp(argv[*last_printed], argv[i]) < 0)
		{
			if (next_print != -1 && my_strcmp(argv[next_print], argv[i]) == 0)
				repetition++;
			if (next_print == -1 || my_strcmp(argv[next_print], argv[i]) > 0)
			{
				repetition = 1;
				next_print = i;
			}
		}
		i++;
	}
	print_string(argv[next_print], repetition);
	*last_printed = next_print;
	return (j + repetition);
}

int	main(int argc, char **argv)
{
	int	last_printed;
	int	j;

	if (argc == 0)
		return (0);
	last_printed = -1;
	j = 1;
	while (j < argc)
	{
		j = print_next(argc, argv, j, &last_printed);
	}
}

