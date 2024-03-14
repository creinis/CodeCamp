

int	ft_sqrt(int nb)
{
	int		i;
	long	square;

	i = 0;
	while (i <= 46340)
	{
		square = i * i;
		if (square == nb)
			return (i);
		if (square >= nb)
			return (0);
		i++;
	}
	return (0);
}

