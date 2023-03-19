programa
{
	
	funcao inicio()
	{
		inteiro cont = 1, idade, somador = 0, media = 0, idadeht = 0, mediah = 0, fem20 = 0, masc = 0, fem = 0
		cadeia sexo
		enquanto (cont <= 2) {
			escreva("Qual a sua idade? ")
			leia(idade)
			somador += idade			
			media = somador / cont
			escreva("Qual o seu sexo? ")
			leia(sexo)
			se (sexo == "masculino" ou sexo == "Masculino" ou sexo == "MASCULINO") {
				masc ++
				idadeht += idade
				mediah = idadeht / cont
			} senao se (idade <= 20 e sexo == "feminino" ou sexo == "Feminino" ou sexo == "FEMININO") {
				fem ++				
			} senao se (idade > 20 e sexo == "feminino" ou sexo == "Feminino" ou sexo == "FEMININO") {
				fem ++
				fem20 ++
			} senao {
				escreva("[ERRO] TENTE NOVAMENTE, Digite "+"Masculino"+", se você for um Homem, ou digite "+"Femino"+", se você for uma Mulher.")
				escreva("\nQual o seu sexo? ")
				leia(sexo)
				se (sexo == "masculino" ou sexo == "Masculino" ou sexo == "MASCULINO") {
					masc ++
					idadeht += idade
					mediah = idadeht / cont
					escreva("Agora você digitou corretamente.\n")
				} senao se (idade <= 20 e sexo == "feminino" ou sexo == "Feminino" ou sexo == "FEMININO") {
					fem ++
					escreva("Agora você digitou corretamente.\n")
				} senao se (idade > 20 e sexo == "feminino" ou sexo == "Feminino" ou sexo == "FEMININO") {
					fem ++
					fem20 ++
					escreva("Agora você digitou corretamente.\n")
				} senao {
					escreva("\n[ERRO]VAMOS RECOMEÇAR, TENTE NOVAMENTE")
					pare
				}
			}
			cont ++
		}
		escreva("----RESPOSTAS----\n")
		se (masc == 1) {
			escreva("Foi cadastrado " + masc + " homem.\n")
		} senao se (masc > 1) {
			escreva("Foram cadastrados " + masc + " homens.\n")
		} senao {
			escreva("Nenhum homem foi cadastrado.\n")
		}

		se (fem == 1) {
			escreva("Foi cadastrada " + fem + " mulher.\n")
		} senao se (fem > 1) {
			escreva("Foram cadastradas " + fem + " mulheres.\n")
		} senao {
			escreva("Nenhuma mulher foi cadastrada.\n")
		}

		escreva("A media de idade foi " + media + ".\n")

		se (masc >= 2) {
			escreva("A media de idade dos homens foi " + mediah + ".\n")
		}	
		
		se (fem > 0) {
			se (fem20 == 1) {
				escreva(fem20 + " mulher tem mais de 20 anos de idade.")
			} senao se (fem20 > 1) {
				escreva(fem20 + " mulheres tem mais de 20 anos de idade.")
			} senao {
				escreva("Nenhuma mulher tem mais de 20 anos de idade.")
			}
		}
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 449; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */