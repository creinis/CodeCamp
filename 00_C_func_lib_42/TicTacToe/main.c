#include <stdio.h>
#include <stdlib.h>

char matrix[3][3];  // a matriz do jogo
char player;  // 'X' ou 'O'

char check(void);
void init_matrix(void);
void get_player_move(void);
void get_computer_move(void);
void disp_matrix(void);

int main(void)
{
    char done;

    printf("Este é o jogo do Jogo da Velha. Você estará\n");
    printf("jogando contra o computador. Boa sorte!\n");

    printf("Escolha sua peça (X ou O): ");
    scanf("%c", &player);

    done =  ' ';
    init_matrix();

    do {
        disp_matrix();
        get_player_move();
        done = check(); /* vê se o vencedor é */
        if(done!= ' ') break; /* o vencedor */
        get_computer_move();
        done = check(); /* vê se o vencedor é */
    } while(done== ' ');

    if(done==player) printf("Você ganhou!\n");
    else printf("Eu ganhei!!!!\n");
    disp_matrix(); /* mostra a posição final */

    return 0;
}

/* Inicializa a matriz */
void init_matrix(void)
{
    int i, j;

    for(i=0; i<3; i++)
        for(j=0; j<3; j++) matrix[i][j] =  ' ';
}

/* Obtém a jogada do jogador */
void get_player_move(void)
{
    int x, y;
    char c;

    printf("Digite as coordenadas da posição da sua peça para a sua jogada:\n");
    printf("Letra: ");
    scanf(" %c", &c);
    printf("Numero: ");
    scanf("%d", &y);

    x = c - 'A';
    y--;

    if(matrix[x][y]!= ' '){
        printf("Posição inválida, tente novamente.\n");
        get_player_move();
    }
    else matrix[x][y] = player;
}

/* Obtém a jogada do computador */
void get_computer_move(void)
{
    int i, j;
    for(i=0; i<3; i++){
        for(j=0; j<3; j++)
            if(matrix[i][j]==' ') break;
        if(matrix[i][j]==' ') break;
    }

    if(i*j==9)  {
        printf("empate\n");
        exit(0);
    }
    else
        matrix[i][j] = (player == 'X') ? 'O' : 'X';
}

/* Exibe a matriz na tela */
void disp_matrix(void)
{
    int t;

    printf("   A   B   C\n");
    printf("  -----------\n");
    for(t=0; t<3; t++) {
        printf("%d |%c | %c | %c |\n", t+1, matrix[t][0],
               matrix[t][1], matrix [t][2]);
        if(t!=2) printf("  ---|---|---\n");
    }
    printf("  -----------\n");
    printf("\n");
}

/* Vê se há um vencedor */
char check(void)
{
    int i;

    for(i=0; i<3; i++)  /* verifica as linhas */
        if(matrix[i][0]==matrix[i][1] &&
           matrix[i][0]==matrix[i][2]) return matrix[i][0];

    for(i=0; i<3; i++)  /* verifica as colunas */
        if(matrix[0][i]==matrix[1][i] &&
           matrix[0][i]==matrix[2][i]) return matrix[0][i];

    /* testa as diagonais */
    if(matrix[0][0]==matrix[1][1] &&
       matrix[1][1]==matrix[2][2])
        return matrix[0][0];

    if(matrix[0][2]==matrix[1][1] &&
       matrix[1][1]==matrix[2][0])
        return matrix[0][2];

    return ' ';
}

