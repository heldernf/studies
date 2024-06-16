#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numero, defaultNumero, numeroDigito = 0, digito, soma = 0, time;

    printf("Informe um n�mero inteiro positivo: ");
    scanf("%d", &numero);
    while (numero <= 0) {
        printf("N�mero inv�lido, informe um n�mero inteiro POSITIVO: ");
        scanf("%d", &numero);
    }

    defaultNumero = numero;
    time = numero;
    while (time != 0) {
        time /= 10;
        numeroDigito++;
    }
    time = numero;

    while (time != 0) {
        digito = time % 10;
        soma += pow(digito, numeroDigito);
        time /= 10;
    }

    if (soma == defaultNumero) {
        printf("\nO n�mero %d � um n�mero de Armstrong.\n", defaultNumero);
    } else {
        printf("\nO n�mero %d n�o � um n�mero de Armstrong.\n", defaultNumero);
    }

    return 0;
}