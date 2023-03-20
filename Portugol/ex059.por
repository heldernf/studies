programa
{
	inclua biblioteca Texto --> txt
	funcao inicio()
	{
		inteiro idade, m_idade = 0, thomens = 0, mulher_j = 0, smediah = 0, mediah = 0, voltas = 1
		cadeia sexo
		caracter resp = 's'
		enquanto (resp == 's') {
			escreva("\nQual o seu sexo? ")
			leia(sexo)
			se (sexo != "masculino" e sexo != "feminino") {
				escreva("Escreva o SEXO corretamente, TENTE NOVAMENTE!")
				pare
			}
			escreva("\nQual a sua idade? ")
			leia(idade)
			se (voltas == 1) {
				m_idade = idade
				se (txt.caixa_baixa(sexo) == "feminino") {
					mulher_j = idade
				}
			} senao {
				se (idade > m_idade) {
					m_idade = idade
				}			
			}
			se (txt.caixa_baixa(sexo) == "masculino") {
				thomens ++
				smediah += idade
				mediah = smediah / voltas
			}
			se (txt.caixa_baixa(sexo) == "feminino" e idade < mulher_j) {
				mulher_j = idade
			}
			
			escreva("\nDeseja continuar? (s)-sim (n)-não ")
			leia(resp)
			se (resp != 'n' e resp != 's') {
				escreva("\nDigite corretamente, (s)-sim (n)-não, TENTE NOVAMENTE!")
				enquanto (resp != 'n' e resp != 's') {
					escreva("\nDeseja continuar? (s)-sim (n)-não ")
					leia(resp)
				}
			}
			voltas ++				
		}
		escreva("\nA maior idade lida foi " + m_idade + ". Foi cadastrado " + thomens + " homens. A mulher mais jovem tem " + mulher_j + " anos de idade. A media de idade entre homens é " + mediah + ".")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 903; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {idade, 6, 10, 5}-{m_idade, 6, 17, 7}-{thomens, 6, 30, 7}-{mulher_j, 6, 43, 8}-{smediah, 6, 57, 7}-{mediah, 6, 70, 6}-{voltas, 6, 82, 6}-{sexo, 7, 9, 4}-{resp, 8, 11, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */