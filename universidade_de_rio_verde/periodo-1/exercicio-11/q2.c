#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese_Brazil");

    int opcao;

    printf("\nOPÇÃO (ÚNICA) | PROMOÇÃO            | ESPECIFICAÇÃO                                         |PREÇO (R$) \n1             | Big Super Sanduba   | 2 hambúrgueres, queijo, batatas fritas e refrigerante | 5,00\n2             | Quase Super Sanduba | 1 hambúrguer, batas fritas e refrigerante             | 3,00\n3             | Mirradus Sanduba    | 1 misto quente e refrigerante                         | 1,50\n\nDigite a sua escolha de acordo com os números das opções acima: ");
    scanf("%d", &opcao);

    switch(opcao) {
        case 1:
            printf("\nPedido: Big Super Sanduba\nPreço: R$5,00");
            break;
        case 2:
            printf("\nPedido: Quase Super Sanduba\nPreço: R$3,00");
            break;
        case 3:
            printf("\nPedido: Mirradus Sanduba\nPreço: R$1,50");
            break;
        default:
            printf("\nVocê não escolheu nenhumas das opções acima!");
            break;
    }

    return 0;
}