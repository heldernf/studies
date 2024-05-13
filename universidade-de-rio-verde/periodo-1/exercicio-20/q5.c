#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int escolha, v1, v2 = 0, resultado = 0;

    printf("Escolha o n-ésimo termo da sequência de Fibonacci: ");
    scanf("%d", &escolha);

    for (int i = 0; i <= escolha; i++) {
        if (i == 1) {
            v2 = i;
        }
        v1 = v2;
        v2 = resultado;
        resultado = v1 + v2;
        printf("(%d) %d\n", i, resultado);
    }

    return 0;
}