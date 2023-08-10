/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_str_is_numeric.c                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/03 14:34:38 by creinis           #+#    #+#             */
/*   Updated: 2022/12/03 16:14:59 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

int	ft_str_is_numeric(char *str)
{
	int	x;

	x = 0;
	while (str[x] != '\0')
	{
		if (str[x] >= '0' && str[x] <= '9')
			x++;
		else
			return (0);
	}
	return (1);
}

int	main(void)
{
	printf ("%d", ft_str_is_numeric("rehAdkMnds"));
	printf ("%d", ft_str_is_numeric("1287986098"));
	printf ("%d", ft_str_is_numeric("12984_87:9"));
	printf ("%d", ft_str_is_numeric(""));
}
