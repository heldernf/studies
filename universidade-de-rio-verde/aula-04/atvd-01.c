#include <stdio.h>
#include <string.h>

int main() {
    char nome[50];

    printf("Digite o seu nome: ");
    scanf("%[^\n]", nome);

    printf("Seu nome �: %s", nome);

    return 0;
}