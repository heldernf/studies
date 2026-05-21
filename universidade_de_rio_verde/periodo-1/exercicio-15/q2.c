#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int input = 0;

    do {
        printf("Digite um número do teclado, quando quiser parar digite um número menor ou igual a 1: ");
        scanf("%d", &input);
    } while (input > 1);

    return 0;
}