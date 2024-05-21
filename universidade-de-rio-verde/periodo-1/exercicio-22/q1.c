#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float valor, aVista = 0.0, aPrazo = 0.0, totalCompras = 0.0, primeiraPrestacao;
    char tipoTransacao;

    for (int i = 0; i < 15; i++) {
        printf("Informe o c�digo de transa��o, V para a vista e P para a prazo: ");
        scanf(" %c", &tipoTransacao);
        while (tipoTransacao != 'V' && tipoTransacao != 'v' && tipoTransacao != 'P' && tipoTransacao != 'p') {
            printf("C�digo inv�lido, tente novamente: ");
            scanf(" %c", &tipoTransacao);
        }

        printf("Informe o valor da transa��o: ");
        scanf("%f", &valor);
        totalCompras += valor;

        if (tipoTransacao == 'V' || tipoTransacao == 'v') {
            aVista += valor;
        } else {
            aPrazo += valor;
        }
    }

    primeiraPrestacao = aPrazo / 3;

    printf("\nTotal das compras: %.2f\nCompras a vista: %.2f\nCompras a prazo: %.2f\nPrimeira presta��o das compras a prazo: %.2f", totalCompras, aVista, aPrazo, primeiraPrestacao);

    return 0;
}