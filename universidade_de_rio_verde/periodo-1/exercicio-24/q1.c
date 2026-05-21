#include <stdio.h>
#include <locale.h>
#include <stdbool.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int input, acumulador = 0, perfeito, primo;

    printf("Informe um número inteiro positivo: ");
    scanf("%d", &input);
    perfeito = input;
    primo = input;

    while (true) {
        perfeito++;
        acumulador = 0;
        
        for (int i = 1; i < perfeito ; i++) {
            if (perfeito % i == 0) {
                acumulador += i;
            }
        }

        if (acumulador == perfeito) {
            break;
        }
    }

    while (true) {
        primo++;
        acumulador = 0;

        for (int i = 1; i <= primo; i++) {
            if (primo % i == 0) {
                acumulador += primo / i;
            }
        }

        if (acumulador == primo + 1) {
            break;
        }
    }

    printf("O primeiro número PERFEITO maior que o número fornecido é: %d\n", perfeito);
    printf("O primeiro número PRIMO maior que o número fornecido é: %d", primo);

    return 0;
}