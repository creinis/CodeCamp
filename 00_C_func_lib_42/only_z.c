/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_only_z.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/05 13:03:14 by creinis           #+#    #+#             */
/*   Updated: 2022/12/05 14:36:33 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


#include <unistd.h>

int		main(void)
{
	write(1, "z", 1);
	return (0);
}