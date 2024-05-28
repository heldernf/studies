#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
#include <time.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numeroSecreto, input, numeroTentativas = 0;

    srand(time(NULL));
    numeroSecreto = rand() % 100 + 1;

    do {
        printf("Insira um número: ");
        scanf("%d", &input);
        numeroTentativas++;

        if (input > numeroSecreto) {
            printf("O número secreto é menor.\n");
        } else if (input < numeroSecreto) {
            printf("O número secreto é maior.\n");
        } else {
            printf("Você conseguiu! O número secreto é: %d\nTentativas: %d", numeroSecreto, numeroTentativas);
        }
    } while (input != numeroSecreto);

    return 0;
}