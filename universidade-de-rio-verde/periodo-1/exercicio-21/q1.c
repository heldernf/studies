#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int rodadas, jogador1, jogador2, vitoriaJogador1 = 0, vitoriaJogador2 = 0, empate = 0;

    printf("Digite quantas rodadas deseja jogar: ");
    scanf("%d", &rodadas);

    for (int i = 0; i < rodadas; i++) {
        printf("\n0 - Pedra\n1 - Papel\n2 - Tesoura\nEscolha de acordo com o respectivo número.\nJOGADOR 1: ");
        scanf("%d", &jogador1);
        while (jogador1 < 0 || jogador1 > 2 ) {
            scanf("%d", &jogador1);
        }
        printf("JOGADOR 2: ");
        scanf("%d", &jogador2);
        while (jogador2 < 0 || jogador2 > 2 ) {
            scanf("%d", &jogador2);
        }

        if ((jogador1 == 0 && jogador2 == 2) || (jogador1 == 1 && jogador2 == 0) || (jogador1 == 2 && jogador2 == 1)) {
            vitoriaJogador1++;
            printf("Vitória do JOGADOR 1\n");
        } else if ((jogador1 == 0 && jogador2 == 0) || (jogador1 == 1 && jogador2 == 1) || (jogador1 == 2 && jogador2 == 2)) {
            empate++;
            printf("EMPATE\n");
        } else {
            printf("Vitória do JOGADOR 2\n");
            vitoriaJogador2++;
        }
    }

    printf("\n\nVitórias do JOGADOR 1: %d\nVitórias do JOGADOR 2: %d\n", vitoriaJogador1, vitoriaJogador2);
    if (vitoriaJogador1 > vitoriaJogador2) {
        printf("O JOGADOR 1 venceu!");
    } else if (vitoriaJogador1 == vitoriaJogador2) {
        printf("EMPATE, ninguém venceu!");
    } else {
        printf("O JOGADOR 2 venceu!");
    }

    return 0;
}