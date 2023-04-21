programa
{
	
	funcao inteiro Maior(inteiro valor1, inteiro valor2, inteiro valor3) {
		inteiro maior
		
		se (valor1 > valor2 e valor1 > valor3) {
			maior = valor1
		} senao se (valor2 > valor1 e valor2 > valor3) {
			maior = valor2
		} senao {
			maior = valor3
		}
		
		retorne maior
	}
	
	funcao inicio()
	{
		inteiro valor1, valor2, valor3

		escreva("Digite um valor e eu direi qual é o maior valor.\n---------------------------------\n")
		escreva("Digite um valor: ")
		leia(valor1)
		escreva("Digite outro valor: ")
		leia(valor2)
		escreva("Digite mais um valor: ")
		leia(valor3)

		escreva("Dentre os três valor [" + valor1 + "] [" + valor2 + "] [" + valor3 + "], o maior valor foi [" + Maior(valor1, valor2, valor3) + "].")
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 270; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */