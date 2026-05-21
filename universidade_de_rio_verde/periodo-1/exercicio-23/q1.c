#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int carteira, multas, valorMulta, stop = -1;
    float dividaMotorista = 0.0, totalArrecadado = 0.0;

    for (int i = 0; stop != 0; i++) {
        printf("-----------------------------------------");

        printf("\nInforme o número da carteira de motorista (de 1 a 4327): ");
        scanf("%d", &carteira);
        while(carteira < 1 || carteira > 4327) {
            printf("Informe um valor válido: ");
            scanf("%d", &carteira);
        }

        printf("Informe o número de multas: ");
        scanf("%d", &multas);
        while(multas < 1) {
            printf("Informe um valor válido: ");
            scanf("%d", &multas);
        }

        printf("Informe o valor da cada uma das multas:\n");
        for (int i = 0; i < multas; i++) {
            scanf("%d", &valorMulta);
            while(valorMulta < 1) {
                printf("Informe um valor válido: ");
                scanf("%d", &valorMulta);
            }
            dividaMotorista += valorMulta;
            totalArrecadado += valorMulta;
        }

        printf("\nNumeração da carteira: %d\nTotal em multas a pagar: R$%.2f\n\n", carteira, dividaMotorista);
        dividaMotorista = 0.0;

        printf("Digite qualquer número para prosseguir cadastrando ou digite 0 para parar: ");
        scanf("%d", &stop);

        printf("-----------------------------------------\n\n");
    }
    printf("Total arrecadado: R$%.2f", totalArrecadado);

    return 0;
}