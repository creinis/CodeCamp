/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_print_comb.c                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/11/25 10:35:32 by creinis           #+#    #+#             */
/*   Updated: 2022/11/28 19:26:47 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	write_number(char d[])
{
	if (d[0] == '7' && d[1] == '8' && d[2] == '9')
	{
		write(1, d, 3);
	}
	else
		write(1, d, 5);
}

void	ft_print_comb(void)

{
	char	d[5];

	d[0] = '0';
	d[3] = ',';
	d[4] = ' ';
	while (d[0] <= '7')
	{
		d[1] = d[0] + 1;
		while (d[1] <= '9')
		{
			d[2] = d[1] +1;
			while (d[2] <= '9')
			{
				write_number(d);
				d[2]++;
			}
			d[1]++;
		}
		d[0]++;
	}
}

int main(void)
{
	ft_print_comb();
	return(0);
}