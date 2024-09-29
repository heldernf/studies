#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>

int main() {
    srand(time(NULL));

    int matriz[3][3], sumElementsDownDiagonalPrincipal = 0;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            matriz[i][j] = rand() % 10;
            printf("%d ", matriz[i][j]);

            if (j < i) {
                sumElementsDownDiagonalPrincipal += matriz[i][j];
            }
        }
        printf("\n");
    }

    printf("A soma dos elementos que estão abaixo da diagonal principal é: %d", sumElementsDownDiagonalPrincipal);
    
    return 0;
}