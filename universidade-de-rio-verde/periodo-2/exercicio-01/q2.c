#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numero[5];

    printf("Informe 5 n�meros inteiros:\n");

    for (int i = 0; i < 5; i++) {
        scanf("%d", &numero[i]);
    }

    printf("Primeiro n�mero informado: %d\n�ltimo n�mero informado:%d", numero[0], numero[4]);

    return 0;
}
