#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int tabuada, resultado;

    do {
        printf("Escolha uma tabuada de 1 - 10: ");
        scanf("%d", &tabuada);
    } while (tabuada < 1 || tabuada > 10);

    for (int i = 1; i <= 10; i++) {
        resultado = tabuada * i;
        printf("%d * %d = %d\n", tabuada, i, resultado);
    }

    return 0;
}