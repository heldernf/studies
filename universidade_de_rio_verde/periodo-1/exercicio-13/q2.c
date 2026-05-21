#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int valor1, valor2, resultado;

    printf("Digite o PRIMEIRO valor: ");
    scanf("%d", &valor1);

    printf("Digite o SEGUNDO valor: ");
    scanf("%d", &valor2);

    if (valor1 == valor2) {
        resultado = valor1 + valor2;
    } else {
        resultado = valor1 * valor2;
    }

    printf("Resultado: %d", resultado);

    return 0;
}