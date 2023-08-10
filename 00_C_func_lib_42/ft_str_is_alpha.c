/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_str_is_alpha.c                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 21:35:12 by creinis           #+#    #+#             */
/*   Updated: 2022/12/04 14:05:33 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>
#include <unistd.h>

int	ft_str_is_alpha(char *str)
{
	int	x;

	x = 0;
	if (str[x] == '\0')
	{
		return (1);
	}
	while (str[x] != '\0')
	{
		if ((str[x] >= 'a' && str[x] <= 'z')
			|| (str[x] >= 'A' && str[x] <= 'Z'))
		{
			x++;
		}
		else
		{
			return (0);
		}
	}
	return (1);
}

 int	main(void)
{
	printf ("%d", ft_str_is_alpha("rehAdkMnds"));
	printf ("%d", ft_str_is_alpha("rehg5678sa"));
	printf ("%d", ft_str_is_alpha("12984_87:9"));
	printf ("%d", ft_str_is_alpha(""));
}
 