#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numero, dentroIntervalo = 0, foraIntervalo;

    printf("Digite 10 n�meros:\n");
    for (int i = 0; i < 10; i++) {
        scanf("%d", &numero);

        if (numero >= 10 && numero <=20) {
            dentroIntervalo++;
        }
    }

    foraIntervalo = 10 - dentroIntervalo;

    printf("Total de n�meros no intervalo 10 - 20: %d\nTotal de n�meros que n�o est�o no intervalo 10 - 20: %d", dentroIntervalo, foraIntervalo);

    return 0;
}