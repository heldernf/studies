#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int option, qnumeros, i;
    float valor, resultado;

    printf("\nOlá, me chamo NF, em que posso ajudar? :)\n\n1-Somar\n2-Subtrair\n3-Multiplicar\n4-Dividir\n5-Média\n\nDe acordo com os números acima, escolha uma das opções: ");
    scanf("%d", &option);

    if (option == 1) {
        printf("Agora me diga, quantos números você deseja somar? ");
        scanf("%d", &qnumeros);

        for (i = 1; i <= qnumeros; i++) {
            printf("\nDigite o valor %d: ", i);
            scanf("%f", &valor);

            resultado += valor;
        }
        printf("\nO resultado da soma dos números foi: %.2f", resultado);

    } else if (option == 2) {
        printf("Agora me diga, quantos números você deseja subtrair? ");
        scanf("%d", &qnumeros);

        for (i = 1; i <= qnumeros; i++) {
            if (i == 1) {
                printf("\nDigite o valor %d: ", i);
                scanf("%f", &valor);

                resultado = valor;
            } else {
                printf("\nDigite o valor %d: ", i);
                scanf("%f", &valor);
                resultado -= valor;
            }
        }
        printf("\nO resultado da subtração dos números foi: %.2f", resultado);

    } else if (option == 3) {
        printf("Agora me diga, quantos números você deseja multiplicar? ");
        scanf("%d", &qnumeros);

        for (i = 1; i <= qnumeros; i++) {
            if (i == 1) {
                resultado = 1;
                printf("\nDigite o valor %d: ", i);
                scanf("%f", &valor);

                resultado *= valor;
            } else {
                printf("\nDigite o valor %d: ", i);
                scanf("%f", &valor);

                resultado *= valor;
            }
        }
        printf("\nO resultado da multiplicação dos números foi: %.2f", resultado);

    } else if (option == 4) {
        printf("Agora me diga, quantos números você deseja dividir? ");
        scanf("%d", &qnumeros);

        for (i = 1; i <= qnumeros; i++) {
            if (i == 1) {
                printf("\nDigite o valor %d: ", i);
                scanf("%f", &resultado);
            } else {
                printf("\nDigite o valor %d: ", i);
                scanf("%f", &valor);

                resultado /= valor;
            }
        }
        printf("\nO resultado da divisão dos números foi: %.2f", resultado);

    } else if (option == 5) {
        printf("Agora me diga, de quantos números você deseja tirar a média? ");
        scanf("%d", &qnumeros);

        for (i = 1; i <= qnumeros; i++) {
            printf("\nDigite o valor %d: ", i);
            scanf("%f", &valor);

            resultado += valor;

            if (i == qnumeros) {
                resultado /= qnumeros;
            }
        }
        printf("\nO resultado da média dos números foi: %.2f", resultado);

    } else {
        printf("\nVocê não escolheu nenhumas das opções que lhe dei, até mais :)");
    }

    return 0;
}