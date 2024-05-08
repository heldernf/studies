#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int idade = -1, totalPessoas = 0, menorIdade, maiorIdade = 0;
    float idadeMedia = 0;

    printf("Digite a idade:\n");
    while (idade != 0) {
        scanf("%d", &idade);

        if (idade != 0) {
            idadeMedia += idade;
    
            totalPessoas++;
    
            if (totalPessoas == 1) {
                menorIdade = idade;
            }

            if (idade < menorIdade) {
                menorIdade = idade;
            }
            if (idade > maiorIdade) {
                maiorIdade = idade;
            }
        }

    }
    idadeMedia /= (float) totalPessoas;

    printf("\nTotal de pessoas: %d\nIdade média do grupo: %.2f\nMenor idade: %d\nMaior idade: %d", totalPessoas, idadeMedia, menorIdade, maiorIdade);

    return 0;
}