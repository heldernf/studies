programa
{
	inclua biblioteca Util --> u
	funcao inicio()
	{
		inteiro contador, v[6] /* 20 */

		para (contador = 0; contador < 5; contador++) { /* PREENCHE O VETOS */
			v[contador] = u.sorteia(0, 99)
		}

		para (contador = 0; contador < 5; contador++) { /* EXIBE OS VETORES NA ORDEM QUE FORAM SORTEADOS */
			escreva("i|" + contador + "|(" + v[contador] + ") ")
		}

		escreva("\nEm ordem crescente: ") /* COLOCA OS VETORES EM ORDEM CRESCENTE */
		para (contador = 0; contador < 5; contador++) {
			se (v[contador] > v[contador + 1]) {
				v[5] = v[contador]
				v[contador] = v[contador + 1]
				v[contador + 1] = v[5]
				se (contador != 0 e v[contador] < v[contador - 1]) {
					v[5] = v[contador]
					v[contador] = v[contador -1]
					v[contador - 1] = v[5]
				}
			}
		}

		para (contador = 0; contador < 5; contador++) {
			escreva("i|" + contador + "|(" + v[contador] + ") ")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 777; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {contador, 6, 10, 8}-{v, 6, 20, 1};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */