#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int idade, tempoServico;

    printf("Digite a sua idade: ");
    scanf("%d", &idade);
    printf("Digite o seu tempo de servi�o em anos: ");
    scanf("%d", &tempoServico);

    if (idade >= 65 || tempoServico >= 30 || (idade >= 60 && tempoServico >= 25)) {
        printf("Voc� EST� apto para a aposentadoria!");
    } else {
        printf("Voc� N�O est� apto para a aposentadoria!");
    }

    return 0;
}