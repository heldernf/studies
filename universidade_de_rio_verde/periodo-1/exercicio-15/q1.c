#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int input = 0;

    printf("Digite um número entre 12 e 20: ");
    scanf("%d", &input);

    while (input < 12 || input > 20) {
        printf("Entrada inválida, tente novamente: ");
        scanf("%d", &input);
    }

    printf("Número válido: %d", input);

    return 0;
}