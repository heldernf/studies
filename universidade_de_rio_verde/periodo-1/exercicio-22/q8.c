#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int tipoOcorrencia, nivelOcorrencia, Clancy = 0, Eddie = 0, Lou = 0, ocorrenciaHomer = 0, direcaoPerigosa = 0, stop = -1;
    float porcentDirecaoPerigosa;

    for (int i = 1; stop != 0; i++) {
        printf("------------------------------------------------");

        printf("\n1 - Direção Perigosa\n2 - Barulho\n3 - Bebedeira\n4 - Homer\nInforme o TIPO de ocorrência de acordo com o número que a antescede: ");
        scanf("%d", &tipoOcorrencia);
        while (tipoOcorrencia != 1 && tipoOcorrencia != 2 && tipoOcorrencia != 3 && tipoOcorrencia != 4) {
            printf("Informe um valor válido: ");
            scanf("%d", &tipoOcorrencia);
        }

        if (tipoOcorrencia == 4) {
            nivelOcorrencia = 3;
            Clancy++;
            ocorrenciaHomer++;
        } else {
            if (Clancy <= Eddie && Clancy <= Lou) {
                Clancy++;
            } else if (Eddie <= Clancy && Eddie <= Lou) {
                Eddie++;
            } else {
                Lou++;
            }

            if (tipoOcorrencia == 1) {
                direcaoPerigosa++;
            }

            printf("\n1 - Baixo\n2 - Médio\n3 - Alto\nInforme o NÍVEL da ocorrência de acordo com o número que a antescede: ");
            scanf("%d", &nivelOcorrencia);
            while (nivelOcorrencia != 1 && nivelOcorrencia != 2 && nivelOcorrencia != 3) {
                printf("Informe um valor válido: ");
                scanf("%d", &nivelOcorrencia);
            }
        }
        porcentDirecaoPerigosa = direcaoPerigosa * 100 / i;

        printf("\nTotal de ocorrências do Clancy: %d\nTotal de ocorrências do Eddie: %d\nTotal de ocorrências do Lou: %d\n", Clancy, Eddie, Lou);
        printf("Ocorrências do tipo Homer: %d\n", ocorrenciaHomer);
        printf("Percentual de ocorrências do tipo \"Direção Perigosa\" em relação do total de ocorrências cadastradas: %.2f%%\n\n", porcentDirecaoPerigosa);

        printf("Para cadastrar uma nova ocorrência digite qual número, se quiser para digite 0: ");
        scanf("%d", &stop);

        printf("------------------------------------------------\n\n");
    }

    return 0;
}