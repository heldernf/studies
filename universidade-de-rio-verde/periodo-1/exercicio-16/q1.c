#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int jair = 0, carlos = 0, neves = 0, escolha = 0, totalVotos = 0;
    float nulo = 0.0, branco = 0.0;
    
    printf("1 - Jair Rodrigues\n2 - Carlos Luz\n3 - Neves Rocha\n4 - Nulo\n5 - Branco\n\nEscolha a opção de acordo com o número que prescede ela\n");
    do {
        scanf("%d", &escolha);

        switch (escolha) {
        case 1:
            jair++;
            totalVotos++;
            break;
        case 2:
            carlos++;
            totalVotos++;
            break;
        case 3:
            neves++;
            totalVotos++;
            break;
        case 4:
            nulo++;
            totalVotos++;
            break;
        case 5:
            branco++;
            totalVotos++;
            break;
        case 6:
            break;
        default:
            printf("O voto acima � invalido\n");
            break;
        }
    } while (escolha != 6);

    if (jair > carlos && jair > neves) {
        printf("O vencedor foi o Jair Rodrigues");
    }
    else if (carlos > jair && carlos > neves) {
        printf("O vencedor foi o Carlos Luz");
    }
    else if (neves > carlos && neves > jair) {
        printf("O vencedor o Neves Rocha");
    }
    else {
        printf("Empate, não houve vencedor");
    }

    nulo = 100 * (nulo / totalVotos);
    branco = 100 * (branco / totalVotos);

    printf("\nJair Rodrigues: %d votos\nCarlos Luz: %d votos\nNeves Rocha: %d votos\nPorcentagem de votos Brancos: %.2f%%\nPorcentagem de votos Nulos: %.2f%%", jair, carlos, neves, branco, nulo);

    return 0;
}