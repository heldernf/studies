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
				escreva("[ERRO] Defina uma bordar, escolha a borda [1], [2] ou [3].")
				pare
			}
		}
		
	}
	
	funcao inicio()
	{
		cadeia frase
		inteiro vezes, borda
		escreva("Digite o que a sua mensagem: ")
		leia(frase)
		escreva("Quantas vezes? ")
		leia(vezes)
		escreva("Qual a borda que você deseja? [1] [2] [3] ")
		leia(borda)
		gerador(frase, vezes, borda)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 556; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */