programa
{
	funcao Contador(inteiro inicioo, inteiro final, inteiro incremento) {

		se (inicioo < final) {
			para (inteiro cont = 0; inicioo <= final; inicioo += incremento) {
				escreva(inicioo + " ")
			}
		} senao {
			para (inteiro cont = 0; inicioo >= final; inicioo -= incremento) {
				escreva(inicioo + " ")
			}
		}
		
		escreva("FIM")
	}
	
	funcao inicio()
	{
		inteiro inicioo, final, incremento
	
		escreva("Escreva o valor inicial: ")
		leia(inicioo)
		escreva("Escreva o valor final: ")
		leia(final)
		escreva("Escreva o incremento: ")
		leia(incremento)

		escreva("Para INÍCIO [" + inicioo + "] e FINAL [" + final + "] com INCREMENTO [" + incremento + "], teremos:\n")

		Contador(inicioo, final, incremento)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 330; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */