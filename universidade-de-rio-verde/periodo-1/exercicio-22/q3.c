#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int idade, opniao, respondeuOtimo = 0, respondeuRegular = 0, i;
    float mediaIdadeOtimo = 0.0, porcentagemRespondeuBom = 0;

    for (i = 0; i < 15; i++) {
        printf("-----------------------------------------------\n");
        printf("Informe a sua idade: ");
        scanf("%d", &idade);

        printf("1-Bom\n2-Regular\n3-�timo\nD� sua opni�o de acordo com o n�mero que a antecede: ");
        scanf("%d", &opniao);

        while (opniao != 1 && opniao != 2 && opniao != 3) {
            printf("Escolha uma op��o v�lida!\n");
            scanf("%d", &opniao);
        }
        printf("-----------------------------------------------\n\n");

        if (opniao == 3) {
            mediaIdadeOtimo += idade;
            respondeuOtimo++;
        } else if (opniao == 2) {
            respondeuRegular++;
        } else {
            porcentagemRespondeuBom++;
        }
    }

    if (respondeuOtimo != 0) {
        mediaIdadeOtimo /= respondeuOtimo;
    }
    porcentagemRespondeuBom = porcentagemRespondeuBom * 100 / i; 

    printf("\nM�dia das idades das pessoas que responderam �timo: %.2f\nQuantidade de pessoas que responderam regular: %d\nPorcentagem das pessoas que responderam bom: %.2f%%", mediaIdadeOtimo, respondeuRegular, porcentagemRespondeuBom);

    return 0;
}