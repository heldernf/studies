programa
{
	
	funcao inicio()
	{
		inteiro cont = 1, peso, total_altura = 0, media_altura = 0, pesa_m90 = 0, pm50_altura160 = 0, altura190_pm100 = 0
		real altura
		enquanto (cont <= 4) {
			escreva(cont + " - Qual o seu peso? ")
			leia(peso)			
			escreva(cont + " - Qual a sua altura? ")
			leia(altura)
			total_altura += altura
			media_altura = total_altura / cont
			se (peso > 90) {
				pesa_m90 ++
			}
			se (peso < 50 e altura < 1.60) {
				pm50_altura160 ++
			}
			se (altura > 1.90 e peso > 100) {
				altura190_pm100 ++	
			}
			cont ++
		}
		escreva("A media de altura do é " + media_altura + ".\n")
		escreva(pesa_m90 + " pessoas pesam mais de 90KG.\n")
		escreva(pm50_altura160 + " pessoas que pesam menos de 50KG, tem menos de 1.60m de altura.\n")
		escreva(altura190_pm100 + " pessoa que tem mais de 1.90m de altura, pesam mais de 100KG.\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 98; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */