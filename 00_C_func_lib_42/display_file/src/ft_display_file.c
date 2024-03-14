
//#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>

#include "ft_display_file.h"

int	ft_display_file(char *str)
{
	int		file;
	int		size_read;
	char	buffer[200];

	file = open(str, O_RDONLY);
	if (file < 0)
		return (1);
	while (1)
	{
		size_read = read(file, buffer, 200);
		if (size_read > 0)
			write(1, buffer, size_read);
		if (size_read == 0)
			break ;
		if (size_read < 0)
			return (1);
	}
	close(file);
	return (0);
}

