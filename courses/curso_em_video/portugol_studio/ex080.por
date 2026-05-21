programa
{
	inclua biblioteca Util --> u
	funcao inicio()
	{
		inteiro cont, v[30], search, posi[30], quantidade_sorteada = 0

		para(cont=0; cont<30; cont++) {
			v[cont] = u.sorteia(1, 15)
		}

		escreva("Digite o número que deseja procurar: ")
		leia(search)

		para(cont=0; cont<30; cont++) {			
			se (search == v[cont]) {
				posi[quantidade_sorteada] = cont
				quantidade_sorteada++
			}
		}

		se (quantidade_sorteada == 0) {
			escreva("O seu número não foi encontrado.")
		} senao {
			se (quantidade_sorteada == 1) {
				escreva("O seu número foi encontrado na posição |" + posi[0] + "|, ele foi achado apenas " + quantidade_sorteada + " vez.")
			} senao {				
				escreva("O seu número foi encontrado nas posições ")
				
				para (cont = 0; cont < quantidade_sorteada; cont++) {
					 escreva("|" + posi[cont] + "|,")
				}
				
				escreva(" ele foi achado " + quantidade_sorteada + " vezes.")				
			}
		}

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 727; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {cont, 6, 10, 4}-{v, 6, 16, 1}-{search, 6, 23, 6}-{posi, 6, 31, 4}-{quantidade_sorteada, 6, 41, 19};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */