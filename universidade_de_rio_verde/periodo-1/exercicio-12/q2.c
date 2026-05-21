#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese_Brazil");

    int mes;

    printf("\nDigite o número de um mês EX: JANEIRO = 1, FEVEREIRO = 2...\nMês: ");
    scanf("%d", &mes);

    mes > 0 && mes <= 12 ? printf("\nMês VÁLIDO!") : printf("\nMês INVÁLIDO");

    return 0;
}