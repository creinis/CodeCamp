#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>

#define WATER 0
#define SHIP 1
#define HIT 2
#define MISS 3

void place_ships(int ships[10][20]) {
    // Inicializar todas as células como água
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 20; j++) {
            ships[i][j] = WATER;
        }
    }

    // Colocar navio de tamanho 2
    int row = rand() % 9;
    int col = rand() % 19;
    while (ships[row][col] != WATER || ships[row][col + 1] != WATER) {
        row = rand() % 9;
        col = rand() % 19;
    }
    ships[row][col] = SHIP;
    ships[row][col + 1] = SHIP;

    // Colocar navio de tamanho 3
    row = rand() % 9;
    col = rand() % 18;
    while (ships[row][col] != WATER || ships[row][col + 1] != WATER || ships[row][col + 2] != WATER) {
        row = rand() % 9;
        col = rand() % 18;
    }
    ships[row][col] = SHIP;
    ships[row][col + 1] = SHIP;
    ships[row][col + 2] = SHIP;

    // Colocar navio de tamanho 4
    row = rand() % 9;
    col = rand() % 17;
    while (ships[row][col] != WATER || ships[row][col + 1] != WATER || ships[row][col + 2] != WATER || ships[row][col + 3] != WATER) {
        row = rand() % 9;
        col = rand() % 17;
    }
    ships[row][col] = SHIP;
    ships[row][col + 1] = SHIP;
    ships[row][col + 2] = SHIP;
    ships[row][col + 3] = SHIP;
}

bool is_valid_move(int row, int col) {
    return row >= 0 && row < 10 && col >= 0 && col < 20;
}

bool is_hit(int ships[10][20], int row, int col) {
    return ships[row][col] == SHIP;
}

void computer_play(int ships[10][20], char board[10][20]) {
    int row = rand() % 10;
    int col = rand() % 20;

    if (is_hit(ships, row, col)) {
        printf("O computador acertou!\n");
        board[row][col] = '+';
    } else {
        printf("O computador errou.\n");
        board[row][col] = ' ';
    }
}

int main() {
    // Limpar a tela
    system("cls || clear");

    // Elementos do tabuleiro
    char *upper_legend = "\n    A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T                  HISTÓRICO DE JOGADAS\n";
    char *upper_lines =  "  ╔═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╗                    P01  |   CPU\n";
    char *middle_lines = "  ╟───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───╢                                \n";
    char *lower_lines =  "  ╚═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╝                                \n";

    // Tabuleiro
    char board[10][20];

    // Matriz para representar a disposição dos navios
    int ships[10][20];

    // Inicializar o gerador de números aleatórios
    srand(time(NULL));

    // Disposição dos navios
    place_ships(ships);

    // Desenhar a Legenda superior
    printf("%s", upper_legend);
    // Desenhar a borda superior
    printf("%s", upper_lines);

    // Desenhar as linhas intermediárias
    for (int i = 0; i < 9; i++) {
        printf("%d ", i);
        for (int j = 0; j < 20; j++) {
            board[i][j] = '~';
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
        board[9][j] = '~';
        if (j == 0 || j == 20) {
            printf("║ %c ", board[9][j]);
        } else {
            printf("| %c ", board[9][j]);
        }
    }
    printf("║\n%s", lower_lines);

    // Loop do jogo
    while (1) {
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

        if (is_hit(ships, numero, letra - 'A')) {
            printf("Você acertou um navio!\n");
            board[numero][letra - 'A'] = 'X';
        } else {
            printf("Você errou.\n");
            board[numero][letra - 'A'] = ' ';
        }

        // Limpar a tela
        system("cls || clear");

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

        // Verificar se todos os navios do jogador foram afundados
        bool player_ships_sunk = true;
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 20; j++) {
                if (ships[i][j] == SHIP && board[i][j] != 'X') {
                    player_ships_sunk = false;
                    break;
                }
            }
            if (!player_ships_sunk) break;
        }
        if (player_ships_sunk) {
            printf("Todos os seus navios foram afundados. O computador venceu.\n");
            break;
        }

        // Jogada do computador
        computer_play(ships, board);

        // Limpar a tela
        system("cls || clear");

        // Desenhar o tabuleiro após a jogada do computador
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

        // Verificar se todos os navios do computador foram afundados
        bool computer_ships_sunk = true;
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 20; j++) {
                if (ships[i][j] == SHIP && (board[i][j] == '~' || board[i][j] == ' ')) {
                    computer_ships_sunk = false;
                    break;
                }
            }
            if (!computer_ships_sunk) break;
        }
        if (computer_ships_sunk) {
            printf("Todos os navios do computador foram afundados. Você venceu!\n");
            break;
        }
    }

    return 0;
}
