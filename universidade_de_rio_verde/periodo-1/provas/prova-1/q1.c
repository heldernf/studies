#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int codigo, horasTrabalhadas;
    float valorHora, salario;

    printf("Digite seu código: ");
    scanf("%d", &codigo);

    printf("Agora Digite seu número de horas trabalhadas: ");
    scanf("%d", &horasTrabalhadas);

    printf("E por fim me diga quanto você recebe por hora: R$");
    scanf("%f", &valorHora);
    salario = valorHora * horasTrabalhadas;

    printf("\nFuncionário %d\nSalário: R$%.2f", codigo, salario);

    return 0;
}