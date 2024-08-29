#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguse_Brazil");

    int vetor[6] = {1, 0, 5, -2, -5, 7};
    
    int soma = vetor[0] + vetor[1] + vetor[5];
    printf("%d", soma);

    vetor[4] = 100;

    printf("\n\n");
    for (int i = 0; i < 6; i++) {
        printf("%d\n", vetor[i]);
    }

    return 0;
}