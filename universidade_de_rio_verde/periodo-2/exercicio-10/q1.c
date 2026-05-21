#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int matriz[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int biggerValue = matriz[0][0];

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (matriz[i][j] > biggerValue) {
                biggerValue = matriz[i][j];
            }
        }
    }

    printf("O maior valor da matriz é: %d", biggerValue);
}