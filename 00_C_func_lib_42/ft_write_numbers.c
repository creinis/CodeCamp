/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_numbers.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/08 17:19:41 by creinis           #+#    #+#             */
/*   Updated: 2022/12/08 18:04:30 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	ft_write_number(int n)
{
	if(n > 9)
		ft_write_number(n / 10);
	write(1, &"0123456789"[n % 10], 1);
}

int	main(void)
{
	int	n;
	
	n = 1;
	while(n <= 100)
	{
		if(n % 3 == 0 && n % 5 == 0)
			write(1, "div3div5", 8);
		else
		{
			if(n % 3 == 0)
			write(1, "div3", 4);
			if(n % 5 == 0)
			write(1, "div5", 4);
		}
		if(n % 3 != 0 && n % 5 != 0)
		ft_write_number(n);
		write(1, "\n", 1);
		n++;
	}
}
