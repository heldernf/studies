#include <stdio.h>

int main() {
    int arrayLength = 10, array[arrayLength];

    printf("Informe %d valores para que eu organize", arrayLength);
    for (int i = 0; i < arrayLength; i++) {
        printf("\nValor %d:", i + 1);
        scanf("%d", &array[i]);
    }

    for (int i = 1; i < arrayLength; i++) {
        for (int j = 0; j < arrayLength - 1; j++) {
            if (array[j] < array[j + 1]) {
                int nextValueArray = array[j + 1];
                array[j + 1] = array[j];
                array[j] = nextValueArray;
            }
        }
    }

    for (int i = 0; i < arrayLength; i++) {
        printf("%d ", array[i]);
    }

    return 0;
}