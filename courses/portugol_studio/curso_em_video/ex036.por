programa
{
	
	funcao inicio()
	{
		real ganho
		inteiro hatvd
		escreva("Quantas horas de atividade física você praticou no mês? ")
		leia(hatvd)
		se (hatvd <= 10) {
			hatvd = hatvd * 2
			ganho = hatvd * 0.05
			escreva("Você conseguiu " + hatvd + " pontos, o que resultou em R$" + ganho + " .")
		} senao se (hatvd <= 20) {
			hatvd = hatvd * 5
			ganho = hatvd * 0.05
			escreva("Você conseguiu " + hatvd + " pontos, o que resultou em R$" + ganho + " .")
		} senao {
			hatvd = hatvd * 10
			ganho = hatvd * 0.05
			escreva("Você conseguiu " + hatvd + " pontos, o que resultou em R$" + ganho + " .")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 620; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */