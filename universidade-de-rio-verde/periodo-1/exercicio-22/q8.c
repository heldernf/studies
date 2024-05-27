#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int tipoOcorrencia, nivelOcorrencia, Clancy = 0, Eddie = 0, Lou = 0, ocorrenciaHomer = 0, direcaoPerigosa = 0, stop = -1;
    float porcentDirecaoPerigosa;

    for (int i = 1; stop != 0; i++) {
        printf("------------------------------------------------");

        printf("\n1 - Dire��o Perigosa\n2 - Barulho\n3 - Bebedeira\n4 - Homer\nInforme o TIPO de ocorr�ncia de acordo com o n�mero que a antescede: ");
        scanf("%d", &tipoOcorrencia);
        while (tipoOcorrencia != 1 && tipoOcorrencia != 2 && tipoOcorrencia != 3 && tipoOcorrencia != 4) {
            printf("Informe um valor v�lido: ");
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

            printf("\n1 - Baixo\n2 - M�dio\n3 - Alto\nInforme o N�VEL da ocorr�ncia de acordo com o n�mero que a antescede: ");
            scanf("%d", &nivelOcorrencia);
            while (nivelOcorrencia != 1 && nivelOcorrencia != 2 && nivelOcorrencia != 3) {
                printf("Informe um valor v�lido: ");
                scanf("%d", &nivelOcorrencia);
            }
        }
        porcentDirecaoPerigosa = direcaoPerigosa * 100 / i;

        printf("\nTotal de ocorr�ncias do Clancy: %d\nTotal de ocorr�ncias do Eddie: %d\nTotal de ocorr�ncias do Lou: %d\n", Clancy, Eddie, Lou);
        printf("Ocorr�ncias do tipo Homer: %d\n", ocorrenciaHomer);
        printf("Percentual de ocorr�ncias do tipo \"Dire��o Perigosa\" em rela��o do total de ocorr�ncias cadastradas: %.2f%%\n\n", porcentDirecaoPerigosa);

        printf("Para cadastrar uma nova ocorr�ncia digite qual n�mero, se quiser para digite 0: ");
        scanf("%d", &stop);

        printf("------------------------------------------------\n\n");
    }

    return 0;
}