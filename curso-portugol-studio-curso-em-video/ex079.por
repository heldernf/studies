programa
{
	
	funcao inicio()
	{
		inteiro cont, vetor[10]
		para (cont = 0; cont < 10; cont++) {
			escreva(cont + " - Digite um número: ")
			leia(vetor[cont])
		}

		escreva("Os vetores PAR são: ")

		para (cont = 0; cont < 10; cont++) {
			se (vetor[cont] % 2 == 0) {
				escreva("|" + cont + "|" + vetor[cont] + " ")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 325; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */