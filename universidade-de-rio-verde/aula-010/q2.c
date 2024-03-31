#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int idade, tempoServico;

    printf("Digite a sua idade: ");
    scanf("%d", &idade);
    printf("Digite o seu tempo de serviço em anos: ");
    scanf("%d", &tempoServico);

    if (idade >= 65 || tempoServico >= 30 || (idade >= 60 && tempoServico >= 25)) {
        printf("Você ESTÁ apto para a aposentadoria!");
    } else {
        printf("Você NÃO está apto para a aposentadoria!");
    }

    return 0;
}