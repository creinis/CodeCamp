

#include <stdio.h>

int main() {
    // Elementos do tabuleiro
    char *upper_legend = "\n    A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T  \n";
    char *upper_lines =  "  ╔═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╤═══╗  \n";
    char *middle_lines = "  ╟───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───╢  \n";
    char *lower_lines =  "  ╚═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╧═══╝  \n";

    // Tabuleiro
    char board[10][20];
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 20; j++) {
            board[i][j] = ' ';
        }
    }

    // Jogada do jogador
    char letra;
    int numero;
    printf("Digite a letra da coordenada da jogada: ");
    scanf(" %c", &letra);
    printf("Digite o número da coordenada da jogada: ");
    scanf("%d", &numero);

    // Verificar se a casa está vazia
    if (board[numero][letra - 'A'] == ' ') {
        // Marcar a jogada
        board[numero][letra - 'A'] = '~';
    } else {
        printf("Esta casa já foi jogada, por favor escolha outras coordenadas para esta jogada.\n");
    }

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

    return 0;
}
