#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int inteiro1, inteiro2;
    float decimal;

    printf("Digite um número inteiro: ");
    scanf("%d", &inteiro1);
    printf("Digite outro número inteiro: ");
    scanf("%d", &inteiro2);
    printf("Agora digite um número decimal: ");
    scanf("%f", &decimal);

    printf("Aqui estão os números que você digitou:\n%d\n%d\n%.2f", inteiro1, inteiro2, decimal);

    return 0;
}