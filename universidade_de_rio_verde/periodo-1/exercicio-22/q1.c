#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float valor, aVista = 0.0, aPrazo = 0.0, totalCompras = 0.0, primeiraPrestacao;
    char tipoTransacao;

    for (int i = 0; i < 15; i++) {
        printf("Informe o código de transação, V para a vista e P para a prazo: ");
        scanf(" %c", &tipoTransacao);
        while (tipoTransacao != 'V' && tipoTransacao != 'v' && tipoTransacao != 'P' && tipoTransacao != 'p') {
            printf("Código inválido, tente novamente: ");
            scanf(" %c", &tipoTransacao);
        }

        printf("Informe o valor da transação: ");
        scanf("%f", &valor);
        totalCompras += valor;

        if (tipoTransacao == 'V' || tipoTransacao == 'v') {
            aVista += valor;
        } else {
            aPrazo += valor;
        }
    }

    primeiraPrestacao = aPrazo / 3;

    printf("\nTotal das compras: %.2f\nCompras a vista: %.2f\nCompras a prazo: %.2f\nPrimeira prestação das compras a prazo: %.2f", totalCompras, aVista, aPrazo, primeiraPrestacao);

    return 0;
}