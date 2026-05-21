programa
{
	
	funcao inicio()
	{
		inteiro cont = 1, nint, par = 0, impar = 0
		enquanto (cont <= 6) {
			escreva("Digite um número inteiro: ")
			leia(nint)
			se (nint % 2 == 0) {
				par ++
			} senao {
				impar ++
			}
			cont ++
		}
		se (par > 1 e impar > 1) {
			escreva("Temos um total de " + par + " números pares e " + impar + " impares.")
		} senao se (par > 1 e impar == 1) {
			escreva("Temos um total de " + par + " números pares e " + impar + " impar.")
		} senao se (par == 1 e impar > 1) {
			escreva("Temos um total de " + par + " número par e " + impar + " impares.")
		} senao {
			escreva("Temos um total de " + par + " número par e " + impar + " impar.")
		}
		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 99; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */