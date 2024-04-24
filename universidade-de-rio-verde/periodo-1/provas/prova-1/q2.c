#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    char nome[50];
    float salario, venda, salarioFinal;

    printf("Digite seu nome: ");
    scanf("%[^\n]", nome);

    printf("Digite seu salário: R$");
    scanf("%f", &salario);

    printf("Digite quantos reais você fez em vendas referente ao mês em que deseja obter informações: R$");
    scanf("%f", &venda);

    salarioFinal = (venda * 15) / 100 + salario;

    printf("Olá %s, no mês referido você receberá R$%.2f", nome, salarioFinal);

    return 0;
}