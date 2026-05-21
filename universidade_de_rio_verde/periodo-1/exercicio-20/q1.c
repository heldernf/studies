#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int idade = -1, totalLido;
    float media = 0;

    printf("Digite uma idade e quando quiser parar digite 0\n");
    for (totalLido = 0; idade != 0; totalLido++) {
        scanf("%d", &idade);
        media += idade;
    }

    media /= totalLido - 1;

    printf("%f", media);

    return 0;
}
