programa
{
	
	funcao inicio()
	{
		inteiro cont, v[15]
		para (cont = 0; cont < 15; cont++) {
			escreva(cont + " - Digite um número: ")
			leia(v[cont])
		}

		para (cont = 0; cont < 15; cont++) {
			escreva("|" + cont + "|" + v[cont] + " ")
		}

		escreva("\nOs multiplos de 10 são:")
		para (cont = 0; cont < 15; cont++) {
			se (v[cont] % 10 == 0) {
				escreva("|" + cont + "|" + v[cont] + " ")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 420; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */