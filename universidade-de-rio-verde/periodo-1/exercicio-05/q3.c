#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float area, base, altura;

    printf("\n----------------------------------------\nOl�, vamos calcular a altura do seu tri�ngulo!\n----------------------------------------\n\n");

    printf("Para que fa�amos o calculo, digite a �REA do seu tri�ngulo e depois a BASE e envie uma informa��o por vez.\n");
    scanf("%f %f", &area, &base);
    altura = (2 * area) / base;

    printf("\nA altura do seu tri�ngulo �: %.2f", altura);
}