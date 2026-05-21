programa
{
	
	funcao vazio Fibonacci(inteiro repita) {

		inteiro valor1 = 1, valor2 =1, valor3, cont

		escreva(valor1 + " " + valor2 + " ")
		
		para (cont = 2; cont < repita; cont++) {
			valor3 = valor1 + valor2
			escreva(valor3 + " ")
			valor1 = valor2
			valor2 = valor3
		}

		escreva("FIM")
	}
	
	funcao inicio()
	{
		inteiro repita

		escreva("Quantos termos da sequência de Fibonacci você quer ver? ")
		leia(repita)

		Fibonacci(repita)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 303; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */