#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int salarioCasa, custoCasa, totalCasas;
    float vdolar, verbaGov, verbaConvertida, salarioMinimo;

    printf("Dige o valor do d�lar: ");
    scanf("%f", &vdolar);    
    printf("Quantos d�lares o governo liberou? ");
    scanf("%f", &verbaGov);
    verbaConvertida = vdolar * verbaGov;
    
    printf("Digite o valor do sal�rio m�nimo: ");
    scanf("%f", &salarioMinimo);
    printf("Quantos sal�rios m�nimos � necess�rio para a constru��o de uma casa? ");
    scanf("%d", &salarioCasa);
    custoCasa = salarioMinimo * salarioCasa;

    totalCasas = verbaConvertida / custoCasa;
    printf("De acordo com as informa��es dadas, � poss�vel construir %d casas.", totalCasas);
}

// COME MULTIPLICANDO O VALOR DOLAR EM REAL VEZES A VERBA LIBERADA PELO GOVERNO EM DOLAR, OU SEJA, � UM CONVERS�O, DEPOIS MULTIPLIQUE O VALOR DO SALARIO M�NIMO VEZES O VALOR PARA CONSTRUIR UMA CASA, DEPOIS PEGUE OS DOIS RESULTADOS E DIVIDA O VALOR DA VERBA QUE JA ESTA CONVERTIDA EM REAL, DIVIDIDA PELO CUSTO DE UMA CASA.