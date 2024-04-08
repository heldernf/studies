#include <stdio.h>
#include <string.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    char data[10];

    printf("Digite a data ");
    scanf("%[^\n]", data);

    printf("A data é: %s", data);
}