programa
{
	
	funcao inicio()
	{
		inteiro numero, parimp
		escreva("Digite um número para que eu lhe informe se ele é ÍMPAR ou PAR. ")
		leia(numero)
		parimp = numero % 2
		se (parimp == 0) {
			escreva("Este número é PAR.")
		} senao {
			escreva("Este número é ÍMPAR.")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 139; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */