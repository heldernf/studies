programa
{

	funcao real Media(real nota1, real nota2) {
		real media = (nota1 + nota2) / 2
		retorne media
	}

	funcao cadeia Situacao(real media) {
		cadeia res = "vazio"
		
		se (media < 6.0) {
			res = "REPROVADO"
		} senao se (media < 7.0) {
			res = "RECUPERAÇÃO"
		} senao {
			res = "APROVADO"
		}

		retorne res
	}
	
	funcao inicio()
	{
		real nota1, nota2
	
		escreva("Digite sua NOTA 1: ")
		leia(nota1)
		escreva("Digite sua NOTA 2: ")
		leia(nota2)

		escreva("A média de suas notas [" + nota1 + "] e [" + nota2 + "] resultou na média: " + Media(nota1,nota2) + ". Você foi " + Situacao(Media(nota1,nota2)) + ".")
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 281; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */