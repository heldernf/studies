#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese_Brazil");

    int mes;

    printf("\nDigite o n�mero de um m�s EX: JANEIRO = 1, FEVEREIRO = 2...\nM�s: ");
    scanf("%d", &mes);

    mes > 0 && mes <= 12 ? printf("\nM�s V�LIDO!") : printf("\nM�s INV�LIDO");

    return 0;
}