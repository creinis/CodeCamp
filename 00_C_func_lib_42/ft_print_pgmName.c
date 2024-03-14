

#include <unistd.h>

int	main(int argc, char **argv)
{
	int	length;

	length = 0;
	while (argv[0][length] && argc)
	{
		length++;
	}
	write(1, argv[0], length);
	write(1, "\n", 1);
}

