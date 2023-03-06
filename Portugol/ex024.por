programa
{
	
	funcao inicio()
	{
		inteiro idade
		escreva("Quantos anos você tem? ")
		leia(idade)
		se (idade < 16) {
			escreva("Você não pode votar, pois você tem apenas (" + idade + ") anos de idade!")
		} se (idade >= 16) {
			escreva("Seu voto é opcional, pois você tem (" + idade + ") anos de idade!") 
		} se (idade >= 18) {
			escreva("Seu voto é OBRIGATÓRIO, pois você tem (" + idade + ") anos de idade. Caso esteja sem condições para ir votar, ligue para (XX) XXXX-XXXX!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 218; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */