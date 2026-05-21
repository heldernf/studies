#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numero;

    printf("Digite um número: ");
    scanf("%d", &numero);

    if (numero % 2 == 0) {
        printf("O número %d é par\n", numero);
    } else {
        printf("O número %d é ímpar\n", numero);
    }

    return 0;
}