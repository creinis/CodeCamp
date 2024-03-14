#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <ctype.h>

#define SIZE 10
#define EXTENDED_SIZE 20

int matrix[EXTENDED_SIZE][SIZE];
char playerMoves[SIZE][SIZE];
char computerMoves[SIZE][SIZE];

void show();
void generateShip();
int numberOfShips();
void clear_screen();

int main()
{
    srand(time(NULL));
    
    generateShip();
    
    while(1)
    {
        clear_screen();
        printf("\n>>>>>>>>>>>> BATALHA NAVAL <<<<<<<<<<<<\n\n");
        show();
        
        int x,y;
        char c;
        printf("\nDigite a letra para a sua jogada: ");
        scanf(" %c", &c);
        printf("Digite o número para a sua jogada: ");
        scanf("%d", &y);

        x = toupper(c) - 'A';
        y--;

        if(matrix[x][y] == 1)
        {
            printf("\nAcertou um navio!\n");
            matrix[x][y] = 2;
            playerMoves[x][y] = '*';
        }
        else if(matrix[x][y] == 0)
        {
            printf("\nErrou...\n");
            playerMoves[x][y] = 'o';
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
    for(i=0;i<SIZE;i++)
    {
        printf("%c ",i+'A');
    }
    printf("       Jogador  Computador\n");
    
    for(i=0;i<EXTENDED_SIZE;i++)
    {
        if(i<SIZE) printf("%d ",i+1);
        else printf("  ");
        
        for(j=0;j<SIZE;j++)
        {
            if(matrix[i][j] == 0)
            {
                printf("~ ");
            }
            else if(matrix[i][j] == 1)
            {
                printf("~ ");
            }
            else if(matrix[i][j] == 2)
            {
                printf("* ");
            }
        }
        
        if(i<SIZE) printf("     %d %s      %s", i+1, playerMoves[i], computerMoves[i]);
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
        if(matrix[x][y] == 0)
        {
            matrix[x][y] = 1;
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
    
    for(i=0;i<EXTENDED_SIZE;i++)
    {
        for(j=0;j<SIZE;j++)
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
