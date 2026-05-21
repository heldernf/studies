#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");
    
    float input, reajuste;

    printf("Digite um valor e eu farei um reajuste de 5 porcento no valor digitado.\n");
    scanf("%f", &input);
    reajuste = input + (input * 5 / 100);

    printf("Com o reajuste, o valor passa de R$%.2f para R$%.2f.", input, reajuste);

    return 0;
}