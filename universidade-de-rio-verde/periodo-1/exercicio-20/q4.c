#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int soma = 0;
    for (int i = 1; i < 50; i += 2) {
        printf("%d\n", i);
        soma += i;
    }

    printf("A soma dos números resultou em: %d", soma);

    return 0;
}