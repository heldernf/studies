programa
{
	
	funcao inicio()
	{
		real largura, comprimento, area
		escreva("Digite a largura do terreno: ")
		leia(largura)
		escreva("Digite o comprimento do terreno: ")
		leia(comprimento)
		area = largura * comprimento
		se (area <= 99.999) {
			escreva("De acordo com os dados fornecido por você, LARGURA (" + largura + ")m, COMPRIMENTO (" + comprimento + ")m, a área do terreno é (" + area + ")m², classificamos o terreno como TERRENO POPULAR.")
		} senao se (area <= 500) {
			escreva("De acordo com os dados fornecido por você, LARGURA (" + largura + ")m, COMPRIMENTO (" + comprimento + ")m, a área do terreno é (" + area + ")m², classificamos o terreno como TERRENO MASTER.")
		} senao {
			escreva("De acordo com os dados fornecido por você, LARGURA (" + largura + ")m, COMPRIMENTO (" + comprimento + ")m, a área do terreno é (" + area + ")m², classificamos o terreno como TERRENO VIP.")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 884; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */