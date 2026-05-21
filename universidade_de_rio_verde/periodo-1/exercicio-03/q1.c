#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int qnumeros, i;
    float valor, calculador;

    printf("\nOlá, me chamo Jarvis e sou uma calculadora de médias!\nMe diga, você deseja tirar a média de quantos números? ");
    scanf("%d", &qnumeros);
    printf("\nAgora, digite os valores um por vez e depois envie!");

    for (i = 1; i <= qnumeros; i++) {
        printf("\nDigite o valor %d: ", i);
        scanf("%f", &valor);

        calculador += valor;
    }
    calculador /= qnumeros;

    printf("O resultado da média dos números é: %.2f", calculador);

    return 0;
}