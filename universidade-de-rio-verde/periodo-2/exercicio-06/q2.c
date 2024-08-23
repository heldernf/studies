#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");
    
    int vector[10], totalPar = 0, totalImpar = 0;
    int sizeVector = sizeof(vector) / 4;
    
    srand(time(NULL));

    for (int i = 0; i < sizeVector; i++) {
        vector[i] = rand() % 100;
        if (vector[i] % 2 == 0 ) {
            totalPar++;
        } else {
            totalImpar++;
        }
    }

    printf("Total de números PAR aleatórios: %d\n", totalPar);
    printf("Total de números IMPAR aleatórios: %d", totalImpar);
}