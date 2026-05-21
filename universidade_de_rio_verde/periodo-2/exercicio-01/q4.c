#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numero;

    for (int i = 0; i < 10; i++) {
        printf("Informe o %dº número: ", i + 1);
        scanf("%d", &numero);

        if (numero % 2 == 0) {
            printf("%d é par\n\n", numero);
        } else {
            printf("%d é ímpar\n\n", numero);
        }
    }

    return 0;
}