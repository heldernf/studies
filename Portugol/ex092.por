programa
{
	
	funcao vazio ParOuImpar(inteiro valor1) {
		se (valor1 % 2 == 0) {
			escreva("O valor " + valor1 + " é PAR.")
		} senao {
			escreva("O valor " + valor1 + " é ÍMPAR.")
		}
	}
	
	funcao inicio()
	{
		inteiro valor1, valor2
	
		escreva("Escreva um valor e eu direi se ele é ÍMPAR ou PAR\n---------------------------------\n")
		escreva("Escreva um valor: ")
		leia(valor1)

		ParOuImpar(valor1)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 104; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */