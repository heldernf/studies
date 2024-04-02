#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main(){
    setlocale(LC_ALL, "Portuguese_Brazil");

    char nome[50];
    float vendido, comissao;

    printf("Digite o seu nome: ");
    scanf("%[^\n]", nome);
    printf("Digite a quantidade de produtos vendido: ");
    scanf("%f", &vendido);

    if (vendido > 0 && vendido <= 250) {
        comissao = vendido * 1.0;
    } else if (vendido > 250 && vendido <= 500) {
        comissao = vendido * 1.5;
    } else if (vendido > 500) {
        comissao = vendido * 2.0;
    } else {
        printf("\nQuantidade inválida!");
        exit (0);
    }

    printf("\nNome: %s\nComissão: R$%.2f", nome, comissao);

    return 0;
}