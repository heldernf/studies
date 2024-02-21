#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {
    setlocale(LC_ALL, "Portuguese_Brazil");

    int salarioCasa, custoCasa, totalCasas;
    float vdolar, verbaGov, verbaConvertida, salarioMinimo;

    printf("Dige o valor do dólar: ");
    scanf("%f", &vdolar);    
    printf("Quantos dólares o governo liberou? ");
    scanf("%f", &verbaGov);
    verbaConvertida = vdolar * verbaGov;
    
    printf("Digite o valor do salário mínimo: ");
    scanf("%f", &salarioMinimo);
    printf("Quantos salários mínimos é necessário para a construção de uma casa? ");
    scanf("%d", &salarioCasa);
    custoCasa = salarioMinimo * salarioCasa;

    totalCasas = verbaConvertida / custoCasa;
    printf("De acordo com as informações dadas, é possível construir %d casas.", totalCasas);
}

// COME MULTIPLICANDO O VALOR DOLAR EM REAL VEZES A VERBA LIBERADA PELO GOVERNO EM DOLAR, OU SEJA, É UM CONVERSÃO, DEPOIS MULTIPLIQUE O VALOR DO SALARIO MÍNIMO VEZES O VALOR PARA CONSTRUIR UMA CASA, DEPOIS PEGUE OS DOIS RESULTADOS E DIVIDA O VALOR DA VERBA QUE JA ESTA CONVERTIDA EM REAL, DIVIDIDA PELO CUSTO DE UMA CASA.