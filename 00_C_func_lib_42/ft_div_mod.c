/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_div_mod.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/11/29 21:14:44 by creinis           #+#    #+#             */
/*   Updated: 2022/11/29 21:51:41 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

void	ft_div_mod(int a, int b, int *div, int *mod)
{
	if (b != 0)
	{
	*div = a / b;
	*mod = a % b;
	}
}

int	main(void)
{
	int	x;
	int	y;
	int	div;
	int	mod;

	x = 20;
	y = 5;
	ft_div_mod(x, y, &div, &mod);
	printf("%d/%d = %d, left %d\n", x, y, div, mod);
}
