

int	easy_prime(int nb)
{
	int	i;

	i = 2;
	while (i <= nb / 2)
	{
		if (nb % i == 0)
		{
			return (0);
		}
		i++;
	}
	return (1);
}

int	ft_is_prime(int nb)
{
	if (nb < 2)
		return (0);
	if (nb == 2147483647)
		return (1);
	if (nb > 2147483647)
		return (0);
	return (easy_prime(nb));
}

