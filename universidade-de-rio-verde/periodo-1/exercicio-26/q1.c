#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numero, defaultNumero, numeroDigito = 0, digito, soma = 0, time;

    printf("Informe um número inteiro positivo: ");
    scanf("%d", &numero);
    while (numero <= 0) {
        printf("Número inválido, informe um número inteiro POSITIVO: ");
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
        printf("\nO número %d é um número de Armstrong.\n", defaultNumero);
    } else {
        printf("\nO número %d não é um número de Armstrong.\n", defaultNumero);
    }

    return 0;
}