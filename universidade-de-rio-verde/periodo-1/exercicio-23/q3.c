#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numero, num1 = 1, num2 = 2, num3 = 3;

    printf("Informe um n�mero: ");
    scanf("%d", &numero);

    while (num1 * num2 * num3 <= numero) {
        if (num1 * num2 * num3 == numero) {
            printf("O n�mero %d � um n�mero triangular.\n", numero);
            return 0;
        }
        num1++;
        num2++;
        num3++;
    }

    printf("O n�mero %d n�o � um n�mero triangular.\n", numero);

    return 0;
}