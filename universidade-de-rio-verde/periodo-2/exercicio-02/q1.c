#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numero[20], numeroPar[20], numeroImpar[20], totalPar = 0, totalImpar = 0;

    printf("Informe 20 numeros:\n");

    for (int i = 0; i < 3; i++) {
        scanf("%d", &numero[i]);

        if (numero[i] % 2 == 0) {
            numeroPar[totalPar] = numero[i];
            totalPar++;
        }
        else {
            numeroImpar[totalImpar] = numero[i];
            totalImpar++;
        }
    }

    if (totalPar > 0) {
        printf("\nOs n�meros pares s�o:\n");
        for (int i = 0; i < totalPar; i++) {
            printf("%d\n", numeroPar[i]);
        }
    } else {
        printf("N�o foi informado nenhum n�mero par");
    }

    printf("----------------------------\n");

    if (totalImpar > 0) {
        printf("Os n�meros impares s�o:\n");
        for (int i = 0; i < totalImpar; i++) {
            printf("%d\n", numeroImpar[i]);
        }
    } else {
        printf("N�o foi informado nenhum n�mero impar");
    }

    return 0;
}