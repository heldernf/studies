#include <stdio.h>
#include <locale.h>

int main()
{
    setlocale(LC_ALL, "Portuguese_Brazil");

    int i = 0, quant = 0;

    printf("Digite quantas vezes você quer repetir o loop: ");
    scanf("%d", &quant);

    while (i <= quant) {
        printf ("%d ", i);
        i++;
    }

    return 0;
}