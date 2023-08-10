/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strncat.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/05 14:37:17 by creinis           #+#    #+#             */
/*   Updated: 2022/12/05 14:54:36 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <string.h>
#include <stdio.h>

char	*ft_strncat(char *dest, char *src, unsigned int nb)
{
	int	x;
	int	y;

	x = 0;
	y = 0;
	while (dest[x] != '\0')
	{
		x++;
	}
	while (src[y] != '\0' && nb > 0)
	{
		dest[x] = src[y];
		x++;
		y++;
		nb--;
	}
	dest[x] = src[y];
	return (dest);
}

int	main(void)
{
	char	src[] = "+Destination";
	char	dest[] = "Source-";
	printf ("%s\n", ft_strncat(dest, src, 12));
}
