/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_putaddr.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/01 20:44:19 by creinis           #+#    #+#             */
/*   Updated: 2022/12/01 20:56:54 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	ft_putchar(char ptr);
void	ft_putnbr(int ptr);
void	ft_putaddr(void *ptr);

void	ft_putchar(char c)
{
	write(1, &c, 1);
	write(1, "\n", 1);
}


int		main(void)
{
	int	a;
	int b;
	int *ptr;
	
	a = 3;
	b = 42;
	ptr = &b;
	ft_putaddr(&a);
	ft_putchar(' ');
	ft_putnbr(a);
	ft_putchar('\n');
	ft_putchar(' ');
	ft_putaddr(&b);
	ft_putchar('\n');
	return (0);
}