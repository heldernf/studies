#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int option, qnumeros, i;
    float valor, resultado;

    printf("Olá, me chamo NF e sou um pequeno pedaço do raciocínio de Helder.\n1-Somar\n2-Subtrair\n3-Multiplicar\n4-Dividir\n5-Média\nDe acordo com os números acima, escolha uma das opções: ");
    scanf("%d", &option);

    if (option == 1) {
        printf("Agora me diga, quantos números você deseja somar?");
        scanf("%d", &qnumeros);

        printf("Ok, let's go!\n");

        for (i = 1; i <= qnumeros; i++) {
            printf("Digite o valor%d: ", i);
            scanf("%f", &valor);

            resultado += valor;
        }

        printf("O resultado da soma dos números foi: %.2f", resultado);
    }

    return 0;
}