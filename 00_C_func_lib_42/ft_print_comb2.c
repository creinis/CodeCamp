/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_print_comb2.c                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/11/27 13:32:11 by creinis           #+#    #+#             */
/*   Updated: 2022/11/28 19:54:29 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	write_number_2(int x, int y)
{
	char	numbers[5];

	numbers[0] = x / 10 + '0';
	numbers[1] = x % 10 + '0';
	numbers[2] = ' ';
	numbers[3] = y / 10 + '0';
	numbers[4] = y % 10 + '0';
	write(1, numbers, 5);
	if (x != 98 || y != 99)
	{
		write(1, ", ", 2);
	}
}

void	ft_print_comb2(void)
{
	int	x;
	int	y;

	x = 0;
	while (x <= 99)
	{
		y = x + 1;
		while (y <= 99)
		{
			write_number_2(x, y);
			y++;
		}
		x++;
	}
}

int	main(void)
{
	ft_print_comb2();
}
