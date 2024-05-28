#include <stdio.h>
#include <locale.h>
#include <stdbool.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int operacao, fracao1Top, fracao1Bottom, fracao2Top, fracao2Bottom, denominador, numerador;

    printf("Ensira a PRIMEIRA frações:\n");
    scanf("%d", &fracao1Top);
    printf("_\n");
    scanf("%d", &fracao1Bottom);

    printf("Ensira a SEGUNDA frações:\n");
    scanf("%d", &fracao2Top);
    printf("_\n");
    scanf("%d", &fracao2Bottom);

    printf("\n1 - Adição\n2 - Sutração\n3 - Multiplicação\n4 - Divisão\nInforme a operação desejada de acordo com o número que a antescede: ");
    scanf("%d", &operacao);
    while (operacao < 1 || operacao > 4) {
        printf("Informe um valor válido (1 - 4)");
        scanf("%d", &operacao);
    }

    switch (operacao) {
        case 1:
            numerador = fracao1Top * fracao2Bottom + fracao2Top *fracao1Bottom;
            denominador = fracao1Bottom * fracao2Bottom;

            printf("\nResultado %d/%d", numerador, denominador);
            break;
        case 2:
            numerador = fracao1Top * fracao2Bottom - fracao2Top * fracao1Bottom;
            denominador = fracao1Bottom * fracao2Bottom;

            printf("\nResultado %d/%d", numerador, denominador);
            break;
        case 3:
            numerador = fracao1Top * fracao2Top;
            denominador = fracao1Bottom * fracao2Bottom;

            printf("\nResultado %d/%d", numerador, denominador);
            break;
        case 4:
            numerador = fracao1Top * fracao2Bottom;
            denominador = fracao1Bottom * fracao2Top;
            printf("\nResultado %d/%d", numerador, denominador);
            break;
    }

    return 0;
}