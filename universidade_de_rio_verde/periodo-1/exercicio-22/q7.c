#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int i, numeroAdicionalPessoas, totalPessoas;
    float ingresso = 5.00, ganhos, gasto = 200.00, lucro, melhorLucro = 0.0, melhorIngresso;

    printf("Informe o número adicional de pessoas: ");
    scanf("%d", &numeroAdicionalPessoas);

    for (i = 1; ingresso > 1.00; i++) {
        ingresso -= 0.50;
        totalPessoas = 120 + numeroAdicionalPessoas * i;
        ganhos = (float) ingresso * totalPessoas;
        lucro = ganhos - gasto;

        if (lucro > melhorLucro) {
            melhorLucro = lucro;
            melhorIngresso = ingresso;
        }

        printf("---------------------------\n");
        printf("Valor do ingresso: R$%.2f\n", ingresso);
        printf("Publico total: %d\n", totalPessoas);
        printf("Ganhos: R$%.2f\n", ganhos);
        printf("Gasto: R$%.2f\n", gasto);
        printf("Lucro: R$%.2f\n", lucro);
        printf("---------------------------\n\n");
    }

    printf("O valor do ingresso que te gera mais lucro é o de R$%.2f considerando o adicional de pessoas como %d, pois os lucros foram de R$%.2f!", melhorIngresso, numeroAdicionalPessoas, melhorLucro);

    return 0;
}