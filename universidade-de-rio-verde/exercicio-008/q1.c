#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float num1, num2;

    printf("Olá, me diga dois número e lhe direi o maior e o menor! (digite um número por vez e envie um de cada vez):\n");
    scanf("%f %f", &num1, &num2);

    if (num1 > num2) {
        printf("O %.2f é o maior número e o %.2f é menor número", num1, num2);
    } else {
        printf("O %.2f é o maior número e o %.2f é menor número", num2, num1);
    }

    return 0;
}