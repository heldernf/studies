#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");
    
    int input, antecessor, sucessor;

    printf("Digite um número inteiro e eu lhe darei o número antecessor e sucessor dele.\n");
    scanf("%d", &input);
    antecessor = input - 1;
    sucessor = input + 1;

    printf("O ANTECESSOR de %d é %d e o SUCESSOR é %d :)", input, antecessor, sucessor);

    return 0;
}