#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    float tLitros, ml350, ml600, l2;

    printf("Quantos refrigerantes de 350ml, 600ml, e 2L você deseja comprar?\n");
    scanf("%f %f %f", &ml350, &ml600, &l2);
    ml350 *= 350;
    ml600 *= 600;
    l2 *= 2000;
    tLitros = (ml350 + ml600 + l2) / 1000;

    printf("O total de litros dos produtos é %.3fL", tLitros);

    return 0;
}