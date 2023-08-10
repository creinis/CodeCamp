/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_str_is_uppercase.c                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/03 16:29:34 by creinis           #+#    #+#             */
/*   Updated: 2022/12/03 16:35:54 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

int	ft_str_is_uppercase(char *str)
{
	int	x;
	
	x = 0;
	while (str[x] != '\0')
	{
		if (str[x] >= 'A' && str[x] <= 'Z')
			x++;
		else
			return (0);
	}
	return (1);
}
int	main(void)
{
	printf ("%d", ft_str_is_uppercase("SADFCVBSGH"));
	printf ("%d", ft_str_is_uppercase("asghbnhjkj"));
	printf ("%d", ft_str_is_uppercase("12984_87:9"));
	printf ("%d", ft_str_is_uppercase(""));
}