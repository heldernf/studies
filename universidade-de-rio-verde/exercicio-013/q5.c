#include <stdio.h>
#include <locale.h>

int main () {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int idade = 0;

    printf("05 a 10 - Infanti\n11 a 15 - Juvenil\n16 a 20 - Júnior\n21 a 25 - Profissional\n\nAgora digite a sua idade:");
    scanf("%d", &idade);

    if (idade >= 5 && idade <= 10) {
        printf("Infantil");
    } else if (idade >= 11 && idade <=15) {
        printf("Juvenil");
    } else if (idade >= 16 && idade <= 20) {
        printf("Júnior");
    } else if (idade >= 21 && idade <= 25) {
        printf("Profissional");
    } else {
        printf("Você não se enquandra em nenhuma categoria!");
    }

    return 0;
}