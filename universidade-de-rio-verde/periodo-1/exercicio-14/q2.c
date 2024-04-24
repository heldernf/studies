#include <stdio.h>
#include <locale.h>

int main()
{
    setlocale(LC_ALL, "Portuguese_Brazil");

    int i = 1;

    do {
        printf("%d ", i);
        i++;
    } while (i <= 10);

    return 0;
}