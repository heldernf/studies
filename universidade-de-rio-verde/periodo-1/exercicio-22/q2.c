#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int idade, superior50 = 0, i;
    float altura, peso, mediaAlturaIdade10a20 = 0.0, inferior40kg = 0.0;

    for (i = 0; i < 3; i++) {
        printf("Informe sua idade: ");
        scanf("%d", &idade);
        printf("Informe sua altura: ");
        scanf("%f", &altura);
        printf("Informe seu peso: ");
        scanf("%f", &peso);

        if (idade > 50) {
            superior50++;
        }

        if (idade > 10 && idade < 20) {
            mediaAlturaIdade10a20 += altura;
        }

        if (peso < 40) {
            inferior40kg++;
        }
    }
    mediaAlturaIdade10a20 /= i;
    inferior40kg = inferior40kg * i / 100;

    printf("\nPessoas com idade superior a 50: %d\nMédia das alturas das pessoas com idade entre 10 e 20 anos: %.2f\nPorcentagem das pessoas com peso inferior a 40 quilos: %.2f", superior50, mediaAlturaIdade10a20, inferior40kg);

    return 0;
}