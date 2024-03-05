#include <stdio.h>
#include <locale.h>
#include <string.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");
    
    char nome[25];
    float nota1, nota2, nota3, nota4, media;

    printf("Digite o seu nome e sobrenome:\n");
    scanf("%[^\n]", nome);

    printf("\nAgora digite as suas 4 notas, uma por vez e envie:\n");
    scanf("%f %f %f %f", &nota1, &nota2, &nota3, &nota4);
    media = (nota1 + nota2 + nota3 + nota4) / 4;

    printf("Olá %s, com base em suas notas a sua média é: %f", nome, media);

    return 0;
}