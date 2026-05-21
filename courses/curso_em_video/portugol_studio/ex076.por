programa
{
	inclua biblioteca Util --> u
	funcao inicio()
	{
		inteiro v[7], cont
		para (cont = 0; cont < 7; cont++) {
			v[cont] = u.sorteia(0, 100)
			escreva("|" + cont + "|" + v[cont] + " ")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 154; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {v, 6, 10, 1}-{cont, 6, 16, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */