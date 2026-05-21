programa
{
	
	funcao inicio()
	{
		inteiro nasc, idade, qfalta, qpassou
		escreva("Qual o seu ano de nascimento? ")
		leia(nasc)
		idade = 2023 - nasc
		qfalta = 18 - idade
		qpassou = idade - 18
		se (qfalta > 0) {
			escreva("Falta (" + qfalta + ") ano para você se alistar no EXÉRCITO.")
		} se (qfalta == 0) {
			escreva("Você deve procurar o local mais proximo para fazer seu alistamento, pois você tem (" + idade + ") anos de idade.")
		} senao se (qpassou > 0) {
			escreva("Você ja passou da idade de se alistar no EXÉRCITO, ja passou (" + qpassou + ") anos que era pra você ter feito o alistamento!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 315; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */