/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   aff_a.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/08 12:19:19 by creinis           #+#    #+#             */
/*   Updated: 2022/12/08 12:35:08 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

//Write a program that takes a string, and displays the first 'a' character it
//encounters in ti, followed by a new line. If the are no 'a' characters in it
//string, the program just writes a newline. If the number of parameters is not
//1, the program displays 'a' followed by a newline.
//
#include <unistd.h>

int	main(int argc, char **argv)
{
	if(argc <= 1)
	write(1, "a", 1);//if the number of param is not 1
	else
	{
		while(*argv[1])
		{
			if(*argv[1]++ == 'a')
			write(1, "a", 1);
			break;
			
		}
	}
	write(1, "\n", 1);//followed by a newline
	return (0);
}
