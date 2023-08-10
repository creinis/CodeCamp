/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_str_is_lowercase.c                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/03 16:16:00 by creinis           #+#    #+#             */
/*   Updated: 2022/12/03 17:04:46 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

int	ft_str_is_lowercase(char *str)
{
	int	x;
	
	x = 0;
	while (str[x] != '\0')
	{
		if (str[x] >= 'a' && str[x] <= 'z')
			x++;
		else
			return (0);
	}
	return (1);
}

int	main(void)
{
	printf ("%d", ft_str_is_lowercase("rehAdkMnds"));
	printf ("%d", ft_str_is_lowercase("asghbnhjkj"));
	printf ("%d", ft_str_is_lowercase("12984_87:9"));
	printf ("%d", ft_str_is_lowercase(""));
}