#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguse_Brazil");

    int numero, mesesAtraso, totalImoveis = 0;
    float iptu, totalMulta = 0.0, totalJuros = 0.0, totalImposto = 0.0, total;

    while(1) {
        printf("Informe o número: ");
        scanf("%d", &numero);
        printf("Informe o valor do IPTU: ");
        scanf("%f", &iptu);
        printf("Informe a quantidade de meses em atraso: ");
        scanf("%d", &mesesAtraso);
        totalImoveis += 1;

        totalImposto += iptu;
        totalMulta += iptu * 2 / 100;
        totalJuros += iptu * (mesesAtraso * 1.5) / 100;

        printf("Deseja inserir mais? [1 - SIM, 2 - NÃO]");
        int res = 0;
        while (res != 1 && res != 2) {
            scanf("%d", &res);
        }
        if (res == 2) {
            break;
        }
    }

    printf("Total de imóveis inseridos: %d", totalImoveis);
    printf("\nTotal do imposto original: R$%.2f", totalImposto);
    printf("\nTotal em multas: R$%.2f", totalMulta);
    printf("\nTotal em juros: R$%.2f", totalJuros);

    total = totalImposto + totalJuros + totalMulta;
    printf("\nSomatorio do valor do imposto acrescido de juros e multas: R$%.2f", total);

    return 0;
}