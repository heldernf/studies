#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int qnumeros, i;
    float valor, calculador;

    printf("\nOl�, me chamo Jarvis e sou uma calculadora de m�dias!\nMe diga, voc� deseja tirar a m�dia de quantos n�meros? ");
    scanf("%d", &qnumeros);
    printf("\nAgora, digite os valores um por vez e depois envie!");

    for (i = 1; i <= qnumeros; i++) {
        printf("\nDigite o valor %d: ", i);
        scanf("%f", &valor);

        calculador += valor;
    }
    calculador /= qnumeros;

    printf("O resultado da m�dia dos n�meros �: %.2f", calculador);

    return 0;
}