#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese_Brazil");

    int opcao;

    printf("\nOP��O (�NICA) | PROMO��O            | ESPECIFICA��O                                         |PRE�O (R$) \n1             | Big Super Sanduba   | 2 hamb�rgueres, queijo, batatas fritas e refrigerante | 5,00\n2             | Quase Super Sanduba | 1 hamb�rguer, batas fritas e refrigerante             | 3,00\n3             | Mirradus Sanduba    | 1 misto quente e refrigerante                         | 1,50\n\nDigite a sua escolha de acordo com os n�meros das op��es acima: ");
    scanf("%d", &opcao);

    switch(opcao) {
        case 1:
            printf("\nPedido: Big Super Sanduba\nPre�o: R$5,00");
            break;
        case 2:
            printf("\nPedido: Quase Super Sanduba\nPre�o: R$3,00");
            break;
        case 3:
            printf("\nPedido: Mirradus Sanduba\nPre�o: R$1,50");
            break;
        default:
            printf("\nVoc� n�o escolheu nenhumas das op��es acima!");
            break;
    }

    return 0;
}