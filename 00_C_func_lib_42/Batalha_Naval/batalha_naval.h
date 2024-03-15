#ifndef BATALHA_NAVAL_H
#define BATALHA_NAVAL_H

#include <stdbool.h>

void place_ships(char board[10][20]);
bool is_valid_move(int row, int col);
bool is_hit(char board[10][20], int row, int col);
bool all_ships_sunk(char board[10][20]);

#endif
