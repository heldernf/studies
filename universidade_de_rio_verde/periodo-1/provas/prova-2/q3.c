#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int minutos = 0, pagar = 50;

    printf("Digite quantos minutos você consumiu: ");
    scanf("%d", &minutos);

    if (minutos > 100) {
        minutos -= 100;
        pagar += 2 * minutos;
    }

    printf("Você deve pagar R$ %d", pagar);

    return 0;
}