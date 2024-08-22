#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguse_Brazil");

    int numbers[10];
    int sizeNumbers = sizeof(numbers) / 4;
    int maiorNumbers[sizeNumbers];

    printf("Informe %d n�meros inteiros: \n", sizeNumbers);
    for (int i = 0; i < sizeNumbers; i++) {
        scanf("%d", &numbers[i]);
    }

    int valor;
    printf("Informe um valor inteiro: \n");
    scanf("%d", &valor);
    int totalMaior = 0, totalMenor = 0, totalIgual = 0;

    printf("N�meros do vetor que s�o maiores que o valor informado:\n");
    for (int i = 0; i < sizeNumbers; i++) {
        if (numbers[i] > valor) {
            maiorNumbers[totalMaior] = numbers[i];
            printf("%d ", maiorNumbers[totalMaior]);
            totalMaior++;
        } else if (numbers[i] < valor) {
            totalMenor++;
        } else {
            totalIgual++;
        }
    }

    printf("\n%d n�meros armazenados no vetor s�o menores que o valor informado", totalMenor);
    printf("\nO valor informado aparece %d vezes no vetor", totalIgual);

    return 0;
}