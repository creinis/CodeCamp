

#include <unistd.h>

int	main(int argc, char **argv)
{
	int	i;
	int	length;

	i = 1;
	while (i < argc)
	{
		length = 0;
		while (argv[i][length])
		{
			length++;
		}
		write(1, argv[i], length);
		write(1, "\n", 1);
		i++;
	}
}

