#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int n1, n2, quo, res;

    printf("Digite um valor: ");
    scanf("%d", &n1);
    printf("Digite outro valor: ");
    scanf("%d", &n2);

    quo = n1 / n2;
    res = n1 % n2;

    printf("O quociente é: %d\n", quo);
    printf("O resto é: %d", res);

    return 0;
}