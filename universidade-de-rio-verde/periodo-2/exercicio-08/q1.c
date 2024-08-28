#include <stdio.h>

int main() {
    int tamanhoVetor;
    printf("Informe o tamanho do vetor: ");
    scanf("%d", &tamanhoVetor);
    int vetor[tamanhoVetor - 1];

    for (int i = 0; i < tamanhoVetor; i++) {
        printf("Informe o %dº valor:\n", i + 1);
        scanf("%d", &vetor[i]);
    }
    int maiorDoVetor = vetor[0];
    int menorDoVetor = maiorDoVetor;
    int indexMaior = vetor[0];
    int indexMenor = indexMaior;

    int somarValorVetor = 0;
    for (int i = 0; i < tamanhoVetor; i++) {
        somarValorVetor = somarValorVetor + vetor[i];
    }
    int soma = somarValorVetor;
    int media = somarValorVetor / tamanhoVetor;

    int auxiliar, indexMedia;
    for (int i = 0; i < tamanhoVetor; i++) {
        if (vetor[i] > maiorDoVetor) {
            maiorDoVetor = vetor[i];
            indexMaior = i;
        } else if (vetor[i] < menorDoVetor) {
            menorDoVetor = vetor[i];
            indexMenor = i;
        }

        // ENTENDER MELHOR O CÓDIGO DAQUI
        if (vetor[i] > media) {
            auxiliar = vetor[i] - media;
        } else {
            auxiliar = media - vetor[i];
        }

        if (soma > auxiliar) {
            indexMedia = i;
            soma = auxiliar;
        }
        // ATÉ AQUI

    }

    if (vetor[0] != menorDoVetor) {
        auxiliar = vetor[0];
        vetor[0] = menorDoVetor;
        vetor[indexMenor] = auxiliar;
    }

    if (vetor[tamanhoVetor - 1] != maiorDoVetor) {
        auxiliar = vetor[tamanhoVetor];
        vetor[tamanhoVetor] = maiorDoVetor;
        vetor[indexMaior] = auxiliar;
    }

    int meioVetor = tamanhoVetor / 2;
    if (vetor[meioVetor] != vetor[indexMedia]) {
        auxiliar = vetor[meioVetor];
        vetor[meioVetor] = vetor[indexMedia];
        vetor[indexMedia] = auxiliar;
    }

    for (int i = 0; i < tamanhoVetor; i++) {
        printf("%d ", vetor[i]);
    }

    return 0;
}

// RESOLVER A MEDIA