#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int input1, input2, resultado, escolha;

    printf("VAMOS BRINCAR!\n 1-Soma 2-Subtrai 3-Multiplica��o 4-Divis�o\n");
    scanf("%d", &escolha);

    printf("Digite o primeiro n�mero:\n");
    scanf("%d", &input1);

    printf("Digite o segundo n�mero:\n");
    scanf("%d", &input2);

    if (escolha == 1) {
        resultado = input1 + input2;
        printf("A soma dos n�meros � igual a: %d", resultado);
    } else if (escolha == 2) {
        resultado = input1 - input2;
        printf("A subtra��o dos n�meros � igual a: %d", resultado);
    } else if (escolha == 3) {
        resultado = input1 * input2;
        printf("A multiplica��o dos n�meros � igual a: %d", resultado);
    } else {
        resultado = input1 / input2;
        printf("A divis�o dos n�meros � igual a: %d", resultado);
    }

    return 0;
}