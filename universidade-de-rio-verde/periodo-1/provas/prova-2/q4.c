#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int pessoa[10], i = 0;

    for (i = 0 ; i < 10; i++) {
        printf("Digite a idade da %dº pessoa: ", i + 1);
        scanf("%d", &pessoa[i]);
    }

    for (i = 0; i < 10; i++) {
        if (pessoa[i] >= 18) {
            printf("\nA %dº pessoa é maior de idade, ela possui %d anos.", i + 1, pessoa[i]);
        }
    }

    return 0;
}