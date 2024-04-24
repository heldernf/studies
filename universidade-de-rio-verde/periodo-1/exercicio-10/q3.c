#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float peso, altura, imc;

    printf("Digite o seu peso em KG: ");
    scanf("%f", &peso);
    printf("Digite a sua altura em METROS: ");
    scanf("%f", &altura);

    imc = peso / (altura * altura);

    if (imc < 18.5) {
        printf("\nSeu IMC: %.1f\nResultado: abaixo do peso", imc);
    } else if (imc <= 24.9) {
        printf("\nSeu IMC: %.1f\nResultado: saudável", imc);
    } else if (imc <= 29.9) {
        printf("\nSeu IMC: %.1f\nResultado: peso em excesso", imc);
    } else if (imc <= 34.9) {
        printf("\nSeu IMC: %.1f\nResultado: obesidade Grau I", imc);
    } else if (imc <= 39.9) {
        printf("\nSeu IMC: %.1f\nResultado: obesidade Grau II (severa)", imc);
    } else {
        printf("\nSeu IMC: %.1f\nResultado: obesidade Grau III (mórbida)", imc);
    }

    return 0;
}