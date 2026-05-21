#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int totalPessoas = 4, contador = 0, filhos, totalFilhos = 0, mediaFilhos, salarioAte1500 = 0;
    float salario, maiorSalario = 0, totalSalario = 0, mediaSalario, percentualSalarioAte1500;

    do {
        printf("Informe o seu salário: ");
        scanf("%f", &salario);
        totalSalario += salario;

        printf("Informe quantos filhos você tem: ");
        scanf("%d", &filhos);
        totalFilhos += filhos;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 1500) {
            salarioAte1500++;
        }

        contador++;
    } while (contador < totalPessoas);

    mediaSalario = totalSalario / totalPessoas;
    mediaFilhos = totalFilhos / totalPessoas;
    percentualSalarioAte1500 = (float) salarioAte1500 / totalPessoas * 100;
    
    printf("\nMédia salarial: R$%.2f\nPercentual de pessoas com salário de até R$1500: %.2f%%\nMédia de filhos: %d\nMaior salário: R$%.2f\n", mediaSalario, percentualSalarioAte1500, mediaFilhos, maiorSalario);

    return 0;
}