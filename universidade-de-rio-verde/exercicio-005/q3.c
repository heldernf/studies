#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float area, base, altura;

    printf("\n----------------------------------------\nOlá, vamos calcular a altura do seu triângulo!\n----------------------------------------\n\n");

    printf("Para que façamos o calculo, digite a ÁREA do seu triângulo e depois a BASE e envie uma informação por vez.\n");
    scanf("%f %f", &area, &base);
    altura = (2 * area) / base;

    printf("\nA altura do seu triângulo é: %.2f", altura);
}