programa
{
	
	funcao inicio()
	{
		inteiro v[10], mult
		para (inteiro cont = 0; cont < 10; cont++) {
			se (cont % 2 == 0) {
				mult = 5				
				v[cont] = mult
				escreva("|" + cont + "|" + v[cont] + " ")
			} senao {
				mult = 5 - 2
				v[cont] = mult
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
 * @POSICAO-CURSOR = 59; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */