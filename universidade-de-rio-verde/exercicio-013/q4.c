#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int sexo;
    float altura, pesoIdeal;

    printf("1 - Feminino\n2 - Masculino\nDigite o seu sexo de acordo com os dados acima: ");
    scanf("%d", &sexo);
    
    printf("Digite a sua altura: ");
    scanf("%f", &altura);

    switch (sexo) {
    case 1:
        pesoIdeal = (72.7 * altura) - 58;
        printf("Peso ideal: %.2f", pesoIdeal);
        break;
    case 2:
        pesoIdeal = (62.1 * altura) - 44.7;
        printf("Peso ideal: %.2f", pesoIdeal);
        break;
    default:
        printf("Digite um sexo válido!");
        break;
    }

    return 0;
}