/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_inter.c                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/05 13:03:14 by creinis           #+#    #+#             */
/*   Updated: 2022/12/05 14:36:33 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


#include <unistd.h>

int		check_doubles(char *str, char c, int pos)
{
	int i;

	i = 0;
	while (i < pos)
	{
		if (str[i] == c)
			return (0);
		i++;
	}
	return (1);
}
void	inter(char *str, char *str1)
{
	int	i;
	int	j;

	i = 0;
	while (str[i] != '\0')
	{
		j = 0;
		while (str1[j] != '\0')
		{
			if (str[i] == str1[j])
			{
				if (check_doubles(str, str[i], i) == 1)
				{
					write(1, &str[i], 1);
					break;
				}
			}
			j++;
		}
		i++;
	}
}
int		main(int ac, char **av)
{

	if (ac == 3)
		inter(av[1], av[2]);
	write(1, "\n", 1);
	return (0);
}

