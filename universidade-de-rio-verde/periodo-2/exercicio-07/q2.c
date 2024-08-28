#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguse_Brazil");

    int sequenciaTotal;
    printf("Informe a quantidade da sequência de números: ");
    scanf("%d", &sequenciaTotal);

    int sequencia[sequenciaTotal];
    printf("Agora informe os números da sequência:\n");
    for (int i = 0; i < sequenciaTotal; i++) {
        scanf("%d", &sequencia[i]);
    }

    for (int i = sequenciaTotal - 1; i >= 0; i--) {
        printf("%d ", sequencia[i]);
    }

    return 0;
}