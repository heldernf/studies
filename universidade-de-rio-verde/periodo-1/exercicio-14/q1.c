#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int i = 1;

    while (i <= 10) {
        printf("%d ", i);
        i++;
    }

    return 0;
}