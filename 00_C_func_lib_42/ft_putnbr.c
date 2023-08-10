/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_putnbr.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/11/27 15:30:26 by creinis           #+#    #+#             */
/*   Updated: 2022/11/28 20:08:54 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	ft_putnbr(int nb);

void	ft_putnbr(int nb)
{
	long	nbl;
	char	c[10];
	short	n;

	nbl = nb;
	n = 0;
	if (nb == 0)
	{
		write(1, "0", 1);
		return ;
	}
	if (nbl < 0)
	{
		nbl *= -1;
		write(1, "-", 1);
	}
	while (nbl % 10)
	{
		c[n++] = (nbl % 10) + 48;
		nbl /= 10;
	}
	while (n >= 0)
	{
		write(1, &c[n--], 1);
	}
}

int main(void)
{
	ft_putnbr(-42);
	write(1, "\n",1);
	ft_putnbr(42);
	write(1, "\n",1);
	ft_putnbr(0);
	write(1, "\n",1);
	ft_putnbr(-2147483648);
	write(1, "\n",1);
	ft_putnbr(2147483648);
	write(1, "\n",1);
}
