

#include "write_string.h"
#include "ft_display_file.h"

#include <unistd.h>

void	display_error(int error_code)
{
	if (error_code == 1)
		write_error("File name missing.\n");
	if (error_code == 2)
		write_error("Too many arguments.\n");
	if (error_code == 3)
		write_error("Cannot read file.\n");
	return ;
}

int	main(int argc, char **argv)
{
	if (argc < 2)
	{
		display_error(1);
		return (0);
	}
	if (argc > 2)
	{
		display_error(2);
		return (0);
	}
	if (argc == 2)
	{
		if (ft_display_file(argv[1]) != 0)
			display_error(3);
	}
	return (0);
}

