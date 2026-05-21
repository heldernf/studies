programa
{
	inclua biblioteca Util --> u
	funcao inicio()
	{
		inteiro numero, nsorteado
		escreva("Tente adivinha o número de 1 a 5 que irá ser sorteado: ")
		leia(numero)
		nsorteado = u.sorteia(1, 5)
		escreva("Você escolheu o numero " + numero + " o numero sorteado foi " + nsorteado + ".\n")
		se (numero == nsorteado) {
			escreva("Parabens você acertou")
		} senao {
			escreva("Você errou, tente novamente")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 378; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */