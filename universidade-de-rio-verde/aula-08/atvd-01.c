#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float num1, num2;

    printf("Ol�, me diga dois n�mero e lhe direi o maior e o menor! (digite um n�mero por vez e envie um de cada vez):\n");
    scanf("%f %f", &num1, &num2);

    if (num1 > num2) {
        printf("O %.2f � o maior n�mero e o %.2f � menor n�mero", num1, num2);
    } else {
        printf("O %.2f � o maior n�mero e o %.2f � menor n�mero", num2, num1);
    }

    return 0;
}