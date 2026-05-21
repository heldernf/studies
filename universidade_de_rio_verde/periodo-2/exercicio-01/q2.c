#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int dia;

    printf("Digite um número de 1 a 7 para saber o dia da semana: ");
    scanf("%d", &dia);

    switch (dia) {
        case 1:
            printf("Domingo");
            break;
        case 2:
            printf("Segunda-feira");
            break;
        case 3:
            printf("Terça-feira");
            break;
        case 4:
            printf("Quarta-feira");
            break;
        case 5:
            printf("Quinta-feira");
            break;
        case 6:
            printf("Sexta-feira");
            break;
        case 7:
            printf("Sábado");
            break;
        default:
            printf("Número inválido.");
    }

    return 0;
}