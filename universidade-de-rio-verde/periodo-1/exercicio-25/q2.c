#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    char senha[24];
    bool upper = false, lower = false, digito = false, caracterEspecial = false, senhaValida = false;

    printf("* 8 caracteres\n* letra mai�scula\n* letra min�scula\n* um d�gito\n* caractere especial (!, @, #, etc...)\nDigite a senha: ");
    scanf("%s", senha);

    while (senhaValida == false) {
        int senhaLength = strlen(senha);

        for (int i = 0; i < senhaLength; i++) {
            if (isupper(senha[i])) {
                upper = true;
            } else if (islower(senha[i])) {
                lower = true;
            } else if (isdigit(senha[i])) {
                digito = true;
            } else {
                caracterEspecial = true;
            }
        }

        if (senhaLength < 8 || upper == false || lower == false || digito == false || caracterEspecial == false) {
            printf("\nA sua senha n�o possui:\n");

            if (strlen(senha) < 8) {
                printf("O m�nimo de 8 caracteres\n");
            }

            if (upper == false) {
                printf("Uma letra mai�scula\n");
            } else {
                upper = false;
            }

            if (lower == false) {
                printf("Uma letra min�scula\n");
            } else {
                lower = false;
            }

            if (digito == false) {
                printf("Um digito\n");
            } else {
                digito = false;
            }

            if (caracterEspecial == false) {
                printf("Um caracter especial\n");
            } else {
                caracterEspecial = false;
            }

            printf("Tente novamente: ");
            scanf("%s", senha);
        } else {
            senhaValida = true;
        }
    }

    printf("\nSenha v�lida: %s", senha);
    
    return 0;
}