#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int quinto = 0, totalQuinto = 0, divisao;

    for (int i = 1; totalQuinto < 5; i++) {
        quinto = 1000 + i;
        divisao = quinto % 11;
        if (divisao == 5) {
            totalQuinto++;
        }
    }
    printf("O quinto n�mero maior que 1000, cuja divis�o por 11 tenha resto 5 �: %d", quinto);

    return 0;
}