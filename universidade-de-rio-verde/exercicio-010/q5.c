#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int codigo;

    printf("Digite o c�digo do produto: ");
    scanf("%d", &codigo);

    if (codigo == 1) {
        printf("Alimento n�o perec�vel");
    } else if (codigo >= 2 && codigo <= 4) {
        printf("Alimento perec�vel");
    } else if (codigo == 5 || codigo == 6) {
        printf("Vestu�rio");
    } else if (codigo == 7) {
        printf("Higiene pessoal");
    } else if (codigo >= 8 && codigo <= 15) {
        printf("Limpeza e utens�lios dom�sticos");
    } else {
        printf("C�digo incorreto, tente novamente");
    }

    return 0;
}