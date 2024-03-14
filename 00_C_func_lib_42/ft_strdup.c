

#include <stdlib.h>

char	*ft_strcpy(char *dest, char *src)
{
	char	*it;

	it = dest;
	while (*src)
	{
		*it = *src;
		it++;
		src++;
	}
	*it = 0;
	return (dest);
}

char	*ft_strdup(char *src)
{
	int		i;
	char	*new_str;

	i = 0;
	while (src[i])
		i++;
	new_str = (char *) malloc(i + 1);
	ft_strcpy(new_str, src);
	return (new_str);
}

