#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese_Brazil");

    float nota[5];

    for (int i = 0; i < 5; i++) {
        printf("Informe a nota %d do aluno: ", i + 1);
        scanf("%f", &nota[i]);
    }

    for (int i = 0; i < 5; i++) {
        printf("Nota %d: %.2f\n", i + 1, nota[i]);
    }

    return 0;
}
