#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int option, qnumeros, i;
    float valor, resultado;

    printf("Ol�, me chamo NF e sou um pequeno peda�o do racioc�nio de Helder.\n1-Somar\n2-Subtrair\n3-Multiplicar\n4-Dividir\n5-M�dia\nDe acordo com os n�meros acima, escolha uma das op��es: ");
    scanf("%d", &option);

    if (option == 1) {
        printf("Agora me diga, quantos n�meros voc� deseja somar?");
        scanf("%d", &qnumeros);

        printf("Ok, let's go!\n");

        for (i = 1; i <= qnumeros; i++) {
            printf("Digite o valor%d: ", i);
            scanf("%f", &valor);

            resultado += valor;
        }

        printf("O resultado da soma dos n�meros foi: %.2f", resultado);
    }

    return 0;
}