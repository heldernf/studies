#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    srand(time(NULL));

    int vector[10], newVector[5];

    for (int i = 0; i < 10; i++) {
        vector[i] = rand() % 10 + 1;
    }

    printf("Vetor base: \n");
    for (int i = 0; i < 10; i++) {
        printf("%d\n", vector[i]);
        if (i % 2 == 1) {
            printf("---\n");
        }
    }

    for (int i = 0; i < 5; i++) {
        newVector[i] = vector[2 * i] + vector[2 * i + 1];
    }

    printf("Novo vetor: \n");
    for (int i = 0; i < 5; i++) {
        printf("%d\n", newVector[i]);
    }
    
    return 0;
}