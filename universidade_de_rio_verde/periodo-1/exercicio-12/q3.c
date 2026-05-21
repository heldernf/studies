#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese_Brazil");

    int ano;

    printf("\nDigite um ano: ");
    scanf("%d", &ano);

    ano >= 1900 && ano <= 2100 ? printf("Ano VÁLIDO") : printf("Ano INVÁLIDO");

    return 0;
}