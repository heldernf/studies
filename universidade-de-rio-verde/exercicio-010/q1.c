#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int numero;

    printf("Digite o n�mero de acordo com a tabela:\n\nN�MERO | DIA DA SEMANA\n1      | Domingo\n2      | Segunda-feira\n3      | Ter�a-feira\n4      | Quarta-feira\n5      | Quinta-feira\n6      | Sexta-feira\n7      | S�bado\n\n");
    scanf("%d", &numero);

    switch(numero) {
        case 1:
            printf("\nDomingo");
            break;
        case 2:
            printf("\nSegunda-feira");
            break;
        case 3:
            printf("\nTer�a-Feira");
            break;
        case 4:
            printf("\nQuarta-feira");
            break;
        case 5:
            printf("\nQuinta-feira");
            break;
        case 6:
            printf("\nSexta-feira");
            break;
        case 7:
            printf("\nS�bado");
            break;
        default:
            printf("\nVoc� n�o escolheu nenhuma das op��es, tente novamente!");
            break;
    }
    
    return 0;
}