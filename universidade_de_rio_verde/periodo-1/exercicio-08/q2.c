#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float salario, gasto;

    printf("Digite seu salário e depois o seu gasto! (digite um número por vez e envie um de cada vez):\n");
    scanf("%f %f", &salario, &gasto);

    if (gasto > salario) {
        printf("Orçamento ultrapassado");
    } else {
        printf("Gastos dentro do orçamento");
    }

    return 0;
}