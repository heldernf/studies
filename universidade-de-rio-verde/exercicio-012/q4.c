#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese_Brazil");

    char data[10];
    int dia, mes, ano;

    printf("Digite uma data no formato DD/MM/AAAA sem esquecer das /\nData: ");
    scanf("%s", data);

    sscanf(data, "%d/%d/%d", &dia, &mes, &ano);

    if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1900 || ano > 2100) {
        printf("Mês inválido");
    } else {
        if (ano % 4 == 0) {
            if (dia <= 29 && mes == 2 ) {

            } else if (dia == 30 && (mes == 4 || mes == 6 || mes == 9 || mes == 11)) {

            } else if (dia == 31 ) {

            }
        } else {

        }
    }

    return 0;
}