programa
{
	
	funcao inicio()
	{
		cadeia sexo = ""
		real peso, mpesomasculino = 0
		inteiro tfeminino = 0, pesa100 = 0, tpesofeminino = 0, mediapesofeminino = 0
		
		para (inteiro cont = 1; cont <= 3; cont ++) {
			escreva(cont + " - Qual o seu sexo? ")
			leia(sexo)
			escreva(cont + " - Qual o seu peso? ")
			leia(peso)
			
			se (sexo == "feminino") {
				tfeminino ++
				tpesofeminino += peso			
			}

			se (cont == 1) {
				se (sexo == "masculino") {
					mpesomasculino = peso
				}
			} senao {
				se (sexo == "masculino" e peso > mpesomasculino) {
					mpesomasculino = peso
				}
			}
			
			se (sexo == "masculino" e peso > 100) {
				pesa100 ++
			}	
			
		}
		
		se (tfeminino == 0) {
			escreva("\nNenhuma mulher foi cadastrada.")
		} senao se (tfeminino > 1) {
			mediapesofeminino = tpesofeminino / tfeminino
			escreva("\nForam cadastradas " + tfeminino + " mulheres.")
		} senao {
			mediapesofeminino = tpesofeminino / tfeminino
			escreva("\nFoi cadastrado " + tfeminino + " mulher.")
		}

		se (pesa100 == 0) {
			escreva("\nNennhum homem cadastrado acima, pesa mais de 100KG.")
		} senao se (pesa100 > 1) {
			escreva("\n" + pesa100 + " homens pesam mais de 100KG.")
		} senao {
			escreva("\n" + pesa100 + " homem pesa mais de 100KG.")
		}

		escreva("\nA média de peso entra as mulhres, foi de " + mediapesofeminino + ".")
		escreva("\nO maior peso entre os homens foi " + mpesomasculino + ".")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 331; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */