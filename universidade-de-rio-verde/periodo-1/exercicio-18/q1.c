#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int quantHoras = 0, quantMinutos = 0, quantSegundos = 0;
    float massaInicial, massaFinal;

    printf("Digite a massa do material (em gramas): ");
    scanf("%f", &massaInicial);

    massaFinal = massaInicial;
    while (massaFinal > 0.5) {
        massaFinal /= 2;
        quantSegundos++;
    }

    quantSegundos *= 50; 
    if (quantSegundos >= 60) {
        quantMinutos = quantSegundos / 60;
        quantSegundos %= 60;

        if (quantMinutos >= 60) {
            quantHoras = quantMinutos / 60;
            quantMinutos %= 60;
        }
    }

    printf("Massa inicial: %f\nMassa Final: %f\nTempo levado %dh %dm %ds", massaInicial, massaFinal, quantHoras, quantMinutos, quantSegundos);

    return 0;
}