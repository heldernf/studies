#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int option, qnumeros, i;
    float valor, resultado;

    printf("\nOl�, me chamo NF, em que posso ajudar? :)\n\n1-Somar\n2-Subtrair\n3-Multiplicar\n4-Dividir\n5-M�dia\n\nDe acordo com os n�meros acima, escolha uma das op��es: ");
    scanf("%d", &option);

    if (option == 1) {
        printf("Agora me diga, quantos n�meros voc� deseja somar? ");
        scanf("%d", &qnumeros);

        for (i = 1; i <= qnumeros; i++) {
            printf("\nDigite o valor %d: ", i);
            scanf("%f", &valor);

            resultado += valor;
        }
        printf("\nO resultado da soma dos n�meros foi: %.2f", resultado);

    } else if (option == 2) {
        printf("Agora me diga, quantos n�meros voc� deseja subtrair? ");
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
        printf("\nO resultado da subtra��o dos n�meros foi: %.2f", resultado);

    } else if (option == 3) {
        printf("Agora me diga, quantos n�meros voc� deseja multiplicar? ");
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
        printf("\nO resultado da multiplica��o dos n�meros foi: %.2f", resultado);

    } else if (option == 4) {
        printf("Agora me diga, quantos n�meros voc� deseja dividir? ");
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
        printf("\nO resultado da divis�o dos n�meros foi: %.2f", resultado);

    } else if (option == 5) {
        printf("Agora me diga, de quantos n�meros voc� deseja tirar a m�dia? ");
        scanf("%d", &qnumeros);

        for (i = 1; i <= qnumeros; i++) {
            printf("\nDigite o valor %d: ", i);
            scanf("%f", &valor);

            resultado += valor;

            if (i == qnumeros) {
                resultado /= qnumeros;
            }
        }
        printf("\nO resultado da m�dia dos n�meros foi: %.2f", resultado);

    } else {
        printf("\nVoc� n�o escolheu nenhumas das op��es que lhe dei, at� mais :)");
    }

    return 0;
}