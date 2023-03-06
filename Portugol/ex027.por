programa
{
	
	funcao inicio()
	{
		inteiro ano, bissexto
		escreva("Qual ano você quer saber se é BISSEXTO? ")
		leia(ano)
		bissexto = ano % 4
		se (bissexto == 0) {
			escreva("BISSEXTO")
		} senao {
			escreva("Não BISSEXTO")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 231; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */