#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int idade = 0, tempoServico = 0;

    printf("Digite a sua idade: ");
    scanf("%d", &idade);

    printf("Digite o seu tempo de servi�o: ");
    scanf("%d", &tempoServico);

    if (idade >= 65 || tempoServico >= 30 || (idade >= 60 && tempoServico >= 25)) {
        printf("Voc� PODE se aposentar.");
    } else {
        printf("Voc� N�O pode se aposentar.");
    }

    return 0;
}