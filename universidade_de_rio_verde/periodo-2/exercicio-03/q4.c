#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <ctype.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    srand(time(NULL));

    char vector[50];
    int consoantes = 0;

    for (int i = 0; i < 50; i++) {
        vector[i] = 'a' + (rand() % 26);
        printf("%c ", vector[i]);
    }

    for (int i = 0; i < 50; i++) {
        if (vector[i] != 'a' && vector[i] != 'e' && vector[i] != 'i' && vector[i] != 'o' && vector[i] != 'u') {
            consoantes++;
        }
    }

    printf("\n\nTotal de Consoantes: %d", consoantes);

    return 0;
}