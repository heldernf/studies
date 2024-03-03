#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float lado1, lado2, lado3, perimetro;

    printf("\n----------------------------------------\nOlá, vamos calcular o perímetro do seu triângulo!\n----------------------------------------\n\n");

    printf("Digite as medidas na seguinte sequência (lado1 >>> lado2 >>> lado3) e envie uma por vez.\n");
    scanf("%f %f %f", &lado1, &lado2, &lado3);
    perimetro = lado1 + lado2 + lado3;

    printf("\nO perímetro do seu triângulo é: %.2f", perimetro);
}