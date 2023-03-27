programa
{
	
	funcao inicio()
	{
		inteiro numero, casa
		escreva("Você quer a tabuada de qual número? ")
		leia(numero)
		escreva("Você que a tabuada do numero " + numero + " vá até qual número/casa? ")
		leia(casa)
	 	para (inteiro multiplicador = 1; multiplicador <= casa; multiplicador ++) {
			escreva(numero + " X " + multiplicador + " = " + numero * multiplicador + "\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 216; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */