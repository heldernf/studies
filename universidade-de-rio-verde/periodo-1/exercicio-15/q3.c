#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int input = 0, soma = 0;

    do {
        printf("Digite um n�mero do teclado, quando desejar parar digite 0: ");
        scanf("%d", &input);
        soma += input;
    } while (input != 0);

    printf("A soma dos n�meros digitados foi: %d", soma);

    return 0;
}