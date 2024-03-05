#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");
    
    int hora, minuto, segundo, horaParaMinuto;

    printf("Digite as horas e envie, após isso digite os minutos:\n");
    scanf("%d %d", &hora, &minuto);
    horaParaMinuto = hora * 60;
    segundo = minuto * 60;

    printf("Se convertermos as suas horas para minutos, teremos %d minutos, e se convertermos os minutos em segundos, teremos %d segundos.", horaParaMinuto, segundo);
    
    return 0;
}