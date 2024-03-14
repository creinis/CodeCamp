#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <ctype.h>

#define SIZE 10
#define EXTENDED_SIZE 20
#define HISTORY_SIZE 10

int matrix[SIZE][EXTENDED_SIZE];
char playerMoves[HISTORY_SIZE][3];
char computerMoves[HISTORY_SIZE][3];
int moveCount = 0;

void show();
void generateShip();
int numberOfShips();
void clear_screen();
void updateHistory(char player, int x, int y);

int main()
{
    srand(time(NULL));
    
    generateShip();
    
    while(1)
    {
        clear_screen();
        printf("\n\n>>>>>>>>>>>> BATALHA NAVAL <<<<<<<<<<<<\n\n");
        show();
        
        int x,y;
        char c;
        printf("\n\nDigite a letra para a sua jogada: ");
        scanf(" %c", &c);
        printf("Digite o número para a sua jogada: ");
        scanf("%d", &y);

        x = toupper(c) - 'A';

        if(y >= 0 && y < SIZE && x >= 0 && x < EXTENDED_SIZE)
        {
            if(matrix[y][x] == 1)
            {
                printf("\nAcertou um navio!\n");
                matrix[y][x] = 2;
                updateHistory('P', x, y);
            }
            else if(matrix[y][x] == 0)
            {
                printf("\nErrou...\n");
                matrix[y][x] = -1;
                updateHistory('P', x, y);
            }
        }
        else
        {
            printf("\nCoordenadas inválidas. Tente novamente.\n");
            continue;
        }
        
        if(numberOfShips() == 0)
        {
            printf("\nParabéns! Você ganhou o jogo!\n");
            break;
        }
    }
    
    return 0;
}

void show()
{
    int i,j;
    
    printf("  ");
    for(i=0;i<EXTENDED_SIZE;i++)
    {
        printf("%c ",i+'A');
    }
    printf("       Jogador  Computador\n");
    
    for(i=0;i<SIZE;i++)
    {
        printf("%d ",i);
        
        for(j=0;j<EXTENDED_SIZE;j++)
        {
            if(matrix[i][j] == 0)
            {
                printf("~ ");
            }
            else if(matrix[i][j] == -1)
            {
                printf("  ");
            }
            else if(matrix[i][j] == 2)
            {
                printf("X ");
            }
        }
        
        if(i < HISTORY_SIZE) printf(" |   %s      %s", playerMoves[i], computerMoves[i]);
        printf("\n");
    }
}

void generateShip()
{
    int ship = 5;
    int i,j;
    
    for(i=0;i<ship;i++)
    {
        int x = rand()%EXTENDED_SIZE;
        int y = rand()%SIZE;
        if(matrix[y][x] == 0)
        {
            matrix[y][x] = 1;
        }
        else
        {
            i--;
        }
    }
}

int numberOfShips()
{
    int i,j;
    int counter = 0;
    
    for(i=0;i<SIZE;i++)
    {
        for(j=0;j<EXTENDED_SIZE;j++)
        {
            if(matrix[i][j] == 1)
            {
                counter++;
            }
        }
    }
    
    return counter;
}

void clear_screen()
{
    #ifdef _WIN32
        system("cls");
    #else
        system("clear");
    #endif
}

void updateHistory(char player, int x, int y)
{
    if(player == 'P')
    {
        for(int i = HISTORY_SIZE - 1; i > 0; i--)
        {
            strcpy(playerMoves[i], playerMoves[i-1]);
        }
        sprintf(playerMoves[0], "%c%d", x + 'A', y);
    }
    else
    {
        for(int i = HISTORY_SIZE - 1; i > 0; i--)
        {
            strcpy(computerMoves[i], computerMoves[i-1]);
        }
        sprintf(computerMoves[0], "%c%d", x + 'A', y);
    }
}
