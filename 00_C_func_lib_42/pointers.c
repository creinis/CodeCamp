/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   pointers.c                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: creinis <creinis@student.42heilbronn.de    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/11/29 18:07:47 by creinis           #+#    #+#             */
/*   Updated: 2022/11/29 18:38:44 by creinis          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

int	main(void)
{
	char	c;
	char	*ptr;
	
	c = 'L';
	ptr = &c;	//referencing -> & is the referencing operator//
	*ptr = 'O';	//dereferencing -> * is the dereferencing operator//
	
	write(1, &c, 1);
	return(1);
//Essentially there are only 2 things that can be done with Pointers//
	//1. Referencing: You can store the address of something that already existis (&c)//
	//2. Dereferencing: You can change what is at the address//
}

//Another exemple - now with String//
int	main(void)
{
	char	c;
	char	*ptr;
	char	*str;
	
	str = "LOL";
	str = str + 1; //pointer arithmetics
	if (str != '\0')
	{
		//do something interesting//
	}
	
	write(1, &c, 3);
	return(1);
	//A string always terminate with a 0, so LOL actualy is LOL0//
}

