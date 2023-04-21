programa
{
	
funcao inteiro Somador(inteiro valor1, inteiro valor2) {
		inteiro resultado = valor1 + valor2
		retorne resultado
	}				
	
	funcao inicio()
	{
		inteiro valor1, valor2
		
		escreva("Escreva o Primeiro valor: ")
		leia(valor1)
		escreva("Escreva o Segundo valor: ")
		leia(valor2)
		Somador(valor1, valor2)
		escreva("A soma entre " + valor1 + " e " + valor2 + " é " + Somador(valor1, valor2) + ".")
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 127; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */