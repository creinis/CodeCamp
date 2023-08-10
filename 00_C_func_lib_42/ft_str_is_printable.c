/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_str_is_printable.c                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/03 16:37:04 by creinis           #+#    #+#             */
/*   Updated: 2022/12/03 20:29:45 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

int	ft_str_is_printable(char *str)
{
	int	x;

	x = 0;
	while (str[x] != '\0')
	{
		if (str[x] >= 32 && str[x] <= 126)
			x++;
		else
			return (0);
	}
	return (1);
}

int	main(void)
{
	printf ("%d", ft_str_is_printable("rehAdkMnds"));
	printf ("%d", ft_str_is_printable("asghbnhjkj"));
	printf ("%d", ft_str_is_printable("12984_87:9"));
	printf ("%d", ft_str_is_printable(""));
}