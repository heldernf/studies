programa
{
	
	funcao vazio Maior(inteiro valor1, inteiro valor2) {
		se (valor1 == valor2) {
			escreva("Os dois valores são iguais")
		} senao {
			se (valor1 > valor2) {
				escreva("O valor " + valor1 + " é maior que o " + valor2 + ".")
			} senao {
				escreva("O valor " + valor2 + " é maior que o " + valor1 + ".")
			}
		}
	}
	
	funcao inicio()
	{
		inteiro valor1, valor2

		escreva("Digite um valor e eu direi qual é o maior valor.\n---------------------------------\n")
		escreva("Digite um valor: ")
		leia(valor1)
		escreva("Digite outro valor: ")
		leia(valor2)

		Maior(valor1, valor2) 
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 548; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */