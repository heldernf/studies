#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numero[5];

    printf("Informe 5 valores:\n");
    for (int i = 0; i < 5; i++) {
        scanf("%d", &numero[i]);
    }

    for (int i = 0; i < 5; i++) {
        if (numero[i] < 5) {
            printf("O número %d é menor que 5\n", numero[i]);
        }
    }

    return 0;
}