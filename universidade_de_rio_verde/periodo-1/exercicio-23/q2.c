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
    printf("O quinto número maior que 1000, cuja divisão por 11 tenha resto 5 é: %d", quinto);

    return 0;
}