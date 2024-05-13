#include <stdio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int tabuada, resultado;
    char tabuadaTipo;

    printf("(+) Adi��o\n(-) Subtra��o\n(*) Multiplica��o\n(/) Divis�o\nEscolha a tabuada de acordo com o s�mbolo que antescede ela: ");
    scanf("%c", &tabuadaTipo);

    printf("Escolha uma tabuada de 1 - 10: ");
    scanf("%d", &tabuada);

    for (int i = 0; i <= 10; i++) {
        switch (tabuadaTipo) {
            case '+':
                resultado = tabuada + i;
                break;
            case '-':
                resultado = tabuada - i;
                break;
            case '*':
                resultado = tabuada * i;
                break;
            case '/':
                resultado = (float) tabuada / i;
                break;
            default:
                printf("Escolha um tipo de tabuada v�lida, as op��o v�lidas s�o (+) (-) (*) (/): ");
                while (tabuadaTipo != '+' && tabuadaTipo != '-' && tabuadaTipo != '*' && tabuadaTipo != '/') {
                    scanf("%c", &tabuadaTipo);
                }
                break;

        }
        printf("%d %c %d = %d\n", tabuada, tabuadaTipo, i, resultado);
    }

    return 0;
}