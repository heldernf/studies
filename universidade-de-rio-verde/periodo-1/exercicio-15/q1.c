#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int input = 0;

    printf("Digite um n�mero entre 12 e 20: ");
    scanf("%d", &input);

    while (input < 12 || input > 20) {
        printf("Entrada inv�lida, tente novamente: ");
        scanf("%d", &input);
    }

    printf("N�mero v�lido: %d", input);

    return 0;
}