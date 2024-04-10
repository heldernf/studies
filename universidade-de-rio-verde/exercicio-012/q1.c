#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese_Brazil");

    int dia;

    printf("\nDigite um dia de um mês: ");
    scanf("%d", &dia);

    dia > 0 && dia <= 31 ? printf("Dia VÁLIDO") : printf("Dia INVÁLIDO");

    return 0;
}