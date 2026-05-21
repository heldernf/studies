#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int canal, assistindo, audienciaTotal = 0, i;
    float audienciaCanal4 = 0.0, audienciaCanal5 = 0.0, audienciaCanal7 = 0.0, audienciaCanal12 = 0.0;

    printf("Informe o número do canal (válidos: 4, 5, 7, 12), o 0 (zero) encerra o programa.\n");
    for (i = 0; canal != 0; i++) {
        printf("-------------------------------------------------\n");
        printf("Canal: ");
        scanf("%d", &canal);
        
        while (canal != 0 && canal != 4 && canal != 5 && canal != 7 && canal != 12) {
            printf("Canal inválido, tente novamente: ");
            scanf("%d", &canal);
        }

        if (canal != 0) {
            printf("Informe o número de pessoas que estavam assistindo: ");
            scanf("%d", &assistindo);
            audienciaTotal += assistindo;

            if (canal == 4) {
                audienciaCanal4 += assistindo;
            } else if (canal == 5) {
                audienciaCanal5 += assistindo;
            } else if (canal == 7) {
                audienciaCanal7 += assistindo;
            } else {
                audienciaCanal12 += assistindo;
            }
        }

        printf("-------------------------------------------------\n\n");
    }
    
    if (i > 1) {
        audienciaCanal4 = audienciaCanal4 * 100 / audienciaTotal;
        audienciaCanal5 = audienciaCanal5 * 100 / audienciaTotal;
        audienciaCanal7 = audienciaCanal7 * 100 / audienciaTotal;
        audienciaCanal12 = audienciaCanal12 * 100 / audienciaTotal;
    }
    
    printf("Porcentagem da audiência de cada canal\nCanal 4: %.2f%%\nCanal 5: %.2f%%\nCanal 7: %.2f%%\nCanal 12: %.2f%%", audienciaCanal4, audienciaCanal5, audienciaCanal7, audienciaCanal12);

    return 0;
}