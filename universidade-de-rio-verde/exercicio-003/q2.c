#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int valor1, valor2, resultado;

    printf("Ol�, vamos multiplicar!\nDigite o primeiro valor: ");
    scanf("%d", &valor1);
    printf("Agora digite o segundo valor: ");
    scanf("%d", &valor2);
    
    resultado = valor1 * valor2;
    printf("O resultado da multiplica��o dos n�meros que voc� me deu �: %d", resultado);

    return 0;
}