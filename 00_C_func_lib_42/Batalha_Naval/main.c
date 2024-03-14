
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 10

int matrix[SIZE][SIZE];

void show();
void generateShip();
int numberOfShips();

int main()
{
    srand(time(NULL));
    
    generateShip();
    
    while(1)
    {
        show();
        
        int x,y;
        printf("Digite X: ");
        scanf("%d",&x);
        printf("Digite Y: ");
        scanf("%d",&y);
        
        if(matrix[x][y] == 1)
        {
            printf("\nAcertou um navio!\n");
            matrix[x][y] = 2;
        }
        else if(matrix[x][y] == 0)
        {
            printf("\nErrou...\n");
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
        printf("%d ",i);
    }
    printf("\n");
    
    for(i=0;i<SIZE;i++)
    {
        printf("%d ",i);
        
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
        printf("\n");
    }
}

void generateShip()
{
    int ship = 5;
    int i,j;
    
    for(i=0;i<ship;i++)
    {
        int x = rand()%SIZE;
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
    
    for(i=0;i<SIZE;i++)
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

