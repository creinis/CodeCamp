/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strcapitalize.c                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/03 17:08:59 by creinis           #+#    #+#             */
/*   Updated: 2022/12/04 14:09:29 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

char	*ft_strlowcase(char *str)
{
	int	x;

	x = 0;
	while (str[x] != '\0')
	{
		if (str[x] >= 'A' && str[x] <= 'Z')
		{
			str[x] = str[x] + 32;
		}
		x++;
	}
	return (str);
}

char	*ft_strcapitalize(char *str)
{
	int	x;

	x = 0;
	ft_strlowcase(str);
	while (str[x] != '\0')
	{
		if (str[x] >= 'a' && str[x] <= 'z')
		{
			if (x == 0)
			str[x] = str[x] - 32;
			x = 0;
		}
		if (str[x] == ' ' || str[x] == '-' || str[x] == '+')
		{
			str[x + 1] = str[x + 1] - 32;
		}
		x++;
	}
	return (str);
}


int	main()
{
	char str = "salut, comment tu vas ? 42mots quarante-deux; cinquante+et+un";
	printf("%s\n", ft_strcapitalize(str));
}
