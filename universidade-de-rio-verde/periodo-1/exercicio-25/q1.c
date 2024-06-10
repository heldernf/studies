#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int input, fatorial = 0, auxiliar, acumulador = 0;

    printf("Informe o número que deseja obter o fatorial: ");
    scanf("%d", &input);
    auxiliar = input;
    fatorial = input;

    if (input < 0) {
        printf("NÃO existe o fatorial de %d", input);
    } else {
        if (input <= 1) {
            printf("O fatorial de %d é 1", input);
            if (input == 1) {
                acumulador = 1;
            } else {
                acumulador = 0;
            }
        } else {
            while (auxiliar >= 1) {
                acumulador += auxiliar;
                auxiliar--;
                if (auxiliar > 0) {
                    fatorial = fatorial * auxiliar;
                }
            }

            printf("O fatorial de %d é %d, e a soma dos digitos é %d", input, fatorial, acumulador);
        }
    }

    return 0;
}