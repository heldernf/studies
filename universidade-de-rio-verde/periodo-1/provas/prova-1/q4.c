#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int diasTrabalhados;
    float salario;

    printf("Digite quantos dias voc� trabalhou: ");
    scanf("%d", &diasTrabalhados);

    salario = 8 * 25 * diasTrabalhados;

    printf("Voc� receber� R$%.2f de sal�rio.", salario);

    return 0;
}