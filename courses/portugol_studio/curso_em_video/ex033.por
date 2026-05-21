programa
{
	
	funcao inicio()
	{
		real salario, vcasa, prestacao, salario2
		inteiro dpagar
		cadeia aprovar, reprovar
		escreva("Qual o valor da casa? R$")
		leia(vcasa)
		escreva("Qual o seu salário atual? R$")
		leia(salario)
		escreva("Enquantos anos deseja pagar? ")
		leia(dpagar)
		dpagar = dpagar * 12
		prestacao = vcasa / dpagar
		salario2 = salario - (salario * 70 / 100)
		se (prestacao <= salario2) {
			escreva("Seu imprestimo foi APROVADO, a prestação será de R$" + prestacao + ", ela não ultrapassa os 30% do seu salário (R$" + salario2 + ").")
		} senao {
			escreva("Seu imprestimo foi RECUSADO")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 505; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */