#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int matrizLines = 5, matrizColumns = 5, matriz[matrizLines][matrizColumns];

    for (int i = 0; i < matrizLines; i++) {
        for (int j = 0; j < matrizColumns; j++) {
            if (i == j) {
                matriz[i][j] = 2;
            } else if (j > i) {
                matriz[i][j] = 3;
            } else {
                matriz[i][j] = 1;
            }

            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }
}