programa
{
	inclua biblioteca Texto --> txt
	funcao inicio()
	{
		cadeia nome, sexo = "vazio", continuar = "sim", nome_mais_velho = "vazio", nome_mulher_maisjovem = "vazio"
		inteiro idade, homens_m30 = 0, mulheres_m18 = 0, soma_idade = 0, media_idade = 0, voltas = 0, mais_velho = 0, mulher_maisjovem = 0
		enquanto (continuar == "sim") {
			voltas ++
			escreva("\nQual o seu nome? ")
			leia(nome)
			escreva("\nQual a sua idade? ")
			leia(idade)
			soma_idade += idade
			media_idade = soma_idade / voltas
			escreva("\nQual o seu sexo? ")
			leia(sexo)
			se (voltas == 1) {
				mais_velho = idade
				nome_mais_velho = nome
				se (txt.caixa_baixa(sexo) == "feminino") {
					mulher_maisjovem = idade
					nome_mulher_maisjovem = nome
				}
			} senao {
				se (idade > mais_velho) {
					mais_velho = idade
					nome_mais_velho = nome
				}
				se (txt.caixa_baixa(sexo) == "feminino" e idade < mulher_maisjovem) {
					mulher_maisjovem = idade
					nome_mulher_maisjovem = nome
				}
			}					
			se (txt.caixa_baixa(sexo) == "masculino" e idade > 30) {
				homens_m30 ++
			}
			se (txt.caixa_baixa(sexo) == "feminino" e idade < 18) {
				mulheres_m18 ++
			}
			escreva("\nDeseja continuar? ")
			leia(continuar)
			se (txt.caixa_baixa(continuar) != "sim" e txt.caixa_baixa(continuar) != "não") {
				escreva("\nTENTE NOVAMENTE, Digite SIM ou NÃO")
				enquanto (txt.caixa_baixa(continuar) != "sim" e txt.caixa_baixa(continuar) != "não") {
					escreva("\nDeseja continuar? ")
					leia(continuar)
				}
			}
		}
		escreva("\nA pessoa mais velha do grupo tem " + mais_velho + " anos de idade e se chama " + nome_mais_velho + ". A mulher mais jovem tem " + mulher_maisjovem + " anos de idade e se chama " + nome_mulher_maisjovem + ". A media de idade é " + media_idade + ". " + homens_m30 + " homens tem mais de 30 anos. " + mulheres_m18 + " mulheres tem menos de 18 anos.")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1002; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */