import modulo

def main():

    palavraChave = str('')
    erros = int(0)
    acertos = int(0)
    historicoLetras = str('')
    letra = str('')
    letraRepetida = bool
    acertoParcial = bool
    letrasDescobertas = str('')
    letraErrada = int(0)
    output = str('')
    sim = bool

    palavraChave = input('Insira a palavra chave: ')

    while erros < 6 and acertos < len(palavraChave):
        letra = input('Insira uma letra: ')
        for i in range (len(historicoLetras)):
            if letra == historicoLetras[i]:
                letraRepetida = True
        if letraRepetida == True:
            print(f'Você já inseriu a letra {letra}, tente outra letra.')
        else:
            
            historicoLetras += letra

            for i in range (len(palavraChave)):
                if letra == palavraChave[i]:
                    acertoParcial = True
                    print('_' * i + letra + '_' * (len(palavraChave) - (i + 1)))
                
            if acertoParcial == True:
                letrasDescobertas += letra
                acertos += 1
            else:
                erros += 1

            for i in range (len(palavraChave)):
                for j in range (len(letrasDescobertas)):
                    if letrasDescobertas[j] == palavraChave[i]:
                        sim = True
                if sim == True:
                    output += letra
                else:
                    output += '_'

            print(output)
            print(letrasDescobertas)

            acertoParcial = False
            

        letraRepetida = False

    if erros >= 6:
        print('Você perdeu, tente novamente.')
    else:
        print('Parabéns você ganhou.')

if __name__ == '__main__':
    main()