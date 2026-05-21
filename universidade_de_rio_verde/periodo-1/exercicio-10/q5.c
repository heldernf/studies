#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int codigo;

    printf("Digite o código do produto: ");
    scanf("%d", &codigo);

    if (codigo == 1) {
        printf("Alimento não perecível");
    } else if (codigo >= 2 && codigo <= 4) {
        printf("Alimento perecível");
    } else if (codigo == 5 || codigo == 6) {
        printf("Vestuário");
    } else if (codigo == 7) {
        printf("Higiene pessoal");
    } else if (codigo >= 8 && codigo <= 15) {
        printf("Limpeza e utensílios domésticos");
    } else {
        printf("Código incorreto, tente novamente");
    }

    return 0;
}