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
        printf("Insira um n�mero: ");
        scanf("%d", &input);
        numeroTentativas++;

        if (input > numeroSecreto) {
            printf("O n�mero secreto � menor.\n");
        } else if (input < numeroSecreto) {
            printf("O n�mero secreto � maior.\n");
        } else {
            printf("Voc� conseguiu! O n�mero secreto �: %d\nTentativas: %d", numeroSecreto, numeroTentativas);
        }
    } while (input != numeroSecreto);

    return 0;
}