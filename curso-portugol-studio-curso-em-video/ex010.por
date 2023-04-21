programa
{
	
	funcao inicio()
	{
		real largura, altura, area, tinta
		escreva("Digite em METROS a largura da parede: ")
		leia(largura)
		escreva("Digite em METROS a altura da parede: ")
		leia(altura)
		area = largura * altura
		tinta = area / 2
		escreva("Com base na largura e altura fornecida, a área total da parede é de (" + area + ")m, para pinta-la completamente, será preciso de (" + tinta + ") litros de tinta.")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 347; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */