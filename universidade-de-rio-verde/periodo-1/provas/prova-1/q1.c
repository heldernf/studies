#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int codigo, horasTrabalhadas;
    float valorHora, salario;

    printf("Digite seu c�digo: ");
    scanf("%d", &codigo);

    printf("Agora Digite seu n�mero de horas trabalhadas: ");
    scanf("%d", &horasTrabalhadas);

    printf("E por fim me diga quanto voc� recebe por hora: R$");
    scanf("%f", &valorHora);
    salario = valorHora * horasTrabalhadas;

    printf("\nFuncion�rio %d\nSal�rio: R$%.2f", codigo, salario);

    return 0;
}