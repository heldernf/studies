#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(NULL));

    int vetorA[10], vetorB[10], vetorC[10];

    for (int i = 0; i < 10; i++) {
        vetorA[i] = rand() % 100;
    }
    for (int i = 0; i < 10; i++) {
        vetorB[i] = rand() % 100;
    }
    for (int i = 0; i < 10; i++) {
        vetorC[i] = vetorA[i] - vetorB[i];
        printf("%d ", vetorC[i]);
    }

    return 0;
}