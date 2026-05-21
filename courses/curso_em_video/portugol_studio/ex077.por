programa
{
	
	funcao inicio()
	{
		inteiro cont
		cadeia v[7]
		para (cont = 0; cont < 7; cont++) {
			escreva("Digite o seu nome: ")
			leia(v[cont])
		}

		para (cont = 6; cont > -1; cont--) {
			escreva("|" + cont + "|" + v[cont] + " ")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 239; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */