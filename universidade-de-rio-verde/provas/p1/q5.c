#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int fumadoDia, fumadoAno , diasPerdidos;

    printf("Digite a quantidade de cigarros que voc� fuma por dia: ");
    scanf("%d", &fumadoDia);

    printf("Digite a quantos anos voc� fuma: ");
    scanf("%d", &fumadoAno);

    diasPerdidos = fumadoDia * (fumadoAno * 365) / 60 / 24;

    printf("Voc� perdeu %d dias de vida!", diasPerdidos);

    return 0;
}