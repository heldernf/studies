#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    unsigned long long graos = 1, totalGraos = 0;

    for (int i = 1; i <= 64; i++) {
        totalGraos += graos;
        graos *= 2;
    }

    printf("O total de grãos a ser pago é: %llu", totalGraos);

    return 0;
}