programa
{
	inclua biblioteca Util --> u
	funcao inicio()
	{
		inteiro numero = 0, nsorteado = 0, tentativas = 1
		enquanto (tentativas <= 4) {
			escreva("Tente adivinha o número de 1 a 10 que irá ser sorteado: ")
			leia(numero)
			nsorteado = u.sorteia(1, 3)
			escreva("Você escolheu o numero " + numero + " o numero sorteado foi " + nsorteado + ".\n")
			se (numero == nsorteado) {				
				pare
			} senao {
				escreva("Você errou, tente novamente.\n")
			} 
			tentativas ++
		}
		se (numero == nsorteado) {				
			escreva("Parabens você acertou.")
		} senao {
			escreva("Sua tentativas acabaram, recomeçe.")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 553; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numero, 6, 10, 6}-{nsorteado, 6, 22, 9}-{tentativas, 6, 37, 10};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */