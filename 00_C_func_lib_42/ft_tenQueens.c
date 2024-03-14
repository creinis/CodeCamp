

#include <unistd.h>

const int	g_size = 10;

struct	s_qu
{
	int		queenrow;
	int		queencol;
	long	queend1;
	long	queend2;
};

int	is_valid_queen(int row, int col, struct s_qu *queens)
{
	int	rowfree;
	int	colfree;
	int	d1free;
	int	d2free;

	rowfree = queens->queenrow >> row & 1;
	colfree = queens->queencol >> col & 1;
	d1free = queens->queend1 >> (row + col) & 1;
	d2free = queens->queend2 >> (g_size - 1 - row + col) & 1;
	return ((rowfree + colfree + d1free + d2free) == 0);
}

void	add_queen(int row, int col, struct s_qu *queens)
{
	queens->queenrow |= 1 << row;
	queens->queencol |= 1 << col;
	queens->queend1 |= 1 << (row + col);
	queens->queend2 |= 1 << (g_size - 1 - row + col);
}

void	remove_queen(int row, int col, struct s_qu *queens)
{
	queens->queenrow &= ~(1 << row);
		queens->queencol &= ~(1 << col);
		queens->queend1 &= ~(1 << (row + col));
		queens->queend2 &= ~(1 << (g_size - 1 - row + col));
}

int	solve(int row, struct s_qu *queens, int *sol_ct, char *solution)
{
	int			i;

	i = 0;
	while (i < g_size)
	{
		if (is_valid_queen(row, i, queens))
		{
			add_queen(row, i, queens);
			solution[row] = i + '0';
			if (row < g_size - 1)
			{
				solve(row + 1, queens, sol_ct, solution);
			}
			else
			{
				write(1, solution, g_size + 1);
				(*sol_ct)++;
			}
			remove_queen(row, i, queens);
		}
	i++;
	}
	return (*sol_ct);
}

int	ft_ten_queens_puzzle(void)
{
	struct s_qu	queens;
	int			sol_ct;
	char		solution[11];

	solution[10] = '\n';
	sol_ct = 0;
	queens.queenrow = 0;
	queens.queencol = 0;
	queens.queend1 = 0;
	queens.queend2 = 0;
	solve(0, &queens, &sol_ct, solution);
	return (sol_ct);
}
