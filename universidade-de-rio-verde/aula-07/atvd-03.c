#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int idade, mes, dia, tDias;

    printf("Digite e envie um por vez. Sua idade, seus meses e dias desde\n");
    scanf("%d %d %d", &idade, &mes, &dia);
    idade *= 365;
    mes *= 30;
    tDias = idade + mes + dia;

    printf("\nVocê está vivo a %d dias.", tDias);

    return 0;
}