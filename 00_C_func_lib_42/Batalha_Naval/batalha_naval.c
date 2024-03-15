#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>

#define SHIP 'S'
#define HIT 'X'
#define MISS '-'

void place_ships(char board[10][20]) {
    // Inicializar todas as células do tabuleiro como vazio
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 20; j++) {
            board[i][j] = '~';
        }
    }

    // Colocar navio de tamanho 2
    int row = rand() % 9;
    int col = rand() % 19;
    while (board[row][col] != '~' || board[row][col + 1] != '~') {
        row = rand() % 9;
        col = rand() % 19;
    }
    board[row][col] = SHIP;
    board[row][col + 1] = SHIP;

    // Colocar navio de tamanho 3
    row = rand() % 9;
    col = rand() % 18;
    while (board[row][col] != '~' || board[row][col + 1] != '~' || board[row][col + 2] != '~') {
        row = rand() % 9;
        col = rand() % 18;
    }
    board[row][col] = SHIP;
    board[row][col + 1] = SHIP;
    board[row][col + 2] = SHIP;

    // Colocar navio de tamanho 4
    row = rand() % 9;
    col = rand() % 17;
    while (board[row][col] != '~' || board[row][col + 1] != '~' || board[row][col + 2] != '~' || board[row][col + 3] != '~') {
        row = rand() % 9;
        col = rand() % 17;
    }
    board[row][col] = SHIP;
    board[row][col + 1] = SHIP;
    board[row][col + 2] = SHIP;
    board[row][col + 3] = SHIP;
}

bool is_valid_move(int row, int col) {
    return row >= 0 && row < 10 && col >= 0 && col < 20;
}

bool is_hit(char board[10][20], int row, int col) {
    return board[row][col] == SHIP;
}

bool all_ships_sunk(char board[10][20]) {
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 20; j++) {
            if (board[i][j] == SHIP) {
                return false;
            }
        }
    }
    return true;
}

int main() {
    // Elementos do tabuleiro
    char *upper_legend = "\n    A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T  \n";
    char *upper_lines =  "  ╔═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╗  \n";
    char *middle_lines = "  ╟───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───╢  \n";
    char *lower_lines =  "  ╚═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╝  \n";

    // Tabuleiro
    char board[10][20];

    // Inicializar o gerador de números aleatórios
    srand(time(NULL));

    // Disposição dos navios
    place_ships(board);

    // Desenhar a Legenda superior
    printf("%s", upper_legend);
    // Desenhar a borda superior
    printf("%s", upper_lines);

    // Desenhar as linhas intermediárias
    for (int i = 0; i < 9; i++) {
        printf("%d ", i);
        for (int j = 0; j < 20; j++) {
            if (j == 0 || j == 20) {
                printf("║ %c ", board[i][j]);
            } else {
                printf("| %c ", board[i][j]);
            }
        }
        printf("║\n%s", middle_lines);
    }

    // Desenhar a borda inferior
    printf("9 ");
    for (int j = 0; j < 20; j++) {
        if (j == 0 || j == 20) {
            printf("║ %c ", board[9][j]);
        } else {
            printf("| %c ", board[9][j]);
        }
    }
    printf("║\n%s", lower_lines);

    // Loop do jogo
    while (!all_ships_sunk(board)) {
        // Jogada do jogador
        char letra;
        int numero;
        printf("Digite a letra da coordenada da jogada: ");
        scanf(" %c", &letra);
        printf("Digite o número da coordenada da jogada: ");
        scanf("%d", &numero);

        if (!is_valid_move(numero, letra - 'A')) {
            printf("Coordenadas inválidas. Tente novamente.\n");
            continue;
        }

        if (is_hit(board, numero, letra - 'A')) {
            printf("Você acertou um navio!\n");
            board[numero][letra - 'A'] = HIT;
        } else {
            printf("Você errou.\n");
            board[numero][letra - 'A'] = MISS;
        }

        // Desenhar o tabuleiro
        // Desenhar a Legenda superior
        printf("%s", upper_legend);
        // Desenhar a borda superior
        printf("%s", upper_lines);

        // Desenhar as linhas intermediárias
        for (int i = 0; i < 9; i++) {
            printf("%d ", i);
            for (int j = 0; j < 20; j++) {
                if (j == 0 || j == 20) {
                    printf("║ %c ", board[i][j]);
                } else {
                    printf("| %c ", board[i][j]);
                }
            }
            printf("║\n%s", middle_lines);
        }

        // Desenhar a borda inferior
        printf("9 ");
        for (int j = 0; j < 20; j++) {
            if (j == 0 || j == 20) {
                printf("║ %c ", board[9][j]);
            } else {
                printf("| %c ", board[9][j]);
            }
        }
        printf("║\n%s", lower_lines);
    }

    printf("Parabéns! Você afundou todos os navios.\n");

    return 0;
}
