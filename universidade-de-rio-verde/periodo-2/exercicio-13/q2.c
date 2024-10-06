#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(NULL));

    int array[4];

    printf("Array inicial:\n");
    for (int i = 0; i < 4; i++) {
        array[i] = rand() % 50;
        printf("%d ", array[i]);
    }

    printf("\n\nArray ordenado:\n");
    for (int i = 1; i < 4; i++) {
        int currentElement = array[i];
        int j = i - 1;

        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = currentElement;
    }
    
    for (int i = 0; i < 4; i++) {
        printf("%d ", array[i]);
    }

    return 0;
}