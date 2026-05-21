#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int matrizLines = 5, matrizColumns = 5, matriz[matrizLines][matrizColumns];

    for (int i = 0; i < matrizLines; i++) {
        for (int j = 0; j < matrizColumns; j++) {
            if (i % 2 == 0) {
                if (i == matrizLines / 2 && j == matrizColumns / 2) {
                    matriz[i][j] = 2;
                } else if (j == 0 || j == matrizColumns - 1) {
                    matriz[i][j] = 0;
                } else {
                    matriz[i][j] = 1;
                }
            } else {
                if (i == matrizLines / 2 && j == matrizColumns / 2) {
                    matriz[i][j] = 2;
                } else if (j % 2 == 0) {
                    matriz[i][j] = 0;
                } else {
                    matriz[i][j] = 1;
                }
            }

            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }
}