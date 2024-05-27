#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int i;
    float chico = 1.50, juca = 1.10;

    for (i = 1; juca <= chico; i++) {
        printf("-------------------------------");
        chico += 0.02;
        juca += 0.03;
        printf("\n%dº ano\nAltura do Chico: %.2f\nAltura do Juca: %.2f", i, chico, juca);
        printf("\n-------------------------------\n\n");
    }

    printf("Por fim, foi necessário %d anos para que Juca fosse maior que Chico.", i - 1);

    return 0;
}