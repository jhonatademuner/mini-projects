def imprimirLista(lista):
    for elemento in lista:
        print(elemento, end=" ")
    print()

def main():

    erros = 0
    palavraChave = []
    palavraUsuario = []
    letrasUsadas = []

    #% Entrada do usuario
    entradaUsuario = input('Insira a palavra chave: ')
    
    #% Definicao das Palavras
    for letra in entradaUsuario:
        palavraChave.append(letra.upper())
        palavraUsuario.append("_")

    #% Processamento de Erros e Acertos
    while erros < 6 and palavraUsuario.count("_") != 0:
        tentativa = input("Insira sua tentativa: ")
        letrasUsadas.append(tentativa.upper())
        if letrasUsadas.count(tentativa.upper()) > 1:
            print('Voce ja inseriu essa letra, tente outra.')
        elif palavraChave.count(tentativa.upper()) > 0:
            for i in range(len(palavraChave)):
                if tentativa.upper() == palavraChave[i]:
                    palavraUsuario[i] = tentativa.upper()
            imprimirLista(palavraUsuario)
        else:
            erros += 1
            print(f"A palavra chave nao tem essa letra. Voce errou {erros} letras, no sexto voce perde.")

    #% Saida do Resultado
    if erros == 6:
        print("Voce errou 6 vezes, mais sorte na proxima!")
    else:
        print("Parabens voce ganhou!")

if __name__ == '__main__':
    main()