/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strcmp.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/05 12:01:40 by creinis           #+#    #+#             */
/*   Updated: 2022/12/05 12:43:50 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <string.h>
#include <stdio.h>

int	ft_strcmp(char *s1, char *s2)
{
	int	x;

	x = 0;
	while (s1[x] == s2[x] && (s1[x] != '\0' || s2[x] != '\0'))
		x++;
	return (s1[x] - s2[x]);
}

int	main(void)
{
	printf("%d\n", ft_strcmp("Aloesd", "Oládfg"));
	printf("%d\n", ft_strcmp("ble-ble", "bla-bla"));
	printf("%d\n", ft_strcmp("Zxcv", "Zxcv"));
	printf("%d\n", ft_strcmp("42", "42"));
}
