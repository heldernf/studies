    #include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>

int main() {
    srand(time(NULL));

    int matriz[5][5];
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            matriz[i][j] = rand() % 10;
            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }

    int searchValue, lineSearchValue[5], columnSearchValue[5], searched = 0;
    printf("Informe o valor que deseja buscar na matriz: ");
    scanf("%d", &searchValue);

    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            if (matriz[i][j] == searchValue) {
                lineSearchValue[searched] = i;
                columnSearchValue[searched] = j;
                searched++;
            }
        }
    }
    if (searched > 0) {
        printf("\nO valor informado para busca foi encontrado %d vezes, abaixo segue as posições onde eles se encontram, sendo LINHA|COLUNA", searched);
        for (int i = 0; i < searched; i++) {
            printf("\n%d | %d", lineSearchValue[i], columnSearchValue[i]);
        }
    } else {
        printf("Não encontrado ou inexistente");
    }
    
    return 0;
}