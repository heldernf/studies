#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float lado1, lado2, lado3, perimetro;

    printf("\n----------------------------------------\nOl�, vamos calcular o per�metro do seu tri�ngulo!\n----------------------------------------\n\n");

    printf("Digite as medidas na seguinte sequ�ncia (lado1 >>> lado2 >>> lado3) e envie uma por vez.\n");
    scanf("%f %f %f", &lado1, &lado2, &lado3);
    perimetro = lado1 + lado2 + lado3;

    printf("\nO per�metro do seu tri�ngulo �: %.2f", perimetro);
}