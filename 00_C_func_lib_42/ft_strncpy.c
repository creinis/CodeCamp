/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strncpy.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 20:02:41 by creinis           #+#    #+#             */
/*   Updated: 2022/12/04 14:04:26 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>
#include <string.h>

char	*ft_strncpy(char *dest, char *src, unsigned int n)
{
	unsigned int	i;
	
	i = 0;
	while (src[i] != '\0' && i < n)
	{
		dest[i] = src[i];
		i++;
	}
	while (i < n)
	{
		dest[i] = '\0';
		i++;
	}
	return(dest);
}

int	main()
	{
	char src[] = "olá";
	char dest[] = "mundo";
	char dest1[] = "planeta";
	
	printf("%s\n", ft_strncpy(dest, src, 3));
	printf("%s\n", strncpy(dest1, src, 3));
	printf("%s\n", ft_strncpy(dest, src, 4));
	printf("%s\n", strncpy(dest1, src, 4));
	printf("%s\n", ft_strncpy(dest, src, 2));
	printf("%s\n", strncpy(dest1, src, 2));
	}
	