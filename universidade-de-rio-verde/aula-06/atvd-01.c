#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");
    
    int input, antecessor, sucessor;

    printf("Digite um n�mero inteiro e eu lhe darei o n�mero antecessor e sucessor dele.\n");
    scanf("%d", &input);
    antecessor = input - 1;
    sucessor = input + 1;

    printf("O ANTECESSOR de %d � %d e o SUCESSOR � %d :)", input, antecessor, sucessor);

    return 0;
}