#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float km, pagar;
    int dias;

    printf("Digite quantos KM voc� percorreu: ");
    scanf("%f", &km);

    printf("Agora digite por quantos dias voc� alugou o carro: ");
    scanf("%d", &dias);

    pagar = 90 * dias + .2 * km;

    printf("De acordo com as informa��es inseridas voc� ter� de pagar R$%.2f", pagar);

    return 0;
}