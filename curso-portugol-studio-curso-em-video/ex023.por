programa
{
	
	funcao inicio()
	{
		real sexo, valor, desconto, mf, porcentagem
		escreva("Qual seu sexo? RESPONDA 1(Masculino) ou 2(Feminino) ")
		leia(sexo)
		escreva("Qual o valor do produtos? ")
		leia(valor)
		mf = sexo
		se (mf == 1) {
			porcentagem = 5.0
			desconto = valor - (valor * porcentagem / 100)
			escreva("Olá, hote estamos com um desconto de (R$ " + porcentagem + ") para homens, seu produto é (R$ " + valor + "), com o desconto aplicado nele, seu novo preço será de (R$ " + desconto + ").")
		} se (mf == 2) {
			porcentagem = 13.0
			desconto = valor - (valor * porcentagem / 100)
			escreva("Olá, hoje o desconto para mulheres está muito bom, está de (" + porcentagem + "%), seu produto é (R$ " + valor + "), com o desconto, ele ficará apenas (R$ " + desconto + ").")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 362; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */