#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float base, altura, area;

    printf("\n----------------------------------------\nOl�, vamos calcular a �rea do seu tri�ngulo!\n----------------------------------------\n\n");
    
    printf("Digite as medidas na seguinte sequ�ncia (base >>> altura) e envie uma por vez.\n");
    scanf("%f %f", &base, &altura);
    area = (base * altura) / 2;
    printf("\nA �rea do seu tri�ngulo �: %.2f", area);

    return 0;
}