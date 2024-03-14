int	ft_iterative_power(int nb, int power)
{
	int	start_val;

	start_val = nb;
	if (power == 0)
		return (1);
	if (nb == 0)
		return (0);
	if (power < 0)
		return (0);
	while (--power >= 1)
		nb *= start_val;
	return (nb);
}
