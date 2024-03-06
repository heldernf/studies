#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int eleitores, vBranco, vNulo, vValido, pBranco, pNulo;

    printf("Digite o total de eleitores:\n");
    scanf("%d", &eleitores);
    printf("Agora digite e envie um por vez na seguinte oredem: Votos em Branco | Votos Nulos\n");
    scanf("%d %d", &vBranco, &vNulo);

    vValido = vBranco + vNulo - eleitores;
    if (vValido - 0) {
        vValido *= -1;
    }

    pBranco = (vBranco * 100) / eleitores;
    pNulo =  (vNulo * 100) / eleitores;

    printf("\nTotal de votos - %d\nVotos válidos - %d\nVotos brancos - %d\nVotos nulos - %d", eleitores, vValido, vBranco, vNulo);

    return 0;
}