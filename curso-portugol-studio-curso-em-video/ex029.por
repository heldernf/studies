programa
{
	
	funcao inicio()
	{
		cadeia nome
		inteiro anost
		real salario, nsalario, porcentagem
		escreva("Digite o seu nome: ")
		leia(nome)
		escreva("A quantos anos você está trabalhando em nossa empresea? ")
		leia(anost)
		escreva("Qual o seu salário atual? ")
		leia(salario)
		se (anost <=3) {
			porcentagem = 3.0
			nsalario = salario + (salario * porcentagem / 100)
			escreva("Olá " + nome + " obrigado por está a " + anost + " anos trabalhando junto conosco, seu salario atual é de R$" + salario + ", ele sofrerá um aumento de " + porcentagem + "%, então seu novo salário será R$" + nsalario + ".") 
		} senao se (anost <= 10) {
			porcentagem = 12.5
			nsalario = salario + (salario * porcentagem / 100)
			escreva("Olá " + nome + " obrigado por está a " + anost + " anos trabalhando junto conosco, seu salário atual é de R$" + salario + ", ele sofrerá um aumento de " + porcentagem + "%, então seu novo salário será R$" + nsalario + ".")
		} senao {
			porcentagem = 20.0
			nsalario = salario + (salario * porcentagem / 100)
			escreva("Olá " + nome + " obrigado por está a " + anost + " anos trabalhando junto conosco, seu salário atual é de R$" + salario + ", ele sofrerá um aumento de " + porcentagem + "%, então seu novo salário será R$" + nsalario + ".")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 992; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */