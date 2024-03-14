

#include <stdlib.h>

int	is_seperator(char test, const char *seperators)
{
	while (*seperators)
	{
		if (test == *seperators)
			return (1);
		seperators++;
	}
	return (0);
}

int	count_elem(const char *str, const char *charset)
{
	int	splits;

	splits = 1;
	while (*str)
	{
		if (is_seperator(*str, charset) == 1
			&& is_seperator(str[1], charset) == 0
			&& *(str + 1))
		{
			splits++;
		}
		str++;
	}
	return (splits);
}

char	*add_split(const char *str, const char *charset)
{
	int		i;
	char	*return_string;

	i = 0;
	while (str[i] && is_seperator(str[i], charset) == 0)
	{
		i++;
	}
	return_string = malloc(sizeof(char) * i + 1);
	i = 0;
	while (str[i] && is_seperator(str[i], charset) == 0)
	{
		return_string[i] = str[i];
		i++;
	}
	return_string[i] = 0;
	return (return_string);
}

char	**ft_split(const char *str, const char *charset)
{
	char	**splits;
	int		i;

	splits = (char **)malloc(sizeof(char *) * (count_elem(str, charset) + 1));
	while (is_seperator(*str, charset) == 1)
		str++;
	i = 0;
	if (is_seperator(str[0], charset) == 0 && *str)
	{
		splits[0] = add_split(str, charset);
		i = 1;
	}
	while (*str)
	{
		if (is_seperator(*str, charset) == 1
			&& is_seperator(str[1], charset) == 0
			&& *(str + 1))
		{
			splits[i] = add_split(str + 1, charset);
			i++;
		}
		str++;
	}
	splits[i] = 0;
	return (splits);
}

