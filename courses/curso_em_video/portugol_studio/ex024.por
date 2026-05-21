programa
{
	
	funcao inicio()
	{
		real km, vkm, calc
		escreva("Quantos Km's deseja percorrer? ")
		leia(km)
		se (km <= 200) {
			vkm = 0.50
			calc = km * vkm
			escreva("Você pretende viajar (" + km + " Km), cada Km está saindo por (R$ " + vkm + "), então você gastar um total de (R$ " + calc + ") para viajar (" + km + ") Km.")
		} se (km > 200) {
			vkm = 0.45
			calc = km * vkm
			escreva("Você pretende viajar (" + km + " Km), cada Km está saindo por (R$ " + vkm + "), então você gastar um total de (R$ " + calc + ") para viajar (" + km + ") Km.")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 517; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */