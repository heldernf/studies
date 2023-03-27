programa
{
	
	funcao inicio()
	{
		inteiro v[16], v1 = 1, v2 = 1, v3 , cont
		para (cont = 0; cont < 16; cont++) {
			se (cont == 0) {
				v[cont] = v1
				escreva("|" + cont + "|" + v[cont] + " ")
			} senao se (cont == 1) {
				v[cont] = v2
				escreva("|" + cont + "|" + v[cont] + " ")
			} senao {
				v3 = v1 + v2
				v[cont] = v3
				escreva("|" + cont + "|" + v[cont] + " ")
				v1 = v2
				v2 = v3
			}
					
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 274; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {v, 6, 10, 1}-{v1, 6, 17, 2}-{v2, 6, 25, 2}-{v3, 6, 33, 2}-{cont, 6, 38, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */