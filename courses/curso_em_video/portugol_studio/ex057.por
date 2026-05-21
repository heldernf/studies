programa
{
	inclua biblioteca Texto --> txt
	funcao inicio()
	{
		real salario, salarioh = 0.0, salariom = 0.0
		cadeia sexo, continuar = "sim"
		enquanto (txt.caixa_baixa(continuar) != "parar") {
			escreva("\nQual o seu salário? R$")
			leia(salario)
			escreva("\nQual o seu sexo? ")
			leia(sexo)
			se (txt.caixa_baixa(sexo) == "masculino") {
				salarioh += salario
			} senao se (txt.caixa_baixa(sexo) == "feminino") {
				salariom += salario
			} senao {
				escreva("\n[ERRO]Tente Novamente, digite MASCULINO ou FEMININO\n")
				enquanto (txt.caixa_baixa(sexo) != "masculino" e txt.caixa_baixa(sexo) != "feminino") {
					escreva("\nQual o seu sexo? ")
					leia(sexo)
					se (txt.caixa_baixa(sexo) == "masculino") {
						salarioh += salario
						escreva("\nAgora vocês digitou corretamente\n")
					} senao se (txt.caixa_baixa(sexo) == "feminino") {
						salariom += salario
						escreva("\nAgora vocês digitou corretamente.\n")
					} senao {
						escreva("\nDigite corretamente\n")
					}
				}
			}
			escreva("\nDeseja continuar ou parar? (Dite PARAR para parar o programa) ")
			leia(continuar)		
		}
		escreva("\nO total de salario MASCULINO foi R$" + salarioh + ", e o FEMININO foi R$" + salariom + ".\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1120; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {salario, 6, 7, 7}-{salarioh, 6, 16, 8}-{salariom, 6, 32, 8}-{sexo, 7, 9, 4}-{continuar, 7, 15, 9};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */