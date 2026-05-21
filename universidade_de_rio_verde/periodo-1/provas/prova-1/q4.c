#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int diasTrabalhados;
    float salario;

    printf("Digite quantos dias você trabalhou: ");
    scanf("%d", &diasTrabalhados);

    salario = 8 * 25 * diasTrabalhados;

    printf("Você receberá R$%.2f de salário.", salario);

    return 0;
}