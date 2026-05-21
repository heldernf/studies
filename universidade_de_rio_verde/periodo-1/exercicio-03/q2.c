#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int valor1, valor2, resultado;

    printf("Olá, vamos multiplicar!\nDigite o primeiro valor: ");
    scanf("%d", &valor1);
    printf("Agora digite o segundo valor: ");
    scanf("%d", &valor2);
    
    resultado = valor1 * valor2;
    printf("O resultado da multiplicação dos números que você me deu é: %d", resultado);

    return 0;
}