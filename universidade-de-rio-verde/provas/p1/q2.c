#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    char nome[50];
    float salario, venda, salarioFinal;

    printf("Digite seu nome: ");
    scanf("%[^\n]", nome);

    printf("Digite seu sal�rio: R$");
    scanf("%f", &salario);

    printf("Digite quantos reais voc� fez em vendas referente ao m�s em que deseja obter informa��es: R$");
    scanf("%f", &venda);

    salarioFinal = (venda * 15) / 100 + salario;

    printf("Ol� %s, no m�s referido voc� receber� R$%.2f", nome, salarioFinal);

    return 0;
}