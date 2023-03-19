MODO 1

programa
{
	
	funcao inicio()
	{
		inteiro cont = 1, vprod, maior = 0, menor = 0
		enquanto (cont <= 4) {
			escreva("\n" + cont + " - Digite o valor do produto: R$")
			leia(vprod)
			se (cont == 1) {
				maior = vprod
				menor = vprod
			} senao se (vprod > maior) {
				maior = vprod
			} senao se (vprod < menor) {
				menor = vprod
			}
			cont ++
		}
		escreva("maior " + maior + ", menor " + menor)
	}
}

MODO 2

programa
{
	
	funcao inicio()
	{
		inteiro cont = 1, vprod, maior = 0, menor = 0
		enquanto (cont <= 4) {
			escreva("\n" + cont + " - Digite o valor do produto: R$")
			leia(vprod)
			se (cont == 1) {
				maior = vprod
				menor = vprod
			} senao {
				se (vprod > maior) {
					maior = vprod
				}
				se (vprod < menor) {
					menor = vprod
				}
			}
			cont ++
		}
	}
}

MODO 3

programa
{
	
	funcao inicio()
	{
		inteiro cont = 1, vprod, maior = 0, menor = 0
		enquanto (cont <= 4) {
			escreva("\n" + cont + " - Digite o valor do produto: R$")
			leia(vprod)
			se (cont == 1) {
				maior = vprod
				menor = vprod
			} senao {
				se (vprod > maior) {
					maior = vprod
				} senao se (vprod < menor) {
					menor = vprod	
				}	 
			}
			cont ++
		}
		escreva("maior " + maior + ", menor " + menor)
	}
}

MODO 4

programa
{
	
	funcao inicio()
	{
		inteiro cont = 1, vprod, maior = 0, menor = 0
		enquanto (cont <= 4) {
			escreva("\n" + cont + " - Digite o valor do produto: R$")
			leia(vprod)
			se (cont == 1) {
				maior = vprod
				menor = vprod
			} senao {
				se (vprod > maior) {
					maior = vprod
				} senao {
					menor = vprod	
				}	 
			}
			cont ++
		}
		escreva("maior " + maior + ", menor " + menor)
	}
}

Qual o modo é mais correto, o 1, o 2, o 3, ou o 4
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1714; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */