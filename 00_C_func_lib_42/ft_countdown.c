/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_countdown.c                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/11/29 22:31:46 by creinis           #+#    #+#             */
/*   Updated: 2022/11/30 11:07:48 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


#include <unistd.h>

int		main(void)
{
	char digit;

	digit = '9';
	while (digit >= '0')
	{
		write(1, &digit, 1);
		digit--;
	}
	write(1, "\n", 1);
	return (0);
}
