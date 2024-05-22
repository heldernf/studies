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

        printf("1-Bom\n2-Regular\n3-Ótimo\nDê sua opnião de acordo com o número que a antecede: ");
        scanf("%d", &opniao);

        while (opniao != 1 && opniao != 2 && opniao != 3) {
            printf("Escolha uma opção válida!\n");
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

    printf("\nMédia das idades das pessoas que responderam ótimo: %.2f\nQuantidade de pessoas que responderam regular: %d\nPorcentagem das pessoas que responderam bom: %.2f%%", mediaIdadeOtimo, respondeuRegular, porcentagemRespondeuBom);

    return 0;
}