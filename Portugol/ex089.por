programa
{
	
	funcao vazio gerador(cadeia frase, inteiro vezes, inteiro borda) {
		para (inteiro cont = 1; cont <= vezes; cont++) {
			se (borda == 1) {
				escreva("(" + cont + ") +-------=======------+\n    " + frase + "\n    +-------=======------+\n\n")
			} senao se (borda == 2) {
				escreva("(" + cont + ") ~~~~~~~~:::::::~~~~~~~\n    " + frase + "\n    ~~~~~~~~:::::::~~~~~~~\n\n")
			} senao se (borda == 3) {
				escreva("(" + cont + ") <<<<<<<<------->>>>>>>\n    " + frase + "\n    <<<<<<<<------->>>>>>>\n\n")
			} senao {
				escreva("Defina uma bordar, escolha a borda [1], [2] ou [3].")
			}
		}
		
	}
	
	funcao inicio()
	{
		gerador("frase", 3, 2)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 212; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */