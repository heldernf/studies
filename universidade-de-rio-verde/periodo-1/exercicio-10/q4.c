#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    char nome[50];
    float nota1, nota2, media;

    printf("Digte o seu nome: ");
    scanf("%[^\n]", nome);
    printf("Digite a nota da AVALIA��O 1: ");
    scanf("%f", &nota1);
    printf("Digite a nota da AVALIA��O 2: ");
    scanf("%f", &nota2);

    media = (nota1 + nota2) / 2;

    if (media < 3) {
        printf("\nNome: %s\nAvalia��o 1: %.2f\nAvalia��o 2: %.2f\nM�dia: %.2f\nSitua��o: Reprovado", nome, nota1, nota2, media);
    } else if (media < 7) {
        printf("\nNome: %s\nAvalia��o 1: %.2f\nAvalia��o 2: %.2f\nM�dia: %.2f\nSitua��o: Prova Final", nome, nota1, nota2, media);
    } else {
        printf("\nNome: %s\nAvalia��o 1: %.2f\nAvalia��o 2: %.2f\nM�dia: %.2f\nSitua��o: Aprovado", nome, nota1, nota2, media);
    }

    return 0;
}