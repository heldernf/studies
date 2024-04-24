#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main(){
    setlocale(LC_ALL, "Portuguese_Brazil");

    float salario, novoSalario, diferenca;
    int cargo;

    printf("Digite o seu sal�rio: ");
    scanf("%f", &salario);
    printf("\nC�DIGO | CARGO      | PERCENTUAL\n101    | Gerente    | 10%%\n102    | Engenheiro | 20%%\n103    | T�cnico    | 30%%\n104    | Outro      | 40%%\n\nDigite o seu cargo de acordo com os n�meros acima: ");
    scanf("%d", &cargo);

    if (cargo == 101) {
        novoSalario = (salario * 10) / 100 + salario;
    } else if (cargo == 102) {
        novoSalario = (salario * 20) / 100 + salario;
    } else if (cargo == 103) {
        novoSalario = (salario * 30) / 100 + salario;
    } else if (cargo == 104) {
        novoSalario = (salario * 40) / 100 + salario;
    } else {
        printf("\nVoc� n�o escolheu nenhumas das alternativas, tente novamente.");
        exit (0);
    }

    diferenca = novoSalario - salario;

    printf("\nAntigo sal�rio: %.2f\nNovo sal�rio: %.2f\nDiferen�a: %.2f", salario, novoSalario, diferenca);

    return 0;
}