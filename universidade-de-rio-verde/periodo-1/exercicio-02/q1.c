#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int input1, input2, resultado, escolha;

    printf("VAMOS BRINCAR! Escolha uma op��o:\n1-Soma\n2-Subtrai\n3-Multiplic�o\n4-Divis�o\nSua escolha: ");
    scanf("%d", &escolha);

    if (escolha < 1 || escolha > 4) {
        printf("Voc� n�o escolheu nenhumas da op��es que lhe dei!");
    } else {
        printf("Digite o primeiro n�mero: ");
        scanf("%d", &input1);

        printf("Digite o segundo n�mero: ");
        scanf("%d", &input2);

        if (escolha == 1) {
            resultado = input1 + input2;
            printf("A soma dos n�meros resulta em: %d", resultado);
        } else if (escolha == 2) {
            resultado = input1 - input2;
            printf("A subtra��o dos n�meros resulta em: %d", resultado);
        } else if (escolha == 3) {
            resultado = input1 * input2;
            printf("A multiplica��o dos n�meros resulta em: %d", resultado);
        } else {
            resultado = input1 / input2;
            printf("A divis�o dos n�meros resulta em: %d", resultado);
        }
    }

    return 0;
}