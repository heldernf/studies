#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int eleitores, vBranco, vNulo, vValido, pBranco, pNulo, pValido;

    printf("\nDigite o total de eleitores:\n");
    scanf("%d", &eleitores);
    printf("\nAgora digite e envie um por vez na seguinte oredem: Votos em Branco | Votos Nulos\n");
    scanf("%d %d", &vBranco, &vNulo);

    vValido = eleitores - vBranco - vNulo;

    if (vValido >= 0) {
        pValido = (vValido * 100) / eleitores;
        pBranco = (vBranco * 100) / eleitores;
        pNulo =  (vNulo * 100) / eleitores;

        printf("\nTotal de votos - %d\nVotos válidos - %d%%\nVotos brancos - %d%%\nVotos nulos - %d%%", eleitores, pValido, pBranco, pNulo);
    } else {
        printf("\nA quantidade de VOTOS VÁLIDOS ficou abaixo de 0, ou seja, as informações estão erradas, TENTE NOVAMENTE!");
    }

    return 0;
}