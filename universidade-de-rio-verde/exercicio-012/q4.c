#include <stdio.h>
#include <stdbool.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese_Brazil");

    char data[10];
    int dia, mes, ano;
    bool dataValida = false;

    printf("Digite uma data no formato DD/MM/AAAA sem esquecer das / (BARRAS)\nData: ");
    scanf("%s", data);

    sscanf(data, "%d/%d/%d", &dia, &mes, &ano);

    if ((dia >= 1 && dia <= 31) && (mes >= 1 && mes <= 12) && (ano >= 1900 && ano <= 2100)) {
        if (ano % 4 == 0) { // BISSEXTO
            if (dia <= 29) {
                dataValida = true;
            } else if (dia == 30 && mes != 2) {
                dataValida = true;
            } else if (dia == 31 && (mes != 2 && mes != 4 && mes != 6 && mes != 9 && mes != 11)) {
                dataValida = true;
            }
        } else {
            if (dia <= 28) {
                dataValida = true;
            } else if (dia <= 30 && mes != 2) {
                dataValida = true;
            } else if (dia == 31 && (mes != 2 && mes != 4 && mes != 6 && mes != 9 && mes != 11)) {
                dataValida = true;
            }
        }
    }

    dataValida ? printf("\nData VÁLIDA") : printf("\nData INVÁLIDA");

    return 0;
}