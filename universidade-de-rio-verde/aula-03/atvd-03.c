#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int inteiro1, inteiro2;
    float decimal;

    printf("Digite um n�mero inteiro: ");
    scanf("%d", &inteiro1);
    printf("Digite outro n�mero inteiro: ");
    scanf("%d", &inteiro2);
    printf("Agora digite um n�mero decimal: ");
    scanf("%f", &decimal);

    printf("Aqui est�o os n�meros que voc� digitou:\n%d\n%d\n%.2f", inteiro1, inteiro2, decimal);

    return 0;
}