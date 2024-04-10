#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int valor, rs100, rs50, rs20, rs10, rs5, rs2, rs1;

    printf("Digite o valor que deseja sacar: ");
    scanf("%d", &valor);

    rs100 = valor / 100;
    valor %= 100;

    rs50 = valor / 50;
    valor %= 50;

    rs20 = valor / 20;
    valor %= 20;
    
    rs10 = valor / 10;
    valor %= 10;
    
    rs5 = valor / 5;
    valor %= 5;

    rs2 = valor / 2;
    valor %= 2;

    rs1 = valor / 1;
    valor %= 1;

    printf("NOTAS DE 100: %d\nNOTAS DE 50: %d\nNOTAS DE 20: %d\nNOTAS DE 10: %d\nNOTAS DE 5: %d\nNOTAS DE 2: %d\nNOTAS DE 1: %d", rs100, rs50, rs20, rs10, rs5, rs2, rs1);

    return 0;
}