#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float salario, ajuste, reajuste;

    printf("Digite o s�lario e depois a porcentagem que deseja para o reajuste:\n");
    scanf("%f %f", &salario, &ajuste);
    reajuste = (salario * ajuste) / 100 + salario;

    printf("O novo sal�rio � R$%.2f", reajuste);

    return 0;
}