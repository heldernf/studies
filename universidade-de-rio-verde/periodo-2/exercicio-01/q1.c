#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numero;

    printf("Digite um n�mero: ");
    scanf("%d", &numero);

    if (numero % 2 == 0) {
        printf("O n�mero %d � par\n", numero);
    } else {
        printf("O n�mero %d � �mpar\n", numero);
    }

    return 0;
}