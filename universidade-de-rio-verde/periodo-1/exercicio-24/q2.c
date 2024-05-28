#include <stdio.h>
#include <locale.h>
#include <stdbool.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int operacao, fracao1Top, fracao1Bottom, fracao2Top, fracao2Bottom, denominador, numerador;

    printf("Ensira a PRIMEIRA fra��es:\n");
    scanf("%d", &fracao1Top);
    printf("_\n");
    scanf("%d", &fracao1Bottom);

    printf("Ensira a SEGUNDA fra��es:\n");
    scanf("%d", &fracao2Top);
    printf("_\n");
    scanf("%d", &fracao2Bottom);

    printf("\n1 - Adi��o\n2 - Sutra��o\n3 - Multiplica��o\n4 - Divis�o\nInforme a opera��o desejada de acordo com o n�mero que a antescede: ");
    scanf("%d", &operacao);
    while (operacao < 1 || operacao > 4) {
        printf("Informe um valor v�lido (1 - 4)");
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