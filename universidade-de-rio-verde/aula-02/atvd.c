#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int input1, input2, resultado, escolha;

    printf("VAMOS BRINCAR!\n1-Soma 2-Subtrai 3-Multiplicação 4-Divisão\n");
    scanf("%d", &escolha);

    if (escolha < 1 || escolha > 4) {
        printf("Você não escolheu nenhumas da opções que te dei!");
    } else {
        printf("Digite o primeiro número: ");
        scanf("%d", &input1);

        printf("Digite o segundo número: ");
        scanf("%d", &input2);

        if (escolha == 1) {
            resultado = input1 + input2;
            printf("A soma dos números resulta em: %d", resultado);
        } else if (escolha == 2) {
            resultado = input1 - input2;
            printf("A subtração dos números resulta em: %d", resultado);
        } else if (escolha == 3) {
            resultado = input1 * input2;
            printf("A multiplicação dos números resulta em: %d", resultado);
        } else {
            resultado = input1 / input2;
            printf("A divisão dos números resulta em: %d", resultado);
        }
    }

    return 0;
}