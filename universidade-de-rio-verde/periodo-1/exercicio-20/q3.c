#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numero, dentroIntervalo = 0, foraIntervalo = 0;

    printf("Digite 10 números:\n");
    for (int i = 0; i < 10; i++) {
        scanf("%d", &numero);

        if (numero >= 10 && numero <=20) {
            dentroIntervalo++;
        } else {
            foraIntervalo++;
        }
    }

    printf("Total de números no intervalo 10 - 20: %d\nTotal de números que não estão no intervalo 10 - 20: %d", dentroIntervalo, foraIntervalo);

    return 0;
}
