programa
{
	
	funcao inicio()
	{
		real salario
		inteiro anost, genero
		escreva("Qual o seu salário atual? R$")
		leia(salario)
		escreva("Quantos anos você está trabalhando em nossa empresa? ")
		leia(anost)
		escreva("Qual seu gênero? 1-FEMININO, 2-MASCULINO ")
		leia(genero)
		se (genero == 1) {
			se (anost < 15) {
				salario = salario + (salario * 5 / 100)
				escreva("Obrigado por está conosco a " + anost + " anos, seu novo salário é R$" + salario + " .")
			} senao se (anost <= 20) {
				salario = salario + (salario * 12 / 100)
				escreva("Obrigado por está conosco a " + anost + " anos, seu novo salário é R$" + salario + " .")
			} senao {
				salario = salario + (salario * 23 / 100)
				escreva("Obrigado por está conosco a " + anost + " anos, seu novo salário é R$" + salario + " .")
			}
		} senao se (genero == 2) {
			se (anost < 20) {
				salario = salario + (salario * 3 / 100)
				escreva("Obrigado por está conosco a " + anost + " anos, seu novo salário é R$" + salario + " .")
			} senao se (anost <= 30) {
				salario = salario + (salario * 13 / 100)
				escreva("Obrigado por está conosco a " + anost + " anos, seu novo salário é R$" + salario + " .")
			} senao {
				salario = salario + (salario * 25 / 100)
				escreva("Obrigado por está conosco a " + anost + " anos, seu novo salário é R$" + salario + " .")
			}
		} senao {
			escreva("[ERRO], Digite 1 para FEMININO e 2 para MASCULINO, você digitou " + genero + ".")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1348; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */