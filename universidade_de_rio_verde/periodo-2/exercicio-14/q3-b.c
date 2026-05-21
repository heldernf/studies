#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int matrizLines = 5, matrizColumns = 5, matriz[matrizLines][matrizColumns];

    for (int i = 0; i < matrizLines; i++) {
        for (int j = 0; j < matrizColumns; j++) {
            if (j == matrizColumns - i - 1) {
                matriz[i][j] = i + 1;
            } else {
                matriz[i][j] = 0;
            }

            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }
}