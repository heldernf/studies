#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguse_Brazil");

    int sequenciaFibonacci[10];

    for (int i = 0; i < 10; i++) {
        if (i == 0) {
            sequenciaFibonacci[i] = 0;
        } else if (i <= 2) {
            sequenciaFibonacci[i] = sequenciaFibonacci[i - 1] + 1;
        } else {
            sequenciaFibonacci[i] = sequenciaFibonacci[i - 1] + sequenciaFibonacci[i - 2];
        }
    }

    printf("Sequência de fibonacci: ");
    for (int i = 0; i < 10; i++) {
        if (i <= 9) {
            printf("%d, ", sequenciaFibonacci[i]);
        }
        else {
            printf("%d.", sequenciaFibonacci[i]);
        }
    }
    return 0;
}