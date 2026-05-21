#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float nota[3], media = 0;
    int i = 0;

    while (i < 3) {
        printf("Digite a nota%d: ", i + 1);
        scanf("%f", &nota[i]);
        media += nota[i];
        i++;
    }

    media = media / i;

    printf("A media das duas notas %.2f %.2f %.2f é: %.2f", nota[0], nota[1], nota[2], media);

    return 0;
}