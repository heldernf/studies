programa
{
	
	funcao inicio()
	{
		inteiro idade = 0, talunos = 0, midade = 0, sidade = 0, voltas = 1
		enquanto (idade != 999) {
			escreva("Qual a sua idade? ")
			leia(idade)
			se (idade != 999) {
				sidade += idade
			}	
			midade = sidade / voltas	
			voltas ++
			talunos ++			
		}
		escreva("\nO total de alunos cadastrados é " + talunos + ", a media de idade é " + midade + ".")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 225; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {idade, 6, 10, 5}-{talunos, 6, 21, 7}-{midade, 6, 34, 6}-{sidade, 6, 46, 6}-{voltas, 6, 58, 6};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */