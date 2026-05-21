#include <stdio.h>

int main() {
    printf("For:\n");
    for (int i = 1; i <= 10; i++) {
        printf("%d\n", i);
    }

    printf("---------------------\n");

    int numero = 1;
    printf("While:\n");
    while (numero <= 10) {
        printf("%d\n", numero);
        numero++;
    }
    numero = 1;
        
    printf("---------------------\n");

    printf("Do-while:\n");
    do {
        printf("%d\n", numero);
        numero++;
    } while (numero <= 10);

    return 0;
}
