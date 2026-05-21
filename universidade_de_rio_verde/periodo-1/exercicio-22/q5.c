#include <stdio.h>
#include <locale.h>
#include <ctype.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int idade, idadeM50PesoM60 = 0, somaIdadeAltura1e50 = 0, cabeloRuivoSemOlhoAzul = 0, i;
    float peso, altura, olhoAzul = 0.0;
    char corOlho, corCabelo;

    for (i = 0; i < 20; i++) {
        printf("---------------------------------------------\n");

        printf("Informe a idade: ");
        scanf("%d", &idade);
        while (idade < 0 || idade > 100) {
            printf("Informe uma idade entre 0 e 100: ");
            scanf("%d", &idade);    
        }

        printf("Informe o peso: ");
        scanf("%f", &peso);
        while (peso < 2.00) {
            printf("Informe um peso maior que 2,00Kg: ");
            scanf("%f", &peso);
        }
        if (idade > 50 && peso < 60) {
            idadeM50PesoM60++;
        }

        printf("Informe a altura: ");
        scanf("%f", &altura);
        while (altura < 0.25 || altura > 2.72) {
            printf("Informe um altura entre 0,25 e 2,72: ");
            scanf("%f", &altura);
        }
        if (altura < 1.50) {
            somaIdadeAltura1e50 += idade;
        }

        printf("A - Azul\nP - Preto\nV - Verde\nC - Castanho\nInforme a cor dos olhos de acordo com a letra que o antescede: ");
        scanf(" %c", &corOlho);
        corOlho = toupper(corOlho);
        while (corOlho != 'A' && corOlho != 'P' && corOlho != 'V' && corOlho != 'C') {
            printf("Informe um caractere válido: ");
            scanf(" %c", &corOlho);
            corOlho = toupper(corOlho);
        }
        
        if (corOlho == 'A') {
            olhoAzul++;
        }

        printf("P - Preto\nC - Castanho\nL - Loiro\nR - Ruivo\nInforme a cor do cabelo de acordo com a letra que o antescede: ");
        scanf(" %c", &corCabelo);
        corCabelo = toupper(corCabelo);
        while (corCabelo != 'P' && corCabelo != 'C' && corCabelo != 'L' && corCabelo != 'R') {
            printf("Informe um caractere válido: ");
            scanf(" %c", &corCabelo);
            corCabelo = toupper(corCabelo);
        }

        if (corCabelo == 'R' && corOlho != 'A') {
            cabeloRuivoSemOlhoAzul++;
        }

        printf("---------------------------------------------\n\n");
    }
    somaIdadeAltura1e50 /= i;
    olhoAzul *= 100 / i;

    printf("\nQuantidade de pessoas com idade superior a 50 anos e peso inferior a 60 quilos: %d\n", idadeM50PesoM60);
    printf("Média das idades das pessoas com altura inferior a 1,50: %d\n", somaIdadeAltura1e50);
    printf("Porcentagem de pessoas com olhos azuis entre as pessoas analisadas: %.2f%%\n", olhoAzul);
    printf("Quantidade de pessoas ruivas que não possuem olhos azuis: %d\n", cabeloRuivoSemOlhoAzul);

    return 0;
}