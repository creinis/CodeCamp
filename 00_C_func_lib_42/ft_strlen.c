/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strlen.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/11/29 22:31:46 by creinis           #+#    #+#             */
/*   Updated: 2022/11/30 11:07:48 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

int	ft_strlen(char *str)
{
	int	x;

	x = 0;
	while (*(str + x))
	{
		x++;
	}
	return (x);
}

int	main(void)
{
	char	*s;

	s = "Hello World";
	printf("%d", ft_strlen(s));
}
