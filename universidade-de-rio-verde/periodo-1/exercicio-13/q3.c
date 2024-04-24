#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int valor;

    printf("Digite o seu valor booleano, 0 FALSE, 1 TRUE: ");
    scanf("%d", &valor);

    if (valor) {
        printf("TRUE");
    } else {
        printf("FALSE");
    }

    return 0;
}