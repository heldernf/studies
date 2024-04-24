#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int option = 0, p1 = 10, p2 = 20, p3 = 30, pX = 0, pNumero = 0;

    printf("1 - Adicionar produtos\n2 - Remover produto\n3 - Visualizar estoque\n\nDe acordo com os número acimas, digita o número de acordo com a opção que você deseja: ");
    scanf("%d", &option);

    switch(option) {
        case 1:
            printf("Digite o número do produto: ");
            scanf("%d", &pNumero);
            
            printf("Agora digite a quantidade desse produto: ");
            scanf("%d", &pX);

            printf("Seu estoque:\nProduto1 = %d\nProduto2 = %d\nProduto3 = %d\nProduto%d = %d\n", p1, p2, p3, pNumero, pX);
            break;
        case 2:
            printf("Seu estoque:\nProduto1 = %d\nProduto2 = %d\nProduto3 = %d\n", p1, p2, p3);
            
            printf("Digite o número do produto que deseja fazer alteração: ");
            scanf("%d", &pNumero);

            printf("Digite a quatidade que deseja remover: ");
            scanf("%d", &pX);

            switch (pNumero) {
                case 1:
                    if (pX > p1) {
                        p1 = 0;
                    } else {
                        p1 -= pX;
                    }

                    break;
                case 2:
                    if (pX > p2) {
                        p2 = 0;
                    } else {
                        p2 -= pX;
                    }

                    break;
                case 3:
                    if (pX > p3) {
                        p3 = 0;
                    } else {
                        p3 -= pX;
                    }
                    break;
                default:
                    printf("Produto inválido, tente novamente.");
                    exit(0);
                    break;
            }

            printf("Seu estoque agora é:\nProduto1 = %d\nProduto2 = %d\nProduto3 = %d\n", p1, p2, p3);

            break;
        case 3:
            printf("Seu estoque:\nProduto1 = %d\nProduto2 = %d\nProduto3 = %d\n", p1, p2, p3);
            break;
        default:
            printf("Opção inválida, tente novamente.");
            break;
    }


    return 0;
}