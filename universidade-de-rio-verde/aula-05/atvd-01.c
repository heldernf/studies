#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float base, altura, area;

    printf("\n----------------------------------------\nOlá, vamos calcular a área do seu triângulo!\n----------------------------------------\n\n");
    
    printf("Digite as medidas na seguinte sequência (base >>> altura) e envie uma por vez.\n");
    scanf("%f %f", &base, &altura);
    area = (base * altura) / 2;
    printf("\nA área do seu triângulo é: %.2f", area);

    return 0;
}