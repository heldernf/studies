#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int fumadoDia, fumadoAno , diasPerdidos;

    printf("Digite a quantidade de cigarros que você fuma por dia: ");
    scanf("%d", &fumadoDia);

    printf("Digite a quantos anos você fuma: ");
    scanf("%d", &fumadoAno);

    diasPerdidos = (fumadoDia * 10) / 60 / 24 * (fumadoAno * 365);

    printf("Você perdeu %d dias de vida!", diasPerdidos);

    return 0;
}