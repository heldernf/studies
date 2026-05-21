programa
{
	inclua biblioteca Texto --> txt
	funcao inicio()
	{
		inteiro contador, tst = 0
		real vsalario[5]
		cadeia vnome[5], vsexo[5]

		para (contador = 0; contador < 5; contador++) {
			escreva("Digite seu nome: ")
			leia(vnome[contador])
			
			escreva("Qual o seu sexo: [FEMININO/MASCULINO] ")
			leia(vsexo[contador])
			
			se (txt.caixa_baixa(vsexo[contador]) != "masculino" e txt.caixa_baixa(vsexo[contador]) != "feminino") {
				escreva("\n[ERRO!][ERRO!][ERRO!] Digite Masculino ou Feminino.\n\n")
				enquanto (txt.caixa_baixa(vsexo[contador]) != "masculino" e txt.caixa_baixa(vsexo[contador]) != "feminino") {
					escreva("Qual o seu sexo: [FEMININO/MASCULINO] ")
					leia(vsexo[contador])
				}
				escreva("\nAgora sim, você digitou corretamente.\n\n")
			}
			
			escreva("Digite seu salário: ")
			leia(vsalario[contador])

			escreva("\n")
		}

		para (contador = 0; contador < 5; contador++) {
			se (vsexo[contador] == "feminino" e vsalario[contador] > 5000) {
				tst++
			}
		}

		se (tst != 0) {
			escreva("\n=============================TABELA=============================")
			para (contador = 0; contador < 5; contador++) {
				se (vsexo[contador] == "feminino" e vsalario[contador] > 5000) {
					escreva("\n" + vnome[contador] + "\t\t\t" + vsexo[contador] + "\t\t\t" + vsalario[contador])
				}
			}
		} senao {
			escreva("Não existe nenhuma mulher cadastrada, ganhando mais de 5 MIL Reais.")		
		}			
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 179; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */