#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float salario, gasto;

    printf("Digite seu sal�rio e depois o seu gasto! (digite um n�mero por vez e envie um de cada vez):\n");
    scanf("%f %f", &salario, &gasto);

    if (gasto > salario) {
        printf("Or�amento ultrapassado");
    } else {
        printf("Gastos dentro do or�amento");
    }

    return 0;
}