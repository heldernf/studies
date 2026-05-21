#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguse_Brazil");

    int questions;
    printf("A seguir você irá registrar a resposta correta para cada questão, mas antes precisa informar a quantidade de questões: ");
    scanf("%d", &questions);
    char gabarito[questions];

    for (int i = 0; i < questions; i++) {
        printf("\nAlternativa correta da questão %d: ", i + 1);
        gabarito[i] = getch();
        while (gabarito[i] != 'a' && gabarito[i] != 'b' && gabarito[i] != 'c' && gabarito[i] != 'd' && gabarito[i] != 'e') {
            printf("\nInforme novamente a alternativa correta da questão %d, pois você digitou uma alternativa inválida (VÁLIDAS: A, B, C, D, E): ", i + 1);
            gabarito[i] = getch();
        }
    }

    int totalAlunos;
    printf("\nAgora informe a quantidade de alunos que tem na sala: ");
    scanf("%d", &totalAlunos);

    int gabaritoAcertos[totalAlunos];
    for(int i = 0; i < totalAlunos; i++) {
        gabaritoAcertos[i] = 0;
        for(int j = 0; j < questions; j++) {
            printf("\nInforme a resposta da questão %d do aluno %d: ", j + 1, i + 1);
            int answer;
            while(1) {
                answer = getch();
                if (answer == 'a' || answer == 'b' || answer == 'c' || answer == 'd' || answer == 'e') {
                    break;
                }

                printf("\nAlternativa inválida (VÁLIDAS: A, B, C, D, E), tente novamente: ");
            }
            if(answer == gabarito[j]) {
                gabaritoAcertos[i]++;
            }
        }
        printf("\n\nAGORA O PRÓXIMO ALUNO\n");
    }

    for(int i = 0; i < totalAlunos; i++) {
        printf("\nAluno %d, total de acertos: %d", i + 1, gabaritoAcertos[i]);
    }

    return 0;
}