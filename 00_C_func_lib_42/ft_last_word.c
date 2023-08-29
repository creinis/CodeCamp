/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_last_word.c                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/05 13:03:14 by creinis           #+#    #+#             */
/*   Updated: 2022/12/05 14:36:33 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


#include <unistd.h>
void	last_word(char *str)
{
	int	i = 0;
	while (str[i] != '\0')
		i++;
	i -= 1;
	while(str[i] == '\t' || str[i] == 32)
		i--;
	while (i > 0)
	{	if(str[i] == 32 && str[i] == '\t')
			break;
		i--;
	}
	i++;
	while (str[i] != '\0' && str[i] != 32 && str[i] != '\t')
	{
		write(1, &str[i], 1);
		i++;
	}
}
int main(int ac, char **av)
{
	if (ac == 2)
		last_word(av[1]);
	write(1, "\n", 1);
}


