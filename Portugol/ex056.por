programa
{
	
	funcao inicio()
	{
		inteiro  numero = 0, soma = 0
		enquanto (numero != 1111) {
			escreva("Digite um número (Digite 1111 para para o programa) ")
			leia(numero)
			se (numero != 1111) {
				soma += numero				
			}
		}
		escreva("A soma entre os numeros digitados é " + soma + "." )
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 239; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */