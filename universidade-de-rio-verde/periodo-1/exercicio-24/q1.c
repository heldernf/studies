#include <stdio.h>
#include <locale.h>
#include <stdbool.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int input, acumulador = 0, perfeito, primo;

    printf("Informe um n�mero inteiro positivo: ");
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

    printf("O primeiro n�mero PERFEITO maior que o n�mero fornecido �: %d\n", perfeito);
    printf("O primeiro n�mero PRIMO maior que o n�mero fornecido �: %d", primo);

    return 0;
}