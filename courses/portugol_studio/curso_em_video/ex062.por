programa
{
	inclua biblioteca Texto --> txt
	funcao inicio()
	{
		inteiro idade, t_idade_e_cont = 0, s_idade = 0, media, m21anos = 0
		cadeia continuar = "sim"
		faca {
			t_idade_e_cont ++			
			escreva(t_idade_e_cont + " - Digite a idade: ")
			leia(idade)	
			s_idade += idade
			se (idade >= 21) {
				m21anos ++
			}
			escreva("Deseja continuar? [SIM/NÃO] ")
			leia(continuar)
			se (txt.caixa_baixa(continuar) != "sim" e txt.caixa_baixa(continuar) != "não") {
				enquanto (txt.caixa_baixa(continuar) != "sim" e txt.caixa_baixa(continuar) != "não") {
					escreva("\n[DIGITE CORRETAMENTE!]\n")
					escreva("\nDeseja continuar? [SIM/NÃO] ")
					leia(continuar)
				}
			}
		} enquanto (txt.caixa_baixa(continuar) == "sim")
		media = s_idade / t_idade_e_cont
		escreva("-----------------------------------------------")
		escreva("\nForam digitadas " + t_idade_e_cont + " idades.")
		escreva("\nA média de idades resultou em " + media + " .")
		escreva("\n" + m21anos + " pessoas tem 21 anos ou mais.")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 84; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */