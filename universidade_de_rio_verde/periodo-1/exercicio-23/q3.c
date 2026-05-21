#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numero, num1 = 1, num2 = 2, num3 = 3;

    printf("Informe um número: ");
    scanf("%d", &numero);

    while (num1 * num2 * num3 <= numero) {
        if (num1 * num2 * num3 == numero) {
            printf("O número %d é um número triangular.\n", numero);
            return 0;
        }
        num1++;
        num2++;
        num3++;
    }

    printf("O número %d não é um número triangular.\n", numero);

    return 0;
}