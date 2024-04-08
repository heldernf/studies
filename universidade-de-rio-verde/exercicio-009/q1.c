#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese_Brazil");

    int codigo;
    float quant, valor;

    printf("\nDigite o código do produto e depois a quantidade:\n\n");
    printf("CÓDIGO | PRODUTO         | PREÇO UNITÁRIO\n100    | Cachorro quente | R$1,70\n101    | Bauru Simples   | R$2,30\n102    | Bauru com ovo   | R$2,60\n103    | Hamburguer      | R$2,40\n104    | Cheeseburguer   | R$2,50\n105    | Refrigerane     | R$1,00\n\n");
    scanf("%d %f", &codigo, &quant);

    switch(codigo) {
        case 100:
            valor = quant * 1.7;
            printf("\nO valor total a pagar é de R$%.2f", valor);
            break;
        case 101:
            valor = quant * 2.3;
            printf("\nO valor total a pagar é de R$%.2f", valor);
            break;
        case 102:
            valor = quant * 2.6;
            printf("\nO valor total a pagar é de R$%.2f", valor);
            break;
        case 103:
            valor = quant * 2.4;
            printf("\nO valor total a pagar é de R$%.2f", valor);
            break;
        case 104:
            valor = quant * 2.5;
            printf("\nO valor total a pagar é de R$%.2f", valor);
            break;
        case 105:
            valor = quant * 1;
            printf("\nO valor total a pagar é de R$%.2f", valor);
            break;
        default:
            printf("\nCódigo não encontrado, tente novamente!");
            break;
    }

    return 0;
}