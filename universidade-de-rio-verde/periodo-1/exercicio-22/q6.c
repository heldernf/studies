#include <stdio.h>
#include <locale.h>
#include <ctype.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int i, respondeuSim = 0, respondeuNao = 0, mulherRespondeuSim = 0, homemRespondeuNao = 0, homem = 0;
    float percenHomemRespondeuNao;
    char sexo, resposta;

    for (i = 0; i < 10; i++) {
        printf("------------------------------------------\n");

        printf("Sexo do intrevistado (M para Masculino e F para Feminino): ");
        scanf(" %c", &sexo);
        sexo = toupper(sexo);
        while (sexo != 'M' && sexo != 'F') {
            printf("Informe um valor v�lido: ");
            scanf(" %c", &sexo);
            sexo = toupper(sexo);
        }

        if (sexo == 'M') {
            homem++;
        }

        printf("Resposta do intrevistado (S para Sim e N para N�o): ");
        scanf(" %c", &resposta);
        resposta = toupper(resposta);
        while (resposta != 'S' && resposta != 'N') {
            printf("Informe um valor v�lido: ");
            scanf(" %c", &resposta);
            resposta = toupper(resposta);
        }

        if (resposta == 'S') {
            respondeuSim++;
            if (sexo == 'F') {
                mulherRespondeuSim++;
            }
        } else {
            respondeuNao++;
            if (sexo == 'M') {
                homemRespondeuNao++;
            }
        }

        printf("------------------------------------------\n\n");
    }
    percenHomemRespondeuNao = (float) homemRespondeuNao * 100 / homem;

    printf("N�mero de pessoas que respondeu sim: %d\n", respondeuSim);
    printf("N�mero de pessoas que respondeu n�o: %d\n", respondeuNao);
    printf("N�mero de mulheres que respondeu sim: %d\n", mulherRespondeuSim);
    printf("Percentagem de homens que responderam n�o entre todos os homens analisados: %.2f%%\n", percenHomemRespondeuNao);

    return 0;
}