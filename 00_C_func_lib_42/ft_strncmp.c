/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strncmp.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/05 12:44:38 by creinis           #+#    #+#             */
/*   Updated: 2022/12/05 13:02:32 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <string.h>
#include <stdio.h>

int	ft_strncmp(char *s1, char *s2, unsigned int n)
{
	unsigned int	x;

	x = 0;
	while (x < n && (s1[x] != '\0' || s2[x] != '\0'))
	{
		if (s1[x] > s2[x])
		{
			return (99);
		}
		if (s1[x] < s2[x])
		{
			return (-99);
		}
		x++;
	}
	return (0);
}

int	main(void)
{
	printf("%d\n", ft_strncmp("Aloesd", "Aloesd", 6));
	printf("%d\n", ft_strncmp("ble-ble", "bla-bla", 7));
	printf("%d\n", ft_strncmp("bla", "bla-bla-bla", 11));
	printf("%d\n", ft_strncmp("ble-ble", "bla", 7));
}
