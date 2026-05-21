#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(NULL));

    int arrayLength = 50, array[arrayLength];

    printf("Array original:\n");
    for (int i = 0; i < arrayLength; i++) {
        array[i] = rand() % 50;
        printf("%d ", array[i]);
    }

    printf("\n\nArray organizado:\n");
    int swap, changes = 0;
    for (int i = 0; i < arrayLength - 1; i++) {
        for (int j = 0; j < arrayLength - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;

                changes++;
            }
        }
        if (changes == 0) { break; }
        changes = 0; 
    }

    for (int i = 0; i < arrayLength; i++) {
        printf("%d ", array[i]);
    }
}