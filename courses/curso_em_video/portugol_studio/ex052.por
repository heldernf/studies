programa
{
	
	funcao inicio()
	{
		inteiro cont = 1, idade, somador = 0, media = 0, midade = 0, m18 = 0, m5 = 0
		
		enquanto (cont <= 10) {
			escreva(cont + " - Qual a sua idade? ")
			leia(idade)
			somador += idade
			media = somador / cont	
			se (idade > 18) {
				m18 += 1
			}
			se (idade < 5) {
				m5 += 1
			}
			se (cont == 1) {
				midade = idade
			} senao {
				se (idade > midade) {
					midade = idade
				}
			}
			cont ++
		}
		
		escreva("A média de idade é: " + media + ".")
		
		se (m18 == 1) {
			escreva("\n" + m18 + " pessoa tem mais de 18 anos de idade.")
		} senao se (m18 > 1) {
			escreva("\n" + m18 + " pessoas tem mais de 18 anos de idade.")
		} senao {
			escreva("\nNenhuma pessoa tem mais de 18 anos de idade.")
		}

		se (m5 == 1) {
			escreva("\n" + m5 + " pessoa tem menos de 5 anos de idade.")
		} senao se (m5 > 1) {
			escreva("\n" + m5 + " pessoas tem menos de 5 anos de idade.")
		} senao {
			escreva("\nNenhuma pessoa tem menos de 5 anos de idade.")
		}
		
		escreva("\nA maior idade é: " + midade)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 87; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */